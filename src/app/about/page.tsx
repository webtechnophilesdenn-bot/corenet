import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About CORENET</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              Connecting World With Solutions - Your trusted partner for cutting-edge IT solutions. 
              We specialize in optimizing efficiency, enhancing security, and fostering growth for businesses worldwide.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:shadow-lg transition-all">
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Better Together Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Better Together</h2>
              <div className="w-20 h-1 bg-blue-400 mb-4"></div>
              <p className="text-base leading-relaxed text-blue-50">
                We lead every interaction with a "Better Together" mentality. Our commitment to improving the 
                everyday business experience, sustainability, and driving diversity, equality, and inclusion is 
                embedded in the way we deliver agile solutions for our customers and the relationships we establish 
                with our clients, partners, and team members.
              </p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-xl h-64 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">Better Together Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnership Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-64 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Strategic Partnership Image</span>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Achieve Lasting Value with Our Strategic Partnership
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-4"></div>
                <p className="text-base text-gray-700 leading-relaxed">
                  At CORENET, we don't just keep pace with change—we help you stay ahead of it. We leverage 
                  cutting-edge technology to make your business smarter, more responsive, and better equipped 
                  to thrive. Whether it's accelerating decision-making, optimizing costs, or uncovering new 
                  opportunities, we're here to turn possibilities into realities.
                </p>
              </div>
            </div>

            {/* Four Key Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "We meet you where you are", desc: "We understand your needs and deliver sustained value leveraging existing tech-stack." },
                { title: "Domain Experts and IP", desc: "We deliver value-centric solutions by leveraging our deep domain expertise and accelerators." },
                { title: "User-Focused Design", desc: "We focus on improving everyday experiences and put people at the center of every solution." },
                { title: "Accelerated Time-to-Value", desc: "We execute in an agile way using proven methodologies and provide sustained value." }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-900 to-blue-900 p-6 rounded-lg text-white">
                  <div className="w-12 h-1 bg-blue-400 mb-3"></div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Leaders Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-64 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">Leadership Team Image</span>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leaders</h2>
              <div className="w-20 h-1 bg-blue-400 mb-4"></div>
              <p className="text-base leading-relaxed text-blue-50 mb-4">
                Our leaders are a team of industry experts and innovators dedicated to driving client success. 
                With a commitment to excellence, they guide CORENET's vision and empower our teams to deliver 
                impactful solutions globally.
              </p>
              <a href="#leadership" className="inline-flex items-center gap-2 px-5 py-2 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Certifications */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Awards and Certifications</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "ISO 27001:2022", type: "Certification", desc: "Information security management certification validating our commitment to data protection." },
                { title: "ISO/IEC 27002:2022", type: "Certification", desc: "Supporting guidance for implementing robust controls within our ISMS framework." },
                { title: "ISO/IEC 27014:2020", type: "Certification", desc: "Governance framework for information security, aligning risk and business objectives." },
                { title: "ISO 22301:2019", type: "Certification", desc: "Business continuity management reflecting our commitment to operational resilience." }
              ].map((cert, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-900 to-blue-900 p-6 rounded-xl text-white text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-xs font-semibold text-blue-300 mb-3">{cert.type}</p>
                  <p className="text-blue-100 text-sm">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Global Presence</h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
              <p className="text-base text-blue-100">Serving clients across US, Europe, India, and APAC regions</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { stat: "2010", label: "Year Founded" },
                { stat: "50+", label: "Countries Served" },
                { stat: "500+", label: "Enterprise Clients" },
                { stat: "24/7", label: "Global Support" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-1">{item.stat}</div>
                  <p className="text-sm text-blue-200">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { region: 'United States', type: 'Regional Hub' },
                { region: 'Europe', type: 'Regional Hub' },
                { region: 'India', type: 'Delivery Centers' },
                { region: 'APAC', type: 'Regional Office' }
              ].map((location, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{location.region}</h3>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-900 rounded-full">{location.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSR Commitment */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Commitment to Excellence</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-base text-gray-700 max-w-3xl mx-auto">
                At CORENET, we prioritize employee well-being, embrace diversity, invest in continuous learning, 
                and commit to sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Health & Safety", desc: "Continuous improvement and adaptive solutions for a safe work environment." },
                { title: "Diversity & Inclusion", desc: "Fostering an inclusive culture that celebrates diverse perspectives." },
                { title: "Learning & Development", desc: "Investing in continuous growth and skill enhancement programs." },
                { title: "Environmental Policy", desc: "Committed to sustainable practices and environmental responsibility." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-1 bg-blue-600 mb-3"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-base text-blue-100 mb-6">
              Let's discuss how CORENET can help optimize your IT infrastructure and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#solutions" className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                View Solutions
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