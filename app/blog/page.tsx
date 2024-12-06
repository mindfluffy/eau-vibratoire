import { getAllPosts, getFeaturedPosts } from '@/lib/blog'
import BlogGrid from '@/components/blog/BlogGrid'

export const metadata = {
  title: 'Blog - Eau Vibratoire',
  description: 'Découvrez nos articles sur l\'eau vibratoire, la science de l\'eau et ses applications.',
}

export default async function BlogPage() {
  const [allPosts, featuredPosts] = await Promise.all([
    getAllPosts(),
    getFeaturedPosts(),
  ])

  const regularPosts = allPosts.filter(post => !post.featured && post.status === 'published')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section avec articles en vedette */}
      {featuredPosts.length > 0 && (
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12">Articles à la Une</h1>
            <BlogGrid posts={featuredPosts} />
          </div>
        </section>
      )}

      {/* Section principale avec tous les articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-semibold">Derniers Articles</h2>
            {/* Ici, nous pourrions ajouter des filtres et une barre de recherche */}
          </div>
          <BlogGrid posts={regularPosts} />
        </div>
      </section>
    </main>
  )
}
