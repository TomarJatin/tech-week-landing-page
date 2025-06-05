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
  title: 'Heizen | Software Delivery at Lightspeed',
  description: 'AI + Humans ship production-grade software 10x faster',
  metadataBase: new URL('https://www.heizen.work'),
  openGraph: {
    title: 'Heizen | Software Delivery at Lightspeed',
    description: 'AI + Humans ship production-grade software 10x faster',
    url: 'https://www.heizen.work',
    siteName: 'Heizen',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Heizen - Software Delivery at Lightspeed AI + Humans ship production-grade software 10x faster',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heizen | Software Delivery at Lightspeed ',
    description: 'AI + Humans ship production-grade software 10x faster',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.heizen.work',
  },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-70.png', sizes: '70x70', type: 'image/png' },
      { url: '/favicon-120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicon-144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-256.png', sizes: '256x256', type: 'image/png' },
      { url: '/favicon-384.png', sizes: '384x384', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon-144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
