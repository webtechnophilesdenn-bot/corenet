// src/types/index.ts
export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  published: boolean;
  created_at: Date;
}

export interface CaseStudy {
  id: string;
  title: string;
  client_name: string;
  challenge: string;
  solution: string;
  results: string;
  created_at: Date;
}
