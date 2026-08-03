'use client'

import { Link, Button } from '@payloadcms/ui'

type Props = {
  collections: string,
}

export function BackButton({ collections }: Props) {
  return (
    <Link href={`/admin/collections/${collections}`}>
      <Button type='button'>
        Back
      </Button>
    </Link>
  )
}
