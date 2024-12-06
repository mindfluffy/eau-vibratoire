import { notFound } from 'next/navigation'
import { Category } from '@/types/blog'

const categories: Record<Category, string> = {
  sciences: 'Sciences',
  eau: 'Eau',
  sante: 'Santé',
  agriculture: 'Agriculture'
}

export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }))
}

export default function BlogCategory({ params }: { params: { category: Category } }) {
  const category = params.category
  
  if (!categories[category]) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-dark mb-8">
          {categories[category]}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Les articles seront chargés ici dynamiquement */}
        </div>
      </div>
    </div>
  )
}
