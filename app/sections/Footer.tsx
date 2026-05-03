'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/vector.png"
                alt="Soujata Exim Logo"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <div>
                <h3 className="font-bold text-lg">SOUJATA EXIM</h3>
                <p className="text-sm text-gray-400">Pure-Durable Sustainable</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Social Links</h4>
              <div className="flex gap-4">
                <Link href="#" className="hover:opacity-100 transition">
                  <Image src="/instagram.svg" alt="Instagram" width={28} height={28} />
                </Link>
                <Link href="#" className="hover:opacity-100 transition">
                  <Image src="/twitter.svg" alt="Twitter" width={28} height={28} />
                </Link>
                <Link href="#" className="hover:opacity-100 transition">
                  <Image src="/facebook.svg" alt="Facebook" width={28} height={28} />
                </Link>
                <Link href="#" className="hover:opacity-100 transition">
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear}, Soujata Exim. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Reusable shopping bags | jute bag manufacturer | eco tote bags
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="/buzz" className="text-gray-400 hover:text-white transition">
                  Buzz
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">&nbsp;</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-400 hover:text-white transition">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link href="/return" className="text-gray-400 hover:text-white transition">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-sm text-gray-400">Email:</p>
                <Link href="mailto:info@soujtaexim.com" className="text-white hover:text-primary-green transition">
                  info@soujtaexim.com
                </Link>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone:</p>
                <Link href="tel:+919674264091" className="text-white hover:text-primary-green transition">
                  +91 96742 64091
                </Link>
              </div>
              <div>
                <p className="text-sm text-gray-400">Address:</p>
                <p className="text-white text-sm">
                  Kalachand Para, Duttapukur<br />
                  North 24 Parganas, West Bengal - 743 248
                </p>
              </div>
            </div>

            <h4 className="font-semibold mb-3 text-lg">Factory Address</h4>
            <p className="text-sm text-gray-400">
              Kalachand Para Industrial Complex, Duttapukur<br />
              Opposite Duttapukur Railway Station, WB 743248, India<br />
              Block A, Unit 101 - 102
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Soujata Exim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
