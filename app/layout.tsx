import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Jess",
  description: "welcome, i'm glad you're here.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansJP.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
