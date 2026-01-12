export default function ITConsultingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">IT Consulting Services</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto text-center leading-relaxed">
            Strategic IT advisory transforming technology into business value
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 mx-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Digital Transformation Experts</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
              Strategic IT consulting with proven frameworks for cloud adoption, digital transformation, and operational excellence.
            </p>
          </div>
        </div>

        <div className="mb-16 mx-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Digital Strategy</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Technology roadmaps & maturity assessment</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-purple-600 mr-2">✓</span><span>Roadmaps</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-purple-600 mr-2">✓</span><span>Assessments</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-purple-600 mr-2">✓</span><span>ROI Analysis</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Cloud Advisory</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Multi-cloud strategy consulting</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-indigo-600 mr-2">✓</span><span>Cloud TCO</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-indigo-600 mr-2">✓</span><span>Workload Analysis</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-indigo-600 mr-2">✓</span><span>Vendor Selection</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Process Optimization</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">ITIL & operational excellence</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-emerald-600 mr-2">✓</span><span>ITIL</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-emerald-600 mr-2">✓</span><span>Automation</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-emerald-600 mr-2">✓</span><span>DevOps</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Risk Assessment</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Cybersecurity & compliance audits</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-rose-600 mr-2">✓</span><span>ISO 27001</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-rose-600 mr-2">✓</span><span>SOC 2</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-rose-600 mr-2">✓</span><span>GDPR</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl shadow-2xl p-12 mx-4 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Accelerate Your Digital Transformation</h2>
            <button className="bg-white text-purple-600 font-bold py-6 px-12 rounded-2xl text-xl hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Transform Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
