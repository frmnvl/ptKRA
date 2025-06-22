// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'PT. Karya Rizky Andrian - Industrial Services & Construction',
    template: '%s | PT. Karya Rizky Andrian'
  },
  description: 'PT. Karya Rizky Andrian adalah perusahaan yang bergerak di bidang engineering construction, steel fabrication, maintenance, general trading, transportation, dan painting services dengan standar kualitas tinggi.',
  keywords: [
    'engineering construction',
    'steel fabrication',
    'industrial maintenance',
    'general trading',
    'transportation services',
    'painting services',
    'welding services',
    'Indonesia industrial'
  ],
  authors: [{ name: 'PT. Karya Rizky Andrian' }],
  creator: 'PT. Karya Rizky Andrian',
  publisher: 'PT. Karya Rizky Andrian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://your-domain.com',
    siteName: 'PT. Karya Rizky Andrian',
    title: 'PT. Karya Rizky Andrian - Industrial Services & Construction',
    description: 'Layanan engineering construction, steel fabrication, maintenance, dan industrial services terpercaya di Indonesia.',
    images: [
      {
        url: '/og-image.jpg', // Buat file ini di public/
        width: 1200,
        height: 630,
        alt: 'PT. Karya Rizky Andrian',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Karya Rizky Andrian - Industrial Services',
    description: 'Layanan engineering construction dan industrial services terpercaya.',
    images: ['/og-image.jpg'],
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
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}