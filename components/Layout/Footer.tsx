'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implémenter la logique d'inscription à la newsletter
    console.log('Email soumis:', email)
    setEmail('')
    // Ajouter ici la logique pour envoyer l'email à votre service de newsletter
  }

  const navigationLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/blog', label: 'Blog' },
    { href: '/grander', label: 'Grander' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
  ]

  return (
    <footer className="bg-blue-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Simplifiée */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-blue-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Recevez notre guide gratuit sur les bienfaits de l'eau et restez informé de nos dernières découvertes.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-light transition-colors"
                />
                <button
                  type="submit"
                  className="bg-blue-medium hover:bg-blue-light px-4 py-2 rounded-lg transition-colors"
                >
                  S'abonner
                </button>
              </div>
            </form>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <p className="mb-4">
              Rejoignez-nous sur nos réseaux sociaux pour plus d'actualités sur l'eau vibratoire.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-light transition-colors p-2"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>© {new Date().getFullYear()} Eau Vibratoire. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
