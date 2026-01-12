'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  featured_image: string;
  project_duration: string;
  testimonial: string;
  testimonial_author: string;
  created_at: string;
}

interface Metrics {
  label: string;
  value: string;
}

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Extract unique industries from case studies
  const industries = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.industry)))];

  const filteredCaseStudies = selectedIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/case-studies?published=true');
        const data = await response.json();
        
        if (data.success) {
          setCaseStudies(data.data);
        } else {
          setError('Failed to load case studies');
        }
      } catch (error) {
        console.error(error);
        setError('Error loading case studies');
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedIndustry]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.case-study-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleCards(prev => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, currentCaseStudies]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
    setVisibleCards([]);
  };

  // Helper function to extract key metrics from results
  const extractMetrics = (results: string): Metrics[] => {
    const metrics: Metrics[] = [];
    
    // Look for percentage improvements
    const percentageMatches = results.match(/(\d+(?:\.\d+)?)%/g);
    if (percentageMatches) {
      percentageMatches.slice(0, 2).forEach((match, index) => {
        metrics.push({
          label: index === 0 ? 'Improvement' : 'Cost Reduction',
          value: match
        });
      });
    }
    
    // Look for time improvements
    const timeMatches = results.match(/(\d+(?:\.\d+)?)x.*(?:faster|speed)/i);
    if (timeMatches) {
      metrics.push({
        label: 'Performance Gain',
        value: timeMatches[1] + 'x'
      });
    }
    
    // If not enough metrics found, add placeholders
    while (metrics.length < 2) {
      metrics.push({
        label: 'Success Rate',
        value: '99%'
      });
    }
    
    return metrics.slice(0, 2);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading case studies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm font-semibold text-blue-300 mb-3 tracking-wide uppercase">
            Client Success Stories
          </div>
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Real-world examples of how we've helped businesses transform their IT infrastructure and achieve measurable results across industries.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm">
            <div className="bg-blue-800/50 px-4 py-2 rounded-full">
              <span className="font-semibold">{caseStudies.length}</span> Published Case Studies
            </div>
            <div className="bg-green-800/50 px-4 py-2 rounded-full">
              <span className="font-semibold">{industries.length - 1}</span> Industries Served
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
            <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
            <div className="text-slate-600 font-medium">Projects Delivered</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600">
            <div className="text-4xl font-bold text-slate-900 mb-2">99.9%</div>
            <div className="text-slate-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600">
            <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
            <div className="text-slate-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-600">
            <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-slate-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      {industries.length > 1 && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                  selectedIndustry === industry
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Case Studies Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-8 text-slate-600 font-medium">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredCaseStudies.length)} of {filteredCaseStudies.length} case studies
        </div>

        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No case studies found</h3>
            <p className="text-gray-600 mb-6">No published case studies available for the selected industry.</p>
            <button
              onClick={() => setSelectedIndustry('All')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentCaseStudies.map((cs, index) => {
                const metrics = extractMetrics(cs.results);
                
                return (
                  <div
                    key={cs.id}
                    className={`case-study-card bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500 ${
                      visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900">
                      {cs.featured_image ? (
                        <img 
                          src={cs.featured_image} 
                          alt={cs.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-6xl font-bold opacity-10">
                            {cs.industry.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white text-slate-900 px-4 py-1.5 rounded-full text-sm font-semibold">
                          {cs.industry}
                        </span>
                      </div>
                      {cs.project_duration && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                            {cs.project_duration}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                        {cs.title}
                      </h3>

                      <div className="text-sm text-slate-600 font-medium mb-4 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {cs.client_name}
                      </div>

                      <p className="text-slate-700 mb-6 leading-relaxed line-clamp-3">
                        {cs.challenge}
                      </p>

                      {/* Key Metrics */}
                      {metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {metrics.map((metric, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                              <div className="text-2xl font-bold text-blue-600 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-sm text-slate-600 font-medium">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technologies */}
                      {cs.technologies && cs.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {cs.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-200">
                              {tech}
                            </span>
                          ))}
                          {cs.technologies.length > 3 && (
                            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium border border-slate-300">
                              +{cs.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* CTA Button */}
                      <Link
                        href={`/case-studies/${cs.slug}`}
                        className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                      >
                        View Detailed Case Study
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-5 py-2.5 rounded-lg font-semibold transition-all ${
                      currentPage === 1
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md'
                    }`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-11 h-11 rounded-lg font-semibold transition-all ${
                        currentPage === page
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-5 py-2.5 rounded-lg font-semibold transition-all ${
                      currentPage === totalPages
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md'
                    }`}
                  >
                    Next
                  </button>
                </div>

                <div className="text-center text-slate-600 font-medium">
                  Page {currentPage} of {totalPages}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how CORENET can help you achieve similar success for your organization
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}