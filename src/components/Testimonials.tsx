'use client';

import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      quote: "Corenet transformed our entire IT infrastructure. Their expertise saved us millions and improved operational efficiency dramatically.",
      author: "Rajesh Kumar",
      position: "CTO",
      company: "Tech Solutions Pvt Ltd",
      rating: 5,
      avatar: "RK",
      color: "from-blue-500 to-blue-600"
    },
    {
      quote: "The 24/7 support and proactive monitoring have been game-changers. We haven't experienced any downtime since partnering.",
      author: "Priya Sharma",
      position: "IT Director",
      company: "Global Finance Corp",
      rating: 5,
      avatar: "PS",
      color: "from-purple-500 to-purple-600"
    },
    {
      quote: "Their cybersecurity solutions helped us achieve compliance and protect sensitive data. Team is professional and highly skilled.",
      author: "Amit Patel",
      position: "CEO",
      company: "Healthcare Systems Inc",
      rating: 5,
      avatar: "AP",
      color: "from-emerald-500 to-emerald-600"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-block mb-2 px-3 py-1 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-xs font-semibold uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            What Our <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-3"></div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto">
          <div className={`relative bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-lg transition-all duration-300 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            
            {/* Quote Icon */}
            <div className={`inline-flex w-10 h-10 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-lg items-center justify-center mb-3`}>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <p className="text-sm md:text-base text-white mb-4 leading-relaxed">
              {testimonials[activeIndex].quote}
            </p>

            {/* Rating Stars */}
            <div className="flex gap-0.5 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-2 pt-4 border-t border-white/20">
              <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-full flex items-center justify-center text-white font-bold shadow-md`}>
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <p className="font-bold text-sm text-white">{testimonials[activeIndex].author}</p>
                <p className="text-blue-200 text-xs">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== activeIndex) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setActiveIndex(index);
                        setIsAnimating(false);
                      }, 300);
                    }
                  }}
                  className={`transition-all duration-300 ${
                    index === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                  } h-2 rounded-full`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;