'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-bg-light">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-12 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/vector.png"
              alt="Soujata Exim Logo"
              width={40}
              height={40}
              className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0"
              priority
            />
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-primary-dark leading-4">SOUJATA EXIM</h1>
              <p className="text-xs text-text-muted">Sustainable Bags</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-700 hover:text-primary-green hover:font-bold transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-sm text-gray-700 hover:text-primary-green hover:font-bold transition font-medium">
              About Us
            </Link>
            <Link href="/products" className="text-sm text-gray-700 hover:text-primary-green hover:font-bold transition font-medium">
              Products
            </Link>
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-3 md:px-4 py-2 border border-primary-dark text-primary-dark rounded-lg font-semibold hover:bg-primary-dark hover:text-white transition text-xs md:text-sm">
              EN / हार
            </button>
            <Link
              href="/contact"
              className="px-4 md:px-6 py-2 bg-primary-green text-white rounded-lg font-semibold hover:opacity-90 transition text-xs md:text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-primary-dark transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-primary-dark transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-primary-dark transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-bg-light pt-4">
            <Link href="/" className="block py-2 text-sm text-gray-700 hover:text-primary-green hover:font-bold transition font-medium">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-sm text-gray-700 hover:text-primary-green hover:font-bold transition font-medium">
              About Us
            </Link>
            <Link href="/products" className="block py-2 text-sm text-gray-700 hover:text-primary-green hover:font-bold transition font-medium">
              Products
            </Link>
            <div className="flex gap-2 mt-4 pt-4 border-t border-bg-light">
              <button className="flex-1 px-3 py-2 border border-primary-dark text-primary-dark rounded-lg font-semibold hover:bg-primary-dark hover:text-white transition text-xs">
                EN / हार
              </button>
              <Link
                href="/contact"
                className="flex-1 px-3 py-2 bg-primary-green text-white rounded-lg font-semibold hover:opacity-90 transition text-xs text-center"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
