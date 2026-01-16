"use client";

import {
  FiShield,
  FiLock,
  FiEye,
  FiAlertTriangle,
  FiServer,
  FiCloud,
  FiWifi,
  FiDatabase,
  FiSettings,
  FiCpu,
  FiFileText,
  FiKey,
} from "react-icons/fi";

export default function CyberSecurityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50">
      {/* Hero Section */}
      <div className="relative bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 items-center h-[520px] gap-8">
            {/* LEFT: Image */}
            <div className="relative h-full flex items-center justify-center">
              <img
                src="/hero_background/cyber_security.png"
                alt="Cyber Security"
                className="w-full max-w-md object-contain"
              />
            </div>

            {/* RIGHT: Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                CYBER SECURITY SERVICES
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Secure Systems, Networks, and Data
              </h1>

              <p className="text-slate-200 max-w-xl leading-relaxed">
                Protect your business with layered security, proactive
                monitoring, and best practice hardening across endpoints,
                networks, servers, and cloud environments.
              </p>

              {/* Highlights */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "VAPT & Risk Assessment",
                  "Firewall & Endpoint Security",
                  "Cloud Security",
                  "Compliance & Monitoring",
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
                  className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 font-semibold transition"
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
            <div className="text-xs font-semibold tracking-wider text-rose-700 uppercase mb-2">
              Cyber security services
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Reduce risk with practical, layered security
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Security is not one tool. It is a system. We help you identify
              gaps, harden your infrastructure, and set up monitoring so threats
              are stopped early and incidents are handled fast.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From networks and endpoints to cloud and applications, we apply
              best practices that fit your environment and keep your teams
              productive.
            </p>
          </div>
        </section>

        {/* Section 2: Process + illustration split */}
        <section className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Assessment to protection, end to end
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We start with discovery, then implement controls that match your
              risk profile. You get clear reporting, prioritized fixes, and a
              security roadmap.
            </p>

            <div className="space-y-3 mt-6">
              {[
                "Asset discovery and security baseline review",
                "Vulnerability assessment and penetration testing (VAPT)",
                "Firewall rules, segmentation, and secure remote access",
                "Endpoint protection and patch management guidance",
                "Identity and access controls (MFA, least privilege)",
                "Security logging, alerts, and monitoring setup",
                "Documentation, training, and incident response guidance",
              ].map((t, i) => (
                <div key={`${i}-${t}`} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-rose-600" />
                  <p className="text-gray-700 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-rose-50 border border-gray-100">
                <img
                  src="/hero_background/cyber_security_illustration.jpeg"
                  alt="Cyber security illustration"
                  className="w-full h-[220px] md:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Protect with confidence */}
        <section className="mt-12 rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div className="relative">
              <div className="absolute -inset-10 bg-rose-100/60 blur-2xl rounded-full" />

              <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-gray-100 overflow-hidden">
                <video
                  src="/hero_background/cyber_protect.mp4"
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
                Protect with confidence
              </h3>
              <p className="text-lg font-semibold text-rose-700 mb-4">
                Detect early. Respond fast. Recover clean.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We help you build a security posture that can handle real-world
                threats. You get practical fixes, monitoring, and clear incident
                workflows so issues do not become outages.
              </p>

              <div className="space-y-3">
                {[
                  "Prioritized remediation plan and quick wins",
                  "Secure remote access with VPN and MFA",
                  "Log collection and alerting strategy",
                  "Hardening checklists for servers and cloud",
                  "Ongoing support and periodic reviews",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-rose-700 font-bold">✓</span>
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex justify-center px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold transition"
                >
                  Book a Security Audit
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center px-6 py-3 rounded-xl border border-rose-200 text-rose-700 font-semibold hover:bg-rose-50 transition"
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
              backgroundImage: "url('/hero_background/blue-network-bg.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-slate-950/55" />

            <div className="relative z-10 px-6 sm:px-5 md:px-7 py-12">
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  <span className="text-orange-400">Cyber Security</span> that
                  protects
                  <br className="hidden md:block" />
                  your business every day
                </h2>
                <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full" />
              </div>

              <div className="mt-14 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    { title: "Reduced Risk", icon: "🛡️" },
                    { title: "Threat Detection", icon: "🚨" },
                    { title: "Secure Access", icon: "🔐" },
                    { title: "Easy Maintainance", icon: "⚙️" },
                    { title: "Data Protection", icon: "🗄️" },
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
                    { title: "Compliance Ready", icon: "📋" },
                    { title: "Backup & Recovery", icon: "💾" },
                    { title: "Firewall Control", icon: "🧱" },
                    { title: "Cloud Security", icon: "☁️" },
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
        {/* <section className="mt-12">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">
              Why work with us
            </h3>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We focus on practical security. Clear findings, prioritized fixes,
              and controls that match your business. No confusion. No noise.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {[
              { name: "VAPT Reports", img: "/hero_background/vapt.png" },
              { name: "Secure Access", img: "/hero_background/secure-access.png" },
              { name: "Monitoring", img: "/hero_background/monitoring.png" },
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
        </section> */}

        {/* Section 6: Complete 360 solutions (security types) */}
        <section className="mt-26">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-4xl font-extrabold text-gray-900">
              Complete 360° cyber security
            </h3>
            <div className="w-14 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: FiEye,
                title: "Vulnerability Assessment",
                desc: "Scan, identify, and prioritize vulnerabilities across your environment.",
              },
              {
                icon: FiAlertTriangle,
                title: "Penetration Testing",
                desc: "Simulate real attacks to validate security controls and exposure.",
              },
              {
                icon: FiShield,
                title: "Firewall & UTM Security",
                desc: "Policy setup, web filtering, IPS, VPN, and network segmentation.",
              },
              {
                icon: FiLock,
                title: "Endpoint Protection",
                desc: "Antivirus, EDR, patching guidance, and device security baselines.",
              },
              {
                icon: FiCloud,
                title: "Cloud Security",
                desc: "Secure cloud configs, IAM, storage policies, and network controls.",
              },
              {
                icon: FiServer,
                title: "Server Hardening",
                desc: "OS hardening, secure configs, updates, and least privilege access.",
              },
              {
                icon: FiWifi,
                title: "Network Security",
                desc: "Secure WiFi, segmentation, NAC basics, and access controls.",
              },
              {
                icon: FiDatabase,
                title: "Data Security",
                desc: "Encryption guidance, backups, DLP basics, and access policies.",
              },
              {
                icon: FiSettings,
                title: "Monitoring & SIEM Setup",
                desc: "Centralized logs, alerts, dashboards, and incident visibility.",
              },
              {
                icon: FiKey,
                title: "Identity & Access (IAM)",
                desc: "MFA, SSO basics, role based access, and credential hygiene.",
              },
              {
                icon: FiCpu,
                title: "Incident Response Readiness",
                desc: "Runbooks, response flow, containment steps, and recovery planning.",
              },
              {
                icon: FiFileText,
                title: "Compliance Support",
                desc: "Security policies, evidence readiness, and audit documentation.",
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
        <section className="mt-14 rounded-3xl bg-gradient-to-br from-slate-50 to-rose-50 border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                Security advantages that you can measure
              </h3>

              <div className="space-y-3">
                {[
                  "Clear risk visibility with prioritized action items",
                  "Reduced attack surface through hardening",
                  "Stronger access control with MFA and policies",
                  "Faster detection with logs and alerts",
                  "Improved resilience with backups and recovery planning",
                  "Better posture for audits and compliance",
                  "Ongoing support with periodic reviews",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-rose-700 font-bold">•</span>
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex justify-center bg-rose-600 hover:bg-rose-700 text-white font-semibold px-7 py-3 rounded-xl transition"
                >
                  Connect with us now
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center border border-rose-200 text-rose-700 font-semibold px-7 py-3 rounded-xl hover:bg-white/60 transition"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-rose-200/40 blur-2xl rounded-full" />
              <div className="relative rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                <img
                  src="/hero_background/cyber_advantages.jpeg"
                  alt="Cyber security advantages"
                  className="w-full h-[340px] object-fill"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-14 rounded-3xl bg-white border border-gray-100 shadow-sm p-8 md:p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Want to tighten your security posture?
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-7">
            Tell us about your environment. We will recommend the right audit,
            fixes, and monitoring plan to reduce risk without slowing your
            teams.
          </p>
          <a
            href="/contact"
            className="inline-flex justify-center bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-xl transition"
          >
            Schedule Consultation
          </a>
        </section>
      </div>
    </main>
  );
}
