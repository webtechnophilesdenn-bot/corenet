'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const CaseStudies = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const caseStudies = [
    {
      title: "Financial Services Transformation",
      client: "Leading Bank",
      result: "40% cost reduction, improved security",
      metric: "40%",
      metricLabel: "Cost Reduction",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-700",
      tags: ["Cloud Migration", "Security", "FinTech"]
    },
    {
      title: "Healthcare Cloud Migration",
      client: "Hospital Network",
      result: "99.99% uptime, HIPAA compliance",
      metric: "99.99%",
      metricLabel: "Uptime",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-emerald-500 to-emerald-700",
      tags: ["Healthcare", "Compliance", "Cloud"]
    },
    {
      title: "Retail Infrastructure Upgrade",
      client: "E-commerce Platform",
      result: "3x performance improvement",
      metric: "3x",
      metricLabel: "Performance",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "from-purple-500 to-purple-700",
      tags: ["E-commerce", "Performance", "Scale"]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            caseStudies.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-10 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider animate-fadeIn">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-expandWidth"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
            Real results from real businesses. See how we've helped organizations transform their IT infrastructure.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((cs, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cs.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-0.5 bg-white rounded-2xl -z-10"></div>

                {/* Header Section with Icon */}
                <div className={`relative h-56 bg-gradient-to-br ${cs.color} flex flex-col items-center justify-center text-white overflow-hidden`}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '30px 30px',
                      animation: 'gridScroll 20s linear infinite'
                    }}></div>
                  </div>

                  {/* Floating Icon */}
                  <div className={`relative z-10 transform transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                    <div className="relative">
                      {cs.icon}
                      {/* Icon Glow */}
                      <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div className={`mt-6 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 transform transition-all duration-500 ${hoveredCard === index ? 'scale-110' : 'scale-100'}`}>
                    <div className="text-3xl font-bold">{cs.metric}</div>
                    <div className="text-xs uppercase tracking-wider opacity-90">{cs.metricLabel}</div>
                  </div>

                  {/* Decorative Circles */}
                  <div className="absolute top-4 right-4 w-24 h-24 border-2 border-white/20 rounded-full animate-ping-slow"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full animate-ping-slow animation-delay-1000"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {cs.title}
                  </h3>

                  {/* Client */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-sm text-gray-500 font-medium">{cs.client}</p>
                  </div>

                  {/* Result */}
                  <div className="flex items-start gap-2 mb-6">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700 text-sm leading-relaxed">{cs.result}</p>
                  </div>

                  {/* CTA Button */}
               <Link
  href="/case-studies"
  className="text-blue-600 font-semibold hover:text-blue-800 hover:underline inline-flex items-center gap-1 hover:gap-2 transition-all"
>
  Read Full Story →
</Link>

                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${cs.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cs.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 -z-20 pointer-events-none`}></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 rotate-12">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span>View All Case Studies</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expandWidth {
          from { width: 0; }
          to { width: 6rem; }
        }

        @keyframes gridScroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;