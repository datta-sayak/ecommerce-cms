'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const popularBags = [
  {
    id: 1,
    category: 'Jute Bag',
    name: 'Shopping Product',
    code: 'SB-JW-16',
    size: 'H 34 x W 43 + G 20 cm',
    description: 'Eco-friendly jute bag, perfect for daily use. Durable and sustainable.',
    rating: 4.5,
    image: '/jute-bag.png',
  },
  {
    id: 2,
    category: 'Jute Bag',
    name: 'Fruit & Vegetable Bag',
    code: 'FV-JW-03',
    size: '18×20 cm & 18×30 cm',
    description: 'Reusable jute bags for grocery shopping. Available in two sizes.',
    rating: 4.6,
    image: '/jute-bag.png',
  },
  {
    id: 3,
    category: 'Jute Bag',
    name: 'Jute 2 Bottle Bag',
    code: 'WB-JW-05',
    size: 'H 35 x W 20 x G 10 cm',
    description: 'Perfect for carrying two wine or water bottles. Sturdy jute construction.',
    rating: 4.3,
    image: '/jute-bag.png',
  },
  {
    id: 4,
    category: 'Cotton Bags',
    name: 'Shopping Bag',
    code: 'CB-JW-04',
    size: 'H 42 x W 38 x G 12',
    description: 'Soft cotton bags with spacious interior. Ideal for everyday shopping.',
    rating: 4.8,
    image: '/jute-bag.png',
  },
];

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
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            Most Popular <span className="text-primary-green">Eco-Friendly</span> Bags
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto">
            From grocery totes to wine bags, these customer favorites combine natural elegance with eco-friendly functionality.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12">
          {popularBags.map((bag) => (
            <div
              key={bag.id}
              className="bg-white rounded-lg md:rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-row"
            >
              {/* Image Container */}
              <div className="relative w-42 sm:w-50 md:w-58 bg-black/20 flex items-center justify-center flex-shrink-0">
                {/* Placeholder for actual image */}
              </div>

              {/* Content */}
              <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col">
                {/* Category and Rating Header */}
                <span className="text-xs sm:text-sm text-gray-600 font-medium">
                  {bag.category}
                </span>

                {/* Product Name */}
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  {bag.name}
                </h3>

                {/* Code */}
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Code:</span> {bag.code}
                </p>

                {/* Size */}
                <p className="text-xs sm:text-sm text-gray-600 mb-2 md:mb-3">
                  <span className="font-semibold">Size:</span> {bag.size}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed flex-grow">
                  <span className="font-semibold">Description:</span> {bag.description}
                </p>

                {/* Explore Link */}
                <Link
                  href={`/products/${bag.id}`}
                  className="inline-flex items-center text-xs sm:text-sm md:text-base text-emerald-600 font-semibold hover:text-emerald-700 transition group"
                >
                  Explore the Product 
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center bg-primary-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            View All Products
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
