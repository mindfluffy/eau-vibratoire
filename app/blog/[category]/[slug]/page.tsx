import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPostBySlug } from '@/lib/blog'
import { marked } from 'marked'

interface Props {
  params: { 
    category: string
    slug: string 
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Article non trouvé - Eau Vibratoire',
      description: 'Cet article n\'existe pas ou a été déplacé.'
    }
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.description,
    keywords: post.seo?.keywords || post.tags,
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.description,
      images: [post.thumbnail],
      type: 'article',
      authors: [post.author]
    }
  }
}

export default async function Article({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post || post.status !== 'published') {
    notFound()
  }

  const content = marked(post.content)

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {post.description}
            </p>
            <div className="aspect-[21/9] relative overflow-hidden rounded-lg mb-6">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={1200}
                height={630}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                Par {post.author}
              </span>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Articles connexes</h2>
            {/* Ajouter ici des liens vers d'autres articles */}
          </div>

          <div className="mt-6">
            <button 
              className="bg-blue-medium hover:bg-blue-light text-white font-bold py-2 px-4 rounded"
              onClick={() => window.history.back()}
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
