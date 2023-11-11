import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Egzersiz Takip Uygulaması',
  description: 'Burayı doldur açıklama',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light",
        url: "/favicon-light.ico",
        href: "/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark",
        url: "/favicon-dark.ico",
        href: "/favicon-dark.ico",
      },
    ],
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey='etu-theme'>
          {children}
        </ThemeProvider> 
        </body>
    </html>
  )
}
