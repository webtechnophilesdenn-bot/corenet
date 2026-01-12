// src/app/blog/page.tsx

 'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BlogPage = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Categories will be computed from fetched blogs
  const categories = ['All', ...Array.from(new Set(blogs.map(b => b.category || 'Uncategorized')))].slice(0, 20);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/blogs?published=true');
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data.map((b, i) => ({
            id: b.id,
            title: b.title,
            excerpt: b.excerpt || (b.content ? b.content.slice(0, 150) + '...' : ''),
            category: b.tags && b.tags.length ? b.tags[0] : 'Uncategorized',
            date: new Date(b.created_at).toLocaleDateString(),
            readTime: '5 min read',
            image: b.featured_image || '/blog-default.jpg',
            author: b.author || 'CORENET',
            slug: b.slug
          })));
        } else {
          setError('Failed to load blogs');
        }
      } catch (err) {
        console.error(err);
        setError('Error loading blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      const blogCards = document.querySelectorAll('.blog-card');
      blogCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleCards(prev => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [blogs]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading blogs...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section - simple header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Blogs</h1>
            <p className="text-lg text-gray-600">Latest insights from CORENET</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <article
                key={blog.id || index}
                className={`blog-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                    <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{blog.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {String(blog.author).split(' ').map((n:any) => n[0]).join('')}
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{blog.author}</span>
                    </div>

                    <a href={`/blog/${blog.slug}`} className="inline-flex items-center gap-1 text-sm text-blue-600 font-semibold hover:gap-2 transition-all">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
