// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Massage Chair Guide - Learn How to Choose the Perfect Massage Chair',
  description: 'Your complete resource for learning how to buy massage chairs. Expert advice, buying tips, feature comparisons, and recommendations for all budgets and needs.',
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="py-4 space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Massage Chair Guide
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">Making Massage Chair Shopping Simple</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Your complete resource for learning how to buy massage chairs. We break down technical features, explain health benefits, compare top models, and provide step-by-step buying guidance for all budgets and needs.
        </p>
      </section>

      <ResourceList resources={resources} />
      <ArticleList articles={allPostsData} />
    </div>
  )
}