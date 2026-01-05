'use client';

import React, { useState, useEffect, useRef } from 'react';

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const stats = [
    { value: 500, suffix: '+', label: 'Active Clients', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { value: 99.9, suffix: '%', label: 'Uptime SLA', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { value: 15, suffix: '+', label: 'Years Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: 50, suffix: '+', label: 'IT Specialists', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ];

  const clients = [
    { name: 'TechCorp', color: 'from-blue-600 to-blue-700' },
    { name: 'InnovateLabs', color: 'from-purple-600 to-purple-700' },
    { name: 'GlobalNet', color: 'from-indigo-600 to-indigo-700' },
    { name: 'DataStream', color: 'from-cyan-600 to-cyan-700' },
    { name: 'CloudScale', color: 'from-emerald-600 to-emerald-700' },
    { name: 'SecureBase', color: 'from-orange-600 to-orange-700' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(increment * currentStep, stat.value);
        
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = newValue;
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50  relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider animate-fadeIn">
            Trusted Partners
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-expandWidth"></div>
        </div>

        {/* Client Logos with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {clients.map((client, i) => (
            <div
              key={i}
              className={`group relative bg-white p-6 rounded-xl flex items-center justify-center h-28 border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${i * 100}ms`
              }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${client.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              <div className="absolute inset-0.5 bg-white rounded-xl -z-10"></div>

              {/* Logo Content */}
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {client.name.substring(0, 2)}
                </div>
                <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                  {client.name}
                </span>
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-20`}></div>
            </div>
          ))}
        </div>

        {/* Stats with Counter Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${600 + index * 100}ms`
              }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-0.5 bg-white rounded-2xl -z-10"></div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
              </div>

              {/* Counter */}
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {index === 1 ? counters[index].toFixed(1) : Math.floor(counters[index])}
                {stat.suffix}
              </div>

              {/* Label */}
              <p className="text-gray-600 font-medium text-sm group-hover:text-gray-900 transition-colors">
                {stat.label}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-blue-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-20"></div>
            </div>
          ))}
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

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;