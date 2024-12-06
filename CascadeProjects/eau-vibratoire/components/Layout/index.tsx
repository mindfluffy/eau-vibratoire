'use client'

import { FC, ReactNode } from 'react'
import Navigation from './Navigation'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <footer className="bg-blue-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Eau Vibratoire</h3>
              <p className="text-sm">
                Découvrez les avancées scientifiques sur l&apos;eau et ses propriétés.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-blue-light">Accueil</a></li>
                <li><a href="/blog" className="hover:text-blue-light">Blog</a></li>
                <li><a href="/grander" className="hover:text-blue-light">Grander</a></li>
                <li><a href="/contact" className="hover:text-blue-light">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-sm mb-2">
                Pour toute question ou information complémentaire
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-medium hover:bg-blue-light text-white px-4 py-2 rounded-lg transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-medium/30 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Eau Vibratoire. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
