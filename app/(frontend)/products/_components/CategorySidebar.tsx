'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { getCategorySlug, normalizeCategorySlug } from '@/utils/productRoutes';
import { CategorySidebarSkeleton } from './Skeletons';

type Props = {
  selectedCategorySlug?: string;
};

export default function CategorySidebar({ selectedCategorySlug }: Props) {
  const categories = useAppStore((s) => s.categories);

  // Store hasn't rehydrated from localStorage yet — show skeleton
  if (categories.length === 0) {
    return <CategorySidebarSkeleton />;
  }

  return (
    <aside className="shrink-0 lg:w-64">
      <div className="sticky top-8 rounded-lg border-3 border-bg-light bg-white p-6">
        <div className="mb-6 flex items-center gap-2">
          <Menu className="h-5 w-5 text-primary-green" />
          <h2 className="text-xl font-semibold text-primary-dark">Categories</h2>
        </div>

        <ul className="space-y-3">
          <li>
            <Link
              href="/products"
              className={`block rounded-lg px-4 py-2 transition ${
                !selectedCategorySlug
                  ? 'bg-primary-green font-semibold text-white'
                  : 'text-gray-700 hover:bg-[#E9F0EC]'
              }`}
            >
              All Bags
            </Link>
          </li>

          {categories.map((category) => {
            const categorySlug = getCategorySlug(category.name);
            const isActive = selectedCategorySlug 
              ? normalizeCategorySlug(categorySlug) === normalizeCategorySlug(selectedCategorySlug)
              : false;
            
            return (
              <li key={category.id}>
                <Link
                  href={`/products?category=${categorySlug}`}
                  className={`block rounded-lg px-4 py-2 transition ${
                    isActive
                      ? 'bg-primary-green font-semibold text-white'
                      : 'text-gray-700 hover:bg-[#E9F0EC]'
                  }`}
                >
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
