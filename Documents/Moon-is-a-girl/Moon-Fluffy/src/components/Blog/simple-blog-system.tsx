// blogPosts.js
export const blogPosts = [
  {
    id: 1,
    title: "Comprendre les phases lunaires",
    date: "2024-03-15",
    content: "Les phases lunaires sont un cycle naturel qui...",
    excerpt: "Découvrez comment les phases lunaires influencent notre vie quotidienne."
  },
  // Ajoutez d'autres articles ici
];

// BlogPage.js
import React from 'react';
import { Card, CardContent, Button } from '@/components/ui/';
import { blogPosts } from './blogPosts';

const BlogPage = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-8 text-center">Blog Lunaire</h1>
    {blogPosts.map(post => (
      <Card key={post.id} className="mb-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-500 mb-4">Publié le {post.date}</p>
          <p className="mb-4">{post.excerpt}</p>
          <Button>Lire la suite</Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default BlogPage;

// BlogPost.js (pour afficher un article complet)
import React from 'react';
import { Card, CardContent } from '@/components/ui/';
import { blogPosts } from './blogPosts';

const BlogPost = ({ id }) => {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return <div>Article non trouvé</div>;

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">Publié le {post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </CardContent>
    </Card>
  );
};

export default BlogPost;
