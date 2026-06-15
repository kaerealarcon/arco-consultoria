import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { client } from '@/data/client'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: client.seo.title,
    template: `%s | ${client.company.name}`,
  },
  description: client.seo.description,
  keywords: client.seo.keywords,
  authors: [{ name: client.company.name, url: client.company.website }],
  creator: client.company.name,
  metadataBase: new URL(client.company.website),
  openGraph: {
    title: client.seo.title,
    description: client.seo.description,
    url: client.company.website,
    siteName: client.company.name,
    images: [
      {
        url: client.seo.ogImage,
        width: 1200,
        height: 630,
        alt: client.seo.title,
      },
    ],
    locale: client.company.locale.replace('-', '_'),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: client.seo.title,
    description: client.seo.description,
    images: [client.seo.ogImage],
    creator: client.seo.twitterHandle,
    site: client.seo.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: client.company.website,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={client.company.locale} className={inter.variable}>
      <head>
        {/* Injeta a cor de destaque como CSS variable — editável em data/client.ts */}
        <style>{`:root { --accent: ${client.theme.accentRgb}; }`}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
