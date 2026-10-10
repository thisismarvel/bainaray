import { Analytics } from '@vercel/analytics/next'
import { Instrument_Serif, Lexend, Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })
const lexend = Lexend({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--font-accent', display: 'swap' })

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bainaray%20logo-X1uIwunYq90rBJyyTZEg3vMEXrDxGE.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bainaray%20logo-X1uIwunYq90rBJyyTZEg3vMEXrDxGE.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${outfit.variable} ${plusJakarta.variable} ${lexend.variable} ${instrumentSerif.variable}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
