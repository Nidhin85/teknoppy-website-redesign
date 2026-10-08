// Derives Payload field configs from the Astro site's existing content files, so
// every value the site reads is an editable field. Output: src/schema/generated.json.
//
//   npm run generate:schema
//
// Re-run it when a content file gains a shape the CMS does not know yet (a new key
// or section type), then `npm run seed` to load the new values. The output is plain
// Payload field config — hand-tune labels/descriptions there, but note a re-run
// overwrites it.
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { cmsRoot, repoRoot, contentMap, collectionFiles, readContentFile } from './content-files.mjs'

const LONG_TEXT = 100
const VALID_NAME = /^[A-Za-z][A-Za-z0-9_]*$/
const ROW_LABEL = '/components/RowLabel#RowLabel'

/** Content keys Payload reserves or rejects, mapped to the field name used instead. */
export function fieldName(key) {
  if (key === 'id') return 'htmlId'
  if (key.startsWith('_')) return 'u' + key
  return key
}

const snake = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1_$2').replace(/[^A-Za-z0-9]+/g, '_').toLowerCase()
const kind = (v) => (v === null || v === undefined ? 'null' : Array.isArray(v) ? 'array' : v?.$date ? 'date' : typeof v)

let warnings = []
const tableNames = new Set()
const columns = new Set()

/** Postgres caps identifiers at 63 chars; long nested table names get a short stable one. */
function tableFor(parentTable, name, field) {
  let table = `${parentTable}_${snake(name)}`
  if (table.length > 45) {
    const hash = crypto.createHash('sha1').update(table).digest('hex').slice(0, 6)
    table = `${parentTable.split('_')[0].slice(0, 12)}_${snake(name).slice(0, 24)}_${hash}`
    field.dbName = table
  }
  if (tableNames.has(table)) throw new Error(`Duplicate table name ${table}`)
  tableNames.add(table)
  return table
}

function scalarField(name, samples, kinds) {
  if (kinds.every((k) => k === 'string')) {
    const long = samples.some((s) => s.length > LONG_TEXT || s.includes('\n'))
    return { name, type: long ? 'textarea' : 'text' }
  }
  if (kinds.every((k) => k === 'number')) return { name, type: 'number' }
  if (kinds.every((k) => k === 'boolean')) return { name, type: 'checkbox' }
  if (kinds.every((k) => k === 'date')) return { name, type: 'date', admin: { date: { pickerAppearance: 'dayOnly' } } }
  return null
}

function objectFields(samples, ctx) {
  const keys = []
  for (const sample of samples) for (const key of Object.keys(sample)) if (!keys.includes(key)) keys.push(key)
  if (keys.some((key) => !VALID_NAME.test(fieldName(key)))) return null
  const fields = []
  for (const key of keys) {
    if (ctx.skipKeys?.includes(key)) continue
    const values = samples.filter((s) => key in s).map((s) => s[key])
    fields.push(infer(fieldName(key), values, { table: ctx.table, column: ctx.column ? `${ctx.column}_${snake(fieldName(key))}` : snake(fieldName(key)) }))
  }
  return fields
}

