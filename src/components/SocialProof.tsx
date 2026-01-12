'use client';

import React, { useState, useEffect } from 'react';

const SocialProof = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 500, suffix: '+', label: 'Active Clients', color: 'from-blue-500 to-blue-600' },
    { value: 99.9, suffix: '%', label: 'Uptime SLA', color: 'from-purple-500 to-purple-600' },
    { value: 15, suffix: '+', label: 'Years Experience', color: 'from-emerald-500 to-emerald-600' },
    { value: 50, suffix: '+', label: 'IT Specialists', color: 'from-orange-500 to-orange-600' }
  ];

  const clients = [
    { name: 'Microsoft', logo: 'MS', color: 'from-green-500 to-blue-500' },
    { name: 'Amazon AWS', logo: 'AWS', color: 'from-orange-500 to-orange-600' },
    { name: 'Google Cloud', logo: 'GC', color: 'from-red-500 to-yellow-500' },
    { name: 'IBM', logo: 'IBM', color: 'from-blue-700 to-blue-800' },
    { name: 'Oracle', logo: 'ORCL', color: 'from-red-600 to-red-700' },
    { name: 'Cisco', logo: 'CSCO', color: 'from-blue-600 to-cyan-600' },
    { name: 'VMware', logo: 'VMW', color: 'from-gray-600 to-gray-700' },
    { name: 'Dell', logo: 'DELL', color: 'from-blue-500 to-green-500' },
  ];

  const testimonials = [
    { quote: "Exceptional service and expertise", author: "Rajesh Kumar", company: "TechCorp" },
    { quote: "Transformed our IT infrastructure", author: "Priya Sharma", company: "GlobalNet" },
    { quote: "Reliable 24/7 support", author: "Amit Patel", company: "DataStream" },
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const duration = 1500;
    const steps = 50;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(increment * currentStep, stat.value);
        
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = newValue;
          return newCounters;
        });

        if (currentStep >= steps) clearInterval(timer);
      }, stepDuration);
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Stats & Trust Signals */}
          <div className="space-y-8">
            {/* Header */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                TRUSTED BY INDUSTRY LEADERS
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Your Trust is <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Success</span>
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                15+ years of delivering exceptional IT solutions to businesses worldwide. 
                Join hundreds of satisfied clients who trust us with their technology needs.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-4 border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${stat.color} rounded-full mb-3`}></div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                    {index === 1 ? counters[index].toFixed(1) : Math.floor(counters[index])}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mini Testimonials */}
            <div className={`bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 border border-blue-100 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900">4.9/5 Rating</span>
              </div>
              <p className="text-sm text-gray-600 italic mb-2">"Professional team, excellent results. Highly recommended!"</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['RK', 'PS', 'AP', '+47'].map((initials, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                      i === 3 ? 'from-gray-400 to-gray-500 text-white' : 'from-blue-500 to-purple-500 text-white'
                    } flex items-center justify-center text-xs font-bold border-2 border-white`}>
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-bold">47+</span> Client Reviews
                </div>
              </div>
            </div>
              <div className={`grid grid-cols-3 gap-2 transition-all duration-700 delay-400  ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-600">98%</div>
                <div className="text-xs text-gray-600">Client Retention</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-600">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-emerald-600">1hr</div>
                <div className="text-xs text-gray-600">Response Time</div>
              </div>
            </div>
          </div>

          {/* Right Column - Client Logos & Awards */}
          <div className="space-y-8 mt-26">
            {/* Client Logos Grid */}
            <div className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Technology Partners</h3>
                <div className="text-xs text-blue-600 font-semibold">Certified</div>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {clients.map((client, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-lg p-3 border border-gray-200 hover:border-transparent hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    <div className={`h-12 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {client.logo}
                    </div>
                    <div className="mt-2 text-center">
                      <div className="text-xs font-semibold text-gray-700 truncate">{client.name}</div>
                      <div className="text-[10px] text-gray-500">Partner</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Awards */}
            <div className={`bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-5 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Awards & Certifications
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'ISO 27001', desc: 'Security Certified' },
                  { name: 'Microsoft Gold', desc: 'Partner Status' },
                  { name: 'AWS Advanced', desc: 'Tier Partner' },
                  { name: 'Google Cloud', desc: 'Premier Partner' },
                ].map((cert, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="text-xs font-bold text-white">{cert.name}</div>
                    <div className="text-[10px] text-gray-300">{cert.desc}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <div className="text-gray-300">Industry Recognition</div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="font-bold">2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Bar */}
          
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-10 pt-8 border-t border-gray-200 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-sm text-gray-600 mb-3">Join our growing list of satisfied clients</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all">
              Schedule Free Audit
            </button>
            <button className="px-6 py-2.5 bg-white border border-blue-600 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all">
              View Case Studies →
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default SocialProof;