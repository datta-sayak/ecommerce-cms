'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';
import type { Category, Product } from '@/payload-types';

interface Props {
  categories: Category[];
  products: Product[];
}

/**
 * Receives fresh data from the server and completely replaces the Zustand store.
 * Renders nothing, purely a side-effect component.
 *
 * Pattern: stale while revalidate
 *   1. On mount, Zustand rehydrates from localStorage -> UI shows previous visit's data instantly.
 *   2. This component fires useEffect -> replaces the whole store with fresh server data.
 *   3. Subscribers re-render with up-to-date data.
 */
export default function StoreHydrator({ categories, products }: Props) {
  const setCategories = useAppStore((s) => s.setCategories);
  const setProducts = useAppStore((s) => s.setProducts);

  useEffect(() => {
    setCategories(categories);
    setProducts(products);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
