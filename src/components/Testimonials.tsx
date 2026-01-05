'use client';

import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      quote: "Corenet transformed our entire IT infrastructure. Their expertise in cloud migration saved us millions and improved our operational efficiency dramatically.",
      author: "Rajesh Kumar",
      position: "CTO",
      company: "Tech Solutions Pvt Ltd",
      rating: 5,
      avatar: "RK",
      color: "from-blue-500 to-blue-600"
    },
    {
      quote: "The 24/7 support and proactive monitoring have been game-changers for our business. We haven't experienced any downtime since partnering with Corenet.",
      author: "Priya Sharma",
      position: "IT Director",
      company: "Global Finance Corp",
      rating: 5,
      avatar: "PS",
      color: "from-purple-500 to-purple-600"
    },
    {
      quote: "Their cybersecurity solutions helped us achieve compliance and protect our sensitive data. The team is professional, responsive, and highly skilled.",
      author: "Amit Patel",
      position: "CEO",
      company: "Healthcare Systems Inc",
      rating: 5,
      avatar: "AP",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      quote: "Best IT consulting firm we've worked with. They understand business needs and deliver tailored solutions that actually work.",
      author: "Sneha Desai",
      position: "VP Operations",
      company: "Retail Chain Ltd",
      rating: 5,
      avatar: "SD",
      color: "from-orange-500 to-orange-600"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-4 py-1 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-xs font-semibold uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What Our <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className={`relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-white/20 shadow-2xl transition-all duration-400 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            
            {/* Quote Icon */}
            <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-xl items-center justify-center mb-4`}>
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
              {testimonials[activeIndex].quote}
            </p>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-5 border-t border-white/20">
              <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <p className="font-bold text-base text-white">{testimonials[activeIndex].author}</p>
                <p className="text-blue-200 text-sm">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all hover:scale-110"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all hover:scale-110"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== activeIndex) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(index);
                      setIsAnimating(false);
                    }, 400);
                  }
                }}
                className={`transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/60'
                } h-3 rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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

export default Testimonials;