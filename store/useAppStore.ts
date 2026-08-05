import { create } from 'zustand';
import type { Category, Product } from '@/payload-types';

interface AppState {
  categories: Category[];
  products: Product[];
  featuredProducts: Product[];
  setCategories: (categories: Category[]) => void;
  setProducts: (products: Product[]) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  categories: [],
  products: [],
  featuredProducts: [],
  setCategories: (categories) => set({ categories }),
  setProducts: (products) => {
    // Precompute featured products to avoid filtering on every render
    const featuredProducts = products.filter((p) => p.featured === true && p.active === true);
    set({ products, featuredProducts });
  },
}));
