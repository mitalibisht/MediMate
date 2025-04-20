import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Metadata } from "next"
import { VoiceAssistantWrapper } from "@/components/voice-assistant-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'MediMate - Your Personal Medication Assistant',
  description: 'Track medications, set reminders, and stay on top of your health with MediMate. Everything you need in one secure platform.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
      }
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <VoiceAssistantWrapper />
        </Providers>
      </body>
    </html>
  )
}
