'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { Media } from '@/payload-types';

type ProductGalleryProps = {
  images: Media[];
  productName: string;
};

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [modalImage, setModalImage] = useState<Media | null>(null);

  useEffect(() => {
    if (!modalImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImage(null);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalImage]);

  if (images.length === 0) return null;

  const heroImage = images[0];
  const thumbnails = images.slice(1, 5);

  return (
    <div className="space-y-4">
      {/* Hero image — fits exactly, no crop, white background, no border */}
      <button
        type="button"
        onClick={() => setModalImage(heroImage)}
        className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-lg bg-white"
      >
        <Image
          src={heroImage?.url || '/assets/bag.png'}
          alt={heroImage?.alt || productName}
          fill
          quality={60}
          sizes="(min-width: 1024px) 50vw, 92vw"
          className="object-contain"
          priority
        />
      </button>

      {/* Thumbnails — always square, crop-fit */}
      {thumbnails.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {thumbnails.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setModalImage(image)}
              className="relative aspect-square cursor-zoom-in overflow-hidden rounded-lg bg-white"
            >
              <Image
                src={image.url || '/assets/bag.png'}
                alt={image.alt || productName}
                fill
                quality={60}
                sizes="(min-width: 1024px) 12vw, 24vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Modal / lightbox */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          onClick={() => setModalImage(null)}
        >
          <button
            type="button"
            onClick={() => setModalImage(null)}
            aria-label="Close"
            className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative h-[85vh] w-[90vw] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage.url || '/assets/bag.png'}
              alt={modalImage.alt || productName}
              fill
              quality={60}
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}