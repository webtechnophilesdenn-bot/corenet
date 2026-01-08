'use client';

import React, { useState, useEffect, useRef } from 'react';

const Industries = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const industries = [
    { name: "Healthcare", color: "from-red-500 to-pink-600" },
    { name: "Finance", color: "from-green-500 to-emerald-600" },
    { name: "Retail", color: "from-orange-500 to-red-600" },
    { name: "Manufacturing", color: "from-blue-500 to-indigo-600" },
    { name: "Education", color: "from-purple-500 to-pink-600" },
    { name: "Government", color: "from-cyan-500 to-blue-600" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            industries.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 100);
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
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider">
            Industry Expertise
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-3"></div>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Specialized IT solutions for your industry needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className={`bg-gradient-to-br ${industry.color} rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
                <div className="text-white text-center">
                  <p className="font-bold text-sm">{industry.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;