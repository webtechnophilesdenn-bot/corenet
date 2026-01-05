import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About CORENET
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Connecting World With Solutions - Your trusted partner for cutting-edge IT solutions. 
              We specialize in optimizing efficiency, enhancing security, and fostering growth for businesses worldwide.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Company Image Section - First Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/about-team.jpg" 
                alt="CORENET team collaboration" 
                width={1200} 
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Better Together Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Better Together</h2>
              <div className="w-24 h-1 bg-blue-400 mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-blue-50">
                We lead every interaction with a "Better Together" mentality. Our commitment to improving the 
                everyday business experience, sustainability, and driving diversity, equality, and inclusion is 
                embedded in the way we deliver agile solutions for our customers and the relationships we establish 
                with our clients, partners, and team members.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/better-together.jpg" 
                alt="CORENET team working together" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnership Section - Second Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/strategic-partnership.jpg" 
                    alt="CORENET strategic partnerships" 
                    width={600} 
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Achieve Lasting Value with Our Strategic Partnership
                </h2>
                <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At CORENET, we don't just keep pace with change—we help you stay ahead of it. We leverage 
                  cutting-edge technology to make your business smarter, more responsive, and better equipped 
                  to thrive. Whether it's accelerating decision-making, optimizing costs, or uncovering new 
                  opportunities, we're here to turn possibilities into realities.
                </p>
              </div>
            </div>

            {/* Four Key Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-xl text-white">
                <div className="w-12 h-1 bg-blue-400 mb-4"></div>
                <h3 className="text-2xl font-bold mb-4">We meet you where you are</h3>
                <p className="text-blue-100 leading-relaxed">
                  We understand your needs and meet you where you are to deliver sustained value leveraging 
                  existing tech-stack.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-xl text-white">
                <div className="w-12 h-1 bg-blue-400 mb-4"></div>
                <h3 className="text-2xl font-bold mb-4">Domain Experts and IP</h3>
                <p className="text-blue-100 leading-relaxed">
                  We deliver value-centric solutions by leveraging our deep domain expertise, along with a 
                  suite of high-performance accelerators.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-xl text-white">
                <div className="w-12 h-1 bg-blue-400 mb-4"></div>
                <h3 className="text-2xl font-bold mb-4">User-Focused Design</h3>
                <p className="text-blue-100 leading-relaxed">
                  We focus on improving everyday experiences and we put people at the center of every 
                  solution we develop for our clients.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-xl text-white">
                <div className="w-12 h-1 bg-blue-400 mb-4"></div>
                <h3 className="text-2xl font-bold mb-4">Accelerated Time-to-Value</h3>
                <p className="text-blue-100 leading-relaxed">
                  We execute in an agile-way using proven methodologies and provide sustained value with 
                  integrated change management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leaders Section - Third Image */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/our-leaders.jpg" 
                alt="CORENET leadership team" 
                width={700} 
                height={500}
                className="w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Our Leaders</h2>
              <div className="w-24 h-1 bg-blue-400 mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-blue-50 mb-8">
                Our leaders are a team of industry experts and innovators dedicated to driving client success. 
                With a commitment to excellence, they guide CORENET's vision and empower our teams to deliver 
                impactful solutions globally.
              </p>
              <a
                href="#leadership"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Certifications Section - Fourth Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Awards and Certifications</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* ISO 27001:2022 */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform">
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">ISO 27001:2022</h3>
                <p className="text-sm font-semibold text-blue-300 mb-4">Certification</p>
                <p className="text-blue-100 text-sm leading-relaxed">
                  CORENET is certified for information security management, ISO/IEC 27001:2022 and validates our 
                  commitment to protecting data, managing risk, and ensuring confidentiality, integrity, and 
                  availability across our operations.
                </p>
              </div>

              {/* ISO 27002:2022 */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform">
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">ISO/IEC 27002:2022</h3>
                <p className="text-sm font-semibold text-blue-300 mb-4">Certification</p>
                <p className="text-blue-100 text-sm leading-relaxed">
                  ISO/IEC 27002:2022 provides supporting guidance for implementing robust controls within our 
                  certified Information Security Management System (ISMS), reinforcing our commitment to data 
                  security and governance.
                </p>
              </div>

              {/* ISO 27014:2020 */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform">
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">ISO/IEC 27014:2020</h3>
                <p className="text-sm font-semibold text-blue-300 mb-4">Certification</p>
                <p className="text-blue-100 text-sm leading-relaxed">
                  ISO/IEC 27014:2020 informs our governance framework for information security, enhancing our 
                  ability to align risk, security, and business objectives across digital initiatives.
                </p>
              </div>

              {/* ISO 22301:2019 */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform">
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">ISO 22301:2019</h3>
                <p className="text-sm font-semibold text-blue-300 mb-4">Certification</p>
                <p className="text-blue-100 text-sm leading-relaxed">
                  CORENET is proud to be ISO certified, reflecting our commitment to maintaining the highest 
                  standards of quality, efficiency, and safety in our operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Transform Your Ideas - Fifth Image with World Map */}
<section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div 
      className="absolute inset-0" 
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
      }}
    ></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Transform Your Ideas into Powerful Digital Solutions
      </h2>
      <p className="text-xl text-blue-100 mb-8">
        Build scalable, secure solutions that drive innovation and growth.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-xl"
      >
        Get In Touch
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>

      {/* Enhanced World Map Dots Visualization */}
      <div className="mt-16 relative h-96 max-w-5xl mx-auto">
        {/* Dotted World Map Background */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500">
          {/* Create dotted world map pattern */}
          <defs>
            <pattern id="worldDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="rgba(147, 197, 253, 0.4)" />
            </pattern>
          </defs>

          {/* Simplified world map shape using dots */}
          {/* North America */}
          <ellipse cx="250" cy="150" rx="120" ry="100" fill="url(#worldDots)" opacity="0.6" />
          
          {/* South America */}
          <ellipse cx="280" cy="320" rx="80" ry="120" fill="url(#worldDots)" opacity="0.6" />
          
          {/* Europe */}
          <ellipse cx="550" cy="120" rx="100" ry="80" fill="url(#worldDots)" opacity="0.6" />
          
          {/* Africa */}
          <ellipse cx="580" cy="270" rx="90" ry="130" fill="url(#worldDots)" opacity="0.6" />
          
          {/* Asia */}
          <ellipse cx="850" cy="180" rx="180" ry="120" fill="url(#worldDots)" opacity="0.6" />
          
          {/* Australia */}
          <ellipse cx="950" cy="350" rx="80" ry="60" fill="url(#worldDots)" opacity="0.6" />

          {/* Connection Lines between locations */}
          <g opacity="0.3">
            <line x1="250" y1="150" x2="550" y2="120" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
            </line>
            <line x1="550" y1="120" x2="850" y2="180" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
            </line>
            <line x1="850" y1="180" x2="950" y2="350" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Location Markers with Pulsing Effect */}
          {/* United States */}
          <g>
            <circle cx="250" cy="150" r="8" fill="#3b82f6" opacity="0.3">
              <animate attributeName="r" values="8;15;8" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="150" r="5" fill="#60a5fa" />
            <path d="M250 145 L250 138 L252 138 L252 140 L254 140 L254 145 Z" fill="white" />
          </g>

          {/* Europe */}
          <g>
            <circle cx="550" cy="120" r="8" fill="#3b82f6" opacity="0.3">
              <animate attributeName="r" values="8;15;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="550" cy="120" r="5" fill="#60a5fa" />
            <path d="M550 115 L550 108 L552 108 L552 110 L554 110 L554 115 Z" fill="white" />
          </g>

          {/* India */}
          <g>
            <circle cx="750" cy="200" r="8" fill="#3b82f6" opacity="0.3">
              <animate attributeName="r" values="8;15;8" dur="2s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="750" cy="200" r="5" fill="#60a5fa" />
            <path d="M750 195 L750 188 L752 188 L752 190 L754 190 L754 195 Z" fill="white" />
          </g>

          {/* APAC/Singapore */}
          <g>
            <circle cx="850" cy="240" r="8" fill="#3b82f6" opacity="0.3">
              <animate attributeName="r" values="8;15;8" dur="2s" repeatCount="indefinite" begin="1.5s" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle cx="850" cy="240" r="5" fill="#60a5fa" />
            <path d="M850 235 L850 228 L852 228 L852 230 L854 230 L854 235 Z" fill="white" />
          </g>

          {/* Australia */}
          <g>
            <circle cx="950" cy="350" r="8" fill="#3b82f6" opacity="0.3">
              <animate attributeName="r" values="8;15;8" dur="2s" repeatCount="indefinite" begin="2s" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle cx="950" cy="350" r="5" fill="#60a5fa" />
            <path d="M950 345 L950 338 L952 338 L952 340 L954 340 L954 345 Z" fill="white" />
          </g>
        </svg>

        {/* Location Labels */}
        <div className="absolute top-[25%] left-[18%] transform -translate-x-1/2 -translate-y-full mb-2">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
            <p className="text-sm font-semibold text-white">United States</p>
            <p className="text-xs text-blue-200">Regional Hub</p>
          </div>
        </div>

        <div className="absolute top-[20%] left-[45%] transform -translate-x-1/2 -translate-y-full mb-2">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
            <p className="text-sm font-semibold text-white">Europe</p>
            <p className="text-xs text-blue-200">Regional Hub</p>
          </div>
        </div>

        <div className="absolute top-[35%] left-[62%] transform -translate-x-1/2 -translate-y-full mb-2">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
            <p className="text-sm font-semibold text-white">India</p>
            <p className="text-xs text-blue-200">Delivery Centers</p>
          </div>
        </div>

        <div className="absolute top-[45%] left-[70%] transform -translate-x-1/2 -translate-y-full mb-2">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
            <p className="text-sm font-semibold text-white">APAC</p>
            <p className="text-xs text-blue-200">Regional Office</p>
          </div>
        </div>

        <div className="absolute top-[68%] left-[78%] transform -translate-x-1/2 -translate-y-full mb-2">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
            <p className="text-sm font-semibold text-white">Australia</p>
            <p className="text-xs text-blue-200">Partner Network</p>
          </div>
        </div>
      </div>

      {/* Global Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="text-3xl font-bold mb-2">50+</div>
          <p className="text-sm text-blue-200">Countries Served</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="text-3xl font-bold mb-2">500+</div>
          <p className="text-sm text-blue-200">Enterprise Clients</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="text-3xl font-bold mb-2">24/7</div>
          <p className="text-sm text-blue-200">Global Support</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="text-3xl font-bold mb-2">15+</div>
          <p className="text-sm text-blue-200">Years Experience</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CSR Commitment - Sixth Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl font-bold text-gray-100 mb-4">CSR</div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 -mt-16 relative z-10">
                  Our Commitment to Excellence and Inclusivity
                </h2>
                <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At CORENET, we believe in fostering a healthy, diverse, and continuously learning work 
                  environment, while also being mindful of our environmental impact. We prioritize the well-being 
                  of our employees, embrace diversity and inclusion, invest in continuous learning and development, 
                  and commit to sustainability. These values are reflected in our comprehensive reports and policies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Discover our efforts and achievements through the following documents:
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/csr-commitment.jpg" 
                  alt="CORENET team diversity and inclusion" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* CSR Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Health & Safety Report
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Balance running and transforming your organization within budget with continuous improvement 
                  and adaptive solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Diversity, Equity, and Inclusion Annual Report
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Balance running and transforming your organization within budget with continuous improvement 
                  and adaptive solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Annual Learning and Development Report
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Balance running and transforming your organization within budget with continuous improvement 
                  and adaptive solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Annual Environmental Policy
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Balance running and transforming your organization within budget with continuous improvement 
                  and adaptive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Decisions Globally - Seventh Image */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Empowering Decisions Globally</h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                CORENET empowers clients globally through a robust network of operations across multiple regions, 
                with presence in key markets worldwide since 2010.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-br from-blue-200 to-white bg-clip-text text-transparent">
                  2010
                </div>
                <p className="text-lg text-blue-100">CORENET was founded in 2010</p>
              </div>

              <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-br from-blue-200 to-white bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-lg text-blue-100">Talent networks through top universities</p>
              </div>

              <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-br from-blue-200 to-white bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-lg text-blue-100">Number of CORENET Employees</p>
              </div>
            </div>

            {/* ISO Certifications */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold mb-8 text-center">ISO Certified</h3>
              <p className="text-center text-blue-100 mb-8">CORENET is ISO certified across multiple standards:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="font-semibold text-lg">ISO 27001:2022</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">ISO 27002:2022</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">ISO 27014:2020</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">ISO 22301:2019</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">ISO 45001:2018</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">ISO 9001:2015</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">ISO 14001:2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Global Presence</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Serving clients across US, Europe, India, and APAC regions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { region: 'United States', cities: 'Multiple Locations', type: 'Regional Hub' },
                { region: 'Europe', cities: 'Multiple Locations', type: 'Regional Hub' },
                { region: 'India', cities: 'Pune, Bengaluru, Mumbai', type: 'Delivery Centers' },
                { region: 'APAC', cities: 'Multiple Locations', type: 'Regional Office' }
              ].map((location, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{location.region}</h3>
                      <p className="text-gray-600 mb-2">{location.cities}</p>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                        {location.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how CORENET can help optimize your IT infrastructure and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                View Our Solutions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
