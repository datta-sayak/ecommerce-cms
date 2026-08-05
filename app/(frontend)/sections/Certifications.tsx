'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const certifications = [
  {
    id: 1,
    name: 'Government of India',
    image: '/assets/goi.png',
    scale: "scale-130",
  },
  {
    id: 2,
    name: 'EXIM',
    image: '/assets/exim.png',
    scale: "scale-100",
  },
  {
    id: 3,
    name: 'Make in India',
    image: '/assets/makeinindia.png',
    scale: "scale-110",
  },
  {
    id: 4,
    name: 'MSME',
    image: '/assets/msme.png',
    scale: "scale-130",
  },
  {
    id: 5,
    name: 'FIEO',
    image: '/assets/fieo.png',
    scale: "scale-100",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white border-2 border-bg-light py-8 md:py-18 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-primary-dark mb-1 md:mb-2">
              Government & Industry <span className="text-primary-green">Certifications</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-lg text-text-muted">
              Proudly recognized by Government of India
            </p>
          </div>
        </FadeIn>

        {/* Certifications Grid */}
        <div className="flex flex-nowrap justify-between items-center gap-2 md:gap-6 overflow-x-auto">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className="flex items-center justify-center flex-1 min-w-[60px] overflow-hidden"
            >
              <Image
                src={cert.image}
                alt={cert.name}
                width={160}
                height={100}
                className={cn(
                  "w-[100px] h-[40px] lg:w-[160px] lg:h-[100px] object-contain",
                  cert.scale
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
