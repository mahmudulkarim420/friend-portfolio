export interface BlogComment {
  id: string;
  name: string;
  comment: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Blog" | "Research" | "Tutorial";
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  tags: string[];
  content: string;
  likes: number;
  comments: BlogComment[];
}

export type BlogSummary = Omit<BlogPost, "content" | "comments">;
