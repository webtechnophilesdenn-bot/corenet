export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Data Analytics Solutions</h1>
          <p className="text-xl text-blue-100">
            Transform raw data into actionable insights with our comprehensive analytics solutions that drive informed decision-making
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Data-Driven Decision Making
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At CoreNet, we specialize in turning complex data into clear, actionable insights. Our data analytics solutions 
            empower businesses to uncover hidden patterns, predict trends, and make strategic decisions with confidence. 
            From data collection to visualization, we provide end-to-end analytics services tailored to your unique business needs.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Business Intelligence */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Business Intelligence</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Interactive dashboards and reports that provide real-time insights into business performance.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Interactive dashboards</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">KPI tracking & reporting</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Executive reporting</span>
              </div>
            </div>
          </div>

          {/* Predictive Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Predictive Analytics</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Advanced analytics using machine learning to forecast trends and predict future outcomes.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Demand forecasting</span>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Risk assessment models</span>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Customer behavior prediction</span>
              </div>
            </div>
          </div>

          {/* Data Visualization */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Data Visualization</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Transform complex data into intuitive, visually compelling stories that drive understanding.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Interactive charts & graphs</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Geospatial mapping</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Real-time data streaming</span>
              </div>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Data Engineering</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Build robust data pipelines and infrastructure for efficient data processing and storage.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">ETL/ELT pipeline design</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Data warehouse solutions</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Big data processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Tools */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Analytics Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-yellow-600 font-bold text-xl">PBI</span>
              </div>
              <span className="text-gray-700 font-medium text-center">Power BI</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-blue-600 font-bold text-xl">TBL</span>
              </div>
              <span className="text-gray-700 font-medium text-center">Tableau</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold text-xl">QK</span>
              </div>
              <span className="text-gray-700 font-medium text-center">Qlik</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-red-600 font-bold text-xl">Lk</span>
              </div>
              <span className="text-gray-700 font-medium text-center">Looker</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-purple-600 font-bold text-xl">Py</span>
              </div>
              <span className="text-gray-700 font-medium text-center">Python/R</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-orange-600 font-bold text-xl">SQL</span>
              </div>
              <span className="text-gray-700 font-medium text-center">SQL Databases</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-indigo-600 font-bold text-xl">SNW</span>
              </div>
              <span className="text-gray-700 font-medium text-center">Snowflake</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-teal-600 font-bold text-xl">Dbt</span>
              </div>
              <span className="text-gray-700 font-medium text-center">dbt</span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Analytics That Deliver Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Actionable Insights</div>
              <p className="text-blue-100">Clear, business-focused recommendations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Real-Time Analytics</div>
              <p className="text-blue-100">Live data processing for immediate decisions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Scalable Solutions</div>
              <p className="text-blue-100">Grow from basic reporting to advanced AI</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Measurable Business Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">30%+</div>
              <p className="text-gray-700">Improvement in operational efficiency</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">25%+</div>
              <p className="text-gray-700">Increase in revenue from insights</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%+</div>
              <p className="text-gray-700">Faster decision-making process</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">50%+</div>
              <p className="text-gray-700">Reduction in manual reporting time</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Unlock the Power of Your Data?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let CoreNet help you transform data into strategic advantages and drive measurable business growth.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Start Your Analytics Journey
          </button>
        </div>
      </div>
    </main>
  );
}