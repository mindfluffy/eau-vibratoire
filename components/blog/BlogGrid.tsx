import { BlogPost } from '@/lib/blog'
import BlogCard from './BlogCard'

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
