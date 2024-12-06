import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eau Vibratoire - Science et Technologie de l\'Eau',
  description: 'Découvrez les avancées scientifiques sur l\'eau et ses propriétés. Blog scientifique sur l\'eau, la santé et l\'agriculture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={ubuntu.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
