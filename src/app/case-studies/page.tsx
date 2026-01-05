'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function CaseStudiesPage() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const industries = ['All', 'Finance', 'Healthcare', 'Retail', 'Manufacturing', 'Technology', 'Government'];

  const caseStudies = [
    {
      id: 1,
      title: "Enterprise Network Transformation for Leading Indian Bank",
      client: "Top 5 Private Sector Bank",
      industry: "Finance",
      challenge: "Legacy network infrastructure causing frequent outages, slow transaction processing, and security vulnerabilities across 1,200+ branches",
      solution: "Deployed SD-WAN architecture with redundant connectivity, implemented next-gen firewalls, and established 24/7 NOC monitoring",
      result: "99.99% uptime achieved, 60% reduction in network costs, zero security breaches, 3x faster transaction processing",
      metrics: [
        { label: "Uptime", value: "99.99%", icon: "📈" },
        { label: "Cost Reduction", value: "60%", icon: "💰" },
        { label: "Branch Coverage", value: "1,200+", icon: "🏢" },
        { label: "Processing Speed", value: "3x Faster", icon: "⚡" }
      ],
      technologies: ["SD-WAN", "Fortinet", "Cisco", "MPLS", "Managed Security"],
      image: "/case-study-banking.jpg",
      duration: "6 months",
      testimonial: "CORENET's expertise transformed our network infrastructure. We've seen remarkable improvements in reliability and cost savings.",
      testimonialAuthor: "CTO, Leading Private Bank"
    },
    {
      id: 2,
      title: "Hospital Network Security & HIPAA Compliance Solution",
      client: "Multi-Specialty Hospital Chain (15 Locations)",
      industry: "Healthcare",
      challenge: "Non-compliant legacy systems, data breaches concerns, lack of centralized network management, and outdated cybersecurity protocols",
      solution: "Implemented enterprise-grade cybersecurity infrastructure, SIEM deployment, VPN for remote access, and complete HIPAA compliance framework",
      result: "100% HIPAA compliance, zero data breaches, 50% faster patient data access, ISO 27001 certification achieved",
      metrics: [
        { label: "HIPAA Compliance", value: "100%", icon: "✅" },
        { label: "Data Breaches", value: "Zero", icon: "🔒" },
        { label: "Hospital Locations", value: "15", icon: "🏥" },
        { label: "Patient Data Access", value: "50% Faster", icon: "⚡" }
      ],
      technologies: ["Palo Alto", "Splunk SIEM", "VPN", "Network Segmentation", "IPS/IDS"],
      image: "/case-study-healthcare.jpg",
      duration: "8 months",
      testimonial: "CORENET not only secured our network but also ensured we met all regulatory requirements. Outstanding service!",
      testimonialAuthor: "IT Director, Hospital Network"
    },
    {
      id: 3,
      title: "E-commerce Platform Network Scaling & Performance Optimization",
      client: "National Retail Chain with 200+ Stores",
      industry: "Retail",
      challenge: "Network unable to handle peak traffic during sales events, slow checkout processes, frequent downtime costing millions in lost revenue",
      solution: "Deployed load-balanced infrastructure, CDN integration, upgraded to high-capacity leased lines, implemented DDoS protection",
      result: "99.9% uptime during peak sales, 5x traffic handling capacity, 70% faster page loads, zero downtime during festive season",
      metrics: [
        { label: "Uptime", value: "99.9%", icon: "📊" },
        { label: "Traffic Capacity", value: "5x", icon: "🚀" },
        { label: "Page Speed", value: "70% Faster", icon: "⚡" },
        { label: "Store Network", value: "200+", icon: "🛒" }
      ],
      technologies: ["Load Balancers", "CDN", "DDoS Protection", "Fiber Leased Line", "Cloud Integration"],
      image: "/case-study-retail.jpg",
      duration: "4 months",
      testimonial: "Our network handled Black Friday traffic flawlessly for the first time in years. CORENET delivered beyond expectations.",
      testimonialAuthor: "VP Technology, Retail Chain"
    },
    {
      id: 4,
      title: "Manufacturing Plant Network & IoT Infrastructure Deployment",
      client: "Automotive Parts Manufacturer",
      industry: "Manufacturing",
      challenge: "Disconnected factory systems, no real-time production monitoring, outdated network unable to support IoT devices and automation",
      solution: "Built industrial-grade network infrastructure, deployed IoT sensors, implemented real-time monitoring dashboards, secured OT networks",
      result: "30% increase in production efficiency, 24/7 real-time monitoring, 40% reduction in downtime, predictive maintenance enabled",
      metrics: [
        { label: "Efficiency Gain", value: "30%", icon: "📈" },
        { label: "Downtime Reduction", value: "40%", icon: "🔧" },
        { label: "IoT Devices", value: "500+", icon: "📡" },
        { label: "Monitoring", value: "24/7", icon: "👁️" }
      ],
      technologies: ["Industrial Ethernet", "IoT Gateway", "OT Security", "SCADA Integration", "Edge Computing"],
      image: "/case-study-manufacturing.jpg",
      duration: "5 months",
      testimonial: "CORENET's IoT network solution revolutionized our production monitoring. We now prevent issues before they occur.",
      testimonialAuthor: "Plant Manager, Manufacturing Facility"
    },
    {
      id: 5,
      title: "Cloud Data Center Migration for Technology Company",
      client: "SaaS Platform Provider",
      industry: "Technology",
      challenge: "High on-premise data center costs, scaling limitations, need for multi-region redundancy and disaster recovery capabilities",
      solution: "Executed seamless migration to hybrid cloud architecture, implemented multi-region failover, established secure connectivity mesh",
      result: "45% infrastructure cost savings, 99.95% service availability, zero migration downtime, disaster recovery time reduced to 15 minutes",
      metrics: [
        { label: "Cost Savings", value: "45%", icon: "💵" },
        { label: "Availability", value: "99.95%", icon: "✅" },
        { label: "Migration Downtime", value: "Zero", icon: "🎯" },
        { label: "Recovery Time", value: "15 Min", icon: "⏱️" }
      ],
      technologies: ["AWS", "Azure", "Hybrid Cloud", "Direct Connect", "Cloud Security"],
      image: "/case-study-tech.jpg",
      duration: "7 months",
      testimonial: "CORENET managed our complex cloud migration with zero downtime. Their expertise saved us millions in infrastructure costs.",
      testimonialAuthor: "CTO, SaaS Company"
    },
    {
      id: 6,
      title: "Smart City Network Infrastructure for Municipal Corporation",
      client: "Tier-1 City Municipal Corporation",
      industry: "Government",
      challenge: "No centralized network for city services, multiple disconnected systems, need for smart city IoT infrastructure",
      solution: "Deployed citywide fiber network, integrated traffic management, surveillance, and public WiFi, established centralized command center",
      result: "Complete city-wide connectivity, 1000+ cameras integrated, 300+ WiFi hotspots, improved emergency response by 50%",
      metrics: [
        { label: "Network Coverage", value: "Citywide", icon: "🌆" },
        { label: "Cameras", value: "1,000+", icon: "📹" },
        { label: "WiFi Hotspots", value: "300+", icon: "📶" },
        { label: "Response Time", value: "50% Better", icon: "🚨" }
      ],
      technologies: ["Fiber Network", "IoT Platform", "Video Analytics", "Smart Sensors", "Network Management"],
      image: "/case-study-government.jpg",
      duration: "12 months",
      testimonial: "CORENET built the backbone of our smart city initiative. The network infrastructure is world-class.",
      testimonialAuthor: "Municipal Commissioner"
    },
    {
      id: 7,
      title: "Enterprise SD-WAN Deployment for Pharmaceutical Company",
      client: "Leading Pharmaceutical Manufacturer",
      industry: "Healthcare",
      challenge: "High MPLS costs, poor connectivity at remote sites, inability to support cloud applications effectively",
      solution: "Implemented SD-WAN across 50+ locations, integrated with cloud services, established centralized management",
      result: "55% WAN cost reduction, 4x bandwidth increase, 99.8% application availability",
      metrics: [
        { label: "Cost Reduction", value: "55%", icon: "💰" },
        { label: "Bandwidth", value: "4x", icon: "🚀" },
        { label: "Locations", value: "50+", icon: "📍" },
        { label: "Availability", value: "99.8%", icon: "✅" }
      ],
      technologies: ["SD-WAN", "Cloud Integration", "VPN", "Application Optimization", "Network Analytics"],
      image: "/case-study-pharma.jpg",
      duration: "5 months",
      testimonial: "The SD-WAN deployment transformed our network performance while cutting costs significantly.",
      testimonialAuthor: "IT Manager, Pharmaceutical Company"
    },
    {
      id: 8,
      title: "Data Center Consolidation for Insurance Provider",
      client: "National Insurance Company",
      industry: "Finance",
      challenge: "Multiple aging data centers, high operational costs, compliance risks, need for disaster recovery",
      solution: "Consolidated to two tier-3 data centers, implemented active-active architecture, established robust DR capabilities",
      result: "65% reduction in data center costs, 99.99% uptime, RTO of 2 hours, complete regulatory compliance",
      metrics: [
        { label: "Cost Savings", value: "65%", icon: "💵" },
        { label: "Uptime", value: "99.99%", icon: "📈" },
        { label: "RTO", value: "2 Hours", icon: "⏱️" },
        { label: "Compliance", value: "100%", icon: "✅" }
      ],
      technologies: ["Data Center Infrastructure", "Disaster Recovery", "Virtualization", "Storage", "Network Security"],
      image: "/case-study-insurance.jpg",
      duration: "10 months",
      testimonial: "CORENET's data center consolidation project was executed flawlessly. We now have a resilient, cost-effective infrastructure.",
      testimonialAuthor: "Head of IT, Insurance Provider"
    },
    {
      id: 9,
      title: "Secure Remote Access Solution for Educational Institution",
      client: "Multi-Campus University",
      industry: "Government",
      challenge: "Need for secure remote learning infrastructure, support for 10,000+ concurrent users, limited IT budget",
      solution: "Deployed VPN infrastructure, implemented secure WiFi across campuses, established cloud-based learning management",
      result: "10,000+ simultaneous connections, zero security incidents, 95% user satisfaction",
      metrics: [
        { label: "Concurrent Users", value: "10,000+", icon: "👥" },
        { label: "Security Incidents", value: "Zero", icon: "🔒" },
        { label: "User Satisfaction", value: "95%", icon: "⭐" },
        { label: "Campuses", value: "5", icon: "🏫" }
      ],
      technologies: ["VPN", "Secure WiFi", "Cloud Infrastructure", "Identity Management", "Network Security"],
      image: "/case-study-education.jpg",
      duration: "4 months",
      testimonial: "CORENET enabled seamless remote learning for our entire university community during challenging times.",
      testimonialAuthor: "Dean of IT, University"
    },
  ];

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  // Pagination logic
  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
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
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
    setVisibleCards([]);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold uppercase tracking-wider">
              Client Success Stories
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Case Studies
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Real-world examples of how we've helped businesses transform their IT infrastructure 
              and achieve measurable results across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedIndustry === industry
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Results count */}
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-blue-600">{startIndex + 1}-{Math.min(endIndex, filteredCaseStudies.length)}</span> of <span className="font-semibold text-blue-600">{filteredCaseStudies.length}</span> case studies
              </p>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentCaseStudies.map((cs, index) => (
                <article
                  key={cs.id}
                  className={`case-study-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                    visibleCards.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Industry Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                        {cs.industry}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">{cs.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {cs.title}
                    </h3>

                    {/* Client */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="line-clamp-1">{cs.client}</span>
                    </div>

                    {/* Challenge Excerpt */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    {/* Key Metrics - 2 Columns */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {cs.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-lg text-center">
                          <div className="text-xl mb-1">{metric.icon}</div>
                          <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {cs.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {cs.technologies.length > 3 && (
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            +{cs.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/case-studies/${cs.id}`}
                      className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
                    >
                      View Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-6">
                {/* Page Numbers */}
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                        currentPage === page
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Page Info */}
                <p className="text-sm text-gray-600">
                  Page <span className="font-semibold text-blue-600">{currentPage}</span> of <span className="font-semibold text-blue-600">{totalPages}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how CORENET can help you achieve similar success for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl"
              >
                Schedule a Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
