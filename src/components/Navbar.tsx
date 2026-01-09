"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const industriesMenu = [
    { 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      name: "Energy (Oil, Gas And Renewables)", 
      href: "/industries/energy" 
    },
    { 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
      ),
      name: "Life Sciences and Healthcare", 
      href: "/industries/healthcare" 
    },
    { 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
          <path d="M8.5 2h7"/>
          <path d="M7 16h10"/>
        </svg>
      ),
      name: "Chemicals", 
      href: "/industries/chemicals" 
    },
    { 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"/>
        </svg>
      ),
      name: "Technology", 
      href: "/industries/technology" 
    },
  ];

  const servicesMenu = {
    capabilities: [
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        ),
        name: "Data & Analytics",
        href: "/services/data-analytics"
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        ),
        name: "Process Transformation",
        href: "/services/process-transformation"
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
          </svg>
        ),
        name: "Cloud & Infrastructure Modernization",
        href: "/services/cloud-infrastructure"
      },
    ],
    solutions: [
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
            <path d="M12 2v10h10"/>
          </svg>
        ),
        name: "AI & ML",
        href: "/services/ai-ml"
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="6" width="20" height="12" rx="2"/>
            <path d="M6 10h6M6 14h6M16 10h2M16 14h2"/>
          </svg>
        ),
        name: "App Development",
        href: "/services/app-development"
      },
    ]
  };

  const resourcesMenu = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      name: "Case Study",
      href: "/case-studies"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      name: "Blog",
      href: "/blog"
    },
  ];

  const companyMenu = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      name: "About Us",
      href: "/about"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      name: "Careers",
      href: "/careers"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      name: "Sponsorships",
      href: "/sponsorships"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <line x1="22" y1="11" x2="18" y2="15"/>
          <line x1="18" y1="11" x2="22" y2="15"/>
        </svg>
      ),
      name: "Leadership",
      href: "/leadership"
    },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f5c] shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
  <div className="flex items-center gap-2">
    <img 
      src="/logo.png" 
      alt="CORENET Logo" 
      className="h-10 w-auto"
    />
  </div>
</Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Industries */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("Industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2 py-2 text-white hover:text-blue-300 font-medium transition-all duration-200 flex items-center gap-1 text-base">
                  Industries
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "Industries" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "Industries" && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    onMouseEnter={() => setActiveDropdown("Industries")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-[#1a1f5c] shadow-2xl rounded-lg py-8 px-10 w-[600px] border border-blue-800/30">
                      <div className="grid grid-cols-2 gap-6">
                        {industriesMenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-4 p-4 text-white hover:text-blue-300 transition-colors rounded-lg hover:bg-blue-900/30 group"
                          >
                            <div className="flex-shrink-0 mt-0.5 text-blue-300 group-hover:text-blue-200">{item.icon}</div>
                            <span className="text-base leading-relaxed">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("Services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2 py-2 text-white hover:text-blue-300 font-medium transition-all duration-200 flex items-center gap-1 text-base">
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "Services" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "Services" && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    onMouseEnter={() => setActiveDropdown("Services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-[#1a1f5c] shadow-2xl rounded-lg py-8 px-10 w-[800px] border border-blue-800/30">
                      <div className="flex gap-16">
                        <div className="flex-1">
                          <h3 className="text-white text-xs font-bold mb-6 uppercase tracking-wider">CAPABILITIES</h3>
                          <div className="space-y-3">
                            {servicesMenu.capabilities.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-start gap-4 p-4 text-white hover:text-blue-300 transition-colors rounded-lg hover:bg-blue-900/30 group"
                              >
                                <div className="flex-shrink-0 mt-0.5 text-blue-300 group-hover:text-blue-200">{item.icon}</div>
                                <span className="text-base leading-relaxed">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white text-xs font-bold mb-6 uppercase tracking-wider">SOLUTIONS</h3>
                          <div className="space-y-3">
                            {servicesMenu.solutions.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-start gap-4 p-4 text-white hover:text-blue-300 transition-colors rounded-lg hover:bg-blue-900/30 group"
                              >
                                <div className="flex-shrink-0 mt-0.5 text-blue-300 group-hover:text-blue-200">{item.icon}</div>
                                <span className="text-base leading-relaxed">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* AAxon */}
              <Link
                href="/aaxon"
                className="px-2 py-2 text-white hover:text-blue-300 font-medium transition-all duration-200 text-base"
              >
                AAxon
              </Link>

             

              {/* Resources */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("Resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2 py-2 text-white hover:text-blue-300 font-medium transition-all duration-200 flex items-center gap-1 text-base">
                  Resources
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "Resources" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "Resources" && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    onMouseEnter={() => setActiveDropdown("Resources")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-[#1a1f5c] shadow-2xl rounded-lg py-8 px-10 w-[320px] border border-blue-800/30">
                      <div className="space-y-3">
                        {resourcesMenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-4 p-4 text-white hover:text-blue-300 transition-colors rounded-lg hover:bg-blue-900/30 group"
                          >
                            <div className="flex-shrink-0 mt-0.5 text-blue-300 group-hover:text-blue-200">{item.icon}</div>
                            <span className="text-base leading-relaxed">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Company */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("Company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2 py-2 text-white hover:text-blue-300 font-medium transition-all duration-200 flex items-center gap-1 text-base">
                  Company
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "Company" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "Company" && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    onMouseEnter={() => setActiveDropdown("Company")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-[#1a1f5c] shadow-2xl rounded-lg py-8 px-10 w-[550px] border border-blue-800/30">
                      <div className="grid grid-cols-2 gap-6">
                        {companyMenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-4 p-4 text-white hover:text-blue-300 transition-colors rounded-lg hover:bg-blue-900/30 group"
                          >
                            <div className="flex-shrink-0 mt-0.5 text-blue-300 group-hover:text-blue-200">{item.icon}</div>
                            <span className="text-base leading-relaxed">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          {/* CTA Button - Desktop */}
<div className="hidden lg:flex items-center gap-3 flex-shrink-0">
  <Link
    href="/contact"
    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm xl:text-base hover:from-blue-700 hover:to-blue-900"
  >
    Get Started
  </Link>
</div>


            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded hover:bg-blue-900/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-[#1a1f5c] z-50 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold px-4 mb-2">Industries</p>
                  <div className="space-y-1 pl-4">
                    {industriesMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-blue-200 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link href="/aaxon" className="block px-4 py-2 text-white" onClick={() => setIsOpen(false)}>
                  AAxon
                </Link>
                
                {/* <Link href="/case-studies" className="block px-4 py-2 text-white" onClick={() => setIsOpen(false)}>
                  Case Studies
                </Link> */}
              </div>

              <div className="mt-6 px-4">
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 bg-[#4a90e2] text-white rounded font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;