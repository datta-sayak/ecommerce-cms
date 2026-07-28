import { create } from 'zustand';
import type { Category, Product } from '@/payload-types';

interface AppState {
  categories: Category[];
  products: Product[];
  setCategories: (categories: Category[]) => void;
  setProducts: (products: Product[]) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  categories: [],
  products: [],
  setCategories: (categories) => set({ categories }),
  setProducts: (products) => set({ products }),
}));
