// Converts between the site's content-file shape and Payload's document shape, driven
// by the field configs in src/schema/generated.json. Used by seed.ts (toPayload) and by
// the site's scripts/pull-cms.mjs (fromPayload). No dependencies: the Astro build
// imports this without installing the CMS.

/** Content key for a Payload field name — the inverse of fieldName() in generate-schema.mjs. */
export function contentKey(name) {
  if (name === 'htmlId') return 'id'
  if (name.startsWith('u_')) return name.slice(1)
  return name
}

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v)

function rowToPayload(row, fields) {
  if (Array.isArray(row)) return { itemRows: toPayload(row, fields.find((f) => f.name === 'itemRows')) }
  if (!isObject(row)) return { itemValue: row }
  return objectToPayload(row, fields)
}

export function objectToPayload(source, fields) {
  const out = {}
  for (const field of fields) {
    const value = toPayload(source[contentKey(field.name)], field)
    if (value !== undefined) out[field.name] = value
  }
  return out
}

export function toPayload(value, field) {
  // An explicit null is content too (e.g. "no upper limit"); only JSON fields can hold one.
  if (value === null && field.type === 'json') return { $null: true }
  if (value === undefined || value === null) return undefined
  switch (field.type) {
    case 'group':
      return objectToPayload(value, field.fields)
    case 'array':
      return value.map((row) => rowToPayload(row, field.fields))
    case 'blocks':
      return value.map((row) => {
        const block = field.blocks.find((b) => b.slug === row.type)
        if (!block) throw new Error(`Unknown section type "${row.type}" — run npm run generate:schema`)
        return { blockType: block.slug, ...objectToPayload(row, block.fields) }
      })
    case 'date':
      return value.$date ? `${value.$date}T00:00:00.000Z` : value
    case 'json':
      // Payload's JSON field rejects bare strings; keys of mixed type carry them wrapped.
      return typeof value === 'string' ? { $string: value } : value
    default:
      return value
  }
}

function rowFromPayload(row, fields) {
  const out = objectFromPayload(row, fields) ?? {}
  const keys = Object.keys(out)
  if (keys.length === 1 && keys[0] === 'itemValue') return out.itemValue
  if (keys.length === 1 && keys[0] === 'itemRows') return out.itemRows
  return out
}

export function objectFromPayload(doc, fields) {
  const out = {}
  for (const field of fields) {
    const value = fromPayload(doc?.[field.name], field)
    if (value !== undefined) out[contentKey(field.name)] = value
  }
  return Object.keys(out).length ? out : undefined
}

/** Payload returns null for every unset field; the content files simply omit those keys. */
export function fromPayload(value, field) {
  if (value === undefined || value === null) return undefined
  switch (field.type) {
    case 'group':
      return objectFromPayload(value, field.fields)
    case 'array':
      return value.length ? value.map((row) => rowFromPayload(row, field.fields)) : undefined
    case 'blocks':
      return value.length
        ? value.map((row) => {
            const block = field.blocks.find((b) => b.slug === row.blockType)
            return { type: row.blockType, ...(objectFromPayload(row, block.fields) ?? {}) }
          })
        : undefined
    case 'date':
      return /T00:00:00\.000Z$/.test(value) ? { $date: value.slice(0, 10) } : value
    case 'json':
      if (value.$null === true) return null
      return typeof value.$string === 'string' ? value.$string : value
    default:
      return value
  }
}

/** Serialises a markdown document the way the site's content files are written. */
export function stringifyMarkdown({ body = '', ...data }) {
  const lines = Object.entries(data).map(([key, value]) => `${key}: ${value?.$date ?? JSON.stringify(value)}`)
  return `---\n${lines.join('\n')}\n---\n${body}`
}
