'use client'

import React from 'react'
import type { ListViewClientProps } from 'payload'
import { useListQuery, useConfig, Link, Pagination, useListDrawerContext } from '@payloadcms/ui'
import Image from 'next/image';

export function GalleryListView(_props: ListViewClientProps) {
  const { data, handlePageChange } = useListQuery()
  const { config } = useConfig()
  const drawerContext = useListDrawerContext()
  const isInDrawer = drawerContext?.isInDrawer
  const onSelect = drawerContext?.onSelect

  const adminRoute = config.routes.admin

  if (!data?.docs?.length) {
    return <p style={{ padding: '2rem' }}>No media uploaded yet.</p>
  }

  return (
    <div style={{ padding: '1rem 0' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '1rem',
        }}
      >
        {data.docs.map((doc) => {
          let thumbUrl = null
          if (doc.url && typeof doc.url === 'string') {
            if (doc.url.includes('res.cloudinary.com')) {
              thumbUrl = doc.url.replace('/upload/', '/upload/c_thumb,w_300,h_300,q_auto:low,f_auto/')
            } else {
              thumbUrl = doc.url
            }
          }

          const content = thumbUrl ? (
            <Image
              src={thumbUrl}
              alt={doc.alt || doc.filename}
              width={300}
              height={300}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ padding: '0.5rem', fontSize: 12 }}>{doc.filename}</div>
          )

          const sharedStyles: React.CSSProperties = {
            display: 'block',
            aspectRatio: '1 / 1',
            overflow: 'hidden',
            borderRadius: 4,
            border: '1px solid var(--theme-elevation-150)',
            background: 'var(--theme-elevation-50)',
            cursor: 'pointer',
            padding: 0,
          }

          // When inside a List Drawer (e.g. "Choose from existing"), use a button
          // that calls onSelect instead of navigating away.
          if (isInDrawer && typeof onSelect === 'function') {
            return (
              <button
                key={doc.id}
                onClick={(e) => {
                  e.preventDefault()
                  onSelect({ collectionSlug: 'media', doc, docID: doc.id })
                }}
                style={sharedStyles}
              >
                {content}
              </button>
            )
          }

          return (
            <Link
              key={doc.id}
              href={`${adminRoute}/collections/media/${doc.id}`}
              style={sharedStyles}
            >
              {content}
            </Link>
          )
        })}
      </div>

      {data.totalPages > 1 && (
        <div style={{ marginTop: '1.5rem' }}>
          <Pagination
            page={data.page}
            totalPages={data.totalPages}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}