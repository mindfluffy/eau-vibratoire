export type Category = 'sciences' | 'eau' | 'sante' | 'agriculture';

export interface BlogPost {
  title: string;
  category: Category;
  date: string;
  thumbnail: string;
  description: string;
  body: string;
  slug: string;
}

export interface BlogCategory {
  name: Category;
  title: string;
  description: string;
}
