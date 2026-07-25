'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-[#27684A]">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-wide">
            Ready to Make the Switch to Sustainable Bags?
          </h2>
          <p className="text-sm lg:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Get a custom quote for your bulk requirements within 24 hours. <br/>
            Our team is ready to assist you with samples and design mockups.
          </p>

          {/* CTA Button */}
          <Link
            href="/quote"
            className="inline-flex items-center gap-1 bg-white text-[#27684A] px-8 py-2 rounded-lg font-semibold hover:bg-opacity-50 transition"
          >
            Request a Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
