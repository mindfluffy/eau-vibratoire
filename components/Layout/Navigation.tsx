'use client'

import { FC, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

interface MenuItem {
  href: string
  label: string
  subItems?: { href: string; label: string }[]
}

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const menuItems: MenuItem[] = [
    { href: '/', label: 'Accueil' },
    {
      href: '/blog',
      label: 'Blog',
      subItems: [
        { href: '/blog/sciences', label: 'Sciences' },
        { href: '/blog/eau', label: 'Eau' },
        { href: '/blog/sante', label: 'Santé' },
        { href: '/blog/agriculture', label: 'Agriculture' },
      ],
    },
    { href: '/grander', label: 'Grander' },
    { href: '/contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (item: MenuItem) => {
    if (item.subItems) {
      setOpenSubmenu(openSubmenu === item.href ? null : item.href)
    } else {
      setOpenSubmenu(null)
      setIsOpen(false)
    }
  }

  return (
    <nav className="bg-blue-dark text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold hover:text-blue-light transition-colors">
            Eau Vibratoire
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.href} className="relative flex items-center h-16" ref={item.subItems ? dropdownRef : null}>
                {item.subItems ? (
                  <div className="relative">
                    <button
                      className={`flex items-center space-x-1 hover:text-blue-light transition-colors ${
                        pathname.startsWith(item.href) ? 'text-blue-light' : ''
                      }`}
                      onClick={() => handleItemClick(item)}
                      aria-expanded={openSubmenu === item.href}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <span 
                        className={`ml-1 transition-transform duration-200 ${
                          openSubmenu === item.href ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openSubmenu === item.href && (
                      <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-light hover:text-white transition-colors ${
                              pathname === subItem.href ? 'bg-blue-light text-white' : ''
                            }`}
                            onClick={() => setOpenSubmenu(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`hover:text-blue-light transition-colors ${
                      pathname === item.href ? 'text-blue-light' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <div key={item.href}>
                <div
                  className="px-4 py-2 flex justify-between items-center cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  {!item.subItems ? (
                    <Link
                      href={item.href}
                      className={`block ${pathname === item.href ? 'text-blue-light' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={pathname.startsWith(item.href) ? 'text-blue-light' : ''}>
                      {item.label}
                    </span>
                  )}
                  {item.subItems && (
                    <span className={`transition-transform duration-200 ${
                      openSubmenu === item.href ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  )}
                </div>

                {item.subItems && openSubmenu === item.href && (
                  <div className="bg-blue-medium/10 py-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-8 py-2 ${
                          pathname === subItem.href ? 'text-blue-light' : ''
                        }`}
                        onClick={() => {
                          setIsOpen(false)
                          setOpenSubmenu(null)
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
