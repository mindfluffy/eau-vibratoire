import { BlogPost, Category } from '@/types/blog'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export const getArticlesByCategory = async (category: Category): Promise<BlogPost[]> => {
  const allPosts = await getAllArticles()
  return allPosts.filter(post => post.category === category)
}

export const getArticle = async (category: Category, slug: string): Promise<BlogPost | null> => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    if (data.category !== category) {
      return null
    }

    return {
      slug,
      title: data.title,
      category: data.category,
      date: data.date,
      thumbnail: data.thumbnail,
      description: data.description,
      body: contentHtml
    }
  } catch (error) {
    return null
  }
}

export const getAllArticles = async (): Promise<BlogPost[]> => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          ...(data as Omit<BlogPost, 'slug' | 'body'>),
          body: '' // Le contenu complet n'est chargé que lors de l'affichage d'un article
        }
      })
  )

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const getCategoryDetails = (category: Category) => {
  const categories = {
    sciences: {
      title: 'Sciences',
      description: 'Découvrez les dernières avancées scientifiques dans le domaine de l\'eau'
    },
    eau: {
      title: 'Eau',
      description: 'Explorez les propriétés extraordinaires de l\'eau et ses applications'
    },
    sante: {
      title: 'Santé',
      description: 'Apprenez comment l\'eau peut améliorer votre santé et votre bien-être'
    },
    agriculture: {
      title: 'Agriculture',
      description: 'Découvrez les bienfaits de l\'eau dynamisée pour l\'agriculture'
    }
  }

  return categories[category]
}
