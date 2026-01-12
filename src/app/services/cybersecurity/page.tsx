export default function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">Cybersecurity Services</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto text-center leading-relaxed">
            Enterprise-grade security solutions protecting your digital assets with zero-trust architecture
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 mx-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Proactive Threat Protection</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
              Comprehensive cybersecurity with AI-driven threat detection, continuous monitoring, and rapid incident response.
            </p>
          </div>
        </div>

        <div className="mb-16 mx-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Threat Detection</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">AI-powered threat hunting & EDR</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-red-600 mr-2">✓</span><span className="text-black">SIEM</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-red-600 mr-2">✓</span><span className="text-black">XDR</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-red-600 mr-2">✓</span><span className="text-black">SOAR</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Identity Protection</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Zero-trust IAM solutions</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-orange-600 mr-2">✓</span><span className="text-black">MFA</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-orange-600 mr-2">✓</span><span className="text-black">SSO</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-orange-600 mr-2">✓</span><span className="text-black">Privileged Access</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Cloud Security</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">CSPM & CWPP solutions</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span className="text-black">CSPM</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span className="text-black">CWPP</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span className="text-black">CASB</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Penetration Testing</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Red team & vulnerability assessment</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-indigo-600 mr-2">✓</span><span className="text-black">Red Team</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-indigo-600 mr-2">✓</span><span className="text-black">Web App Testing</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-indigo-600 mr-2">✓</span><span className="text-black">Cloud Testing</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-2xl p-12 mx-4 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Secure Your Digital Future</h2>
            <p className="text-xl mb-12 leading-relaxed">Proactive cybersecurity that stays ahead of threats</p>
            <button className="bg-white text-red-600 font-bold py-6 px-12 rounded-2xl text-xl hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Secure Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
