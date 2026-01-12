export default function AIMLServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r  z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://set.jainuniversity.ac.in/academics/computer-science-engineering/images/MTechinArtificialIntelligence-min0810.jpg')`,}}
        ></div>
        <div className="relative z-20 max-w-6xl mx-auto px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">AI & Machine Learning Services</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            High-quality data annotation and machine learning support services that form the foundation of accurate and reliable AI models for next-generation intelligent systems
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Powering AI with Precision Data
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At CoreNet, we deliver structured, labeled datasets that meet the rigorous standards required for training, validation, and testing machine learning systems. Our teams combine domain expertise, quality assurance workflows, and scalable resources to ensure every dataset is consistent, precise, and production-ready.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From computer vision to natural language processing, we provide comprehensive AI support services that accelerate your machine learning initiatives and ensure model accuracy.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Comprehensive AI & ML Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Data Annotation */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-gray-700">Computer Vision applications</span>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-gray-700">Natural Language Processing (NLP)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-gray-700">Speech Recognition</span>
                </div>
              </div>
            </div>

            {/* ML Support Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Model training support</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Dataset validation & testing</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Quality assurance workflows</span>
                </div>
              </div>
            </div>

            {/* Transcription Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Audio interviews & meetings</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Video content & e-learning</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
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
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Full-service project oversight</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Quality control & assurance</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Timely delivery management</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Annotation Types */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Annotation Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Image Annotation</h4>
              <p className="text-gray-600 text-sm">Bounding boxes, polygons, semantic segmentation, keypoint annotation</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Text Annotation</h4>
              <p className="text-gray-600 text-sm">Entity recognition, sentiment analysis, text classification, intent detection</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Video Annotation</h4>
              <p className="text-gray-600 text-sm">Object tracking, action recognition, scene classification, temporal segmentation</p>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Quality Assurance Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-bold text-lg mb-2">Initial Training</h4>
              <p className="text-gray-600 text-sm">Comprehensive annotator training on guidelines and tools</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-bold text-lg mb-2">Multi-Level Review</h4>
              <p className="text-gray-600 text-sm">Peer review and expert validation processes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-bold text-lg mb-2">Quality Metrics</h4>
              <p className="text-gray-600 text-sm">Continuous monitoring of accuracy and consistency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-bold text-lg mb-2">Final Validation</h4>
              <p className="text-gray-600 text-sm">Client review and feedback integration</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose CoreNet for AI & ML?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">👥</div>
              <h4 className="font-bold text-xl mb-2">Expert Teams</h4>
              <p className="text-indigo-100">Trained professionals with domain expertise across industries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔧</div>
              <h4 className="font-bold text-xl mb-2">Advanced Tools</h4>
              <p className="text-indigo-100">Cutting-edge annotation platforms and ML technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <h4 className="font-bold text-xl mb-2">Production-Ready</h4>
              <p className="text-indigo-100">Consistent, precise, and validated datasets for deployment</p>
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
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </main>
  );
}