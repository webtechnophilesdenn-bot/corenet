export default function ManagedITPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef0d38d76e79?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">Managed IT Services</h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto text-center leading-relaxed">
            24/7 IT operations with proactive monitoring and unlimited support
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 mx-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Always-On IT Operations</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
              Comprehensive managed IT services eliminating downtime with proactive monitoring, helpdesk, and infrastructure management.
            </p>
          </div>
        </div>

        <div className="mb-16 mx-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">Managed Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">24/7 Monitoring</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Proactive infrastructure monitoring</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-teal-600 mr-2">✓</span><span>Server monitoring</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-teal-600 mr-2">✓</span><span>Network monitoring</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-teal-600 mr-2">✓</span><span>Application monitoring</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Helpdesk Support</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Unlimited end-user support</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span>L1-L3 support</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span>Remote support</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-blue-600 mr-2">✓</span><span>Ticket management</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Patch Management</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Automated patch deployment</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-emerald-600 mr-2">✓</span><span>Windows updates</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-emerald-600 mr-2">✓</span><span>Server patching</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-emerald-600 mr-2">✓</span><span>Compliance reporting</span></div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 h-[320px]">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Backup & Recovery</h3>
              <p className="text-gray-600 mb-4 text-center text-sm leading-tight">Enterprise backup solutions</p>
              <div className="space-y-2 px-2">
                <div className="flex items-center justify-center text-xs"><span className="text-orange-600 mr-2">✓</span><span>Cloud backup</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-orange-600 mr-2">✓</span><span>Disaster recovery</span></div>
                <div className="flex items-center justify-center text-xs"><span className="text-orange-600 mr-2">✓</span><span>Immutable backups</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-emerald-700 rounded-2xl shadow-2xl p-12 mx-4 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Focus on Your Business, Not IT</h2>
            <button className="bg-white text-teal-600 font-bold py-6 px-12 rounded-2xl text-xl hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Get Managed IT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
