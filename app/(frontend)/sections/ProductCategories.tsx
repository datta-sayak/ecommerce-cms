'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Jute Bags',
    description: 'The Golden Fiber – 100% biodegradable, strong, and naturally beautiful bags for everyday use.',
    image: '/jute-bag.png',
    featured: false,
  },
  {
    id: 2,
    name: 'Cotton Bags',
    description: 'Soft, washable, and eco-friendly cotton bags that give brands a clean natural canvas for custom printing.',
    image: '/cotton-bag.png',
    featured: false,
  },
  {
    id: 3,
    name: 'Bottle Bags',
    description: 'Heavy-duty rugged fabric bags built to last through daily challenges while carrying heavy loads with ease.',
    image: '/bottle-bag.png',
    featured: false,
  },
  {
    id: 4,
    name: 'Fruit & Veg Bags',
    description: 'A perfect jute and cotton blend giving smooth printing surface with soft touch and natural sustainability.',
    image: '/fruit-veg-bag.png',
    featured: true,
  },
];

export default function ProductCategories() {
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
            Our <span className="text-primary-green">Eco-Friendly</span> Bag Categories
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto">
            We manufacture a wide range of sustainable bags tailored for retail, fashion, food, and industrial use.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border-2 border-bg-light rounded-lg overflow-hidden transition-all hover:shadow-lg">
              {/* Image Container */}
              <div className="relative h-56 md:h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                {/* product image */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-sm md:text-xl font-bold text-primary-dark mb-3">
                  {category.name}
                </h3>
                <p className="hidden md:block text-sm text-text-muted mb-4 leading-relaxed">
                  {category.description}
                </p>
                <Link
                  href={`/products/${category.id}`}
                  className="inline-flex items-center text-xs md:text-base text-primary-green font-semibold hover:text-primary-dark transition"
                >
                  Explore 
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
