'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

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
    <section className="bg-white py-10 md:py-18 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-2 md:mb-4">
            What <span className="text-primary-green">Our Clients</span> Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto">
            Read what businesses around the world say about our eco friendly bags, quality craftsmanship, and reliable service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">
              {/* Testimonial Card */}
              <div className="bg-gray-50 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl p-8">
                {/* Quote Icon */}
                <Image
                  src="/quote.svg"
                  alt="Quote"
                  width={80}
                  height={80}
                  className="mb-8 opacity-20"
                />

                {/* Testimonial Text */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* Author Info Row - Attached to card */}
              <div className="flex items-center justify-between -mt-4 px-4 pt-4">
                {/* Left: Avatar + Name */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-primary-dark text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-muted">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Right: Star Rating in box */}
                <div className="bg-gray-50 rounded-bl-2xl rounded-br-2xl px-5 py-7 flex gap-1 -mr-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-6 h-6 fill-primary-green text-primary-green"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
