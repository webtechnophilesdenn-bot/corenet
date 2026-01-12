export default function CloudSolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">Cloud Solutions</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto text-center leading-relaxed">
            Scalable, secure, and cost-optimized cloud infrastructure solutions for modern enterprises
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 mx-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Enterprise-Grade Cloud Infrastructure</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
              Deploy, manage, and optimize cloud environments with our proven multi-cloud strategy and 24/7 expert support.
            </p>
          </div>
        </div>

        <div className="mb-16 mx-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">Comprehensive Cloud Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Cloud Migration</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Zero-downtime migration to AWS, Azure, GCP</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span className="text-black">Lift & Shift</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span className="text-black">Refactoring</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span className="text-black">Re-platforming</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.25M2 21h.07a2 2 0 00 1.93-.51l2.93-2.93a2 2 0 011.41-1.41 2 2 0 012.41 0l2.93 2.93a2 2 0 001.93.51h.07" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Multi-Cloud</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">AWS + Azure + GCP hybrid strategies</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-purple-600 mr-2">✓</span><span className="text-black">Cross-cloud</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-purple-600 mr-2">✓</span><span className="text-black">Orchestration</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-purple-600 mr-2">✓</span><span className="text-black">Disaster Recovery</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Optimization</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Cost optimization & performance tuning</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-emerald-600 mr-2">✓</span><span className="text-black">Cost analysis</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-emerald-600 mr-2">✓</span><span className="text-black">Right-sizing</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-emerald-600 mr-2">✓</span><span className="text-black">Reserved instances</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">24/7 Managed</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Fully managed cloud operations</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-orange-600 mr-2">✓</span><span className="text-black">Monitoring</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-orange-600 mr-2">✓</span><span className="text-black">Security</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-orange-600 mr-2">✓</span><span className="text-black">Compliance</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-12 mx-4 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl mb-12 leading-relaxed">Scale effortlessly with our enterprise-grade cloud solutions</p>
            <button className="bg-white text-blue-600 font-bold py-6 px-12 rounded-2xl text-xl hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Start Cloud Journey
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
