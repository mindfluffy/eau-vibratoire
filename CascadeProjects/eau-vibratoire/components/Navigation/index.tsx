'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/blog/sciences', label: 'Sciences' },
    { href: '/blog/eau', label: 'Eau' },
    { href: '/blog/sante', label: 'Santé' },
    { href: '/blog/agriculture', label: 'Agriculture' },
    { href: '/grander', label: 'Grander' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-blue-dark text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-bold hover:text-blue-light transition-colors"
          >
            Eau Vibratoire
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-blue-light transition-colors ${
                  pathname === item.href ? 'text-blue-light' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md ${
                    pathname === item.href
                      ? 'bg-blue-medium text-white'
                      : 'hover:bg-blue-medium hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
