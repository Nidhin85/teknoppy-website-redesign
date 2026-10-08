'use client'

import { useRowLabel } from '@payloadcms/ui'

const TITLE_KEYS = ['title', 'label', 'name', 'question', 'q', 'h2', 'heading', 'keyword', 'client', 'itemValue', 'text', 'href']

/** Names collapsed array rows after their most title-like value instead of "Item 01". */
export const RowLabel = () => {
  const { data, rowNumber } = useRowLabel<Record<string, unknown>>()
  const key = TITLE_KEYS.find((k) => typeof data?.[k] === 'string' && data[k])
  const text = key ? String(data[key]).replace(/<[^>]+>/g, '') : ''
  const number = String((rowNumber ?? 0) + 1).padStart(2, '0')
  return <span>{text ? `${number} · ${text.length > 70 ? text.slice(0, 70) + '…' : text}` : `Item ${number}`}</span>
}
