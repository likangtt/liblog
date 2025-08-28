'use client'

// components/Layout.js
import { Navigation } from './Navigation'
import { Footer } from '@/components/Footer'
import AdSenseScript from './AdSenseScript'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <AdSenseScript />
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-4">{children}</main>
      <Footer />
    </div>
  )
}