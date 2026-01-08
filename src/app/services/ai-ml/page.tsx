export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">AI & ML Services</h1>
          <p className="text-xl text-blue-100">
            High-quality Data Annotation and Machine Learning support services that form the foundation of accurate and reliable AI models
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What We Provide
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At CoreNet, we deliver structured, labeled datasets that meet the rigorous standards required for training, validation, and testing machine learning systems. Our teams combine domain expertise, quality assurance workflows, and scalable resources to ensure every dataset is consistent, precise, and production-ready.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Data Annotation */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Data Annotation</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Expert teams trained in diverse annotation methods, supported by advanced tools to deliver high-quality labeled datasets.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Computer Vision applications</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Natural Language Processing (NLP)</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Speech Recognition</span>
              </div>
            </div>
          </div>

          {/* ML Support Services */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">ML Support Services</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive machine learning support with quality assurance workflows and scalable resources.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Model training support</span>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Dataset validation & testing</span>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">Quality assurance workflows</span>
              </div>
            </div>
          </div>

          {/* Transcription Services */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Transcription & Captioning</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Accurate and reliable transcription services combining linguistic expertise with advanced tools.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Audio interviews & meetings</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Video content & e-learning</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Timestamped & formatted output</span>
              </div>
            </div>
          </div>

          {/* Project Management */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Project Management</h3>
            </div>
            <p className="text-gray-600 mb-4">
              End-to-end project management ensuring delivery on time, within scope, and to the highest quality standards.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Full-service project oversight</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Quality control & assurance</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Timely delivery management</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose CoreNet?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Expert Teams</div>
              <p className="text-blue-100">Trained professionals with domain expertise</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Advanced Tools</div>
              <p className="text-blue-100">Cutting-edge annotation and ML technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Production-Ready</div>
              <p className="text-blue-100">Consistent, precise, validated datasets</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Build Better AI Models?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let CoreNet provide the high-quality data annotation and ML support your AI projects need to succeed.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </main>
  );
}