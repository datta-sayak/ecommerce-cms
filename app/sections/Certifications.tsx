'use client';

import Image from 'next/image';

const certifications = [
  {
    id: 1,
    name: 'Government of India',
    image: '/assets/goi.png',
  },
  {
    id: 2,
    name: 'EXIM',
    image: '/assets/exim.png',
  },
  {
    id: 3,
    name: 'Make in India',
    image: '/assets/makeinindia.png',
  },
  {
    id: 4,
    name: 'MSME',
    image: '/assets/msme.png',
  },
  {
    id: 5,
    name: 'FIEO',
    image: '/assets/fieo.png',
  },
];

export default function Certifications() {
  return (
    <section className="bg-white border-2 border-bg-light py-8 md:py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-1 md:mb-2">
            Government & Industry <span className="text-primary-green">Certifications</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-text-muted">
            Proudly recognized by Government of India
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-nowrap justify-between items-center gap-2 md:gap-6 overflow-x-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center justify-center flex-1 min-w-[100px]"
            >
              <Image
                src={cert.image}
                alt={cert.name}
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
