import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={800}
          height={450}
          className="object-cover w-full h-full"
          priority={post.featured}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
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
        <Link 
          href={`/blog/${post.category}/${post.slug}`}
          className="group"
        >
          <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Par {post.author}
          </span>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.slice(0, 2).map(tag => (
                <span 
                  key={tag}
                  className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
