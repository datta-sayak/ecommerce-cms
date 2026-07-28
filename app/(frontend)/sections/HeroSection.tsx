'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { opacity: 1, scale: 1.05, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero Background with Image */}
      <div className="relative -mt-18 min-h-screen flex flex-col justify-start pt-0 px-4 md:px-8 lg:px-12 bg-[#f9f9f9] overflow-hidden [--stats-bar-height:9.5rem] md:[--stats-bar-height:7rem]">
        {/* Background Image */}
        <Image
          src="/background-detail.png"
          alt="Background pattern"
          fill
          className="pointer-events-none absolute inset-0 object-cover opacity-3"
          loading="eager"
        />

        {/* Content */}
        <div className="relative mt-28 md:mt-40 z-10 max-w-7xl mx-auto w-full">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              className="text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center bg-[#05DF7226] px-4 py-2 rounded-full border-2 border-primary-green text-sm font-semibold text-primary-green gap-2 mx-auto lg:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                Certified Sustainable Manufacturer
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-7xl mt-8 font-semibold whitespace-normal md:whitespace-nowrap">
                <span className="text-primary-dark">Sustainable Bags for a</span>
                <br />
                <span className="text-primary-green">Greener Future</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-base sm:text-lg my-6 md:my-8 text-text-muted max-w-xl mx-auto lg:mx-0 text-justify">
                100% natural and biodegradable jute, cotton, and canvas bags from
                an Indian manufacturer offering custom sizing, low minimum order
                quantities, and reliable export logistics worldwide.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-2 md:gap-4 flex-nowrap pb-4 md:pb-0">
                <Link
                  href="/products"
                  className="flex items-center px-4 md:px-8 py-1 md:py-2 rounded-lg font-semibold text-white bg-primary-green transition-opacity hover:opacity-90 text-sm md:text-base whitespace-nowrap"
                >
                  View Products
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center bg-white px-4 md:px-8 py-1 md:py-2 rounded-lg font-semibold transition-colors border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white text-sm md:text-base whitespace-nowrap"
                >
                  Contact Us
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Image Spacer */}
            <div className="min-h-[15rem] sm:min-h-[18rem] lg:min-h-[26rem]" />
          </div>
        </div>

        {/* Background Image - hero-bag */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[var(--stats-bar-height)] z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12 overflow-visible">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="w-full h-full relative"
          >
            <Image
              src="/hero-bag.png"
              alt="Hero Bag Background"
              width={280}
              height={350}
              className="mx-auto block w-full max-w-[12rem] object-cover sm:max-w-xs md:max-w-sm md:scale-[1.15] lg:ml-auto lg:translate-x-120"
              priority
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-0 border-2 border-bg-light z-20 flex h-[var(--stats-bar-height)] w-screen items-center bg-white -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12 py-4 md:py-6"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-30">
            {[
              { num: '25+', text: 'Years of Excellence', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /> },
              { num: '1M+', text: 'Bags Exported', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> },
              { num: '15', text: 'Countries Served', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /> },
              { num: '500+', text: 'Business Partners', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-2 md:gap-4"
              >
                <div className="text-primary-green flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-10">
                    {stat.icon}
                  </svg>
                </div>
                <div>
                  <div className="text-lg md:text-2xl lg:text-3xl font-bold text-primary-green">
                    {stat.num}
                  </div>
                  <div className="text-xs md:text-sm lg:text-base text-text-muted">
                    {stat.text}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
