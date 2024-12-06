import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BlogPost } from '@/types/blog'

export default function Article({
  params,
}: {
  params: { category: string; slug: string }
}) {
  // Cette fonction sera remplacée par la récupération réelle des données
  const getArticle = async (): Promise<BlogPost | null> => {
    return null // À implémenter avec Netlify CMS
  }

  const article = await getArticle()

  if (!article) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-dark mb-4">
            {article.title}
          </h1>
          
          <div className="text-blue-medium mb-8">
            {new Date(article.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>

          <div className="relative h-96 mb-8">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Le contenu de l'article sera rendu ici */}
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        </div>
      </div>
    </article>
  )
}
