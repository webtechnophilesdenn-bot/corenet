"use client";

import {
  FiUsers,
  FiTarget,
  FiClipboard,
  FiBarChart2,
  FiSettings,
  FiCloud,
  FiShield,
  FiServer,
  FiDatabase,
  FiRefreshCw,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

export default function ITConsultingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 items-center h-[620px] gap-8">
            {/* LEFT: Image */}
            <div className="relative h-full flex items-center justify-center">
              <img
                src="/hero_background/it_consulting.png"
                alt="IT Consulting"
                className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
              />
            </div>

            {/* RIGHT: Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                IT CONSULTING
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Strategy, Architecture, and Execution that works
              </h1>

              <p className="text-slate-200 max-w-xl leading-relaxed">
                We help businesses plan, modernize, and run their IT with clear
                roadmaps, solid architecture, and practical recommendations that
                reduce cost, improve reliability, and strengthen security.
              </p>

              {/* Highlights */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "IT Strategy & Roadmaps",
                  "Cloud & Modernization",
                  "Security & Governance",
                  "Operations & Cost Control",
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
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold transition"
                >
                  Request a Consultation
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
            <div className="text-xs font-semibold tracking-wider text-indigo-700 uppercase mb-2">
              IT consulting services
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Make IT decisions with clarity, not guesswork
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you are scaling, cutting cost, migrating to cloud, or
              improving security, we help you make decisions that match your
              goals and your current reality. No fluff. Clear priorities and a
              plan you can execute.
            </p>

            <p className="text-gray-700 leading-relaxed">
              You get a strong foundation: architecture review, documentation,
              vendor evaluation, and a step by step roadmap that your team can
              follow.
            </p>
          </div>
        </section>

        {/* Section 2: Process + illustration split */}
        <section className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              From assessment to execution
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We map where you are today, identify risks and bottlenecks, and
              then design a roadmap that improves performance, security, and
              cost. If you want, we can also implement and manage the rollout.
            </p>

            <div className="space-y-3 mt-6">
              {[
                "IT audit and current state assessment",
                "Infrastructure and application architecture review",
                "Security posture review and quick wins",
                "Cloud readiness and migration planning",
                "Vendor and licensing evaluation",
                "Roadmap, milestones, and implementation plan",
                "Documentation, handover, and operating procedures",
              ].map((t, i) => (
                <div key={`${i}-${t}`} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-600" />
                  <p className="text-gray-700 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 border border-gray-100">
                <img
                  src="/hero_background/it_consulting_illustration.jpeg"
                  alt="IT consulting illustration"
                  className="w-full h-[220px] md:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Improve with confidence */}
        <section className="mt-12 rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div className="relative">
              <div className="absolute -inset-10 bg-indigo-100/60 blur-2xl rounded-full" />

              <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-gray-100 overflow-hidden">
                <video
                  src="/hero_background/it_consulting.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[520px] object-cover"
                  preload="metadata"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Improve with confidence
              </h3>
              <p className="text-lg font-semibold text-indigo-700 mb-4">
                Stable systems, controlled cost, better security
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We focus on outcomes: fewer outages, faster support resolution,
                cleaner architecture, and better visibility into cost and risk.
                You get recommendations that can actually be implemented.
              </p>

              <div className="space-y-3">
                {[
                  "Clear roadmap with phases and priority order",
                  "Cost visibility and optimization suggestions",
                  "Security and governance controls",
                  "Operational runbooks and documentation",
                  "Ongoing advisory support when needed",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-indigo-700 font-bold">✓</span>
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
                >
                  Book a Consultation
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center px-6 py-3 rounded-xl border border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 transition"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Benefits strip */}
        <section className="mt-12 w-full overflow-hidden">
          <div
            className="relative w-full"
            style={{
              backgroundImage: "url('/hero_background/it_consulting.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-slate-950/55" />

            <div className="relative z-10 px-6 sm:px-5 md:px-7 py-12">
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  <span className="text-orange-400">IT Consulting</span> that
                  helps you
                  <br className="hidden md:block" />
                  build stable, scalable operations
                </h2>
                <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full" />
              </div>

              <div className="mt-14 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    { title: "Clear Roadmap", icon: "🧭" },
                    { title: "Lower Cost", icon: "💲" },
                    { title: "Better Uptime", icon: "📶" },
                    { title: "Easy Maintainance", icon: "⚙️" },
                    { title: "Risk Control", icon: "🛡️" },
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
                    { title: "Security", icon: "🔐" },
                    { title: "Cloud Ready", icon: "☁️" },
                    { title: "Clean Docs", icon: "📄" },
                    { title: "Better Processes", icon: "🧩" },
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
              We give practical advice and build plans you can execute. Our
              focus is stability, security, and long-term efficiency, not big
              slides with no action.
            </p>
          </div>

          {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {[
              {
                name: "Architecture",
                img: "/hero_background/architecture.png",
              },
              { name: "Governance", img: "/hero_background/governance.png" },
              {
                name: "Optimization",
                img: "/hero_background/optimization.png",
              },
            ].map((p) => (
              <div key={p.name} className="flex justify-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-20 md:h-44 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div> */}
        </section>

        {/* Section 6: Complete 360 solutions (consulting types) */}
        <section className="mt-26">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-4xl font-extrabold text-gray-900">
              Complete 360° IT consulting
            </h3>
            <div className="w-14 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: FiTarget,
                title: "IT Strategy & Roadmap",
                desc: "Plan priorities, budgets, and timelines with a clear execution path.",
              },
              {
                icon: FiLayers,
                title: "Architecture Review",
                desc: "Review current infrastructure and applications to reduce complexity.",
              },
              {
                icon: FiCloud,
                title: "Cloud Consulting",
                desc: "Cloud readiness, migration planning, and cost optimization guidance.",
              },
              {
                icon: FiShield,
                title: "Security & Governance",
                desc: "Policies, access control, compliance readiness, and risk management.",
              },
              {
                icon: FiServer,
                title: "Infrastructure Planning",
                desc: "Servers, storage, networking, and capacity planning for growth.",
              },
              {
                icon: FiDatabase,
                title: "Data & Backup Strategy",
                desc: "Backup plans, recovery testing, retention policies, and reliability.",
              },
              {
                icon: FiSettings,
                title: "Operations & ITSM",
                desc: "Processes, SLAs, ticketing structure, and service improvements.",
              },
              {
                icon: FiRefreshCw,
                title: "Modernization",
                desc: "Upgrade legacy systems, improve performance, and reduce downtime.",
              },
              {
                icon: FiClipboard,
                title: "Documentation & SOPs",
                desc: "Clear documentation, handover notes, and standard operating procedures.",
              },
              {
                icon: FiUsers,
                title: "Vendor Management",
                desc: "Evaluate vendors, compare options, and manage service quality.",
              },
              {
                icon: FiBarChart2,
                title: "Cost Optimization",
                desc: "Reduce waste, right size resources, and improve licensing efficiency.",
              },
              {
                icon: FiCheckCircle,
                title: "Audit Readiness",
                desc: "Prepare evidence, controls, and checklists for internal or external audits.",
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
        <section className="mt-14 rounded-3xl bg-gradient-to-br from-slate-50 to-indigo-50 border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                Consulting advantages that you can measure
              </h3>

              <div className="space-y-3">
                {[
                  "Clear priorities and roadmap that matches your goals",
                  "Better visibility into cost, risk, and operations",
                  "Architecture that scales without constant firefighting",
                  "Improved security posture and governance structure",
                  "Clean documentation and handover for teams",
                  "Vendor clarity and fewer hidden costs",
                  "Ongoing advisory support when needed",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-indigo-700 font-bold">•</span>
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3 rounded-xl transition"
                >
                  Connect with us now
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center border border-indigo-200 text-indigo-700 font-semibold px-7 py-3 rounded-xl hover:bg-white/60 transition"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-indigo-200/40 blur-2xl rounded-full" />
              <div className="relative rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                <img
                  src="/hero_background/it_consulting_advantages.jpg"
                  alt="IT consulting advantages"
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-14 rounded-3xl bg-white border border-gray-100 shadow-sm p-8 md:p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Need a clear IT plan for 2026?
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-7">
            Share your current setup and goals. We will propose a roadmap that
            reduces risk, improves uptime, and keeps costs under control.
          </p>
          <a
            href="/contact"
            className="inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition"
          >
            Schedule Consultation
          </a>
        </section>
      </div>
    </main>
  );
}
