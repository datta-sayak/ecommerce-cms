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
  twitter: {
    card: "summary_large_image",
    title: "Soujata Exim - Eco-Friendly Bags Manufacturer from India",
    description: "Sustainable jute, cotton & canvas bags. Custom designs, low MOQs, export-ready.",
    images: ["https://soujataexim.com/og-image.jpg"],
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
