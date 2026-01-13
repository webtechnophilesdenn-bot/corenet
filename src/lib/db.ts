// src/lib/db.ts
const API_BASE = 'http://localhost:3001/api'; 

// Import types from types/index.ts
import { Blog, CaseStudy } from '@/types';

console.log('🔧 Using API_BASE:', API_BASE);

class Database {
  // Enhanced fetch with error handling
  private async fetchAPI(endpoint: string, options?: RequestInit) {
    try {
      const url = `${API_BASE}${endpoint}`;
      console.log(`📡 Fetching from: ${url}`);
      
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        cache: 'no-store'
      });

      console.log(`📊 Response status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`❌ API Error ${response.status}: ${errorText.substring(0, 200)}`);
        throw new Error(`API Error ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`❌ API call failed for ${endpoint}:`, error);
      throw error;
    }
  }

  private parseTags(tags: any): string[] {
    if (Array.isArray(tags)) {
      return tags;
    }
    
    if (typeof tags === 'string') {
      if (tags.trim().startsWith('[') && tags.trim().endsWith(']')) {
        try {
          return JSON.parse(tags);
        } catch {
          // If JSON parsing fails, fall back to comma splitting
        }
      }
      return tags.split(',').map((t: string) => t.trim()).filter((t: string) => t);
    }
    
    return [];
  }

  // ==================== BLOG METHODS ====================
  async getBlogs(): Promise<Blog[]> {
    try {
      console.log('🔄 Getting blogs from API...');
      const data = await this.fetchAPI('/blogs');
      console.log('✅ Blogs data received:', data?.length || 0, 'items');
      
      return Array.isArray(data) ? data.map((blog: any) => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt || '',
        content: blog.content,
        author: blog.author,
        authorRole: blog.authorRole || blog.author_role || '',
        category: blog.category,
        tags: this.parseTags(blog.tags),
        image: blog.image || '',
        readTime: blog.readTime || blog.read_time || 0,
        featured: Boolean(blog.featured),
        status: blog.status,
        views: blog.views || 0,
        createdAt: blog.createdAt || blog.created_at,
        updatedAt: blog.updatedAt || blog.updated_at,
        publishedAt: blog.publishedAt || blog.published_at || undefined
      })) : [];
    } catch (error) {
      console.warn('⚠️ Using mock data for blogs');
      return this.getMockBlogs();
    }
  }

  async getPublishedBlogs(): Promise<Blog[]> {
    try {
      console.log('🔄 Getting published blogs...');
      const data = await this.fetchAPI('/blogs?status=published');
      return Array.isArray(data) ? data.map((blog: any) => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt || '',
        content: blog.content,
        author: blog.author,
        authorRole: blog.authorRole || blog.author_role || '',
        category: blog.category,
        tags: this.parseTags(blog.tags),
        image: blog.image || '',
        readTime: blog.readTime || blog.read_time || 0,
        featured: Boolean(blog.featured),
        status: blog.status,
        views: blog.views || 0,
        createdAt: blog.createdAt || blog.created_at,
        updatedAt: blog.updatedAt || blog.updated_at,
        publishedAt: blog.publishedAt || blog.published_at || undefined
      })) : [];
    } catch (error) {
      console.warn('⚠️ Using mock data for published blogs');
      return this.getMockBlogs().filter(blog => blog.status === 'published');
    }
  }

  async getBlogById(id: number): Promise<Blog | null> {
    try {
      console.log(`🔄 Getting blog with ID: ${id}`);
      const data = await this.fetchAPI(`/blogs/${id}`);
      return {
        ...data,
        tags: this.parseTags(data.tags)
      };
    } catch (error) {
      console.warn(`⚠️ Using mock data for blog ID: ${id}`);
      const mockBlogs = this.getMockBlogs();
      return mockBlogs.find(b => b.id === id) || null;
    }
  }

  async addBlog(blogData: Omit<Blog, 'id' | 'createdAt' | 'views'>): Promise<Blog> {
    try {
      console.log('➕ Creating new blog:', blogData.title);
      const response = await this.fetchAPI('/blogs', {
        method: 'POST',
        body: JSON.stringify(blogData)
      });
      
      const newBlog: Blog = {
        ...blogData,
        id: response.id || Date.now(),
        views: 0,
        createdAt: new Date().toISOString()
      };
      
      console.log('✅ Blog created with ID:', newBlog.id);
      return newBlog;
    } catch (error) {
      console.warn('⚠️ Using mock add blog');
      const mockBlog: Blog = {
        ...blogData,
        id: Date.now(),
        views: 0,
        createdAt: new Date().toISOString()
      };
      return mockBlog;
    }
  }

  async updateBlog(id: number, updates: Partial<Blog>): Promise<Blog | null> {
    try {
      console.log(`✏️ Updating blog ID: ${id}`);
      await this.fetchAPI(`/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updates)
      });
      
      return await this.getBlogById(id);
    } catch (error) {
      console.warn(`⚠️ Using mock update for blog ID: ${id}`);
      const current = await this.getBlogById(id);
      if (!current) return null;
      
      return {
        ...current,
        ...updates
      };
    }
  }

  async deleteBlog(id: number): Promise<void> {
    try {
      console.log(`🗑️ Deleting blog ID: ${id}`);
      await this.fetchAPI(`/blogs/${id}`, {
        method: 'DELETE'
      });
      console.log(`✅ Blog ${id} deleted`);
    } catch (error) {
      console.warn(`⚠️ Using mock delete for blog ID: ${id}`);
      console.log(`Mock delete blog with ID: ${id}`);
    }
  }

  // ==================== CASE STUDY METHODS ====================
  async getCaseStudies(): Promise<CaseStudy[]> {
    try {
      console.log('🔄 Getting case studies from API...');
      const data = await this.fetchAPI('/case-studies');
      console.log('✅ Case studies data received:', data?.length || 0, 'items');
      
      return Array.isArray(data) ? data.map((cs: any) => ({
        id: cs.id,
        title: cs.title,
        slug: cs.slug,
        client: cs.client,
        industry: cs.industry,
        challenge: cs.challenge,
        solution: cs.solution,
        implementation: cs.implementation || '',
        results: cs.results,
        metrics: cs.metrics ? (Array.isArray(cs.metrics) ? cs.metrics : JSON.parse(cs.metrics || '[]')) : [],
        technologies: cs.technologies ? (Array.isArray(cs.technologies) ? cs.technologies : JSON.parse(cs.technologies || '[]')) : [],
        duration: cs.duration || '',
        teamSize: cs.teamSize || cs.team_size || 0,
        author: cs.author,
        category: cs.category,
        image: cs.image || '',
        gallery: cs.gallery ? (Array.isArray(cs.gallery) ? cs.gallery : JSON.parse(cs.gallery || '[]')) : [],
        featured: Boolean(cs.featured),
        status: cs.status,
        testimonial: cs.testimonial ? (typeof cs.testimonial === 'object' ? cs.testimonial : JSON.parse(cs.testimonial || 'null')) : undefined,
        createdAt: cs.createdAt || cs.created_at,
        updatedAt: cs.updatedAt || cs.updated_at,
        publishedAt: cs.publishedAt || cs.published_at || undefined
      })) : [];
    } catch (error) {
      console.warn('⚠️ Using mock data for case studies');
      return this.getMockCaseStudies();
    }
  }

  async getPublishedCaseStudies(): Promise<CaseStudy[]> {
    try {
      console.log('🔄 Getting published case studies...');
      const data = await this.fetchAPI('/case-studies?status=published');
      return Array.isArray(data) ? data.map((cs: any) => ({
        ...cs,
        implementation: cs.implementation || '',
        metrics: cs.metrics ? (Array.isArray(cs.metrics) ? cs.metrics : JSON.parse(cs.metrics || '[]')) : [],
        technologies: cs.technologies ? (Array.isArray(cs.technologies) ? cs.technologies : JSON.parse(cs.technologies || '[]')) : [],
        gallery: cs.gallery ? (Array.isArray(cs.gallery) ? cs.gallery : JSON.parse(cs.gallery || '[]')) : [],
        teamSize: cs.teamSize || cs.team_size || 0
      })) : [];
    } catch (error) {
      console.warn('⚠️ Using mock data for published case studies');
      return this.getMockCaseStudies().filter(cs => cs.status === 'published');
    }
  }

  async addCaseStudy(caseStudyData: Omit<CaseStudy, 'id' | 'createdAt'>): Promise<CaseStudy> {
    try {
      console.log('➕ Creating new case study:', caseStudyData.title);
      const response = await this.fetchAPI('/case-studies', {
        method: 'POST',
        body: JSON.stringify(caseStudyData)
      });
      
      const newCaseStudy: CaseStudy = {
        ...caseStudyData,
        id: response.id || Date.now(),
        createdAt: new Date().toISOString()
      };
      
      console.log('✅ Case study created with ID:', newCaseStudy.id);
      return newCaseStudy;
    } catch (error) {
      console.warn('⚠️ Using mock add case study');
      const mockCaseStudy: CaseStudy = {
        ...caseStudyData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };
      return mockCaseStudy;
    }
  }

  async updateCaseStudy(id: number, updates: Partial<CaseStudy>): Promise<CaseStudy | null> {
    try {
      console.log(`✏️ Updating case study ID: ${id}`);
      await this.fetchAPI(`/case-studies/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updates)
      });
      
      const current = await this.getCaseStudies();
      const updated = current.find(c => c.id === id);
      return updated || null;
    } catch (error) {
      console.warn(`⚠️ Using mock update for case study ID: ${id}`);
      const current = await this.getCaseStudies();
      const toUpdate = current.find(c => c.id === id);
      if (!toUpdate) return null;
      
      return {
        ...toUpdate,
        ...updates
      };
    }
  }

  async deleteCaseStudy(id: number): Promise<void> {
    try {
      console.log(`🗑️ Deleting case study ID: ${id}`);
      await this.fetchAPI(`/case-studies/${id}`, {
        method: 'DELETE'
      });
      console.log(`✅ Case study ${id} deleted`);
    } catch (error) {
      console.warn(`⚠️ Using mock delete for case study ID: ${id}`);
      console.log(`Mock delete case study with ID: ${id}`);
    }
  }

  // ==================== MOCK DATA ====================
  private getMockBlogs(): Blog[] {
    console.log('📚 Returning mock blogs data');
    return [
      {
        id: 1,
        title: 'Getting Started with Cybersecurity',
        slug: 'getting-started-with-cybersecurity',
        excerpt: 'Learn the basics of cybersecurity for your business',
        content: 'Full content here...',
        author: 'John Doe',
        authorRole: 'Security Expert',
        category: 'Cybersecurity',
        tags: ['security', 'beginners'],
        image: '',
        readTime: 5,
        featured: true,
        status: 'published',
        views: 100,
        createdAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-16T11:20:00Z',
        publishedAt: '2024-01-15T10:30:00Z'
      },
      {
        id: 2,
        title: 'Cloud Migration Best Practices',
        slug: 'cloud-migration-best-practices',
        excerpt: 'How to successfully migrate to the cloud',
        content: 'Migration strategies...',
        author: 'Jane Smith',
        authorRole: 'Cloud Architect',
        category: 'Data Center',
        tags: ['cloud', 'migration'],
        image: '',
        readTime: 8,
        featured: false,
        status: 'draft',
        views: 50,
        createdAt: '2024-01-10T14:20:00Z',
        updatedAt: '2024-01-10T14:20:00Z',
        publishedAt: undefined
      }
    ];
  }

  private getMockCaseStudies(): CaseStudy[] {
    console.log('📚 Returning mock case studies data');
    return [
      {
        id: 1,
        title: 'Bank Security Upgrade',
        slug: 'bank-security-upgrade',
        client: 'ABC Bank',
        industry: 'Financial Services',
        challenge: 'Legacy security systems vulnerable to attacks',
        solution: 'Implemented modern firewall and monitoring',
        implementation: '3-month phased implementation',
        results: '99.9% security uptime achieved',
        metrics: [
          { label: 'Uptime', value: '99.9%' },
          { label: 'Attack Prevention', value: '95%' }
        ],
        technologies: ['Firewall', 'VPN', 'Monitoring'],
        duration: '3 months',
        teamSize: 5,
        author: 'Security Team',
        category: 'Cybersecurity',
        image: '',
        gallery: [],
        featured: true,
        status: 'published',
        testimonial: {
          quote: 'Excellent service and results',
          author: 'Bank CTO',
          position: 'Chief Technology Officer'
        },
        createdAt: '2024-01-20T14:45:00Z',
        updatedAt: '2024-01-21T09:15:00Z',
        publishedAt: '2024-01-20T14:45:00Z'
      }
    ];
  }
}

export const db = new Database();