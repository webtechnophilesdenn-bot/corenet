export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Process Transformation Services</h1>
          <p className="text-xl text-blue-100">
            Redesign, optimize, and automate business processes to drive efficiency, reduce costs, and accelerate growth
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Transforming Business Operations
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At CoreNet, we specialize in revolutionizing business processes through strategic transformation. 
            Our approach combines deep industry expertise with cutting-edge technology to redesign, streamline, 
            and automate your operations. We help organizations eliminate inefficiencies, enhance productivity, 
            and create scalable processes that drive sustainable growth and competitive advantage.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Process Assessment & Analysis */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Process Assessment & Analysis</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive evaluation of current processes to identify bottlenecks, inefficiencies, and improvement opportunities.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Current state analysis</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Bottleneck identification</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Value stream mapping</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">ROI assessment</span>
              </div>
            </div>
          </div>

          {/* Process Redesign & Optimization */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Process Redesign & Optimization</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Strategic redesign of workflows to maximize efficiency, quality, and customer satisfaction.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Workflow redesign</span>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Lean & Six Sigma implementation</span>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Quality improvement initiatives</span>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Standard operating procedures</span>
              </div>
            </div>
          </div>

          {/* Digital Process Automation */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Digital Process Automation</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Implementation of automation technologies to eliminate manual tasks and increase operational efficiency.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Robotic Process Automation (RPA)</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Workflow automation</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">AI-powered automation</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Business process management</span>
              </div>
            </div>
          </div>

          {/* Change Management & Training */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Change Management & Training</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive support for organizational change, user adoption, and continuous improvement.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Change management strategies</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Employee training programs</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Stakeholder communication</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Performance monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Industry-Specific Process Transformations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Manufacturing & Supply Chain</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Production line optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Inventory management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Quality control processes</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-indigo-800 mb-3">Finance & Banking</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-700">Loan processing automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-700">Compliance workflow optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-700">Customer onboarding</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">Healthcare & Life Sciences</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-700">Patient care coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-700">Clinical trial processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-700">Regulatory compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transformation Journey */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our 4-Step Transformation Framework</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1</div>
              <h3 className="text-xl font-bold mb-2">Discover & Assess</h3>
              <p className="text-blue-100">Analyze current processes and identify opportunities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2</div>
              <h3 className="text-xl font-bold mb-2">Design & Plan</h3>
              <p className="text-blue-100">Develop optimized processes and implementation roadmap</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <h3 className="text-xl font-bold mb-2">Implement & Automate</h3>
              <p className="text-blue-100">Execute transformation with technology integration</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <h3 className="text-xl font-bold mb-2">Optimize & Scale</h3>
              <p className="text-blue-100">Monitor performance and scale successful processes</p>
            </div>
          </div>
        </div>

        {/* Results & Benefits */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Tangible Business Outcomes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">40-60%</div>
              <p className="text-gray-700 font-medium">Reduction in process cycle times</p>
            </div>
            <div className="text-center p-6 border border-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">30-50%</div>
              <p className="text-gray-700 font-medium">Decrease in operational costs</p>
            </div>
            <div className="text-center p-6 border border-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">25-40%</div>
              <p className="text-gray-700 font-medium">Improvement in employee productivity</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center p-6 border border-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-700 font-medium">Process accuracy with automation</p>
            </div>
            <div className="text-center p-6 border border-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">50-70%</div>
              <p className="text-gray-700 font-medium">Reduction in manual errors</p>
            </div>
            <div className="text-center p-6 border border-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700 font-medium">Compliance with regulations</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Business Processes?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let CoreNet help you redesign, optimize, and automate your operations for maximum efficiency and growth.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Start Your Transformation Journey
          </button>
        </div>
      </div>
    </main>
  );
}