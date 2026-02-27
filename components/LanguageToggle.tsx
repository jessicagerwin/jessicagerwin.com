"use client"

import { useState } from "react"
import { Noto_Sans_JP } from "next/font/google"
import { Mail, Linkedin, Twitter, Newspaper, BookOpen, Globe, User } from "lucide-react"
import Link from "next/link"

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function LanguageToggle() {
  const [isJapanese, setIsJapanese] = useState(false)

  const toggleLanguage = () => {
    setIsJapanese(!isJapanese)
  }

  return (
    <div className="text-center">
      <button
        onClick={toggleLanguage}
        className={`${notoSansJP.className} text-base font-normal text-gray-800 hover:text-gray-600 transition-colors duration-300`}
      >
        {isJapanese ? (
          <>
            <span className="font-bold">こんにちは、ジェスです。</span>
            <br />
            ようこそ、来てくれて嬉しいです。
          </>
        ) : (
          <>
            <span className="font-bold">hi, i&apos;m jess.</span>
            <br />
            welcome, i&apos;m glad you&apos;re here.
          </>
        )}
      </button>
      <div className="mt-4 flex justify-center space-x-6">
        <Link href="/about" aria-label="About Me">
          <User className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
        </Link>
        <Link
          href="https://www.okaeri.ai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Okaeri"
        >
          <Globe className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
        </Link>
        <Link href="mailto:jessica@okaeri.ai" aria-label="Email Jessica">
          <Mail className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jessicagerwin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Jessica's LinkedIn"
        >
          <Linkedin className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
        </Link>
        <Link
          href="https://x.com/jessica_gerwin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Jessica's X (formerly Twitter)"
        >
          <Twitter className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
        </Link>
        <Link href="/press" aria-label="Press Coverage">
          <Newspaper className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
        </Link>
        <Link href="/essays" aria-label="Personal Essays">
          <BookOpen className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
        </Link>
      </div>
    </div>
  )
}
