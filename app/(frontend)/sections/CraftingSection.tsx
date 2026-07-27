'use client';

import { CheckCircle, ChevronRight } from 'lucide-react';

export default function CraftingSection() {
  return (
    <section className="bg-white border-2 border-b-2 border-bg-light py-6 md:py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
              Crafting <span className="text-primary-green">Sustainability</span> from West Bengal
            </h2>
            <p className="text-base md:text-lg text-text-muted mb-8 leading-relaxed">
              Every bag is handcrafted by skilled artisans in West Bengal with meticulous attention to detail. You get direct communication, ethical production, and a partnership built on trust and quality.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                <span className="text-base text-primary-dark">100% natural and fully biodegradable bags</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                <span className="text-base text-primary-dark">Custom designs with your logo printing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                <span className="text-base text-primary-dark">Export ready with complete documentation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                <span className="text-base text-primary-dark">Factory pricing with 98% on-time delivery</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-primary-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center gap-2">
              Learn More About Us
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content - Bento Grid Images */}
          <div className="grid grid-cols-2 gap-4 h-[450px] md:h-[550px]">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* Large square box */}
              <div className="flex-1 bg-black/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* image */}
              </div>
              
              {/* Small horizontal box - bottom left */}
              <div className="h-24 md:h-32 bg-black/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* image */}
              </div>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {/* Small horizontal box - top right */}
              <div className="h-24 md:h-32 bg-black/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* image */}
              </div>
              
              {/* Tall vertical box */}
              <div className="flex-1 bg-black/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* image */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
