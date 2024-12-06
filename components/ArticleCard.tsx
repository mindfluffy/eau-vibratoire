import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/types/blog'

interface ArticleCardProps {
  article: BlogPost
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-blue-medium mb-2">
          {new Date(article.date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        <h2 className="text-xl font-bold text-blue-dark mb-2">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4">
          {article.description}
        </p>
        <Link
          href={`/blog/${article.category}/${article.slug}`}
          className="inline-block bg-blue-medium hover:bg-blue-dark text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Lire la suite
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard
