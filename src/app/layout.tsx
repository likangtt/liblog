import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: 'Massage Chair Guide - Learn How to Choose the Perfect Massage Chair',
    template: '%s | Massage Chair Guide'
  },
  description: 'Your complete resource for learning how to buy massage chairs. Expert advice, buying tips, feature comparisons, and recommendations for all budgets and needs.',
  keywords: 'massage chair, how to buy massage chair, massage chair buying guide, massage chair features, massage chair comparison, best massage chairs for beginners',
  authors: [{ name: 'Massage Chair Guide Team' }],
  creator: 'Massage Chair Guide',
  publisher: 'Massage Chair Guide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // metadataBase: new URL('https://www.massagechairreview.shop/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Massage Chair Guide - Learn How to Choose the Perfect Massage Chair',
    description: 'Your complete resource for learning how to buy massage chairs. Expert advice, buying tips, feature comparisons, and recommendations for all budgets and needs.',
    url: 'https://www.massagechairreview.shop',
    siteName: 'Massage Chair Guide',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massage Chair Guide - Learn How to Choose the Perfect Massage Chair',
    description: 'Your complete resource for learning how to buy massage chairs. Expert advice, buying tips, feature comparisons, and recommendations for all budgets and needs.',
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
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
