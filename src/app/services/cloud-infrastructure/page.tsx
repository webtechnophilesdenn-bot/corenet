export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Cloud Infrastructure Solutions</h1>
          <p className="text-xl text-blue-100">
            Enterprise-grade cloud solutions designed to help businesses scale, innovate, and transform their digital infrastructure
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Cloud Infrastructure Excellence
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At CoreNet, we provide comprehensive cloud infrastructure solutions that empower businesses to scale efficiently, 
            enhance performance, and maintain robust security. Our cloud services are built on industry-leading platforms 
            and customized to meet your specific business requirements, ensuring seamless digital transformation.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Cloud Migration */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Cloud Migration</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Seamless migration of your infrastructure, applications, and data to the cloud with minimal disruption.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Assessment & planning</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Workload migration</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Post-migration optimization</span>
              </div>
            </div>
          </div>

          {/* Cloud Architecture */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Cloud Architecture</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Design and implementation of scalable, resilient, and cost-effective cloud architectures.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Multi-cloud strategy</span>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Microservices architecture</span>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Serverless solutions</span>
              </div>
            </div>
          </div>

          {/* DevOps & Automation */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">DevOps & Automation</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Implement CI/CD pipelines, infrastructure as code, and automation to accelerate development cycles.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">CI/CD pipeline setup</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Infrastructure as Code (IaC)</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Container orchestration</span>
              </div>
            </div>
          </div>

          {/* Cloud Security */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Cloud Security</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive security solutions to protect your cloud infrastructure and data.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Identity & Access Management</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Data encryption & compliance</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Threat detection & monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Platforms */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Supported Cloud Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-orange-600 font-bold text-xl">AWS</span>
              </div>
              <span className="text-gray-700 font-medium">Amazon Web Services</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-blue-600 font-bold text-xl">Azure</span>
              </div>
              <span className="text-gray-700 font-medium">Microsoft Azure</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold text-xl">GCP</span>
              </div>
              <span className="text-gray-700 font-medium">Google Cloud</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-red-600 font-bold text-xl">IBM</span>
              </div>
              <span className="text-gray-700 font-medium">IBM Cloud</span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose CoreNet Cloud?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7 Support</div>
              <p className="text-blue-100">Round-the-clock monitoring and technical support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Cost Optimization</div>
              <p className="text-blue-100">Right-sizing and cost management strategies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Scalability</div>
              <p className="text-blue-100">Flexible solutions that grow with your business</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let CoreNet build a robust, scalable, and secure cloud foundation for your business success.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Start Your Cloud Journey
          </button>
        </div>
      </div>
    </main>
  );
}