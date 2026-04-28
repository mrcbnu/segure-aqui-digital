export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string; // Aceita HTML para formatação
}

export const BLOG_POSTS: Post[] = []
   