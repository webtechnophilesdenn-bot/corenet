"use client";
import { useRouter } from "next/navigation";

export default function ManagedITPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      {/* Hero Section */}
      <div className="relative h-[560px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-[1.03]"
          style={{
            backgroundImage: "url('/hero_background/managed_it_hero.jpg')",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-800/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

        {/* Subtle highlight blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 w-full items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.9)]" />
                MANAGED IT SERVICES
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] mb-4">
                Managed IT{" "}
                <span className="text-sky-200">Support</span>
              </h1>

              <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Keep systems stable, secure, and supported with proactive
                monitoring, patching, backups, and responsive helpdesk. We run
                day to day IT so your team can focus on the business.
              </p>

              {/* Quick highlights */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "24/7 Monitoring",
                  "Helpdesk & Support",
                  "Patching & Security",
                  "Backup & Recovery",
                ].map((t) => (
                  <div
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-sm"
                  >
                    {t}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/contact")}
                  className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold transition shadow-lg shadow-sky-600/20"
                >
                  Request a Quote
                </button>

                <button
                  onClick={() => router.push("/contact")}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold transition"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>

            {/* Right: Glass info card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 md:p-7 shadow-2xl">
                <div className="text-white font-bold text-lg mb-1">
                  What you get with CoreNet
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-5">
                  Proactive support, predictable SLAs, and continuous security
                  improvements with clear ownership and reporting.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { k: "Support", v: "Helpdesk Ready" },
                    { k: "Ops", v: "Monitoring" },
                    { k: "Security", v: "Patching + AV" },
                    { k: "Recovery", v: "Backup + DR" },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="rounded-2xl bg-white/10 border border-white/10 p-4"
                    >
                      <div className="text-xs text-slate-200">{item.k}</div>
                      <div className="text-white font-extrabold">{item.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-slate-200 text-xs">
                  <span>Built for SMBs, enterprises, and multi site teams</span>
                  <span className="text-sky-200 font-semibold">
                    Always supported
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        {/* Section 1: Clean split */}
        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-semibold tracking-wider text-sky-700 uppercase mb-2">
                Why choose CoreNet
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Managed IT that keeps teams productive and systems protected
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We reduce downtime, handle support requests quickly, and keep
                systems patched and monitored. Your team gets consistent IT
                operations without constant firefighting.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From endpoints and networks to servers and cloud, we manage day
                to day operations with clear SLAs, reporting, and ownership.
              </p>

              {/* Use cases row */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  ["🧑‍💻", "Helpdesk"],
                  ["📡", "Monitoring"],
                  ["🧩", "Patch Management"],
                  ["🛡️", "Endpoint Security"],
                  ["🗂️", "Backups"],
                  ["🏢", "Multi Site IT"],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-gray-100 bg-slate-50 p-3 text-center"
                  >
                    <div className="text-2xl mb-1">{icon}</div>
                    <div className="text-xs font-semibold text-gray-800">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual box */}
            <div className="relative">
              <div className="absolute -inset-6 bg-sky-100/60 rounded-full blur-2xl" />

              <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-br from-sky-50 to-white">
                <video
                  src="/hero_background/managed_it_showcase.mp4"
                  className="w-full h-[500px] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: About split */}
        <section className="mt-12 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden border border-gray-100">
              <img
                src="/hero_background/managed_it_about.jpeg"
                alt="About Managed IT"
                className="w-full h-[420px] object-contain"
              />
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wider text-sky-700 uppercase mb-2">
                About Managed IT
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Run IT like a service, not a daily emergency
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We standardize operations, handle support, and keep
                infrastructure healthy. That includes patching, monitoring,
                backups, access controls, and incident response.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Whether you need full managed IT or support for specific
                components, we keep things simple, measurable, and accountable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Dark overlay services grid */}
        <section className="mt-10 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 overflow-hidden">
            <video
              src="/hero_background/it_consulting.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          <div className="absolute inset-0 bg-slate-950/70" />

          <div className="relative z-10 p-6 md:p-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-xs font-semibold tracking-wider text-slate-200 uppercase mb-2">
                Explore managed IT capabilities
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Everything you need for stable IT operations
              </h3>
              <p className="text-slate-200 leading-relaxed">
                Monitoring, support, patching, and recovery practices designed
                for uptime, security, and predictable response.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-center">
              {[
                {
                  icon: "🎧",
                  title: "Helpdesk & Support",
                  desc: "Ticketing, remote support, and clear response timelines.",
                },
                {
                  icon: "📡",
                  title: "Monitoring & Alerts",
                  desc: "Uptime, performance, logs, and on-call alerting.",
                },
                {
                  icon: "🧩",
                  title: "Patch Management",
                  desc: "OS and application patching with planned maintenance windows.",
                },
                {
                  icon: "🛡️",
                  title: "Endpoint Security",
                  desc: "AV, EDR basics, device hardening, and policy enforcement.",
                },
                {
                  icon: "🗂️",
                  title: "Backup & Recovery",
                  desc: "Backups, restore testing, retention policies, and DR readiness.",
                },
                {
                  icon: "🌐",
                  title: "Network Management",
                  desc: "VPN, firewall policies, Wi-Fi, and secure remote access.",
                },
                {
                  icon: "🔐",
                  title: "Access & Identity",
                  desc: "User lifecycle, roles, MFA, and least-privilege controls.",
                },
                {
                  icon: "📄",
                  title: "Runbooks & SOPs",
                  desc: "Documentation that stays updated for reliable support.",
                },
              ].map((o) => (
                <div
                  key={o.title}
                  className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition"
                >
                  <div className="text-2xl mb-3">{o.icon}</div>
                  <div className="text-white font-bold text-base mb-2">
                    {o.title}
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed mb-3">
                    {o.desc}
                  </p>
                  <button className="text-sky-200 text-sm font-semibold hover:text-white transition">
                    Read More →
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="px-7 py-3 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Options */}
        <section className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-extrabold text-gray-900">
              Managed IT Service Options
            </h3>
            <p className="text-gray-600 mt-2">
              Choose a model that matches your size, complexity, and coverage
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Essential Support",
                sub: "For small teams",
                desc: "Helpdesk, basic monitoring, and monthly health checks.",
                points: [
                  "Ticket support",
                  "Basic monitoring",
                  "Monthly reporting",
                ],
                color: "from-sky-500 to-cyan-600",
              },
              {
                title: "Managed Operations",
                sub: "Full coverage",
                desc: "Monitoring, patching, backups, security controls, and SLAs.",
                points: ["Patching + backups", "SLAs", "Security baseline"],
                color: "from-cyan-600 to-sky-700",
              },
              {
                title: "Enterprise Managed IT",
                sub: "Multi site + governance",
                desc: "Structured governance, documentation, escalations, and audits.",
                points: ["Governance", "Runbooks", "Audit readiness"],
                color: "from-sky-500 to-cyan-600",
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className={`rounded-3xl p-8 text-white shadow-lg bg-gradient-to-br ${tier.color}`}
              >
                <div className="mb-3">
                  <h4 className="text-2xl font-extrabold">{tier.title}</h4>
                  <p className="text-white/80 text-sm">{tier.sub}</p>
                </div>

                <p className="text-white/90 mb-5 leading-relaxed">
                  {tier.desc}
                </p>

                <div className="space-y-2">
                  {tier.points.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5">✓</span>
                      <span className="text-white/90">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Video split */}
        <section className="mt-12 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden border border-gray-100">
              <video
                className="w-full h-[420px] object-cover"
                src="/hero_background/better_together.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wider text-sky-700 uppercase mb-2">
                Operations + Security
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Proactive monitoring. Faster support. Clear ownership.
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We keep your systems healthy with monitoring, patch cycles, and
                clear response. Your team gets visibility, stability, and
                predictable support.
              </p>

              <p className="text-gray-700 leading-relaxed">
                You get an IT operation that can scale, be audited, and improve
                continuously without disrupting day to day work.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-700 p-8 md:p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-extrabold mb-2">
                Want Managed IT that stays calm under pressure?
              </h3>
              <p className="text-white/85 leading-relaxed">
                Share your setup, team size, and support needs. We will propose
                a managed IT plan with coverage, SLAs, and a clean operating
                model.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-sky-700 font-semibold py-3 px-8 rounded-xl hover:bg-sky-50 transition"
              >
                Request a Quote
              </button>

              <button
                onClick={() => router.push("/contact")}
                className="bg-white/10 border border-white/20 text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/15 transition"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
