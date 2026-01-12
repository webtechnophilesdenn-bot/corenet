export default function ChemicalsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeh2WPCQzxfBR0P-X6qVLI17MxSLxyKKCHNQ&s')",
          }}
        ></div>
        <div className="relative z-20 max-w-6xl mx-auto px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Chemical Industry Solutions</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Driving innovation and efficiency in chemical manufacturing with Industry 4.0 technologies, process automation, and comprehensive digitalization solutions for sustainable chemical production
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Digitalizing Chemical Manufacturing
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            CoreNet's Chemical Industry solutions help manufacturers navigate sustainability challenges, regulatory compliance, and operational efficiency demands [web:10]. We implement Industry 4.0 technologies including IoT, AI, and advanced automation to optimize batch processing, ensure safety, and reduce environmental impact.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From PLC and SCADA systems to predictive maintenance and supply chain digitalization, our solutions enable chemical companies to achieve precision, transparency, and sustainable growth [web:7].
          </p>
        </div>

        {/* Chemical Pillars */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Core Chemical Industry Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Process Control</h3>
                  <p className="text-orange-100">Automation Systems</p>
                </div>
              </div>
              <p className="text-orange-50 mb-4">
                Advanced PLC, SCADA, and DCS systems for batch processing and reactor control with precision [web:7].
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-orange-50">Batch automation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-orange-50">Distillation control</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-orange-50">Safety systems</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">IoT & Analytics</h3>
                  <p className="text-red-100">Smart Manufacturing</p>
                </div>
              </div>
              <p className="text-red-50 mb-4">
                Real-time monitoring, predictive maintenance, and process optimization reducing downtime and waste [web:7].
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-red-50">Sensor networks</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-red-50">Predictive analytics</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-red-50">Quality monitoring</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Compliance</h3>
                  <p className="text-amber-100">Regulatory Management</p>
                </div>
              </div>
              <p className="text-amber-50 mb-4">
                Ensure adherence to safety regulations, sustainability standards, and environmental compliance [web:10].
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-amber-50">EHS management</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-amber-50">Quality assurance</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-amber-50">Audit trails</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Comprehensive Chemical Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Plant Engineering</h3>
              <p className="text-gray-600">
                Multi-disciplinary design using AutoCAD Plant 3D, CADWorx, and STAAD.Pro for piping and equipment [web:7].
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Supply Chain Digital</h3>
              <p className="text-gray-600">
                Real-time tracking, requirements planning, and raw material traceability for efficiency [web:10].
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Energy Management</h3>
              <p className="text-gray-600">
                Optimize energy consumption with smart meters, analytics, and sustainability reporting tools.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Control</h3>
              <p className="text-gray-600">
                Laboratory information management systems (LIMS) and automated quality testing solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ERP Implementation</h3>
              <p className="text-gray-600">
                SAP and industry-specific ERP systems for chemical manufacturing and distribution management.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Twin</h3>
              <p className="text-gray-600">
                Virtual plant models for simulation, optimization, and scenario testing before implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Chemical Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Digitalization Implementation Path
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-bold text-lg mb-2">Assessment</h4>
              <p className="text-gray-600 text-sm">Evaluate plant operations, safety systems, and digital maturity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-bold text-lg mb-2">Strategy</h4>
              <p className="text-gray-600 text-sm">Design transformation roadmap for sustainability and efficiency [web:10]</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-bold text-lg mb-2">Implementation</h4>
              <p className="text-gray-600 text-sm">Deploy automation, IoT, and analytics with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-bold text-lg mb-2">Optimization</h4>
              <p className="text-gray-600 text-sm">Continuous improvement through data-driven process refinement</p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Chemical Industry Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚙️</div>
              <h4 className="font-bold text-xl mb-2">Process Excellence</h4>
              <p className="text-orange-100">Achieve precision in batch processing with advanced automation [web:7]</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <h4 className="font-bold text-xl mb-2">Sustainability</h4>
              <p className="text-orange-100">Reduce waste, energy costs, and environmental impact [web:10]</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <h4 className="font-bold text-xl mb-2">Complete Visibility</h4>
              <p className="text-orange-100">Real-time tracking from raw materials to finished products [web:10]</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Digitalize Your Chemical Operations?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Transform manufacturing with Industry 4.0 technologies and smart automation.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Start Chemical Transformation
          </button>
        </div>
      </div>
    </main>
  );
}
