'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface CategoryNavProps {
  categories: string[]
  activeCategory?: string
}

export default function CategoryNav({ categories, activeCategory }: CategoryNavProps) {
  const pathname = usePathname()
  const isRootBlog = pathname === '/blog'

  return (
    <nav className="flex flex-wrap gap-4 mb-8">
      <Link
        href="/blog"
        className={clsx(
          'px-4 py-2 rounded-full text-sm font-medium transition-colors',
          isRootBlog
            ? 'bg-blue-dark text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-blue-light hover:text-white'
        )}
      >
        Tous les articles
      </Link>
      {categories.map(category => (
        <Link
          key={category}
          href={`/blog/${category}`}
          className={clsx(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            category === activeCategory
              ? 'bg-blue-dark text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-blue-light hover:text-white'
          )}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      ))}
    </nav>
  )
}
