'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { ChevronRight, CheckCircle, Package, Leaf, Globe, Clock } from 'lucide-react';

const productTypes = [
  { value: 'jute', label: 'Jute Bags' },
  { value: 'cotton', label: 'Cotton Tote Bags' },
  { value: 'canvas', label: 'Canvas Bags' },
  { value: 'non-woven', label: 'Non-Woven Bags' },
  { value: 'pouches', label: 'Pouches & Accessories' },
  { value: 'custom', label: 'Custom / Mixed Order' },
];

const whyUs = [
  { icon: Package, title: 'Low MOQ', desc: 'Flexible minimum order quantities for all business sizes' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'Sustainable materials, responsible manufacturing' },
  { icon: Globe, title: 'Export Ready', desc: 'Experienced in shipping across US, EU, Asia & more' },
  { icon: Clock, title: '24-Hour Quote', desc: 'Fast turnaround on every quote request' },
];

export default function RequestQuotePage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productType: '',
    quantity: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <Header />

      {/* Hero Banner */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12" style={{ backgroundColor: '#27684A' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Request a Quote
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Tell us about your requirements and we&apos;ll get back to you with a personalised quote
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#27684A' }}>
                  How It Works
                </h2>
                <ol className="space-y-5">
                  {[
                    { step: '01', title: 'Fill the Form', desc: 'Share your product type, quantity and any custom requirements.' },
                    { step: '02', title: 'We Review', desc: 'Our team reviews your request and prepares a tailored quote.' },
                    { step: '03', title: 'Receive Quote', desc: 'You receive a detailed quote with pricing and lead times within 24 hours.' },
                    { step: '04', title: 'Confirm & Produce', desc: 'Once you approve, we begin production with full quality checks.' },
                  ].map(({ step, title, desc }) => (
                    <li key={step} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#27684A' }}>
                        {step}
                      </span>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: '#27684A' }}>{title}</p>
                        <p className="text-gray-600 text-sm">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact card */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: '#27684A' }}>
                <h3 className="font-bold text-lg mb-1">Need Immediate Help?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Prefer to speak directly? Reach us via phone or email.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-white/60 mr-1">Phone:</span>
                    <a href="tel:+919674264091" className="text-white hover:text-white/80 transition">
                      +91 96742 64091
                    </a>
                  </p>
                  <p>
                    <span className="text-white/60 mr-1">Email:</span>
                    <a href="mailto:info@soujataexim.com" className="text-white hover:text-white/80 transition">
                      info@soujataexim.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 border rounded-2xl px-8" style={{ backgroundColor: '#f0f5f3', borderColor: '#27684A' }}>
                  <CheckCircle className="w-14 h-14 mb-4" style={{ color: '#27684A' }} />
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#27684A' }}>
                    Quote Request Received!
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-sm">
                    Thank you for reaching out. Our team will review your requirements and get back
                    to you within 24 hours.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 px-6 py-2.5 text-white rounded-lg font-semibold hover:opacity-90 transition text-sm"
                    style={{ backgroundColor: '#27684A' }}
                  >
                    Back to Home
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8 space-y-5"
                  id="quote-form"
                >
                  <h2 className="text-xl font-bold mb-1" style={{ color: '#27684A' }}>
                    Your Details
                  </h2>

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-1" style={{ color: '#27684A' }}>
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-2 transition"
                        style={{ '--tw-ring-color': '#27684A', '--tw-ring-offset-shadow': `0 0 0 0 #27684A`, borderColor: 'rgb(229, 231, 235)' } as any}
                        onFocus={(e) => { e.target.style.borderColor = '#27684A'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgb(229, 231, 235)'; }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#27684A' }}>
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-2 transition"
                        style={{ '--tw-ring-color': '#27684A', '--tw-ring-offset-shadow': `0 0 0 0 #27684A`, borderColor: 'rgb(229, 231, 235)' } as any}
                        onFocus={(e) => { e.target.style.borderColor = '#27684A'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgb(229, 231, 235)'; }}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1" style={{ color: '#27684A' }}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-2 transition"
                        style={{ '--tw-ring-color': '#27684A', '--tw-ring-offset-shadow': `0 0 0 0 #27684A`, borderColor: 'rgb(229, 231, 235)' } as any}
                        onFocus={(e) => { e.target.style.borderColor = '#27684A'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgb(229, 231, 235)'; }}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1" style={{ color: '#27684A' }}>
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-2 transition"
                        style={{ '--tw-ring-color': '#27684A', '--tw-ring-offset-shadow': `0 0 0 0 #27684A`, borderColor: 'rgb(229, 231, 235)' } as any}
                        onFocus={(e) => { e.target.style.borderColor = '#27684A'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgb(229, 231, 235)'; }}
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-1" style={{ color: '#27684A' }}>
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-2 transition"
                        style={{ '--tw-ring-color': '#27684A', '--tw-ring-offset-shadow': `0 0 0 0 #27684A`, borderColor: 'rgb(229, 231, 235)' } as any}
                        onFocus={(e) => { e.target.style.borderColor = '#27684A'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgb(229, 231, 235)'; }}
                      />
                    </div>
                    <div>
                      <label htmlFor="productType" className="block text-sm font-medium mb-1" style={{ color: '#27684A' }}>
                        Product Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        required
                        value={form.productType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-2 transition bg-white"
                        style={{ color: form.productType ? '#27684A' : '#999', borderColor: 'rgb(229, 231, 235)' } as any}
                        onFocus={(e) => { e.target.style.borderColor = '#27684A'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgb(229, 231, 235)'; }}
                      >
                        <option value="" disabled>Select a product...</option>
                        {productTypes.map((p) => (
                          <option key={p.value} value={p.value}>{p.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium mb-1" style={{ color: '#27684A' }}>
                      Estimated Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      required
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 units, 1000 pieces"
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-2 transition"
                      style={{ '--tw-ring-color': '#27684A', '--tw-ring-offset-shadow': `0 0 0 0 #27684A`, borderColor: 'rgb(229, 231, 235)' } as any}
                      onFocus={(e) => { e.target.style.borderColor = '#27684A'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgb(229, 231, 235)'; }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: '#27684A' }}>
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your custom requirements, sizing, branding needs, preferred materials, timeline, etc."
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-2 transition resize-none"
                      style={{ '--tw-ring-color': '#27684A', '--tw-ring-offset-shadow': `0 0 0 0 #27684A`, borderColor: 'rgb(229, 231, 235)' } as any}
                      onFocus={(e) => { e.target.style.borderColor = '#27684A'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgb(229, 231, 235)'; }}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 text-white rounded-lg font-semibold hover:opacity-90 transition text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#27684A' }}
                    id="submit-quote"
                  >
                    {submitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    By submitting, you agree to our{' '}
                    <Link href="/privacy" className="underline hover:opacity-80 transition" style={{ color: '#27684A' }}>Privacy Policy</Link>.
                    We&apos;ll never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
