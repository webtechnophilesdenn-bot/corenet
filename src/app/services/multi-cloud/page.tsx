export default function MulticloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-rz-10 "></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://www.networkworld.com/wp-content/uploads/2025/06/971990-0-89134700-1750278398-multicloud_explained.jpg?quality=50&strip=all')",}}  
        ></div>
        <div className="relative z-20 max-w-6xl mx-auto px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Multicloud Infrastructure Solutions</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Leverage the power of multiple cloud platforms with seamless integration, unified management, and optimized performance across AWS, Azure, Google Cloud, and private cloud environments
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Harness the Power of Multiple Clouds
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            CoreNet's multicloud solutions enable organizations to leverage the unique strengths of different cloud providers while maintaining flexibility, avoiding vendor lock-in, and optimizing costs. Our expert team designs and implements comprehensive multicloud strategies tailored to your business requirements.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From initial architecture design to ongoing management and optimization, we ensure your multicloud infrastructure delivers maximum value with minimal complexity.
          </p>
        </div>

        {/* Cloud Platforms */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Supported Cloud Platforms
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.763 10.036c.037-.235.11-.464.214-.68l-.446-.446a2.25 2.25 0 1 1 3.182-3.182l.446.446a3.497 3.497 0 0 1 .68-.214V5.5a2.25 2.25 0 0 1 4.5 0v.46c.235.037.464.11.68.214l.446-.446a2.25 2.25 0 1 1 3.182 3.182l-.446.446c.104.216.177.445.214.68h.46a2.25 2.25 0 0 1 0 4.5h-.46a3.497 3.497 0 0 1-.214.68l.446.446a2.25 2.25 0 1 1-3.182 3.182l-.446-.446a3.497 3.497 0 0 1-.68.214v.46a2.25 2.25 0 0 1-4.5 0v-.46a3.497 3.497 0 0 1-.68-.214l-.446.446a2.25 2.25 0 1 1-3.182-3.182l.446-.446a3.497 3.497 0 0 1-.214-.68H5.5a2.25 2.25 0 0 1 0-4.5h.46z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AWS</h3>
                  <p className="text-orange-100">Amazon Web Services</p>
                </div>
              </div>
              <p className="text-orange-50 mb-4">
                Complete AWS integration with EC2, S3, RDS, Lambda, and comprehensive managed services portfolio.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-orange-50">Infrastructure automation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-orange-50">Cost optimization</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-orange-50">Security best practices</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Azure</h3>
                  <p className="text-blue-100">Microsoft Azure</p>
                </div>
              </div>
              <p className="text-blue-50 mb-4">
                Enterprise Azure solutions with Active Directory integration, hybrid cloud capabilities, and DevOps services.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-blue-50">Hybrid integration</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-blue-50">Microsoft 365 synergy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-blue-50">Enterprise compliance</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-yellow-600 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Google Cloud</h3>
                  <p className="text-yellow-100">GCP Platform</p>
                </div>
              </div>
              <p className="text-yellow-50 mb-4">
                Leverage GCP's advanced data analytics, AI/ML capabilities, and global network infrastructure.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span className="text-yellow-50">BigQuery analytics</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span className="text-yellow-50">Kubernetes engine</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span className="text-yellow-50">AI/ML services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Comprehensive Multicloud Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Architecture Design</h3>
              <p className="text-gray-600">
                Expert cloud architecture design optimized for performance, scalability, and cost-efficiency across multiple platforms.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Unified Management</h3>
              <p className="text-gray-600">
                Centralized dashboard and tools for managing resources, monitoring, and operations across all cloud platforms.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Security & Compliance</h3>
              <p className="text-gray-600">
                Enterprise-grade security policies, encryption, identity management, and compliance frameworks across clouds.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cost Optimization</h3>
              <p className="text-gray-600">
                Continuous cost analysis, resource right-sizing, and automated optimization to minimize cloud spending.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Migration Services</h3>
              <p className="text-gray-600">
                Seamless migration from on-premises or single-cloud to multicloud with minimal downtime and risk.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Disaster Recovery</h3>
              <p className="text-gray-600">
                Multi-region backup and recovery strategies ensuring business continuity across cloud providers.
              </p>
            </div>
          </div>
        </div>

        {/* Multicloud Benefits */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Multicloud Advantages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🔓</div>
              <h4 className="font-bold text-xl mb-2">Avoid Lock-In</h4>
              <p className="text-purple-100">Maintain flexibility and negotiating power by not being tied to a single provider</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <h4 className="font-bold text-xl mb-2">Optimize Costs</h4>
              <p className="text-purple-100">Leverage competitive pricing and choose the best service for each workload</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <h4 className="font-bold text-xl mb-2">Global Reach</h4>
              <p className="text-purple-100">Utilize the best regional presence from multiple providers worldwide</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Embrace Multicloud?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let us design and implement a multicloud strategy that maximizes flexibility and minimizes costs.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </main>
  );
}