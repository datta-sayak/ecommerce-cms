'use client';

import Link from 'next/link';
import Image from 'next/image';

const popularBags = [
  {
    id: 1,
    name: 'Jute Shopping Bag (SB-JW-01)',
    size: 'Size: 34 x 43 + 18 cm',
    description: 'Natural jute tote bag, perfect for groceries and daily use. Customizable with screen printing. 100% natural jute fiber.',
    image: '/jute-bag.png',
  },
  {
    id: 2,
    name: 'Jute Beach Bag (BB-JW-01)',
    size: 'Size: 36 x 46 + 14 cm',
    description: 'Large capacity jute bag for beach, travel, and retail. Durable, eco-friendly, and stylish with reinforced handles.',
    image: '/jute-bag.png',
  },
  {
    id: 3,
    name: '2 Bottle Jute Wine Bag (WB-JW-05)',
    size: 'Size: 36 x 46 + 14 cm',
    description: 'Large capacity jute bag for beach, travel, and retail. Durable, eco-friendly, and stylish with reinforced handles.',
    image: '/jute-bag.png',
  },
  {
    id: 4,
    name: 'Jute Fruit & Vegetable Bag (FV-JW-01)',
    size: 'Size: 36 x 46 + 14 cm',
    description: 'Large capacity jute bag for beach, travel, and retail. Durable, eco-friendly, and stylish with reinforced handles.',
    image: '/jute-bag.png',
  },
  {
    id: 5,
    name: 'Cotton Tote Bag (CB-JW-01)',
    size: 'Size: 36 x 46 + 14 cm',
    description: 'Large capacity jute bag for beach, travel, and retail. Durable, eco-friendly, and stylish with reinforced handles.',
    image: '/jute-bag.png',
  },
  {
    id: 6,
    name: 'Cotton Drawstring Bag (CB-JW-05)',
    size: 'Size: 36 x 46 + 14 cm',
    description: 'Lightweight cotton drawstring bag. Perfect for gifting, events, and promotional giveaways. Custom printing.',
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 mb-12">
          {popularBags.map((bag) => (
            <div
              key={bag.id}
              className="bg-white rounded-lg overflow-hidden border border-bg-light hover:border-primary-green transition-all hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-sm md:text-lg font-bold text-primary-dark mb-2">
                  {bag.name}
                </h3>
                <p className="hidden md:block text-sm text-text-muted mb-3">
                  {bag.size}
                </p>
                <p className="hidden md:block text-sm text-text-muted mb-4 leading-relaxed">
                  {bag.description}
                </p>
                <Link
                  href={`/products/${bag.id}`}
                  className="inline-flex items-center text-xs md:text-base text-primary-green font-semibold hover:text-primary-dark transition"
                >
                  Explore the Product <span className="ml-1">›</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="bg-primary-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            View All Products ›
          </Link>
        </div>
      </div>
    </section>
  );
}
