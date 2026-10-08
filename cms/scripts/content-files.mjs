// Shared by generate-schema.mjs and seed.ts: resolves content-map.json entries to
// files on disk and reads them into plain objects.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
export const cmsRoot = path.resolve(here, '..')
export const repoRoot = path.resolve(cmsRoot, '..')
export const contentMap = JSON.parse(fs.readFileSync(path.join(cmsRoot, 'content-map.json'), 'utf8'))

function walk(dir, recursive, base = dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return recursive ? walk(full, recursive, base) : []
    return [path.relative(base, full)]
  })
}

/** Every file of a collection as `{ key, file }`, where key is the path without extension. */
export function collectionFiles(collection) {
  const dir = path.join(repoRoot, collection.dir)
  return walk(dir, collection.recursive)
    .filter((rel) => rel.endsWith('.' + collection.ext))
    .map((rel) => ({ key: rel.slice(0, -collection.ext.length - 1).split(path.sep).join('/'), file: path.join(dir, rel) }))
    .filter(({ key }) => (collection.include ? collection.include.includes(key) : !collection.exclude?.includes(key)))
    .sort((a, b) => a.key.localeCompare(b.key))
}

/** Minimal frontmatter reader for the site's markdown: `key: value` lines with JSON-style scalars. */
export function parseMarkdown(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) throw new Error('Markdown file has no frontmatter')
  const data = {}
  for (const line of match[1].split('\n')) {
    if (!line.trim()) continue
    const m = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
    if (!m) throw new Error(`Unsupported frontmatter line: ${line}`)
    const raw = m[2].trim()
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) data[m[1]] = { $date: raw }
    else if (/^'.*'$/.test(raw)) data[m[1]] = raw.slice(1, -1).replace(/''/g, "'")
    else {
      try {
        data[m[1]] = JSON.parse(raw)
      } catch {
        data[m[1]] = raw
      }
    }
  }
  return { ...data, body: match[2] }
}

export function readContentFile(file) {
  const source = fs.readFileSync(file, 'utf8')
  return file.endsWith('.md') ? parseMarkdown(source) : JSON.parse(source)
}
