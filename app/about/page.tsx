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
      {/* Gradient Blobs - Soft Muted Yellow */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(218, 195, 145, 0.35) 0%, rgba(218, 195, 145, 0) 70%)",
          top: "-10%",
          left: "-10%",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-float-delayed"
        style={{
          background:
            "radial-gradient(circle, rgba(235, 214, 160, 0.4) 0%, rgba(235, 214, 160, 0) 70%)",
          top: "30%",
          right: "-5%",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[650px] h-[650px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(240, 225, 180, 0.45) 0%, rgba(240, 225, 180, 0) 70%)",
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
          <div className="space-y-4 text-sm font-light text-gray-700 leading-relaxed">
            <p className="font-normal text-gray-800">
              Hi, I'm Jess.
            </p>
            
            <p>
              I believe the future will be shaped by people who build with courage, agency, and taste. In an age of infinite intelligence, discernment is everything.
            </p>
            
            <p>
              I'm building Okaeri in San Francisco: an agentic executive assistant designed to think with you and act with your judgment.
            </p>
            
            <p>
              I curate rooms, host dinners, and design immersive experiences. I build systems and gatherings that change trajectories.
            </p>
            
            <p>
              I write sometimes.
            </p>
            
            <p>
              Welcome.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
