'use client';
import React, { useState, useEffect } from 'react';

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
        { label: "Uptime", value: "99.99%" },
        { label: "Cost Reduction", value: "60%" },
        { label: "Branch Coverage", value: "1,200+" },
        { label: "Processing Speed", value: "3x Faster" }
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
        { label: "HIPAA Compliance", value: "100%" },
        { label: "Data Breaches", value: "Zero" },
        { label: "Hospital Locations", value: "15" },
        { label: "Patient Data Access", value: "50% Faster" }
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
        { label: "Uptime", value: "99.9%" },
        { label: "Traffic Capacity", value: "5x" },
        { label: "Page Speed", value: "70% Faster" },
        { label: "Store Network", value: "200+" }
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
        { label: "Efficiency Gain", value: "30%" },
        { label: "Downtime Reduction", value: "40%" },
        { label: "IoT Devices", value: "500+" },
        { label: "Monitoring", value: "24/7" }
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
        { label: "Cost Savings", value: "45%" },
        { label: "Availability", value: "99.95%" },
        { label: "Migration Downtime", value: "Zero" },
        { label: "Recovery Time", value: "15 Min" }
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
        { label: "Network Coverage", value: "Citywide" },
        { label: "Cameras", value: "1,000+" },
        { label: "WiFi Hotspots", value: "300+" },
        { label: "Response Time", value: "50% Better" }
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
        { label: "Cost Reduction", value: "55%" },
        { label: "Bandwidth", value: "4x" },
        { label: "Locations", value: "50+" },
        { label: "Availability", value: "99.8%" }
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
        { label: "Cost Savings", value: "65%" },
        { label: "Uptime", value: "99.99%" },
        { label: "RTO", value: "2 Hours" },
        { label: "Compliance", value: "100%" }
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
        { label: "Concurrent Users", value: "10,000+" },
        { label: "Security Incidents", value: "Zero" },
        { label: "User Satisfaction", value: "95%" },
        { label: "Campuses", value: "5" }
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

  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);

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

      {/* Case Studies Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-8 text-slate-600 font-medium">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredCaseStudies.length)} of {filteredCaseStudies.length} case studies
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentCaseStudies.map((cs, index) => (
            <div
              key={cs.id}
              className={`case-study-card bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-10">
                    {cs.industry.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-slate-900 px-4 py-1.5 rounded-full text-sm font-semibold">
                    {cs.industry}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    {cs.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                  {cs.title}
                </h3>

                <div className="text-sm text-slate-600 font-medium mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {cs.client}
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed">
                  {cs.challenge}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {cs.metrics.slice(0, 2).map((metric, idx) => (
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

                {/* Technologies */}
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

                {/* CTA Button */}
                <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  View Detailed Case Study
                </button>
              </div>
            </div>
          ))}
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
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Schedule a Consultation
            </button>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}