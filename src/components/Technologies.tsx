'use client';

import React, { useState, useEffect, useRef } from 'react';

const Technologies = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const technologies = [
    { 
      name: "AWS", 
      category: "Cloud",
      color: "from-orange-500 to-orange-600",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.226.726-1.644.487-.417 1.133-.626 1.955-.626.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36C2.096 4.2 2.528 4.152 3 4.152c.95 0 1.644.215 2.091.647.439.43.662 1.085.662 1.963v2.586l.01-.012zm-3.236 1.212c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.279-.513.056-.191.096-.423.096-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.815.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.119.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.822-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.71.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.368.383-.368.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
        </svg>
      )
    },
    { 
      name: "Azure", 
      category: "Cloud",
      color: "from-blue-500 to-blue-600",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.483 21.3H2.468L12.05 3.401a.686.686 0 01.612-.375h4.377zm5.403-1.338l6.296-7.194h5.348a.67.67 0 00.596-.96L18.646 2.67a.685.685 0 00-.596-.358h-3.646L6.05 14.381l4.836 5.581z"/>
        </svg>
      )
    },
    { 
      name: "Google Cloud", 
      category: "Cloud",
      color: "from-red-500 to-yellow-500",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.19 2.38a9.344 9.344 0 00-9.234 6.893c.053-.02-.055.013 0 0-1.176.528-2.037 1.548-2.485 2.93-.366 1.172-.423 2.169-.255 3.309.445 3.04 3.034 5.457 6.1 5.671l.003-.072c.667.028 1.657.07 2.318.07L8.545 21c.016-.003 7.896 0 7.896 0a6.503 6.503 0 004.729-2.027l.003-.002a6.502 6.502 0 001.881-4.862 6.502 6.502 0 00-2.095-4.494l.003.002A9.349 9.349 0 0012.19 2.38z"/>
        </svg>
      )
    },
    { 
      name: "Cisco", 
      category: "Networking",
      color: "from-blue-600 to-cyan-600",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.914 0l-1.001 2.869-.945-2.869zm-2.94 8.925L7.06 14.54l1.915-5.616zm4.052 0L14.94 14.54l-1.915-5.616zm4.891-7.26l-.906 2.759.974-2.759zm-9.834 0l-.974 2.759.906-2.759zm12.609 9.467l-1.659 4.206 1.659-4.206zM3.316 11.132l-1.659 4.206 1.659-4.206zm18.368 5.868c-1.118 2.843-3.565 7-3.565 7l-2.901-7zm-15.368 0L3.415 24s-2.447-4.157-3.565-7z"/>
        </svg>
      )
    },
    { 
      name: "VMware", 
      category: "Virtualization",
      color: "from-gray-600 to-gray-700",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.629 9.554L1.694 24h5.197l.927-2.747h5.206L14.005 24h5.2L14.27 9.554zm13.651-1.358l-1.964 5.818-1.964-5.818h-4.763L15.525 24h4.583l3.936-11.648v-.003l.032-.072.036-.081h-4.582zm-9.851.02l-1.769 5.233-1.77-5.233H2.128l3.823 11.332h4.255l3.823-11.332z"/>
        </svg>
      )
    },
    { 
      name: "Microsoft", 
      category: "Software",
      color: "from-green-500 to-blue-500",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z"/>
        </svg>
      )
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            technologies.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider">
            Technology Partners
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Technologies We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work With</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Certified partnerships with leading technology providers.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Card Container */}
              <div className="relative bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center h-28 hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                <div className="absolute inset-0.5 bg-white rounded-xl -z-10"></div>

                {/* Icon Container */}
                <div className={`relative w-10 h-10 mb-2 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300`}>
                  {tech.icon}
                </div>

                {/* Company Name */}
                <p className="text-xs font-bold text-gray-700 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {tech.name}
                </p>

                {/* Verified Badge */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-xs font-medium">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>And many more technology partners...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;