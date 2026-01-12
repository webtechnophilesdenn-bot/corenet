export default function DataAnalyticsAdvancedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">Advanced Data Analytics</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto text-center leading-relaxed">
            AI-powered analytics transforming raw data into strategic business intelligence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 mx-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Data-Driven Decision Intelligence</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
              Advanced analytics with ML models, real-time dashboards, and predictive intelligence for competitive advantage.
            </p>
          </div>
        </div>

        <div className="mb-16 mx-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">Analytics Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">ML-powered forecasting models</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-amber-600 mr-2">✓</span><span className="text-black">Time series</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-amber-600 mr-2">✓</span><span className="text-black">Regression</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-amber-600 mr-2">✓</span><span className="text-black">Demand forecasting</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Real-Time Dashboards</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Interactive BI visualizations</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span className="text-black">Power BI</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span className="text-black">Tableau</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span className="text-black">Custom dashboards</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">AI/ML Analytics</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Advanced ML model deployment</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-indigo-600 mr-2">✓</span><span className="text-black">Clustering</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-indigo-600 mr-2">✓</span><span className="text-black">Anomaly detection</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-indigo-600 mr-2">✓</span><span className="text-black">Recommendation</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Data Engineering</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Scalable data pipelines & lakes</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-purple-600 mr-2">✓</span><span className="text-black">Data lakehouse</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-purple-600 mr-2">✓</span><span className="text-black">ETL pipelines</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-purple-600 mr-2">✓</span><span className="text-black">Real-time streaming</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-2xl p-12 mx-4 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Unlock Your Data's True Potential</h2>
            <p className="text-xl mb-12 leading-relaxed">
              Transform raw data into actionable intelligence with AI-powered analytics platforms
            </p>
            <button className="bg-white text-amber-600 font-bold py-6 px-12 rounded-2xl text-xl hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Start Analytics Journey
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
