export default function AppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r  z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png')`,}}
        ></div>
        <div className="relative z-20 max-w-6xl mx-auto px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Mobile & App Development Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Transform your ideas into powerful mobile experiences with custom iOS and Android applications designed for today's connected world and tomorrow's innovations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Bringing Your Vision to Life
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At CoreNet, we specialize in creating engaging mobile applications that complement or substitute web solutions. Our expert team designs and develops custom mobile apps tailored to your specific requirements and business goals, ensuring compatibility across various devices and platforms.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From initial concept to app store deployment, we handle the entire development process with precision, focusing on user-centric design, seamless functionality, and long-term success.
          </p>
        </div>

        {/* Platform Development */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Platform Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* iOS Development */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">iOS Development</h3>
                  <p className="text-gray-300">iPhone & iPad Apps</p>
                </div>
              </div>
              <p className="text-gray-200 mb-4">
                Native iOS applications optimized for Apple devices, delivering exceptional performance and seamless integration with iOS features.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span className="text-gray-200">Swift & Objective-C development</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span className="text-gray-200">App Store deployment support</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span className="text-gray-200">iOS-specific feature integration</span>
                </div>
              </div>
            </div>

            {/* Android Development */}
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 0 0-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.92 10.89 1 13.88 1 17.3h22c0-3.42-1.92-6.41-5.4-7.82M8.06 14.45c-.39 0-.72-.33-.72-.72s.33-.72.72-.72c.39 0 .72.33.72.72s-.33.72-.72.72m7.88 0c-.39 0-.72-.33-.72-.72s.33-.72.72-.72c.39 0 .72.33.72.72s-.33.72-.72.72"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Android Development</h3>
                  <p className="text-green-100">Google Play Apps</p>
                </div>
              </div>
              <p className="text-green-50 mb-4">
                Robust Android applications that reach the widest mobile audience with optimal performance across diverse device ecosystems.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-green-50">Kotlin & Java development</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-green-50">Google Play Store optimization</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-green-50">Material Design implementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Platform Development */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl p-8 text-white mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Cross-Platform Development</h2>
          </div>
          <p className="text-lg text-blue-50 mb-4">
            Build once, deploy everywhere. We utilize advanced frameworks like React Native and Flutter to create mobile apps that run smoothly on both iOS and Android platforms, reducing development time and costs while maintaining native-like performance.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2">Cost-Effective</h4>
              <p className="text-blue-50">Single codebase for multiple platforms means faster, more affordable development</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2">Faster Time-to-Market</h4>
              <p className="text-blue-50">Launch on both platforms simultaneously to maximize reach and impact</p>
            </div>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Comprehensive App Development Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* User-Centric Design */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Intuitive and visually appealing interfaces with seamless navigation, easy accessibility, and engaging designs that keep users coming back.
              </p>
            </div>

            {/* Custom Development */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Development</h3>
              <p className="text-gray-600">
                Tailored mobile applications designed specifically for your business requirements, built with precision using various programming languages and frameworks.
              </p>
            </div>

            {/* Backend Integration */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Backend Integration</h3>
              <p className="text-gray-600">
                Seamless integration with backend systems, databases, APIs, and third-party services to enhance functionality and user experience.
              </p>
            </div>

            {/* Testing & QA */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Testing & QA</h3>
              <p className="text-gray-600">
                Rigorous testing throughout development to ensure optimal performance, security, and usability across all target devices and platforms.
              </p>
            </div>

            {/* App Store Deployment */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">App Store Deployment</h3>
              <p className="text-gray-600">
                Complete support throughout the submission and approval process for both Apple App Store and Google Play Store to ensure successful launch.
              </p>
            </div>

            {/* Ongoing Support */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Maintenance & Updates</h3>
              <p className="text-gray-600">
                Regular updates, bug fixes, feature enhancements, and performance optimizations to keep your app running smoothly and up to date.
              </p>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-bold text-lg mb-2">Discovery & Planning</h4>
              <p className="text-gray-600 text-sm">Define functionality, target audience, and UX requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-bold text-lg mb-2">Design & Prototype</h4>
              <p className="text-gray-600 text-sm">Create interactive prototypes for testing and feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-bold text-lg mb-2">Agile Development</h4>
              <p className="text-gray-600 text-sm">Build with continuous feedback and iteration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-bold text-lg mb-2">Launch & Support</h4>
              <p className="text-gray-600 text-sm">Deploy to stores and provide ongoing maintenance</p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose CoreNet?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold text-xl mb-2">User-Focused</h4>
              <p className="text-purple-100">Every app we build prioritizes exceptional user experience and engagement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-bold text-xl mb-2">Fast & Reliable</h4>
              <p className="text-purple-100">Optimized performance that loads within seconds across all devices</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔧</div>
              <h4 className="font-bold text-xl mb-2">Full Support</h4>
              <p className="text-purple-100">Comprehensive training and ongoing technical support with SLA</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's transform your vision into a powerful mobile experience that engages users and drives business growth.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Start Your Project Today
          </button>
        </div>
      </div>
    </main>
  );
}