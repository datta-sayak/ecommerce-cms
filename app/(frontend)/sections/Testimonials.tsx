'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import commentImage from '../../../public/comment.png';

const testimonials = [
  {
    id: 1,
    text: 'The jute bags from Soujata Exim are outstanding quality. Our customers love the look and durability. Shipping was on time and communication was excellent.',
    name: 'Sarah Johnson',
    location: 'United States',
    rating: 5,
  },
  {
    id: 2,
    text: 'We have been ordering cotton promotional bags for two years now. The printing quality is perfect and pricing is very competitive. Highly recommended.',
    name: 'Markus Weber',
    location: 'Germany',
    rating: 5,
  },
  {
    id: 3,
    text: 'Soujata Exim delivered exactly what we needed for our hotel chain. The custom size jute bags were perfect for guest amenities.',
    name: 'David Chen',
    location: 'Malaysia',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white border-2 border-bg-light py-6 md:py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-2 md:mb-4">
              What <span className="text-primary-green">Our Clients</span> Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto">
              Read what businesses around the world say about our eco friendly bags, quality craftsmanship, and reliable service.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={0.2 + i * 0.1} direction="up" className="flex flex-col">
              {/* Testimonial Card */}
              <div className="relative">
                <Image
                  src={commentImage}
                  alt="Comment layer"
                  className="h-auto w-full"
                />

                {/* Testimonial Text */}
                <p className="absolute inset-x-8 top-[44%] text-sm leading-relaxed text-gray-600 md:text-base">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="absolute bottom-1 left-[1px] flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 rounded-lg border-2 border-black/6 bg-black/4"></div>
                  <div>
                    <div className="text-base font-bold text-primary-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-muted">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="absolute bottom-6 right-8 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-primary-green text-primary-green"
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
