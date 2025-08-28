'use client'

import { useEffect } from 'react'

export default function AdSenseScript() {
  useEffect(() => {
    try {
      // 只在客户端执行，避免服务器端渲染错误
      if (typeof window !== 'undefined') {
        // 检查是否已经加载过脚本
        if (!window.adsbygoogle) {
          const script = document.createElement('script')
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
          script.async = true
          script.crossOrigin = 'anonymous'
          // 替换为您的真实Google AdSense发布商ID
          script.dataset.adClient = 'ca-pub-YOUR-ACTUAL-PUBLISHER-ID'
          
          document.head.appendChild(script)
          
          console.log('AdSense script loaded')
        }
      }
    } catch (error) {
      console.error('Error loading AdSense:', error)
    }
  }, [])

  return null // 这个组件不渲染任何内容
}