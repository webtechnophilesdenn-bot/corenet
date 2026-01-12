'use client';

import React, { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      title: "Enterprise Security",
      description: "Bank-level encryption, multi-factor auth, ISO 27001 & SOC 2 compliance",
      color: "from-blue-500 to-blue-600",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      features: ["ISO 27001", "SOC 2", "GDPR Ready"]
    },
    {
      title: "Scalable Solutions",
      description: "Infrastructure grows with you, from startup to enterprise scale",
      color: "from-purple-500 to-purple-600",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      features: ["Flexible Plans", "Auto-scaling", "Pay-as-you-grow"]
    },
    {
      title: "Expert Team",
      description: "Certified professionals with decades of cloud & security experience",
      color: "from-emerald-500 to-emerald-600",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      features: ["AWS Certified", "Cisco Experts", "Microsoft Gold"]
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance, proactive monitoring, rapid response",
      color: "from-orange-500 to-orange-600",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      features: ["<1hr Response", "Proactive Alerts", "Dedicated Manager"]
    },
  ];

  const certifications = [
    { name: "ISO 27001", color: "from-blue-500 to-blue-600" },
    { name: "SOC 2 Type II", color: "from-purple-500 to-purple-600" },
    { name: "Microsoft Gold", color: "from-green-500 to-green-600" },
    { name: "AWS Advanced", color: "from-orange-500 to-orange-600" },
  ];

  const processSteps = [
    { step: "1", title: "Assessment", desc: "Free IT audit & analysis" },
    { step: "2", title: "Planning", desc: "Custom roadmap creation" },
    { step: "3", title: "Implementation", desc: "Seamless deployment" },
    { step: "4", title: "Support", desc: "24/7 monitoring & maintenance" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section ref={sectionRef} className="bg-gradient-to-b from-slate-50 via-white to-blue-50 py-12 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Main Benefits */}
          <div className="space-y-8">
            {/* Header */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                OUR ADVANTAGES
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Corenet</span>
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                We combine 15+ years of technical expertise with personalized service to deliver exceptional results 
                for businesses of all sizes. Our proven methodology ensures success from day one.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`group bg-white rounded-xl p-4 border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {benefit.title}
                        </h3>
                        <span className="text-xs font-bold text-gray-500">#{index + 1}</span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {benefit.description}
                      </p>
                      
                      {/* Features Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {benefit.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Timeline */}
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Our 4-Step Process
              </h3>
              
              <div className="grid grid-cols-4 gap-2">
                {processSteps.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                    <div className="text-xs font-bold text-gray-900">{step.title}</div>
                    <div className="text-[10px] text-gray-600">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certifications & Differentiators */}
          <div className="space-y-8 mt-30">
            {/* Certifications */}
            <div className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-between">
                <span>Certifications & Compliance</span>
                <span className="text-xs text-blue-600 font-semibold">Verified</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${cert.color} rounded-lg p-3 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold">{cert.name}</div>
                        <div className="text-[10px] opacity-90">Certified</div>
                      </div>
                      <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition Card */}
            <div className={`bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-5 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Our Promise to You
              </h3>
              
              <ul className="space-y-3 mb-4">
                {[
                  "No hidden fees or surprise charges",
                  "Dedicated account manager",
                  "Transparent monthly reporting",
                  "Flexible contract terms",
                  "Technology agnostic solutions",
                  "Regular security audits"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-blue-200">Client Satisfaction</div>
                  <div className="font-bold text-yellow-400">98.7%</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className={`grid grid-cols-3 gap-2 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-600">15+</div>
                <div className="text-xs text-gray-600">Years Exp</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-600">500+</div>
                <div className="text-xs text-gray-600">Clients</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-emerald-600">99.9%</div>
                <div className="text-xs text-gray-600">Uptime</div>
              </div>
            </div>

            {/* Industry Recognition */}
            <div className={`bg-white rounded-xl p-4 border border-gray-200 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Industry Recognition</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-sm font-bold">
                  AW
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Award Winner 2025</div>
                  <div className="text-[10px] text-gray-500">Best IT Services Provider</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-10 pt-8 border-t border-gray-200 text-center transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <div className="text-left">
              <p className="text-sm text-gray-600">Ready to experience the Corenet difference?</p>
              <p className="text-xs text-gray-500">Start with a free IT assessment</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all">
                Free Assessment
              </button>
              <button className="px-6 py-2.5 bg-white border border-blue-600 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all">
                Compare Plans →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default WhyChooseUs;