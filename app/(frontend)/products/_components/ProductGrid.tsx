'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import type { Category, Media } from '@/payload-types';
import { getProductSlug, getCategorySlug, getCategoryNameFromSlug } from '@/utils/productRoutes';
import { ProductGridSkeleton } from './Skeletons';

type Props = {
  selectedCategorySlug?: string;
};

function getMediaURL(media: number | Media | null | undefined, fallback = '/assets/bag.png') {
  return typeof media === 'object' && media?.url ? media.url : fallback;
}

function getCategoryName(category: number | Category) {
  return typeof category === 'object' ? category.name : 'Product';
}

function getCategoryId(category: number | Category) {
  return typeof category === 'object' ? category.id : category;
}

export default function ProductGrid({ selectedCategorySlug }: Props) {
  const allProducts = useAppStore((s) => s.products);
  const categories = useAppStore((s) => s.categories);

  // Store hasn't rehydrated from localStorage yet — show skeleton
  if (allProducts.length === 0) {
    return <ProductGridSkeleton />;
  }

  // Filter client-side — same logic that was previously done via Payload query
  let filteredProducts = allProducts;

  if (selectedCategorySlug) {
    const matched = categories.find(
      (cat) => getCategorySlug(cat.name) === selectedCategorySlug,
    );
    if (matched) {
      filteredProducts = allProducts.filter(
        (p) => getCategoryId(p.category) === matched.id,
      );
    }
  }

  const activeCategoryName = selectedCategorySlug
    ? getCategoryNameFromSlug(selectedCategorySlug)
    : 'All Bags';

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-primary-dark capitalize">
          {activeCategoryName}
        </h2>
        <p className="text-text-muted">{filteredProducts.length} Items</p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const categoryName = getCategoryName(product.category);
            const imageUrl = getMediaURL(product.coverImage);
            const productHref = `/products/${getProductSlug(product.specifications.code)}`;

            return (
              <Link
                key={product.id}
                href={productHref}
                className="group overflow-hidden rounded-lg border-3 border-bg-light bg-white transition hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 92vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-sm text-gray-500">{categoryName}</p>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">{product.name}</h3>

                  <div className="mb-6 space-y-1">
                    {product.specifications.code && (
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Code:</span> {product.specifications.code}
                      </p>
                    )}
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Size:</span> H {product.specifications.height} x W{' '}
                      {product.specifications.width} {product.specifications.unit}
                    </p>
                    {product.specifications.fabric && (
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Fabric:</span> {product.specifications.fabric}
                      </p>
                    )}
                  </div>

                  <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-bg-light/50 py-3 font-medium text-gray-700 transition group-hover:bg-[#E9F0EC]">
                    View Product
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-lg border-3 border-bg-light bg-white p-10 text-center">
          <h3 className="mb-2 text-xl font-semibold text-primary-dark">No products found</h3>
          <p className="text-text-muted">
            This category does not have active products yet. Please check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