function arrayField(name, samples, ctx) {
  const rows = samples.flat()
  const field = { name, type: 'array', admin: { initCollapsed: true, components: { RowLabel: ROW_LABEL } } }
  const kinds = [...new Set(rows.map(kind))]
  if (rows.length === 0 || kinds.includes('null')) return { name, type: 'json' }

  // `sections: [{ type: 'hero', … }]` — one Payload block per section type.
  if (kinds.length === 1 && kinds[0] === 'object' && rows.every((r) => typeof r.type === 'string') && name === 'sections') {
    const types = [...new Set(rows.map((r) => r.type))]
    const root = ctx.table.split('_')[0]
    return {
      name,
      type: 'blocks',
      admin: { initCollapsed: true },
      blocks: types.map((type) => {
        if (!VALID_NAME.test(type)) throw new Error(`Section type ${type} is not a valid block slug`)
        const table = `${root}_blocks_${snake(type)}`
        tableNames.add(table)
        const fields = objectFields(rows.filter((r) => r.type === type), { table, column: '', skipKeys: ['type'] })
        if (!fields) throw new Error(`Section type ${type} has keys Payload cannot model`)
        return { slug: type, fields }
      }),
    }
  }

  const table = tableFor(ctx.table, ctx.column || name, field)
  const objects = rows.filter((r) => kind(r) === 'object')
  const lists = rows.filter((r) => kind(r) === 'array')
  const scalars = rows.filter((r) => !['object', 'array'].includes(kind(r)))
  field.fields = []
  if (objects.length) {
    const fields = objectFields(objects, { table, column: '' })
    if (!fields) return { name, type: 'json' }
    field.fields.push(...fields)
  }
  // Rows that are plain values (or nested lists) are wrapped in a one-field row.
  if (scalars.length) {
    const scalar = scalarField('itemValue', scalars, scalars.map(kind))
    if (!scalar || field.fields.some((f) => f.name === 'itemValue')) return { name, type: 'json' }
    field.fields.push({ ...scalar, label: 'Value' })
  }
  if (lists.length) {
    if (field.fields.some((f) => f.name === 'itemRows')) return { name, type: 'json' }
    field.fields.push({ ...arrayField('itemRows', lists, { table, column: 'item_rows' }), label: 'Values' })
  }
  return field
}

function infer(name, rawSamples, ctx) {
  const samples = rawSamples.filter((s) => s !== null && s !== undefined)
  const kinds = [...new Set(samples.map(kind))]
  if (ctx.column.length > 60) warnings.push(`column ${ctx.table}.${ctx.column} is ${ctx.column.length} chars`)
  if (kinds.length !== 1 || kinds[0] !== 'array') {
    // `headingLead` beside `heading.lead` would both become the column heading_lead.
    const column = `${ctx.table}.${ctx.column}`
    if (kinds[0] !== 'object' || kinds.length > 1) {
      if (columns.has(column)) throw new Error(`Two fields map to the column ${column}`)
      columns.add(column)
    }
  }
  if (samples.length === 0 || kinds.length > 1) return { name, type: 'json' }
  if (kinds[0] === 'array') return arrayField(name, samples, ctx)
  if (kinds[0] === 'object') {
    const fields = objectFields(samples, ctx)
    return fields && fields.length ? { name, type: 'group', fields } : { name, type: 'json' }
  }
  return scalarField(name, samples, kinds) ?? { name, type: 'json' }
}

function topLevelFields(slug, docs) {
  const fields = objectFields(docs, { table: snake(slug), column: '' })
  if (!fields) throw new Error(`${slug}: top-level keys Payload cannot model`)
  return fields
}

const generated = { globals: {}, collections: {} }
for (const global of contentMap.globals) {
  generated.globals[global.slug] = topLevelFields(global.slug, [readContentFile(path.join(repoRoot, global.file))])
}
for (const collection of contentMap.collections) {
  const docs = collectionFiles(collection).map(({ file }) => readContentFile(file))
  const fields = topLevelFields(collection.slug, docs)
  // Markdown bodies are edited as markdown, exactly as the site renders them.
  const body = fields.find((f) => f.name === 'body')
  if (collection.ext === 'md' && body) Object.assign(body, { type: 'code', admin: { language: 'markdown' } })
  generated.collections[collection.slug] = fields
}

const out = path.join(cmsRoot, 'src/schema/generated.json')
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, JSON.stringify(generated, null, 2) + '\n')

const count = (fields, tally = {}) => {
  for (const f of fields) {
    tally[f.type] = (tally[f.type] ?? 0) + 1
    if (f.fields) count(f.fields, tally)
    if (f.blocks) for (const b of f.blocks) count(b.fields, tally)
  }
  return tally
}
for (const [group, entries] of Object.entries(generated)) {
  for (const [slug, fields] of Object.entries(entries)) console.log(group, slug, JSON.stringify(count(fields)))
}
console.log(`${tableNames.size} nested tables`)
for (const w of [...new Set(warnings)]) console.warn('WARN', w)
