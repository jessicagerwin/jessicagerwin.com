"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Noto_Sans_JP } from "next/font/google"

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function AboutPage() {
  return (
    <main
      className={`${notoSansJP.className} relative min-h-screen overflow-hidden bg-[#faf9f6]`}
    >
      {/* Gradient Blobs - Soft Green */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(144, 238, 144, 0.35) 0%, rgba(144, 238, 144, 0) 70%)",
          top: "-10%",
          left: "-10%",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-float-delayed"
        style={{
          background:
            "radial-gradient(circle, rgba(152, 251, 152, 0.4) 0%, rgba(152, 251, 152, 0) 70%)",
          top: "30%",
          right: "-5%",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[650px] h-[650px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(193, 225, 193, 0.45) 0%, rgba(193, 225, 193, 0) 70%)",
          bottom: "-15%",
          left: "20%",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center text-xs font-light text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Link>

        {/* About Content */}
        <div className="max-w-xl text-center">
          <h1 className="text-lg font-light text-gray-800 mb-6">About Me</h1>
          
          <div className="space-y-4 text-sm font-light text-gray-700 leading-relaxed">
            <p>
              Hi, I'm Jess. I'm the founder of Okaeri, where we're building technology 
              to help people feel at home wherever they are.
            </p>
            
            <p>
              Before starting Okaeri, I spent years exploring the intersection of 
              technology and human connection. I believe that the best products are 
              those that understand people deeply and serve their needs with care.
            </p>
            
            <p>
              When I'm not building, you can find me writing essays about taste, 
              architecture, and what it means to create in an age of automation.
            </p>
            
            <p>
              I'm based in San Francisco and always happy to connect with curious minds.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
