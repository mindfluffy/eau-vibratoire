import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIRECTORY = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  category: string
  tags: string[]
  date: string
  thumbnail: string
  description: string
  author: string
  featured: boolean
  status: 'draft' | 'published'
  content: string
  seo: {
    title?: string
    description?: string
    keywords?: string[]
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(POSTS_DIRECTORY, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Si le slug n'est pas défini, on le crée à partir du nom du fichier
      const slug = data.slug || fileName.replace(/^\d{4}-\d{2}-\d{2}-(.+)\.md$/, '$1')

      return {
        slug,
        title: data.title,
        category: data.category,
        tags: data.tags || [],
        date: data.date,
        thumbnail: data.thumbnail || '/images/uploads/water-waves.jpg',
        description: data.description,
        author: data.author || 'Équipe Eau Vibratoire',
        featured: data.featured || false,
        status: data.status || 'draft',
        content,
        seo: data.seo || {}
      }
    })
    .sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime())

  return posts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts()
  return posts.find(post => post.slug === slug) || null
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.category === category && post.status === 'published')
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.featured && post.status === 'published')
}

export async function getCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  return Array.from(new Set(posts.map(post => post.category)))
}
