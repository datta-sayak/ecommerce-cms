'use client';

import Image from 'next/image';
import { Marquee, MarqueeContent, MarqueeItem } from '@/components/kibo-ui/marquee';
import { useEffect, useState } from 'react';

export default function BehindOurCraft() {
  const [craftImages, setCraftImages] = useState<string[]>([]);
  useEffect(() => {
    const images = [];
    for (let i = 1; i <= 5; i++) {
      images.push(`/images/img${i}.jpg`);
    }
    setCraftImages(images);
  }, []);
  useEffect(() => {
    console.log(craftImages);
  }, [craftImages]);

  return (
    <section className="relative bg-white py-8 md:py-14">
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

        <Marquee className="overflow-hidden">
          <MarqueeContent>
            {craftImages.map((image, i) => (
              <MarqueeItem
                key={i}
                className="relative flex-shrink-0 w-50 md:w-70 h-70 md:h-96 rounded-lg mr-4 overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Craft process ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
}
