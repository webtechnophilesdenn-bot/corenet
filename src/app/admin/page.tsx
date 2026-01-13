// src/app/admin/page.tsx
'use client';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/db';
import { Blog, CaseStudy, FormData, Metric } from '@/types';

type TabType = 'blogs' | 'cases';
type FilterType = 'all' | 'published' | 'draft' | 'featured';

export default function AdminPanel() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('blogs');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<Blog | CaseStudy | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<FormData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: '',
    authorRole: '',
    category: '',
    tags: '',
    image: '',
    readTime: 0,
    featured: false,
    status: 'draft',
    client: '',
    industry: '',
    challenge: '',
    solution: '',
    implementation: '',
    results: '',
    metrics: '',
    technologies: '',
    duration: '',
    teamSize: 0,
    testimonialQuote: '',
    testimonialAuthor: '',
    testimonialPosition: ''
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
      return;
    }
    loadData();
  }, []);

  const loadData = async (): Promise<void> => {
    try {
      const [blogsData, caseStudiesData] = await Promise.all([
        db.getBlogs(),
        db.getCaseStudies()
      ]);
      setBlogs(blogsData);
      setCaseStudies(caseStudiesData);
    } catch (error) {
      console.error('Failed to load data:', error);
      alert('Failed to load data. Check console.');
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem('isAdminLoggedIn');
    router.push('/admin/login');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else if (name === 'title') {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      setFormData({ ...formData, title: value, slug });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = (): boolean => {
    if (!formData.title.trim()) {
      alert('Title is required');
      return false;
    }
    
    if (!formData.author.trim()) {
      alert('Author is required');
      return false;
    }
    
    if (!formData.category) {
      alert('Category is required');
      return false;
    }
    
    if (activeTab === 'blogs') {
      if (!formData.content.trim()) {
        alert('Content is required for blogs');
        return false;
      }
    } else {
      if (!formData.client?.trim()) {
        alert('Client is required for case studies');
        return false;
      }
      if (!formData.industry?.trim()) {
        alert('Industry is required for case studies');
        return false;
      }
      if (!formData.challenge?.trim()) {
        alert('Challenge is required for case studies');
        return false;
      }
      if (!formData.solution?.trim()) {
        alert('Solution is required for case studies');
        return false;
      }
      if (!formData.results?.trim()) {
        alert('Results are required for case studies');
        return false;
      }
    }
    
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (activeTab === 'blogs') {
        // Prepare blog data
        const blogData = {
          title: formData.title,
          slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          excerpt: formData.excerpt || '',
          content: formData.content,
          author: formData.author,
          authorRole: formData.authorRole || '',
          category: formData.category,
          tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
          image: formData.image || '',
          readTime: Number(formData.readTime) || 0,
          featured: Boolean(formData.featured),
          status: formData.status || 'draft'
        };

        console.log('Saving blog:', blogData);

        if (editingItem) {
          // Update existing blog
          await db.updateBlog(editingItem.id, blogData);
          alert('✅ Blog updated successfully!');
        } else {
          // Create new blog
          await db.addBlog(blogData);
          alert('✅ Blog created successfully!');
        }
        
      } else {
        // Prepare case study data
        let metrics: Metric[] = [];
        if (formData.metrics) {
          try {
            metrics = JSON.parse(formData.metrics);
            if (!Array.isArray(metrics) || !metrics.every(m => 
              typeof m === 'object' && m !== null && 
              typeof m.label === 'string' && typeof m.value === 'string'
            )) {
              throw new Error('Invalid metrics format');
            }
          } catch (parseError) {
            alert('Metrics must be valid JSON format. Example: [{"label": "Cost Reduction", "value": "40%"}]');
            setIsSubmitting(false);
            return;
          }
        }

        const caseStudyData = {
          title: formData.title,
          slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          client: formData.client || '',
          industry: formData.industry || '',
          challenge: formData.challenge || '',
          solution: formData.solution || '',
          implementation: formData.implementation || '',
          results: formData.results || '',
          metrics,
          technologies: formData.technologies ? formData.technologies.split(',').map(t => t.trim()).filter(Boolean) : [],
          duration: formData.duration || '',
          teamSize: Number(formData.teamSize) || 0,
          author: formData.author,
          category: formData.category,
          image: formData.image || '',
          featured: Boolean(formData.featured),
          status: formData.status || 'draft',
          testimonial: formData.testimonialQuote ? {
            quote: formData.testimonialQuote,
            author: formData.testimonialAuthor || '',
            position: formData.testimonialPosition || ''
          } : undefined
        };

        console.log('Saving case study:', caseStudyData);

        if (editingItem) {
          // Update existing case study
          await db.updateCaseStudy(editingItem.id, caseStudyData);
          alert('✅ Case study updated successfully!');
        } else {
          // Create new case study
          await db.addCaseStudy(caseStudyData);
          alert('✅ Case study created successfully!');
        }
      }

      // Reset form and reload data
      resetForm();
      loadData();
      
    } catch (error: any) {
      console.error('Error saving:', error);
      alert(`❌ Error saving: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (item: Blog | CaseStudy): void => {
    setEditingItem(item);
    
    if (activeTab === 'blogs') {
      const blog = item as Blog;
      setFormData({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        author: blog.author,
        authorRole: blog.authorRole,
        category: blog.category,
        tags: blog.tags?.join(', ') || '',
        image: blog.image || '',
        readTime: blog.readTime,
        featured: blog.featured,
        status: blog.status,
        // Reset case study fields
        client: '',
        industry: '',
        challenge: '',
        solution: '',
        implementation: '',
        results: '',
        metrics: '',
        technologies: '',
        duration: '',
        teamSize: 0,
        testimonialQuote: '',
        testimonialAuthor: '',
        testimonialPosition: ''
      });
    } else {
      const caseStudy = item as CaseStudy;
      setFormData({
        title: caseStudy.title,
        slug: caseStudy.slug,
        excerpt: '',
        content: '',
        author: caseStudy.author,
        authorRole: '',
        category: caseStudy.category,
        tags: '',
        image: caseStudy.image || '',
        readTime: 0,
        featured: caseStudy.featured,
        status: caseStudy.status,
        client: caseStudy.client,
        industry: caseStudy.industry,
        challenge: caseStudy.challenge,
        solution: caseStudy.solution,
        implementation: caseStudy.implementation || '',
        results: caseStudy.results,
        metrics: JSON.stringify(caseStudy.metrics || []),
        technologies: caseStudy.technologies?.join(', ') || '',
        duration: caseStudy.duration || '',
        teamSize: caseStudy.teamSize,
        testimonialQuote: caseStudy.testimonial?.quote || '',
        testimonialAuthor: caseStudy.testimonial?.author || '',
        testimonialPosition: caseStudy.testimonial?.position || ''
      });
    }
    setShowForm(true);
  };

  const handleDelete = async (id: number): Promise<void> => {
    if (confirm('Are you sure you want to delete this item?')) {
      try {
        if (activeTab === 'blogs') {
          await db.deleteBlog(id);
        } else {
          await db.deleteCaseStudy(id);
        }
        loadData();
        alert('✅ Item deleted successfully!');
      } catch (error: any) {
        console.error('Error deleting:', error);
        alert(`❌ Error deleting: ${error.message || 'Unknown error'}`);
      }
    }
  };

  const resetForm = (): void => {
    setFormData({ 
      title: '', 
      slug: '',
      excerpt: '', 
      content: '', 
      author: '', 
      authorRole: '',
      category: '', 
      tags: '',
      image: '',
      readTime: 0,
      featured: false,
      status: 'draft',
      client: '',
      industry: '',
      challenge: '',
      solution: '',
      implementation: '',
      results: '',
      metrics: '',
      technologies: '',
      duration: '',
      teamSize: 0,
      testimonialQuote: '',
      testimonialAuthor: '',
      testimonialPosition: ''
    });
    setEditingItem(null);
    setShowForm(false);
  };

  const toggleForm = (): void => {
    setShowForm(!showForm);
    if (showForm) {
      resetForm();
    }
  };

  const getFilteredItems = (): (Blog | CaseStudy)[] => {
    let items: (Blog | CaseStudy)[] = activeTab === 'blogs' ? blogs : caseStudies;
    
    if (filterType === 'published') {
      items = items.filter(item => item.status === 'published');
    } else if (filterType === 'draft') {
      items = items.filter(item => item.status === 'draft');
    } else if (filterType === 'featured') {
      items = items.filter(item => item.featured);
    }

    if (searchQuery) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return items;
  };

  const items = getFilteredItems();

  // Stats calculation
  const stats = {
    total: activeTab === 'blogs' ? blogs.length : caseStudies.length,
    published: activeTab === 'blogs' 
      ? blogs.filter(b => b.status === 'published').length
      : caseStudies.filter(cs => cs.status === 'published').length,
    draft: activeTab === 'blogs'
      ? blogs.filter(b => b.status === 'draft').length
      : caseStudies.filter(cs => cs.status === 'draft').length,
    featured: activeTab === 'blogs'
      ? blogs.filter(b => b.featured).length
      : caseStudies.filter(cs => cs.featured).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
      {/* Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Corenet Admin</h1>
            <p className="text-sm text-gray-600 mt-0.5">Content Management System</p>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-gradient-to-r from-rose-600 to-red-600 text-white px-5 py-2.5 rounded-lg hover:from-rose-700 hover:to-red-700 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="text-sm text-gray-500 mb-1 font-medium">Total {activeTab === 'blogs' ? 'Blogs' : 'Case Studies'}</div>
            <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2"></div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="text-sm text-gray-500 mb-1 font-medium">Published</div>
            <div className="text-3xl font-bold text-emerald-700">{stats.published}</div>
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mt-2"></div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="text-sm text-gray-500 mb-1 font-medium">Drafts</div>
            <div className="text-3xl font-bold text-amber-700">{stats.draft}</div>
            <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-2"></div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="text-sm text-gray-500 mb-1 font-medium">Featured</div>
            <div className="text-3xl font-bold text-violet-700">{stats.featured}</div>
            <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full mt-2"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white p-1 rounded-xl shadow-sm border border-gray-100 w-fit">
          <button
            onClick={() => { 
              setActiveTab('blogs'); 
              setShowForm(false);
              setFilterType('all');
              setSearchQuery('');
              resetForm();
            }}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'blogs' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-sm' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Blogs ({blogs.length})
          </button>
          <button
            onClick={() => { 
              setActiveTab('cases'); 
              setShowForm(false);
              setFilterType('all');
              setSearchQuery('');
              resetForm();
            }}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'cases' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-sm' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Case Studies ({caseStudies.length})
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              {(['all', 'published', 'draft', 'featured'] as FilterType[]).map(filter => (
                <button
                  key={filter}
                  onClick={() => setFilterType(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    filterType === filter
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200 shadow-inner'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
            <div className="relative w-72">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by title, category, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={toggleForm}
          className={`mb-6 px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-sm border flex items-center gap-2 ${
            showForm 
              ? 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border-gray-300' 
              : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-emerald-700'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          {showForm ? 'Cancel' : `Add New ${activeTab === 'blogs' ? 'Blog' : 'Case Study'}`}
        </button>

        {/* Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <h2 className="text-xl font-bold mb-6 text-gray-900 pb-4 border-b border-gray-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {editingItem ? 'Edit' : 'Create'} {activeTab === 'blogs' ? 'Blog' : 'Case Study'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-900">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                    required
                    placeholder="Enter a compelling title"
                  />
                </div>

                {/* Slug */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-900">Slug (URL-friendly)</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-700 bg-gray-50 placeholder-gray-400"
                    placeholder="auto-generated-from-title"
                  />
                </div>

                {activeTab === 'blogs' ? (
                  <>
                    {/* Excerpt */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Excerpt (Preview Text)</label>
                      <textarea
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
                        placeholder="Brief summary for preview cards"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Content *</label>
                      <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-48 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
                        required
                        placeholder="Write your blog content here..."
                      />
                    </div>

                    {/* Author & Author Role */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Author Name *</label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Author Role</label>
                      <input
                        type="text"
                        name="authorRole"
                        value={formData.authorRole}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        placeholder="Technical Writer, IT Specialist, etc."
                      />
                    </div>

                    {/* Category & Tags */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white"
                        required
                      >
                        <option value="" className="text-gray-400">Select Category</option>
                        <option value="Cybersecurity" className="text-gray-900">Cybersecurity</option>
                        <option value="Data Center" className="text-gray-900">Data Center</option>
                        <option value="Managed Networks" className="text-gray-900">Managed Networks</option>
                        <option value="Internet Leased Line" className="text-gray-900">Internet Leased Line</option>
                        <option value="IT Solutions" className="text-gray-900">IT Solutions</option>
                        <option value="Technology Trends" className="text-gray-900">Technology Trends</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Tags (comma-separated)</label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        placeholder="security, cloud, networking"
                      />
                    </div>

                    {/* Read Time */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Read Time (minutes)</label>
                      <input
                        type="number"
                        name="readTime"
                        value={formData.readTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        placeholder="5"
                        min="1"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Case Study Fields */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Client Name *</label>
                      <input
                        type="text"
                        name="client"
                        value={formData.client}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        required
                        placeholder="ABC Corporation"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Industry *</label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        required
                        placeholder="Financial Services, Healthcare, etc."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Challenge *</label>
                      <textarea
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
                        required
                        placeholder="Describe the client's challenge..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Solution *</label>
                      <textarea
                        name="solution"
                        value={formData.solution}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
                        required
                        placeholder="Explain the solution provided..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Implementation</label>
                      <textarea
                        name="implementation"
                        value={formData.implementation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
                        placeholder="How was it implemented?"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Results *</label>
                      <textarea
                        name="results"
                        value={formData.results}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
                        required
                        placeholder="Measurable outcomes and impact..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Metrics (JSON format)</label>
                      <textarea
                        name="metrics"
                        value={formData.metrics}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors font-mono text-sm text-gray-900 placeholder-gray-400 resize-none"
                        placeholder='[{"label": "Cost Reduction", "value": "40%"}, {"label": "Uptime", "value": "99.9%"}]'
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Technologies (comma-separated)</label>
                      <input
                        type="text"
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        placeholder="AWS, Cisco, Palo Alto, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Duration</label>
                      <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        placeholder="3 months"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Team Size</label>
                      <input
                        type="number"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        placeholder="5"
                        min="1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Author *</label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        required
                        placeholder="Project Manager Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white"
                        required
                      >
                        <option value="" className="text-gray-400">Select Category</option>
                        <option value="Cybersecurity" className="text-gray-900">Cybersecurity</option>
                        <option value="Data Center" className="text-gray-900">Data Center</option>
                        <option value="Managed Networks" className="text-gray-900">Managed Networks</option>
                        <option value="Internet Leased Line" className="text-gray-900">Internet Leased Line</option>
                        <option value="Digital Transformation" className="text-gray-900">Digital Transformation</option>
                      </select>
                    </div>

                    {/* Testimonial Section */}
                    <div className="md:col-span-2 border-t border-gray-200 pt-6 mt-4">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        Client Testimonial (Optional)
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-gray-900">Quote</label>
                          <textarea
                            name="testimonialQuote"
                            value={formData.testimonialQuote}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
                            placeholder="Client's testimonial..."
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-900">Testimonial Author</label>
                            <input
                              type="text"
                              name="testimonialAuthor"
                              value={formData.testimonialAuthor}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                              placeholder="Client Name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-900">Position</label>
                            <input
                              type="text"
                              name="testimonialPosition"
                              value={formData.testimonialPosition}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                              placeholder="CTO, ABC Corp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Image Upload */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-900">Featured Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-600"
                    />
                    <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 5MB</p>
                  </div>
                  {formData.image && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">Preview:</p>
                      <img 
                        src={formData.image} 
                        alt="Preview" 
                        className="h-48 w-full object-cover rounded-lg shadow-sm border border-gray-200"
                      />
                    </div>
                  )}
                </div>

                {/* Status & Featured */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white"
                  >
                    <option value="draft" className="text-gray-900">Draft</option>
                    <option value="published" className="text-gray-900">Published</option>
                  </select>
                </div>

                <div className="flex items-center mt-8">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`w-10 h-6 rounded-full transition-colors ${formData.featured ? 'bg-gradient-to-r from-violet-600 to-purple-600' : 'bg-gray-300'}`}></div>
                      <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform bg-white ${formData.featured ? 'transform translate-x-4' : ''}`}></div>
                    </div>
                    <span className="ml-3 text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">Mark as Featured</span>
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md font-semibold text-sm flex items-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isSubmitting ? 'Saving...' : editingItem ? 'Update' : 'Create'}
                </button>
                <button 
                  type="button"
                  onClick={resetForm}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-200 shadow-sm font-semibold text-sm flex items-center gap-2 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Items List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-900 pb-4 border-b border-gray-200 flex items-center gap-2">
            {activeTab === 'blogs' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {activeTab === 'blogs' ? 'Blogs' : 'Case Studies'} 
            <span className="text-sm font-normal text-gray-500 ml-3">({items.length} items)</span>
          </h2>
          
          {items.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-400 text-lg mb-2">No items found.</p>
              <p className="text-gray-400 text-sm">Try adjusting your filters or create a new item.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4 flex gap-4 hover:shadow-sm transition-shadow duration-200 hover:border-blue-100">
                  {item.image && (
                    <div className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-28 h-28 object-cover rounded-lg shadow-sm border border-gray-100"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="min-w-0">
                        <h3 className="font-bold text-gray-900 text-lg truncate">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-1 truncate">
                          {activeTab === 'blogs' ? (
                            <span>{(item as Blog).excerpt || (item as Blog).content.substring(0, 120)}...</span>
                          ) : (
                            <span>
                              <span className="font-medium text-gray-600">Client:</span> {(item as CaseStudy).client} • 
                              <span className="font-medium text-gray-600 ml-2">Industry:</span> {(item as CaseStudy).industry}
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-4 flex-shrink-0">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'published' 
                            ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 border border-emerald-200' 
                            : 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border border-amber-200'
                        }`}>
                          {item.status}
                        </span>
                        {item.featured && (
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-50 to-purple-100 text-violet-700 border border-violet-200">
                            ⭐ Featured
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 text-xs text-gray-600 mt-3">
                      <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {item.author}
                      </span>
                      <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(item.createdAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric' 
                        })}
                      </span>
                      {activeTab === 'blogs' && (
                        <>
                          <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-blue-700">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {(item as Blog).readTime} min read
                          </span>
                          <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {(item as Blog).views} views
                          </span>
                        </>
                      )}
                    </div>
                    
                    {activeTab === 'blogs' && (item as Blog).tags && (item as Blog).tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {(item as Blog).tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium border border-blue-100">
                            #{tag}
                          </span>
                        ))}
                        {(item as Blog).tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded text-xs font-medium border border-gray-100">
                            +{(item as Blog).tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {activeTab === 'cases' && (item as CaseStudy).technologies && (item as CaseStudy).technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {(item as CaseStudy).technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200">
                            {tech}
                          </span>
                        ))}
                        {(item as CaseStudy).technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded text-xs font-medium border border-gray-100">
                            +{(item as CaseStudy).technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 px-4 py-2 rounded-lg text-sm hover:from-amber-100 hover:to-amber-200 transition-colors font-medium shadow-sm border border-amber-200 flex items-center gap-1.5 min-w-[80px] justify-center"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-gradient-to-r from-red-50 to-rose-100 text-red-700 px-4 py-2 rounded-lg text-sm hover:from-red-100 hover:to-rose-200 transition-colors font-medium shadow-sm border border-red-200 flex items-center gap-1.5 min-w-[80px] justify-center"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}