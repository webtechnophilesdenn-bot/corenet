export default function ISPServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://kinsta.com/wp-content/uploads/2022/02/what-is-isp.jpg')",
          }}
        ></div>
        <div className="relative z-20 max-w-6xl mx-auto px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Internet Service Provider Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Enterprise-grade connectivity and network infrastructure solutions delivering reliable, high-speed internet services with 99.9% uptime guarantee for businesses of all sizes
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Reliable Connectivity for Modern Business
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At CoreNet, we deliver comprehensive ISP solutions designed to meet the demanding connectivity requirements of today's enterprises. Our robust network infrastructure ensures seamless, high-speed internet access with industry-leading reliability and performance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From dedicated fiber connections to scalable bandwidth solutions, we provide the foundation your business needs to thrive in an increasingly connected world.
          </p>
        </div>

        {/* Service Tiers */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Connectivity Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Fiber Optic</h3>
                  <p className="text-blue-100">Up to 10 Gbps</p>
                </div>
              </div>
              <p className="text-blue-50 mb-4">
                Ultra-fast dedicated fiber connections with symmetrical upload/download speeds for mission-critical operations.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-blue-50">Dedicated bandwidth</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-blue-50">99.9% uptime SLA</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-blue-50">24/7 monitoring</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Broadband</h3>
                  <p className="text-cyan-100">Up to 1 Gbps</p>
                </div>
              </div>
              <p className="text-cyan-50 mb-4">
                High-speed broadband solutions with flexible bandwidth options for growing businesses.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-cyan-50">Scalable bandwidth</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-cyan-50">Cost-effective plans</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-cyan-50">Quick deployment</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">SD-WAN</h3>
                  <p className="text-indigo-100">Multi-site</p>
                </div>
              </div>
              <p className="text-indigo-50 mb-4">
                Software-defined networking for seamless multi-location connectivity with intelligent traffic management.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-indigo-50">Centralized management</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-indigo-50">Automatic failover</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-indigo-50">Enhanced security</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Comprehensive ISP Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Network Infrastructure</h3>
              <p className="text-gray-600">
                Enterprise-grade routers, switches, and network equipment with redundant architecture for maximum reliability.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Security Services</h3>
              <p className="text-gray-600">
                Advanced DDoS protection, firewall management, and intrusion detection to safeguard your network.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bandwidth Management</h3>
              <p className="text-gray-600">
                Intelligent traffic shaping and QoS policies to optimize performance for critical business applications.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600">
                Round-the-clock network monitoring with proactive issue detection and rapid response capabilities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Redundancy & Failover</h3>
              <p className="text-gray-600">
                Automatic failover to backup connections ensuring continuous connectivity even during outages.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Technical Support</h3>
              <p className="text-gray-600">
                Expert technical support team available 24/7 with guaranteed response times and dedicated account managers.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose CoreNet ISP?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-bold text-xl mb-2">Lightning Fast</h4>
              <p className="text-blue-100">Industry-leading speeds with fiber optic infrastructure delivering up to 10 Gbps</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <h4 className="font-bold text-xl mb-2">Secure & Reliable</h4>
              <p className="text-blue-100">99.9% uptime guarantee with enterprise-grade security and DDoS protection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold text-xl mb-2">24/7 Support</h4>
              <p className="text-blue-100">Dedicated support team and account managers available around the clock</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Upgrade Your Connectivity?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Get enterprise-grade internet services with guaranteed uptime and 24/7 support.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Request a Quote
          </button>
        </div>
      </div>
    </main>
  );
}