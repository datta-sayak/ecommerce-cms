'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CTASection() {
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
        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Ready to Make the Switch to <span className="text-primary-green">Sustainable Bags</span>?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Get a custom quote for your bulk requirements within 24 hours. Our team is ready to assist you with samples and design mockups.
          </p>

          {/* CTA Button */}
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-primary-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Request a Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
