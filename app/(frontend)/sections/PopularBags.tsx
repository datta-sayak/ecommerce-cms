'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import type { Category, Media } from '@/payload-types';
import { getProductSlug } from '@/utils/productRoutes';
import { PopularBagsGridSkeleton } from '@/components/HomeSkeletons';
import { FadeIn } from '@/components/ui/FadeIn';

function getMediaURL(media: number | Media | null | undefined, fallback = '/assets/bag.png') {
  return typeof media === 'object' && media?.url ? media.url : fallback;
}

function getCategoryName(category: number | Category) {
  return typeof category === 'object' ? category.name : 'Product';
}

function FeaturedProductsGrid() {
  const allProducts = useAppStore((s) => s.products);

  if (allProducts.length === 0) {
    return <PopularBagsGridSkeleton />;
  }

  // Filter featured+active products client-side — same criteria as the old server query
  const featured = allProducts.filter((p) => p.featured === true && p.active === true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12">
      {featured.map((product) => {
        const categoryName = getCategoryName(product.category);
        const imageUrl = getMediaURL(product.coverImage);

        return (
          <div
            key={product.id}
            className="bg-white rounded-lg md:rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-row h-45 md:h-65"
          >
            {/* Image Container */}
            <div className="relative w-42 sm:w-50 md:w-58 bg-black/10 flex items-center justify-center flex-shrink-0">
              <Image
                src={imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col">
              {/* Category */}
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
                {categoryName}
              </span>

              {/* Product Name */}
              <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                {product.name}
              </h3>

              {/* Code */}
              {product.specifications.code && (
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Code:</span> {product.specifications.code}
                </p>
              )}

              {/* Size */}
              <p className="text-xs sm:text-sm text-gray-600 mb-2 md:mb-3">
                <span className="font-semibold">Size:</span> H {product.specifications.height} x W{' '}
                {product.specifications.width} {product.specifications.unit}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-6 line-clamp-2 overflow-hidden">
                <span className="font-semibold">Description:</span> {product.shortDescription}
              </p>

              {/* Explore Link */}
              <Link
                href={`/products/${getProductSlug(product.specifications.code)}`}
                className="inline-flex items-center text-xs sm:text-sm md:text-base text-emerald-600 font-semibold hover:text-emerald-700 transition group"
              >
                Explore the Product
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PopularBags() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-white">
      {/* Background Image */}
      <Image
        src="/background-detail.png"
        alt="Background pattern"
        fill
        className="absolute inset-0 object-cover opacity-2"
        loading="eager"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              Most Popular <span className="text-primary-green">Eco-Friendly</span> Bags
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto">
              From grocery totes to wine bags, these customer favorites combine natural elegance with eco-friendly functionality.
            </p>
          </div>
        </FadeIn>

        {/* Product Grid — reads from Zustand store */}
        <FadeIn delay={0.2} direction="up">
          <FeaturedProductsGrid />
        </FadeIn>

        {/* View All Products Button */}
        <FadeIn delay={0.3} direction="up">
          <div className="flex justify-center mt-4">
            <Link
              href="/products"
              className="inline-flex items-center bg-primary-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              View All Products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
