export default function NetworkSolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617898085392-4fa61292cd3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">Network Solutions</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto text-center leading-relaxed">
            High-performance, secure, and scalable network infrastructure for the digital enterprise
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Same structure with network-specific content, icons, and colors */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 mx-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Next-Generation Networking</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
              Enterprise-grade network solutions with SD-WAN, SASE, and zero-trust security architecture.
            </p>
          </div>
        </div>

        <div className="mb-16 mx-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">Network Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Cards: SD-WAN, SASE, Wireless, Network Security with relevant icons */}
            {/* Same compact structure as above */}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-2xl p-12 mx-4 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Future-Proof Your Network</h2>
            <button className="bg-white text-emerald-600 font-bold py-6 px-12 rounded-2xl text-xl hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Transform Network
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
