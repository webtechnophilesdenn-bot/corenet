'use client';

import React, { useState, useEffect } from 'react';

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Ready to Transform Your <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">Business?</span>
            </h2>
          </div>

          <p className={`text-sm text-blue-100 mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Schedule a free consultation with our IT experts today.
          </p>

          <div className={`flex flex-col sm:flex-row gap-3 justify-center mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="/contact"
              className="relative px-6 py-3 bg-white text-blue-900 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Get Started Today
            </a>
            <a
              href="/solutions"
              className="relative px-6 py-3 bg-transparent text-white border border-white rounded-full font-semibold text-sm hover:bg-white hover:text-blue-900 transition-all"
            >
              Explore Solutions
            </a>
          </div>

          <div className={`text-xs text-blue-200 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p>Contact us: <a href="tel:+919028501604" className="font-bold">+91 9028501604</a></p>
            <p>Email: <a href="mailto:sales@corenet.co.in" className="font-bold">sales@corenet.co.in</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;