import Link from 'next/link'

const Navigation = () => {
  const menuItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Sciences', path: '/blog/sciences' },
    { label: 'Eau', path: '/blog/eau' },
    { label: 'Santé', path: '/blog/sante' },
    { label: 'Agriculture', path: '/blog/agriculture' },
    { label: 'Grander', path: '/grander' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Eau Vibratoire
          </Link>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="hover:text-blue-light transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Menu mobile à implémenter */}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
