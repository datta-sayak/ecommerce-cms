'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background with Image */}
      <div className="relative flex flex-col justify-center pt-12 pb-0 px-4 md:px-8 lg:px-12 bg-[#f9f9f9] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/background-detail.png"
          alt="Background pattern"
          fill
          className="absolute inset-0 object-cover opacity-3"
          loading="eager"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Badge */}
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 rounded-full border-2 border-primary-green text-sm font-semibold text-primary-green flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>

              Certified Sustainable Manufacturer
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h1 className="text-4xl md:text-7xl font-bold whitespace-nowrap">
                <span className="text-primary-dark">Sustainable Bags for a</span>
                <br />
                <span className="text-primary-green">Greener Future</span>
              </h1>

              <p className="text-lg my-8 text-text-muted">
                100% natural and biodegradable jute, cotton, and canvas bags from
                an Indian manufacturer offering custom sizing, low minimum order
                quantities, and reliable export logistics worldwide.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-2 md:gap-4 flex-nowrap pb-4 md:pb-0">
                <Link
                  href="/products"
                  className="px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-white bg-primary-green transition-opacity hover:opacity-90 text-sm md:text-base whitespace-nowrap"
                >
                  View Products →
                </Link>
                <Link
                  href="/contact"
                  className="bg-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white text-sm md:text-base whitespace-nowrap"
                >
                  Contact Us →
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex flex-col items-end justify-center gap-6 relative">
              {/* Background Image - hero-bag */}
              <Image
                src="/hero-bag.png"
                alt="Hero Bag Background"
                width={280}
                height={350}
                className="absolute rounded-lg shadow-lg object-cover w-full max-w-sm -z-10"
                priority
              />
              
              {/* Top Image - bg-removed */}
              <Image
                src="/bg-removed.png"
                alt="Sustainable Jute Bags Product"
                width={500}
                height={500}
                className="absolute object-cover w-full max-w-lg h-full relative z-10"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-2 border-bg-light relative z-20 bg-white w-screen -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12 py-4 md:py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="text-primary-green flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <div>
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-primary-green">
                  25+
                </div>
                <div className="text-xs md:text-sm lg:text-base text-text-muted">
                  Years of Excellence
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="text-primary-green flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <div>
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-primary-green">
                  1M+
                </div>
                <div className="text-xs md:text-sm lg:text-base text-text-muted">
                  Bags Exported
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="text-primary-green flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              </div>
              <div>
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-primary-green">
                  15
                </div>
                <div className="text-xs md:text-sm lg:text-base text-text-muted">
                  Countries Served
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="text-primary-green flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              </div>
              <div>
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-primary-green">
                  500+
                </div>
                <div className="text-xs md:text-sm lg:text-base text-text-muted">
                  Business Partners
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
