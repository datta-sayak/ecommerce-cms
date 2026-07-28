import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Category, Product } from '@/payload-types';

interface AppState {
  categories: Category[];
  products: Product[];
  // Completely replace
  setCategories: (categories: Category[]) => void;
  setProducts: (products: Product[]) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      categories: [],
      products: [],
      setCategories: (categories) => set({ categories }),
      setProducts: (products) => set({ products }),
    }),
    {
      name: 'soujata-exim-store',
      // Only persist the data, not the setters
      partialize: (state) => ({
        categories: state.categories,
        products: state.products,
      }),
    },
  ),
);
