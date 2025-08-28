'use client'

// components/ArticleList.js
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function ArticleList({ articles, showMoreLink = true }) {
  const router = useRouter();
  
  // Generate a random image for each article
  const getRandomImage = (id) => {
    const imageIds = [
      'photo-1600121848594-d8644e57abab',
      'photo-1545389336-cf090694435e',
      'photo-1600334129128-685c5582fd35',
      'photo-1554224155-6726b3ff858f',
      'photo-1519823551278-64ac92734fb1',
      'photo-1493809842364-78817add7ffb'
    ];
    
    // Use the article id to consistently get the same image for each article
    const index = id.charCodeAt(0) % imageIds.length;
    return `https://images.unsplash.com/${imageIds[index]}?q=80&w=800&h=400&auto=format&fit=crop`;
  };
  
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tighter">How-To Articles</h2>
        {showMoreLink && (
          <Link href="/posts" className="text-blue-600 hover:text-blue-800 transition-colors">
            View all articles →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map(({ id, title, description }) => (
          <div 
            key={id}
            className="cursor-pointer"
            onClick={() => router.push(`/posts/${id}`)}
          >
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-[320px] flex flex-col overflow-hidden">
              {/* Image at the top */}
              <div className="w-full h-[160px] overflow-hidden">
                <img 
                  src={getRandomImage(id)} 
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Content at the bottom */}
              <div className="flex flex-col flex-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-600">{title}</CardTitle>
                </CardHeader>
                
                <div className="px-6 pb-4 flex-grow">
                  <CardDescription>{description}</CardDescription>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
