import React from 'react';

export default function LeadershipPage() {
  const executiveLeadership = [
    {
      name: "Rajesh Kumar",
      title: "Chief Executive Officer",
      image: "/leaders/ceo.jpg",
      bio: "With over 25 years of experience in IT solutions and digital transformation, Rajesh leads CORENET's strategic vision and global expansion. His expertise in enterprise technology and client-centric approaches has positioned CORENET as a trusted partner for Fortune 500 companies worldwide.",
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      title: "Chief Technology Officer",
      image: "/leaders/cto.jpg",
      bio: "Priya drives CORENET's technology innovation and R&D initiatives. With expertise in cloud computing, AI, and cybersecurity, she ensures our solutions remain at the cutting edge of industry trends and deliver exceptional value to our clients.",
      linkedin: "#"
    },
    {
      name: "Amit Patel",
      title: "Chief Operating Officer",
      image: "/leaders/coo.jpg",
      bio: "Amit oversees CORENET's global operations, ensuring excellence in service delivery across all regions. His operational expertise and focus on process optimization have been instrumental in scaling our business while maintaining quality standards.",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      title: "Chief Financial Officer",
      image: "/leaders/cfo.jpg",
      bio: "Sarah leads CORENET's financial strategy and ensures sustainable growth. With her expertise in corporate finance and strategic planning, she guides our investment decisions and drives financial excellence across the organization.",
      linkedin: "#"
    }
  ];

  const seniorLeadership = [
    {
      name: "Vikram Mehta",
      title: "VP, Engineering & Development",
      region: "India",
      image: "/leaders/vp-eng.jpg"
    },
    {
      name: "Michael Chen",
      title: "VP, Sales & Business Development",
      region: "North America",
      image: "/leaders/vp-sales.jpg"
    },
    {
      name: "Emma Williams",
      title: "VP, Client Success",
      region: "Europe",
      image: "/leaders/vp-client.jpg"
    },
    {
      name: "Arjun Reddy",
      title: "VP, Cybersecurity & Compliance",
      region: "Global",
      image: "/leaders/vp-security.jpg"
    },
    {
      name: "Lisa Anderson",
      title: "VP, Human Resources",
      region: "Global",
      image: "/leaders/vp-hr.jpg"
    },
    {
      name: "Ravi Krishnan",
      title: "VP, Cloud Solutions",
      region: "APAC",
      image: "/leaders/vp-cloud.jpg"
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Meet the visionary leaders driving CORENET's mission to deliver world-class IT solutions 
              and transform businesses globally.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experienced. Innovative. Client-Focused.</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-base text-gray-700 leading-relaxed">
              Our leadership team brings together decades of experience in technology, business strategy, and 
              client success. With a shared commitment to innovation and excellence, they guide CORENET's vision 
              of empowering businesses through cutting-edge IT solutions and strategic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Executive Leadership</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {executiveLeadership.map((leader, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                  <div className="grid grid-cols-3 gap-4 p-6">
                    <div className="col-span-1">
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white overflow-hidden">
                        <div className="text-4xl font-bold">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                      <p className="text-blue-600 font-semibold text-sm mb-3">{leader.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{leader.bio}</p>
                      <a href={leader.linkedin} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Senior Leadership Team */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Senior Leadership Team</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seniorLeadership.map((leader, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white flex-shrink-0">
                      <span className="text-xl font-bold">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                      <p className="text-blue-600 font-semibold text-sm mb-2">{leader.title}</p>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {leader.region}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Philosophy</h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We continuously push boundaries, embrace emerging technologies, and foster a culture of 
                  innovation that drives transformative solutions for our clients.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">People-Centric</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Our success is built on empowering our people. We invest in talent development, foster 
                  inclusive environments, and prioritize employee well-being and growth.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity & Trust</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We lead with transparency, accountability, and ethical practices. Building long-term 
                  partnerships based on trust and delivering on our commitments is paramount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Committed to Diversity & Inclusion
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-4"></div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  At CORENET, our leadership is committed to building a diverse, equitable, and inclusive 
                  workplace where every voice is heard and valued. We believe diverse perspectives drive 
                  innovation and better serve our global client base.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Our leadership team actively champions initiatives that promote equal opportunities, 
                  celebrate differences, and create an environment where all employees can thrive and 
                  reach their full potential.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">45%</div>
                  <p className="text-sm text-blue-100">Women in Leadership</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">30+</div>
                  <p className="text-sm text-blue-100">Nationalities</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <p className="text-sm text-blue-100">Equal Pay Commitment</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <p className="text-sm text-blue-100">D&I Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-base text-blue-100 mb-6">
              Be part of a dynamic organization led by industry experts committed to your growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/careers" className="px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                Explore Careers
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/about" className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                Learn More About Us
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