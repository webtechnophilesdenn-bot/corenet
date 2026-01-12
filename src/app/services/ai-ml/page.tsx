export default function AIMLServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://set.jainuniversity.ac.in/academics/computer-science-engineering/images/MTechinArtificialIntelligence-min0810.jpg')`,
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">AI & Machine Learning Services</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto text-center leading-relaxed">
            High-quality data annotation and machine learning support services that form the foundation of accurate and reliable AI models for next-generation intelligent systems
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 mx-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Powering AI with Precision Data
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
              At CoreNet, we deliver structured, labeled datasets that meet the rigorous standards required for training, validation, and testing machine learning systems. Our teams combine domain expertise, quality assurance workflows, and scalable resources to ensure every dataset is consistent, precise, and production-ready.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              From computer vision to natural language processing, we provide comprehensive AI support services that accelerate your machine learning initiatives and ensure model accuracy.
            </p>
          </div>
        </div>

        {/* FIXED: Core Services Grid - Wider & Shorter */}
        <div className="mb-16 mx-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
            Comprehensive AI & ML Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* Data Annotation */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Data Annotation</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">
                Expert teams trained in diverse annotation methods, supported by advanced tools.
              </p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Computer Vision</span>
                </div>
                <div className="flex items-center justify-center text-xs">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>NLP</span>
                </div>
                <div className="flex items-center justify-center text-xs">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Speech Recognition</span>
                </div>
              </div>
            </div>

            {/* ML Support Services */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">ML Support Services</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">
                Comprehensive ML support with quality assurance workflows.
              </p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Model training</span>
                </div>
                <div className="flex items-center justify-center text-xs">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Dataset validation</span>
                </div>
                <div className="flex items-center justify-center text-xs">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>QA workflows</span>
                </div>
              </div>
            </div>

            {/* Transcription Services */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Transcription & Captioning</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">
                Accurate transcription services with linguistic expertise.
              </p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Audio interviews</span>
                </div>
                <div className="flex items-center justify-center text-xs">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Video content</span>
                </div>
                <div className="flex items-center justify-center text-xs">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Formatted output</span>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Project Management</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">
                End-to-end project management with quality standards.
              </p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Project oversight</span>
                </div>
                <div className="flex items-center justify-center text-xs">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Quality control</span>
                </div>
                <div className="flex items-center justify-center text-xs">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Timely delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the sections remain the same */}
        {/* Annotation Types */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-12 mb-12 mx-4 border border-white/50">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Annotation Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 bg-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-all duration-300">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-gray-800">Image Annotation</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Bounding boxes, polygons, semantic segmentation, keypoint annotation</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-all duration-300">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-gray-800">Text Annotation</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Entity recognition, sentiment analysis, text classification, intent detection</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-all duration-300">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-gray-800">Video Annotation</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Object tracking, action recognition, scene classification, temporal segmentation</p>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-12 mx-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Quality Assurance Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">1</div>
              <h4 className="font-bold text-2xl mb-4 text-gray-800">Initial Training</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Comprehensive annotator training on guidelines and tools</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">2</div>
              <h4 className="font-bold text-2xl mb-4 text-gray-800">Multi-Level Review</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Peer review and expert validation processes</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">3</div>
              <h4 className="font-bold text-2xl mb-4 text-gray-800">Quality Metrics</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Continuous monitoring of accuracy and consistency</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">4</div>
              <h4 className="font-bold text-2xl mb-4 text-gray-800">Final Validation</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Client review and feedback integration</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl p-12 mb-12 mx-4 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Why Choose CoreNet for AI & ML?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">👥</div>
              <h4 className="font-bold text-3xl mb-6">Expert Teams</h4>
              <p className="text-xl text-indigo-100 leading-relaxed">Trained professionals with domain expertise across industries</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🔧</div>
              <h4 className="font-bold text-3xl mb-6">Advanced Tools</h4>
              <p className="text-xl text-indigo-100 leading-relaxed">Cutting-edge annotation platforms and ML technologies</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">✅</div>
              <h4 className="font-bold text-3xl mb-6">Production-Ready</h4>
              <p className="text-xl text-indigo-100 leading-relaxed">Consistent, precise, and validated datasets for deployment</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-12 mx-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Build Better AI Models?
            </h2>
            <p className="text-xl mb-12 leading-relaxed">
              Let CoreNet provide the high-quality data annotation and ML support your AI projects need to succeed.
            </p>
            <button className="bg-white text-indigo-600 font-bold py-6 px-12 rounded-2xl text-xl hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
