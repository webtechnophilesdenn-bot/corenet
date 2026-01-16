"use client";

import {
  FiCode,
  FiSmartphone,
  FiGlobe,
  FiServer,
  FiDatabase,
  FiCloud,
  FiShield,
  FiCpu,
  FiGitBranch,
  FiSettings,
  FiLayers,
  FiBarChart2,
} from "react-icons/fi";

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 items-center h-[520px] gap-8">
            {/* LEFT: Image */}
            <div className="relative h-full flex items-center justify-center">
              <img
                src="/hero_background/development.png"
                alt="Development"
                className="w-full max-w-md object-contain"
              />
            </div>

            {/* RIGHT: Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                DEVELOPMENT SERVICES
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Full Stack Development Solutions
              </h1>

              <p className="text-slate-200 max-w-xl leading-relaxed">
                We build modern web apps, mobile apps, APIs, dashboards, and
                cloud-ready systems with clean code, strong security, and
                scalable architecture.
              </p>

              {/* Highlights */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Web + Mobile Apps",
                  "API & Backend Systems",
                  "Cloud Ready Architecture",
                  "Secure & Scalable",
                ].map((t) => (
                  <div
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm"
                  >
                    {t}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact-us"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-semibold transition"
                >
                  Request a Quote
                </a>

                <a
                  href="/contact-us"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 font-semibold transition"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-2 sm:px-3 md:px-4 py-10">
        {/* Section 1: Clean intro */}
        <section className="pb-10">
          <div className="max-w-6xl">
            <div className="text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
              Development services
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Build products that are fast, reliable, and easy to scale
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              From idea to launch, we help businesses build software that users
              love. Whether it is a website, an internal system, an e-commerce
              platform, or a custom app, we deliver clean architecture and
              performance that holds up under real usage.
            </p>

            <p className="text-gray-700 leading-relaxed">
              You get structured development, clear milestones, documented
              handover, and long-term support to keep everything running
              smoothly.
            </p>
          </div>
        </section>

        {/* Section 2: Process + illustration split */}
        <section className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              End to end delivery
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We handle planning, UI, development, testing, deployment, and
              maintenance. You stay in control with clear updates, clean
              timelines, and measurable progress.
            </p>

            <div className="space-y-3 mt-6">
              {[
                "Requirement gathering and scope lock",
                "UI and UX design aligned to your brand",
                "Frontend and backend development",
                "API integrations and payment gateways",
                "Testing, optimization, and security checks",
                "Deployment and post launch support",
                "Version control and release management",
              ].map((t, i) => (
                <div key={`${i}-${t}`} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-600" />
                  <p className="text-gray-700 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50 border border-gray-100">
                <img
                  src="/hero_background/development_illustration.jpg"
                  alt="Development illustration"
                  className="w-full h-[220px] md:h-[360px] object-fit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Launch with confidence */}
        <section className="mt-12 rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div className="relative">
              <div className="absolute -inset-10 bg-emerald-100/60 blur-2xl rounded-full" />

              <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-gray-100 overflow-hidden">
                <video
                  src="/hero_background/dev_launch.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[520px] object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Launch with confidence
              </h3>
              <p className="text-lg font-semibold text-emerald-700 mb-4">
                We build. We test. We ship. We support.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Whether it is a fresh product or a rebuild, our team follows a
                clean delivery process with code reviews, testing, deployment
                pipelines, and monitoring so you can go live without stress.
              </p>

              <div className="space-y-3">
                {[
                  "Sprint based delivery and tracking",
                  "Staging environment before production",
                  "CI CD pipeline setup",
                  "Performance and security validation",
                  "Monitoring and ongoing improvements",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-700 font-bold">✓</span>
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex justify-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition"
                >
                  Start a Project
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center px-6 py-3 rounded-xl border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Benefits strip (same layout style) */}
        <section className="mt-12 w-full overflow-hidden">
          <div
            className="relative w-full"
            style={{
              backgroundImage: "url('/hero_background/blue-network-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-slate-950/55" />

            <div className="relative z-10 px-6 sm:px-5 md:px-7 py-12">
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  <span className="text-orange-400">Development</span> that
                  helps
                  <br className="hidden md:block" />
                  your business move faster
                </h2>
                <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full" />
              </div>

              <div className="mt-14 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    { title: "Faster Launch", icon: "🚀" },
                    { title: "Better UX", icon: "✨" },
                    { title: "Scalable Code", icon: "📈" },
                    { title: "Easy Maintainance", icon: "⚙️" },
                    { title: "Secure Systems", icon: "🛡️" },
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className={`relative px-10 py-10 text-center ${
                        idx !== 0 ? "lg:border-l lg:border-white/15" : ""
                      }`}
                    >
                      {idx !== 0 && (
                        <span className="absolute left-0 top-1/2 hidden lg:block h-24 -translate-y-1/2 border-l border-dashed border-white/25" />
                      )}

                      <div className="text-3xl mb-4 text-white/90">
                        {item.icon}
                      </div>
                      <div className="text-xl font-extrabold text-white leading-snug">
                        {item.title}
                      </div>

                      <span className="absolute left-10 right-10 bottom-0 hidden lg:block border-b border-dashed border-white/25" />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    { title: "Automation", icon: "🤖" },
                    { title: "Analytics Ready", icon: "📊" },
                    { title: "API Integration", icon: "🔌" },
                    { title: "Cloud Deploy", icon: "☁️" },
                    { title: "Support", icon: "🧰" },
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className={`relative px-5 py-5 text-center ${
                        idx !== 0 ? "lg:border-l lg:border-white/15" : ""
                      }`}
                    >
                      {idx !== 0 && (
                        <span className="absolute left-0 top-1/2 hidden lg:block h-24 -translate-y-1/2 border-l border-dashed border-white/25" />
                      )}

                      <div className="text-3xl mb-4 text-white/90">
                        {item.icon}
                      </div>
                      <div className="text-xl font-extrabold text-white leading-snug">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Why work with us */}
        <section className="mt-12">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">
              Why work with us
            </h3>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We build production ready software with clean code, secure
              practices, and a long-term mindset. You get a team that thinks
              beyond launch, focusing on performance, security, and scale.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {[
              { name: "Agile Delivery", img: "/hero_background/agile.png" },
              {
                name: "Secure by Design",
                img: "/hero_background/security.png",
              },
              { name: "Cloud Ready", img: "/hero_background/cloud.png" },
            ].map((p) => (
              <div key={p.name} className="flex justify-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-20 md:h-44 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Complete 360 solutions (development types) */}
        <section className="mt-26">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-4xl font-extrabold text-gray-900">
              Complete 360° development
            </h3>
            <div className="w-14 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: FiGlobe,
                title: "Web Development",
                desc: "Modern websites and web apps with fast performance and clean UI.",
              },
              {
                icon: FiSmartphone,
                title: "Mobile App Development",
                desc: "Android and iOS apps with scalable backend and smooth UX.",
              },
              {
                icon: FiServer,
                title: "Backend Development",
                desc: "APIs, microservices, authentication, and scalable server architecture.",
              },
              {
                icon: FiDatabase,
                title: "Database Design",
                desc: "Schema planning, optimization, backups, and performance tuning.",
              },
              {
                icon: FiCloud,
                title: "Cloud Development",
                desc: "Cloud ready apps with deployment, scaling, and environment setup.",
              },
              {
                icon: FiShield,
                title: "Security Hardening",
                desc: "Secure coding, access control, and best practices for production safety.",
              },
              {
                icon: FiCpu,
                title: "Automation & DevOps",
                desc: "CI CD, pipelines, infrastructure as code, and reliable deployments.",
              },
              {
                icon: FiGitBranch,
                title: "System Integrations",
                desc: "Payment gateways, CRMs, ERPs, WhatsApp, email, and third party APIs.",
              },
              {
                icon: FiLayers,
                title: "UI/UX & Product Design",
                desc: "Product thinking, wireframes, design systems, and conversion friendly UI.",
              },
              {
                icon: FiSettings,
                title: "Maintenance & Support",
                desc: "Bug fixes, enhancements, upgrades, monitoring, and long-term care.",
              },
              {
                icon: FiBarChart2,
                title: "Dashboards & Analytics",
                desc: "Admin panels, reporting dashboards, KPIs, and tracking setup.",
              },
              {
                icon: FiCode,
                title: "Custom Software",
                desc: "Tailor made systems built around your workflows and operations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="text-orange-500 w-10 h-10" />
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Advantages split */}
        <section className="mt-14 rounded-3xl bg-gradient-to-br from-slate-50 to-emerald-50 border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                Development advantages that you can measure
              </h3>

              <div className="space-y-3">
                {[
                  "Clean codebase and maintainable structure",
                  "Optimized performance and faster load times",
                  "Security best practices from day one",
                  "Scalable architecture for growth",
                  "Clear documentation and handover",
                  "Stable deployments and monitoring",
                  "Long term support and improvements",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-700 font-bold">•</span>
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3 rounded-xl transition"
                >
                  Connect with us now
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center border border-emerald-200 text-emerald-700 font-semibold px-7 py-3 rounded-xl hover:bg-white/60 transition"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-emerald-200/40 blur-2xl rounded-full" />
              <div className="relative rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                <img
                  src="/hero_background/dev_advantages.jpg"
                  alt="Development advantages"
                  className="w-full h-[340px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-14 rounded-3xl bg-white border border-gray-100 shadow-sm p-8 md:p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Ready to build something solid?
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-7">
            Tell us what you are building. We will recommend the right stack,
            architecture, and delivery plan to launch fast and scale safely.
          </p>
          <a
            href="/contact"
            className="inline-flex justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-xl transition"
          >
            Schedule Consultation
          </a>
        </section>
      </div>
    </main>
  );
}
