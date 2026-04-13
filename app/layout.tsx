import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Organization Schema for JSON-LD
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Soujata Exim",
  url: "https://soujataexim.com",
  logo: "https://soujataexim.com/logo.png",
  description: "Trusted Indian manufacturer and exporter of eco-friendly, sustainable bags made from jute, cotton, and canvas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kalachand Para",
    addressLocality: "Duttapukur",
    addressRegion: "West Bengal",
    postalCode: "743248",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    telephone: "+91-96742-54091",
    email: "info@soujataexim.com",
  },
  sameAs: [
    "https://www.facebook.com/soujataexim",
    "https://www.linkedin.com/in/soujata-exim-69037425a/",
    "https://www.instagram.com/soujataexim",
  ],
};

// Local Business Schema for JSON-LD
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Soujata Exim",
  image: "https://soujataexim.com/logo.png",
  description: "Manufacturer & Exporter of Eco-friendly Jute Bags, Cotton Bags, Canvas Bags, Pouches",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kalachand Para",
    addressLocality: "Duttapukur",
    addressRegion: "West Bengal",
    postalCode: "743248",
    addressCountry: "IN",
  },
  telephone: "+91-96742-54091",
  email: "info@soujataexim.com",
  priceRange: "$$",
  areaServed: ["US", "DE", "MY", "DO", "ES", "MX"],
};

export const metadata: Metadata = {
  title: "Soujata Exim - Eco-Friendly Jute, Cotton & Canvas Bags Manufacturer | India Exporter",
  description: "Leading Indian manufacturer & exporter of sustainable jute bags, cotton totes, canvas bags & eco-friendly packaging solutions. Custom designs, low MOQs, export ready.",
  keywords: "jute bags, cotton tote bags, eco-friendly bags, sustainable packaging, canvas bags, India exporter, custom bags, biodegradable bags",
  authors: [{ name: "Soujata Exim" }],
  creator: "Soujata Exim",
  publisher: "Soujata Exim",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soujataexim.com",
    siteName: "Soujata Exim",
    title: "Soujata Exim - Eco-Friendly Bags Manufacturer & Exporter from India",
    description: "Trusted manufacturer of sustainable jute, cotton & canvas bags. Custom designs, low MOQs, export-ready solutions.",
    images: [
      {
        url: "https://soujataexim.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soujata Exim - Eco-Friendly Bags",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://soujataexim.com",
  },
  other: {
    "application/ld+json": JSON.stringify(organizationSchema),
    "application/ld+json:local-business": JSON.stringify(localBusinessSchema),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
