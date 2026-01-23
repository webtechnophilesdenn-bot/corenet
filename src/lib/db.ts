// src/lib/db.ts
import { Blog, CaseStudy } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

class Database {
  private async fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE}${endpoint}`;

    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || `API Error ${res.status}`);
    }

    return res.json();
  }

  // ---------- BLOGS ----------
  async getBlogs(): Promise<Blog[]> {
    return this.fetchAPI<Blog[]>('/blogs');
  }

  async getPublishedBlogs(): Promise<Blog[]> {
    return this.fetchAPI<Blog[]>('/blogs?status=published');
  }

  async getBlogById(id: number): Promise<Blog | null> {
    try {
      return await this.fetchAPI<Blog>(`/blogs/${id}`);
    } catch {
      return null;
    }
  }

  async getBlogBySlug(slug: string): Promise<Blog | null> {
    if (!slug) return null;
    try {
      const blog = await this.fetchAPI<Blog>(`/blogs/slug/${encodeURIComponent(slug)}`);
      // only published show on frontend pages usually
      return blog?.status === 'published' ? blog : null;
    } catch {
      return null;
    }
  }

  async addBlog(blogData: any): Promise<any> {
    return this.fetchAPI(`/blogs`, {
      method: 'POST',
      body: JSON.stringify(blogData),
    });
  }

  async updateBlog(id: number, updates: any): Promise<any> {
    return this.fetchAPI(`/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteBlog(id: number): Promise<any> {
    return this.fetchAPI(`/blogs/${id}`, {
      method: 'DELETE',
    });
  }

  // ---------- CASE STUDIES ----------
  async getCaseStudies(): Promise<CaseStudy[]> {
    return this.fetchAPI<CaseStudy[]>('/case-studies');
  }

  async getPublishedCaseStudies(): Promise<CaseStudy[]> {
    return this.fetchAPI<CaseStudy[]>('/case-studies?status=published');
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    if (!slug) return null;
    try {
      const cs = await this.fetchAPI<CaseStudy>(`/case-studies/slug/${encodeURIComponent(slug)}`);
      return cs?.status === 'published' ? cs : null;
    } catch {
      return null;
    }
  }

  async addCaseStudy(caseStudyData: any): Promise<any> {
    return this.fetchAPI(`/case-studies`, {
      method: 'POST',
      body: JSON.stringify(caseStudyData),
    });
  }

  async updateCaseStudy(id: number, updates: any): Promise<any> {
    return this.fetchAPI(`/case-studies/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteCaseStudy(id: number): Promise<any> {
    return this.fetchAPI(`/case-studies/${id}`, {
      method: 'DELETE',
    });
  }
}

export const db = new Database();
