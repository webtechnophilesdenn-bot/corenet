// src/types/index.ts
export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: number; // in minutes
  featured: boolean;
  status: 'draft' | 'published';
  views: number;
  createdAt: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  implementation: string;
  results: string;
  metrics: Metric[];
  technologies: string[];
  duration: string;
  teamSize: number;
  author: string;
  category: string;
  image?: string;
  gallery?: string[];
  featured: boolean;
  status: 'draft' | 'published';
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  createdAt: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface Metric {
  label: string;
  value: string;
  icon?: string;
}

export interface FormData {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author: string;
  authorRole?: string;
  category: string;
  tags?: string; // This should be string since it comes from form input
  image: string;
  readTime?: number;
  featured?: boolean;
  status?: 'draft' | 'published';
  // Case study fields
  client?: string;
  industry?: string;
  challenge?: string;
  solution?: string;
  implementation?: string;
  results?: string;
  metrics?: string; // JSON string from form
  technologies?: string; // Comma-separated string from form
  duration?: string;
  teamSize?: number;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialPosition?: string;
}

