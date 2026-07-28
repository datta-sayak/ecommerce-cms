import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { getCategorySlug } from '@/utils/productRoutes';
import { CategoriesCarouselSkeleton } from '@/components/HomeSkeletons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

async function CategoriesCarousel() {
  const payload = await getPayload({ config });

  const categories = await payload.find({
    collection: 'category',
    depth: 1,
    limit: 50,
    overrideAccess: true,
  });

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: categories.docs.length > 5,
      }}
      className="mx-auto w-full px-8 sm:px-10 lg:px-0"
    >
      <CarouselContent className="-ml-3 md:-ml-5">
        {categories.docs.map((category) => {
          const coverImage = typeof category.coverImage === 'object' ? category.coverImage : null;
          const imageUrl = coverImage?.url || '/jute-bag.png';

          return (
            <CarouselItem
              key={category.id}
              className="basis-[49%] pl-3 sm:basis-[42%] md:basis-1/3 md:pl-5 lg:basis-1/5"
            >
              <div className="group flex h-full flex-col items-center">
                {/* Card Container */}
                <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
                  {/* Image Container */}
                  <div className="relative flex h-44 items-center justify-center overflow-hidden sm:h-52 md:h-68">
                    <Image
                      src={imageUrl}
                      alt={category.name}
                      width={220}
                      height={220}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Green Circle Icon - Positioned Overlapping */}
                  <div className="relative z-10 flex justify-center -mt-5 md:-mt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3.5px] border-white bg-primary-green md:h-16 md:w-16">
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col items-center px-3 text-center md:px-4">
                    <h3 className="my-3 text-sm font-semibold uppercase text-primary-dark sm:text-base md:text-lg">
                      {category.name}
                    </h3>

                    {/* Explore Link */}
                    <Link
                      href={`/products?category=${getCategorySlug(category.name)}`}
                      className="inline-flex items-center ml-3 text-xs mt-2 mb-6 font-semibold text-primary-green transition hover:text-primary-dark group/link md:text-sm"
                    >
                      Explore Products
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious className="left-0 z-20 h-9 w-9 border-primary-green/30 bg-white/95 text-primary-green shadow-md hover:bg-white hover:text-primary-dark md:left-1 lg:-left-12" />
      <CarouselNext className="right-0 z-20 h-9 w-9 border-primary-green/30 bg-white/95 text-primary-green shadow-md hover:bg-white hover:text-primary-dark md:right-1 lg:-right-12" />
    </Carousel>
  );
}

import { FadeIn } from '@/components/ui/FadeIn';

export default function ProductCategories() {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-white">
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
              Our <span className="text-primary-green">Eco-Friendly</span> Bag Categories
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto">
              We manufacture a wide range of sustainable bags tailored for retail, fashion, food, and industrial use.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <Suspense fallback={<CategoriesCarouselSkeleton />}>
            <CategoriesCarousel />
          </Suspense>
        </FadeIn>
      </div>
    </section>
  );
}
