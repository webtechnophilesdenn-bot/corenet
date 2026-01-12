// src/app/blog/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BlogPage = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Featured Hero Blog
  const featuredBlog = {
    id: 1,
    title: "2026 Wrap-Up: What Defined Our Year at CORENET & What's Next?",
    category: "Industry Insights",
    excerpt: "From groundbreaking network innovations to enterprise transformations - explore the milestones that shaped CORENET's journey through 2026 and discover what we have planned for the future.",
    readTime: "6 min read",
    date: "January 5, 2026",
    image: "/blog-hero-featured.jpg",
    slug: "2026-wrap-up-corenet-year-review"
  };

  // Categories
  const categories = ['All', 'Network Security', 'Cloud Infrastructure', 'Cybersecurity', 'Case Studies', 'Company News', 'Industry Insights'];

  // All Blog Posts
  const allBlogs = [
    {
      id: 2,
      title: "Network Security Best Practices for Enterprise IT Infrastructure",
      excerpt: "Discover the top 10 network security strategies that leading enterprises are implementing to protect their critical infrastructure in 2026...",
      category: "Network Security",
      date: "January 3, 2026",
      readTime: "5 min read",
      image: "/blog-network-security.jpg",
      author: "Priya Sharma",
      slug: "network-security-best-practices-2026"
    },
    {
      id: 3,
      title: "How We Achieved 99.9% Uptime SLA for Fortune 500 Clients",
      excerpt: "A deep dive into CORENET's proven methodologies for delivering exceptional network reliability and uptime guarantees...",
      category: "Case Studies",
      date: "December 28, 2025",
      readTime: "7 min read",
      image: "/blog-uptime-sla.jpg",
      author: "Vikram Singh",
      slug: "achieving-99-uptime-sla"
    },
    {
      id: 4,
      title: "CORENET Achieves ISO 27001:2022 & ISO 22301:2019 Certifications",
      excerpt: "Celebrating our commitment to information security excellence and business continuity management with dual ISO certifications...",
      category: "Company News",
      date: "December 20, 2025",
      readTime: "4 min read",
      image: "/blog-iso-certification.jpg",
      author: "Anita Verma",
      slug: "corenet-iso-certifications-2025"
    },
    {
      id: 5,
      title: "Cloud Migration Strategy: A Complete Guide for Enterprises",
      excerpt: "Learn how to plan and execute a seamless cloud migration while maintaining security, performance, and cost efficiency...",
      category: "Cloud Infrastructure",
      date: "December 15, 2025",
      readTime: "8 min read",
      image: "/blog-cloud-migration.jpg",
      author: "Rajesh Kumar",
      slug: "enterprise-cloud-migration-guide"
    },
    {
      id: 6,
      title: "Zero Trust Architecture: The Future of Network Security",
      excerpt: "Why zero trust is becoming the standard approach for securing enterprise networks and how to implement it effectively...",
      category: "Cybersecurity",
      date: "December 10, 2025",
      readTime: "6 min read",
      image: "/blog-zero-trust.jpg",
      author: "Amit Patel",
      slug: "zero-trust-network-security"
    },
    {
      id: 7,
      title: "Data Center Modernization: Trends and Best Practices",
      excerpt: "Explore the latest trends in data center infrastructure, from edge computing to green data centers and automation...",
      category: "Industry Insights",
      date: "December 5, 2025",
      readTime: "7 min read",
      image: "/blog-data-center.jpg",
      author: "Neha Gupta",
      slug: "data-center-modernization-trends"
    },
    {
      id: 8,
      title: "Managed Network Services: ROI and Business Benefits",
      excerpt: "Discover how managed network services can reduce costs by 30% while improving performance and reliability...",
      category: "Case Studies",
      date: "November 28, 2025",
      readTime: "5 min read",
      image: "/blog-managed-services.jpg",
      author: "Sanjay Mehta",
      slug: "managed-network-services-roi"
    },
    {
      id: 9,
      title: "5G Network Infrastructure: Preparing for the Next Generation",
      excerpt: "What businesses need to know about 5G network deployment, benefits, and integration with existing infrastructure...",
      category: "Network Security",
      date: "November 20, 2025",
      readTime: "6 min read",
      image: "/blog-5g-infrastructure.jpg",
      author: "Kavita Reddy",
      slug: "5g-network-infrastructure-guide"
    },
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? allBlogs 
    : allBlogs.filter(blog => blog.category === selectedCategory);

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
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section - Featured Blog */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Blogs</h1>
              <div className="w-24 h-1 bg-blue-400"></div>
            </div>

            {/* Featured Blog Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="aspect-video bg-white">
                  <Image
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                  {featuredBlog.category}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {featuredBlog.title}
                </h2>
                
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-blue-200 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{featuredBlog.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{featuredBlog.readTime}</span>
                  </div>
                </div>

                <a
                  href={`/blog/${featuredBlog.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105"
                >
                  Show Details
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
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

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  className={`blog-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                    visibleCards.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
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

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                      <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {blog.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{blog.author}</span>
                      </div>
                      
                      <a
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-blue-600 font-semibold hover:gap-2 transition-all"
                      >
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

            {/* Load More Button */}
            {filteredBlogs.length > 9 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with CORENET Insights
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest IT infrastructure trends and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
