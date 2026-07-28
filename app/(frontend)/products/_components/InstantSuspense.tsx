'use client';

import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  serverCategorySlug?: string;
  fallback: ReactNode;
  children: ReactNode;
};

export default function InstantSuspense({ serverCategorySlug, fallback, children }: Props) {
  const searchParams = useSearchParams();
  const clientCategorySlug = searchParams.get('category') || undefined;

  if (clientCategorySlug !== serverCategorySlug) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
