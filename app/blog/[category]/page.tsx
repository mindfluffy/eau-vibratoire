import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPostsByCategory, getCategories } from '@/lib/blog'
import BlogGrid from '@/components/blog/BlogGrid'
import CategoryNav from '@/components/blog/CategoryNav'

interface Props {
  params: { 
    category: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

  return {
    title: `${categoryTitle} - Blog Eau Vibratoire`,
    description: `Découvrez nos articles sur ${categoryTitle.toLowerCase()} en relation avec l'eau vibratoire et ses applications.`,
    openGraph: {
      title: `Articles sur ${categoryTitle} - Eau Vibratoire`,
      description: `Explorez notre collection d'articles sur ${categoryTitle.toLowerCase()} et ses liens avec l'eau vibratoire.`
    }
  }
}

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    category,
  }))
}

export default async function BlogCategory({ params }: Props) {
  const [posts, categories] = await Promise.all([
    getPostsByCategory(params.category),
    getCategories()
  ])

  if (!posts.length) {
    notFound()
  }

  const categoryTitle = params.category.charAt(0).toUpperCase() + params.category.slice(1)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Navigation des catégories */}
          <CategoryNav 
            categories={categories}
            activeCategory={params.category}
          />

          {/* En-tête de la catégorie */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Articles sur {categoryTitle}
            </h1>
            <p className="text-xl text-gray-600">
              Découvrez nos articles sur {categoryTitle.toLowerCase()} en relation avec l'eau vibratoire et ses applications.
            </p>
          </header>

          {/* Grille d'articles */}
          <BlogGrid posts={posts.filter(post => post.status === 'published')} />
        </div>
      </div>
    </main>
  )
}
