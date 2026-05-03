'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const craftImages = [
  '/craft-1.jpg',
  '/craft-2.jpg',
  '/craft-3.jpg',
  '/craft-4.jpg',
  '/craft-5.jpg',
];

export default function BehindOurCraft() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollSpeed = 1;
    let animationId: number;

    const autoScroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed;

        // Reset to start when reaching halfway (for infinite loop effect)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative bg-white py-16 md:py-24">
      {/* Background Image */}
      <Image
        src="/background-detail.png"
        alt="Background pattern"
        fill
        className="absolute inset-0 object-cover opacity-2"
        loading="eager"
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              Behind Our <span className="text-primary-green">Sustainable</span> Craft
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Step inside our West Bengal facility where skilled artisans craft premium bags and see global clients receiving orders worldwide.
            </p>
          </div>
        </div>

        {/* Auto-scrolling Image Carousel - Full Width */}
        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-scroll pl-4 md:pl-8 lg:pl-12"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Duplicate images for infinite loop effect */}
            {[...craftImages, ...craftImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 md:w-80 h-64 md:h-80 rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-full bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
