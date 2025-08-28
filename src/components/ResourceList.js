'use client'

// components/ResourceList.js
import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"

export default function ResourceList({ resources, showMoreLink = true }) {
  // 用于广告展示的状态
  const [adsLoaded, setAdsLoaded] = useState(false);

  // 模拟广告加载
  useEffect(() => {
    // 检查是否存在Google AdSense脚本
    const loadAdsense = () => {
      try {
        if (window.adsbygoogle) {
          // 尝试刷新广告
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        setAdsLoaded(true);
      } catch (error) {
        console.error('AdSense error:', error);
      }
    };

    // 延迟加载广告，提高页面性能
    const timer = setTimeout(() => {
      loadAdsense();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tighter">Massage Chair Buying Guides</h2>
        {showMoreLink && (
          <Link href="/resources" className="text-blue-600 hover:text-blue-800 transition-colors">
            View all buying guides →
          </Link>
        )}
      </div>
      {/* 顶部广告位 - 适用于Google AdSense */}
      <div className="w-full mb-8 overflow-hidden rounded-lg bg-gray-50 p-4 text-center" id="massage-chair-top-ad">
        <div className="adsbygoogle-container">
          <ins 
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // 替换为您的AdSense发布商ID
            data-ad-slot="xxxxxxxxxx" // 替换为您的广告位ID
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          {!adsLoaded && <div className="text-gray-400 text-sm">Advertisement</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => {
          // 在资源列表中间插入广告
          if (index === 3 && resources.length > 6) {
            return (
              <React.Fragment key={`ad-${index}`}>
                <div 
                  className="cursor-pointer"
                  onClick={() => window.location.href = resource.url}
                >
                  <Card 
                    className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-[320px] flex flex-col overflow-hidden"
                  >
                    {/* Image at the top */}
                    <div className="w-full h-[160px] overflow-hidden">
                      <img 
                        src={resource.image || "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=400&h=250&auto=format&fit=crop"} 
                        alt={resource.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    
                    {/* Content at the bottom */}
                    <div className="flex flex-col flex-1">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-blue-600">{resource.name}</CardTitle>
                      </CardHeader>
                      
                      <div className="px-6 pb-4 flex-grow">
                        <CardDescription>{resource.description}</CardDescription>
                      </div>
                      
                      {/* Sponsored tag */}
                      <CardFooter className="pt-0 mt-auto">
                        <span className="text-xs text-gray-400">Sponsored</span>
                      </CardFooter>
                    </div>
                  </Card>
                </div>
                
                {/* 内嵌广告位 */}
                <Card className="bg-gray-50 flex items-center justify-center h-[250px]" id="massage-chair-inline-ad">
                  <div className="adsbygoogle-container w-full h-full p-4">
                    <ins 
                      className="adsbygoogle"
                      style={{ display: 'block' }}
                      data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
                      data-ad-slot="xxxxxxxxxx"
                      data-ad-format="auto"
                      data-full-width-responsive="true"
                    ></ins>
                    {!adsLoaded && <div className="text-gray-400 text-sm text-center">Advertisement</div>}
                  </div>
                </Card>
              </React.Fragment>
            );
          }
          
          return (
            <div 
              key={index} 
              className="cursor-pointer"
              onClick={() => window.location.href = resource.url}
            >
              <Card 
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-[320px] flex flex-col overflow-hidden"
              >
                {/* Image at the top */}
                <div className="w-full h-[160px] overflow-hidden">
                  <img 
                    src={resource.image || "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=400&h=250&auto=format&fit=crop"} 
                    alt={resource.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Content at the bottom */}
                <div className="flex flex-col flex-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-blue-600">{resource.name}</CardTitle>
                  </CardHeader>
                  
                  <div className="px-6 pb-4 flex-grow">
                    <CardDescription>{resource.description}</CardDescription>
                  </div>
                  
                  {/* Affiliate link indicator */}
                  {index % 5 === 0 && (
                    <CardFooter className="pt-0 mt-auto">
                      <span className="text-xs text-gray-400">Affiliate Link</span>
                    </CardFooter>
                  )}
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      
      {/* 底部广告位 */}
      <div className="w-full mt-8 overflow-hidden rounded-lg bg-gray-50 p-4 text-center" id="massage-chair-bottom-ad">
        <div className="adsbygoogle-container">
          <ins 
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="xxxxxxxxxx"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          {!adsLoaded && <div className="text-gray-400 text-sm">Advertisement</div>}
        </div>
      </div>
    </section>
  )
}