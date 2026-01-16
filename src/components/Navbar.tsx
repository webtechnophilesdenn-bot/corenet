'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Industries (UPDATED)
  const industriesMenu = [
    { name: "Healthcare & Life Sciences", href: "/industries/healthcare" },
    { name: "Financial Services", href: "/industries/financial-services" },
    { name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
    { name: "Manufacturing & Industrial", href: "/industries/manufacturing" },
    { name: "Education & EdTech", href: "/industries/education-edtech" },
    { name: "Real Estate & Construction", href: "/industries/real-estate-construction" },
    { name: "Others", href: "/industries/others" },
  ];

  // Services (SAME STRUCTURE, NO DUPLICATES)
  const servicesMenu = [
    {
      title: "INFRASTRUCTURE",
      items: [
        { name: "ISP", href: "/services/isp" },
        { name: "Multi-Cloud", href: "/services/multi-cloud" },
        { name: "Network Solutions", href: "/services/network-solutions" },
      ],
    },
    {
      title: "DEVELOPMENT & AI",
      items: [
        { name: "Development", href: "/services/app-development" },
        { name: "AI & ML", href: "/services/ai-ml" },
      ],
    },
    {
      title: "SECURITY & CONSULTING",
      items: [
        { name: "Cyber Security", href: "/services/cybersecurity" },
        { name: "IT Consulting", href: "/services/it-consulting" },
      ],
    },
    {
      title: "OPERATIONS & DATA",
      items: [
        { name: "DevOps", href: "/services/devops" },
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "Managed IT", href: "/services/managed-it" },
      ],
    },
  ];

  // Resources (ORDER UPDATED: Blog first, then Case Study)
  const resourcesMenu = [
    { name: "Blog", href: "/blog" },
    { name: "Case Study", href: "/case-studies" },
  ];

  // Helper component for dropdown links
  const NavItem = ({ name, href }: { name: string; href: string }) => (
    <Link
      href={href}
      className="flex items-center gap-2 py-1.5 text-white hover:text-blue-300 transition-colors group"
      onClick={() => {
        setActiveDropdown(null);
        setIsOpen(false);
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:bg-blue-300 shrink-0" />
      <span className="text-sm font-medium leading-tight">{name}</span>
    </Link>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f5c] shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/" className="px-2 text-white hover:text-blue-300 font-medium text-sm transition-all">
                Home
              </Link>

              <Link href="/about" className="px-2 text-white hover:text-blue-300 font-medium text-sm transition-all">
                About
              </Link>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("Industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2 py-2 text-white hover:text-blue-300 font-medium text-sm flex items-center gap-1">
                  Industries
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "Industries" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "Industries" && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-[#1a1f5c] shadow-2xl rounded-lg py-4 px-6 w-[320px] border border-blue-800/30">
                      <div className="space-y-1">
                        {industriesMenu.map((item, index) => (
                          <NavItem key={`${item.name}-${index}`} {...item} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown (4 Columns) */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("Services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2 py-2 text-white hover:text-blue-300 font-medium text-sm flex items-center gap-1">
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "Services" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "Services" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-[#1a1f5c] shadow-2xl rounded-lg py-6 px-8 w-[900px] border border-blue-800/30">
                      <div className="grid grid-cols-4 gap-8">
                        {servicesMenu.map((section) => (
                          <div key={section.title}>
                            <h3 className="text-blue-400 text-[10px] font-bold mb-3 uppercase tracking-widest">
                              {section.title}
                            </h3>
                            <div className="space-y-1">
                              {section.items.map((item, itemIndex) => (
                                <NavItem key={`${section.title}-${item.name}-${itemIndex}`} {...item} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("Resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2 py-2 text-white hover:text-blue-300 font-medium text-sm flex items-center gap-1">
                  Resources
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "Resources" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "Resources" && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-[#1a1f5c] shadow-2xl rounded-lg py-4 px-6 w-[220px] border border-blue-800/30">
                      <div className="space-y-1">
                        {resourcesMenu.map((item, index) => (
                          <NavItem key={`${item.name}-${index}`} {...item} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Careers (moved outside, Company removed) */}
              <Link href="/careers" className="px-2 text-white hover:text-blue-300 font-medium text-sm transition-all">
                Careers
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="lg:hidden bg-[#1a1f5c] border-t border-blue-800/30 h-screen overflow-y-auto pb-20">
            <div className="px-6 py-6 space-y-6">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block text-white font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-white font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/careers"
                  className="block text-white font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
              </div>

              <div>
                <p className="text-blue-400 text-xs font-bold uppercase mb-3">Industries</p>
                {industriesMenu.map((item, index) => (
                  <NavItem key={`${item.name}-${index}`} {...item} />
                ))}
              </div>

              <div>
                <p className="text-blue-400 text-xs font-bold uppercase mb-3">Services</p>
                {servicesMenu.map((sec) => (
                  <div key={sec.title} className="mb-4 ml-2">
                    <p className="text-[10px] text-white/50 mb-2">{sec.title}</p>
                    {sec.items.map((item, itemIndex) => (
                      <NavItem key={`${sec.title}-${item.name}-${itemIndex}`} {...item} />
                    ))}
                  </div>
                ))}
              </div>

              <div>
                <p className="text-blue-400 text-xs font-bold uppercase mb-3">Resources</p>
                {resourcesMenu.map((item, index) => (
                  <NavItem key={`${item.name}-${index}`} {...item} />
                ))}
              </div>

              <Link
                href="/contact"
                className="block w-full py-3 bg-blue-600 text-white text-center rounded-lg font-bold"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
