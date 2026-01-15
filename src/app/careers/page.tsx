"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const departments = [
    "All",
    "Engineering",
    "Sales & Marketing",
    "Operations",
    "Support",
  ];

  const benefits = [
    {
      icon: "🚀",
      title: "Innovation First",
      description:
        "Work with cutting-edge technologies and be part of groundbreaking projects that shape the future.",
    },
    {
      icon: "🤝",
      title: "Collaborative Culture",
      description:
        "Join a team of passionate professionals who value collaboration and continuous learning.",
    },
    {
      icon: "📈",
      title: "Growth Opportunities",
      description:
        "Advance your career with mentorship programs and opportunities for professional development.",
    },
    {
      icon: "💰",
      title: "Competitive Compensation",
      description:
        "Industry-leading salaries, performance bonuses, and comprehensive benefits package.",
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description:
        "Complete health insurance coverage for you and your family, wellness programs, and gym memberships.",
    },
    {
      icon: "🌴",
      title: "Work-Life Balance",
      description:
        "Flexible working hours, remote work options, and generous paid time off.",
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Network Engineer",
      department: "Engineering",
      location: "Pune, India",
      type: "Full-time",
      experience: "5-8 years",
      description:
        "Lead network infrastructure design and implementation for enterprise clients. Expertise in SD-WAN, MPLS, and network security required.",
      skills: ["Cisco", "Fortinet", "SD-WAN", "Network Security", "CCNP"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Engineering",
      location: "Mumbai, India / Remote",
      type: "Full-time",
      experience: "4-6 years",
      description:
        "Implement and manage security solutions including firewalls, SIEM, IDS/IPS. Experience with Palo Alto, Splunk, and penetration testing.",
      skills: [
        "SIEM",
        "Palo Alto",
        "Penetration Testing",
        "Security Compliance",
        "CEH",
      ],
      posted: "5 days ago",
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "6-10 years",
      description:
        "Design and deploy cloud infrastructure solutions on AWS/Azure. Lead cloud migration projects for enterprise clients.",
      skills: ["AWS", "Azure", "Kubernetes", "Terraform", "Cloud Security"],
      posted: "1 week ago",
    },
    {
      id: 4,
      title: "Network Operations Center (NOC) Engineer",
      department: "Operations",
      location: "Pune, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "24/7 network monitoring and incident management. Experience with network monitoring tools and troubleshooting.",
      skills: [
        "Network Monitoring",
        "ITIL",
        "Troubleshooting",
        "SolarWinds",
        "ServiceNow",
      ],
      posted: "3 days ago",
    },
    {
      id: 5,
      title: "Sales Manager - Enterprise IT Solutions",
      department: "Sales & Marketing",
      location: "Delhi NCR, India",
      type: "Full-time",
      experience: "5-8 years",
      description:
        "Drive enterprise sales for IT infrastructure and managed services. Build and maintain relationships with C-level executives.",
      skills: [
        "Enterprise Sales",
        "IT Solutions",
        "Relationship Management",
        "Negotiation",
      ],
      posted: "1 week ago",
    },
    {
      id: 6,
      title: "Technical Support Engineer",
      department: "Support",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Provide technical support to clients for network and infrastructure issues. Strong troubleshooting and communication skills required.",
      skills: [
        "Technical Support",
        "Networking",
        "Customer Service",
        "Troubleshooting",
      ],
      posted: "4 days ago",
    },
    {
      id: 7,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Bangalore, India / Remote",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Automate infrastructure deployment and management. Experience with CI/CD pipelines, Docker, and Kubernetes.",
      skills: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Jenkins"],
      posted: "1 week ago",
    },
    {
      id: 8,
      title: "Data Center Operations Manager",
      department: "Operations",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "7-10 years",
      description:
        "Oversee data center operations ensuring 99.99% uptime. Manage team and coordinate with vendors.",
      skills: [
        "Data Center Management",
        "Team Leadership",
        "DCIM",
        "Operations",
      ],
      posted: "2 weeks ago",
    },
    {
      id: 9,
      title: "Network Security Analyst",
      department: "Engineering",
      location: "Pune, India",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Monitor and respond to security incidents. Conduct vulnerability assessments and security audits.",
      skills: [
        "Security Analysis",
        "SIEM",
        "Incident Response",
        "Vulnerability Assessment",
      ],
      posted: "5 days ago",
    },
    {
      id: 10,
      title: "Pre-Sales Consultant",
      department: "Sales & Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "4-6 years",
      description:
        "Provide technical expertise during sales cycles. Create solution architectures and deliver presentations.",
      skills: [
        "Pre-Sales",
        "Solution Architecture",
        "Presentations",
        "Technical Writing",
      ],
      posted: "1 week ago",
    },
    {
      id: 11,
      title: "IT Project Manager",
      department: "Operations",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "6-9 years",
      description:
        "Lead complex IT infrastructure projects. Manage budgets, timelines, and stakeholder communications.",
      skills: ["Project Management", "PMP", "Agile", "Stakeholder Management"],
      posted: "3 days ago",
    },
    {
      id: 12,
      title: "Junior Network Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "1-2 years",
      description:
        "Assist in network configuration and troubleshooting. Great opportunity for fresh graduates with networking certifications.",
      skills: ["Networking Basics", "CCNA", "Troubleshooting", "Documentation"],
      posted: "2 days ago",
    },
  ];

  const filteredPositions =
    selectedDepartment === "All"
      ? openPositions
      : openPositions.filter((pos) => pos.department === selectedDepartment);

  // Pagination logic
  const totalPages = Math.ceil(filteredPositions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPositions = filteredPositions.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDepartment]);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const cards = document.querySelectorAll(".position-card");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleCards((prev) => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document
      .getElementById("positions")
      ?.scrollIntoView({ behavior: "smooth" });
    setVisibleCards([]);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero_background/career.jpg"
            alt="Careers at Corenet"
            fill
            priority
            className="object-cover"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-[#070A12]/70" />

          {/* Subtle blue gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-blue-900/50" />

          {/* Soft grid texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-blue-600/90 text-white rounded-full text-sm font-semibold uppercase tracking-wider">
              Join Our Team
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build the Future with CORENET
            </h1>

            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6" />

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Working at CORENET means tackling challenges with creativity,
              dedication, and enthusiasm.
            </p>

            <a
              href="#positions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              View Open Positions
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Join CORENET */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Join CORENET?
              </h2>
              <p className="text-xl text-gray-600">
                Discover what makes CORENET an exceptional place to work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Team Members" },
              { value: "15+", label: "Years of Excellence" },
              { value: "50+", label: "Countries Served" },
              { value: "4.8/5", label: "Employee Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-blue-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Find your next career opportunity with CORENET
              </p>

              {/* Department Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      selectedDepartment === dept
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-blue-600">
                  {startIndex + 1}-
                  {Math.min(endIndex, filteredPositions.length)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-blue-600">
                  {filteredPositions.length}
                </span>{" "}
                positions
              </p>
            </div>

            {/* Job Listings */}
            <div className="space-y-6 mb-12">
              {currentPositions.map((position, index) => (
                <article
                  key={position.id}
                  className={`position-card group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-600 hover:shadow-2xl transition-all duration-500 ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <span className="inline-flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                              {position.department}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              {position.location}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {position.type}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                              </svg>
                              {position.experience}
                            </span>
                          </div>
                        </div>
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          {position.posted}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {position.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right CTA */}
                    <div className="lg:text-right">
                      <Link
                        href={`/careers/apply/${position.id}`}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
                      >
                        Apply Now
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                      <p className="text-sm text-gray-500 mt-2">
                        Quick apply in 2 minutes
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-6">
                {/* Page Numbers */}
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Previous
                  </button>

                  {/* First Page */}
                  {currentPage > 2 && (
                    <>
                      <button
                        onClick={() => handlePageChange(1)}
                        className="w-10 h-10 rounded-lg font-semibold transition-all bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
                      >
                        1
                      </button>
                      {currentPage > 3 && (
                        <span className="text-gray-400 px-2">...</span>
                      )}
                    </>
                  )}

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((page) => {
                      return (
                        page === currentPage ||
                        page === currentPage - 1 ||
                        page === currentPage + 1
                      );
                    })
                    .map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                          currentPage === page
                            ? "bg-blue-600 text-white shadow-lg scale-110"
                            : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                  {/* Last Page */}
                  {currentPage < totalPages - 1 && (
                    <>
                      {currentPage < totalPages - 2 && (
                        <span className="text-gray-400 px-2">...</span>
                      )}
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="w-10 h-10 rounded-lg font-semibold transition-all bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
                    }`}
                  >
                    Next
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Page Info */}
                <p className="text-sm text-gray-600">
                  Page{" "}
                  <span className="font-semibold text-blue-600">
                    {currentPage}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-blue-600">
                    {totalPages}
                  </span>
                </p>
              </div>
            )}

            {filteredPositions.length === 0 && (
              <div className="text-center py-16">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No positions found
                </h3>
                <p className="text-gray-600">
                  Try selecting a different department or check back later
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
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Send us your resume and we'll keep you in mind for future
              opportunities
            </p>
            <a
              href="mailto:careers@corenet.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Send Your Resume
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
