'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Particle {
  left: number;
  top: number;
  duration: number;
  delay: number;
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    setParticles(
      Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 5
      }))
    );
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15,
        y: (e.clientY / window.innerHeight) * 15
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 text-gray-900 py-16 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'gridScroll 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          ></div>
        ))}
      </div>

      {/* Animated Blob Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-32 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            animation: 'blob 7s infinite'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 transition-transform duration-1000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            animation: 'blob 9s infinite 2s'
          }}
        ></div>
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            animation: 'blob 11s infinite 4s'
          }}
        ></div>
      </div>

      {/* Geometric Network Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#3b82f6" opacity="0.3"/>
              <line x1="50" y1="50" x2="100" y2="50" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
              <line x1="50" y1="50" x2="50" y2="100" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-blue-300 rounded-full backdrop-blur-sm bg-white/60 shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-blue-700 text-xs md:text-sm font-semibold uppercase tracking-widest">
                WE ARE CORENET
              </p>
            </div>

            <h1 className="mb-6 leading-tight">
              <span className="block text-blue-600 text-3xl md:text-5xl lg:text-6xl font-bold mb-2" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
                AI First
              </span>
              <span className="block text-gray-900 text-4xl md:text-6xl lg:text-7xl font-bold mb-2" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
                Development
              </span>
              <span className="block text-gray-900 text-3xl md:text-5xl lg:text-6xl font-bold" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
                For a Smart Future
              </span>
            </h1>

            <p className={`text-base md:text-lg text-gray-700 mb-8 max-w-xl leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Empowering business with cutting-edge AI solutions and future-ready digital experiences
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a
                href="#solutions"
                className="group relative px-8 py-4 bg-white text-blue-700 border-2 border-blue-600 rounded-full font-semibold overflow-hidden backdrop-blur-sm transition-all hover:bg-blue-50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Our Solutions
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Trust Badges - Compact Version */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { value: '500+', label: 'Clients' },
                { value: '99.9%', label: 'Uptime' },
                { value: '15+', label: 'Years' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm border border-blue-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-xs md:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-500">
                <Image
                  src="/hero-ai-image.jpg"
                  alt="AI First Development"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay with Digital Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent pointer-events-none"></div>
                
                {/* Floating Icons/Elements */}
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 animate-bounce-slow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>

                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-400 rounded-full opacity-30" style={{ animation: 'spin 20s linear infinite' }}></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-purple-400 rounded-full opacity-30" style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
            </div>

            {/* Floating Stats Card */}
            <div 
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-blue-100 max-w-xs"
              style={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes gridScroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

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

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
