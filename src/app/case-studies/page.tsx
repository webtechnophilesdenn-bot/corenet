// src/app/case-studies/page.tsx
'use client';
import { useState, useEffect } from 'react';
import CaseStudyCard from '@/components/CaseStudyCard';
import { db } from '@/lib/db';
import { CaseStudy } from '@/types';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<CaseStudy[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [industries, setIndustries] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    try {
      setLoading(true);
      const publishedCaseStudies = await db.getPublishedCaseStudies();
      setCaseStudies(publishedCaseStudies);
      setFilteredCaseStudies(publishedCaseStudies);
      
      // Extract unique industries and categories
      const uniqueIndustries = Array.from(new Set(publishedCaseStudies.map(cs => cs.industry)));
      const uniqueCategories = Array.from(new Set(publishedCaseStudies.map(cs => cs.category)));
      setIndustries(uniqueIndustries);
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Failed to load case studies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = caseStudies;
    
    if (selectedIndustry !== 'all') {
      filtered = filtered.filter(cs => cs.industry === selectedIndustry);
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cs => cs.category === selectedCategory);
    }
    
    setFilteredCaseStudies(filtered);
  }, [selectedIndustry, selectedCategory, caseStudies]);

  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading case studies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full -ml-32 -mb-32 opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Real-world Success Stories
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Discover how Corenet has transformed businesses across industries with innovative IT solutions and strategic partnerships.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-200">{caseStudies.length} Case Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-gray-200">{industries.length} Industries</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-200">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
                <p className="text-gray-600">Highlighted success stories with exceptional results</p>
              </div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <span>⭐ Top Performers</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.slice(0, 2).map(cs => (
                <CaseStudyCard key={cs.id} caseStudy={cs} featured />
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">Industry</label>
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white appearance-none"
                >
                  <option value="all" className="text-gray-500">All Industries</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry} className="text-gray-900">{industry}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">Solution Category</label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white appearance-none"
                >
                  <option value="all" className="text-gray-500">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category} className="text-gray-900">{category}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{filteredCaseStudies.length}</span> of <span className="font-semibold text-gray-900">{caseStudies.length}</span> case studies match your criteria
              </div>
              {(selectedIndustry !== 'all' || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedIndustry('all');
                    setSelectedCategory('all');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No case studies found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {selectedIndustry !== 'all' || selectedCategory !== 'all'
                ? 'Try adjusting your filters to see more results.'
                : 'No case studies are available at the moment.'}
            </p>
            {(selectedIndustry !== 'all' || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm font-medium shadow-sm"
              >
                Show All Case Studies
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">All Case Studies</h3>
              <p className="text-gray-600 mt-1">Browse our complete collection of client success stories</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.map(caseStudy => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </>
        )}

        {/* Back Link */}
        <div className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-200 font-medium shadow-sm border border-gray-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}