import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devsan: Where the Impossible Becomes Possible',
  description: `Welcome to Devsan, an Indian developer's portfolio showcasing the limitless possibilities of technology and innovation.

  In this portfolio, you'll find a collection of projects and creations that demonstrate the power of coding, problem-solving, and creativity. Join me on a journey where we turn dreams into reality, one line of code at a time.
  
  Let's explore the world of endless possibilities together!`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
