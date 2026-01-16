"use client";
import { useRouter } from "next/navigation";

export default function NetworkSolutionsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[560px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-[1.03]"
          style={{ backgroundImage: "url('/hero_background/network2.jpg')" }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-800/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

        {/* Subtle highlight blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 w-full items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
                NETWORK SOLUTIONS
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] mb-4">
                Secure Network{" "}
                <span className="text-cyan-200">Infrastructure</span>
              </h1>

              <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Design, deploy, and manage robust LAN, WAN, WiFi, and security
                networks with enterprise-grade hardware, proactive monitoring,
                and clean documentation for long-term stability.
              </p>

              {/* Quick highlights */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "LAN / WAN Design",
                  "Enterprise WiFi",
                  "Firewall & Security",
                  "24/7 Support",
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
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg shadow-blue-600/20"
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

            {/* Right: Glass info card (new look) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 md:p-7 shadow-2xl">
                <div className="text-white font-bold text-lg mb-1">
                  What you get with CoreNet
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-5">
                  Clean architecture, secure access policies, and stable
                  performance across teams and sites.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { k: "Segmentation", v: "VLAN Ready" },
                    { k: "WiFi", v: "Coverage Plan" },
                    { k: "Security", v: "Firewall + VPN" },
                    { k: "Support", v: "On-call & Managed" },
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
                  <span>
                    Designed for offices, retail, warehouses, multi-branch
                  </span>
                  <span className="text-cyan-200 font-semibold">
                    Secure by design
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
              <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase mb-2">
                Why choose CoreNet
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                A network that stays fast, stable, and secure
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We build structured networks that reduce downtime, remove
                bottlenecks, and keep your teams connected across offices,
                warehouses, retail spaces, and remote locations.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From routing and switching to WiFi coverage and firewall
                policies, we design and implement networks that perform under
                real load.
              </p>

              {/* Use cases row */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  ["🏢", "Office Networks"],
                  ["🏬", "Retail Stores"],
                  ["🏭", "Warehouses"],
                  ["🎥", "CCTV & Access"],
                  ["👨‍💻", "Remote Teams"],
                  ["🧾", "POS Systems"],
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
              <div className="absolute -inset-6 bg-blue-100/50 rounded-full blur-2xl" />

              <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-br from-blue-50 to-white">
                <video
                  src="/hero_background/better_together.mp4"
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
                src="/hero_background/network2.jpg"
                alt="About Network Solutions"
                className="w-full h-[320px] object-contain"
              />
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase mb-2">
                About Network Solutions
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Structured networks that scale with your business
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We focus on reliable architecture, secure access, and clean
                network management. Whether it is a new setup or an upgrade, we
                deliver stable connectivity your teams can trust daily.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From planning to deployment and support, we keep things simple,
                documented, and ready for growth.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Dark overlay services grid */}
        <section className="mt-10 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 overflow-hidden">
            <video
              src="/hero_background/network_dark_bg.mp4"
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
                Explore core network services
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Everything your network needs
              </h3>
              <p className="text-slate-200 leading-relaxed">
                From planning and implementation to upgrades and ongoing
                support, we keep your network reliable and secure.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-center">
              {[
                {
                  icon: "🔀",
                  title: "LAN Setup",
                  desc: "Structured switching, VLANs, segmentation, and performance tuning.",
                },
                {
                  icon: "🛰️",
                  title: "WAN & Branch Links",
                  desc: "Branch connectivity design with redundancy and secure routing.",
                },
                {
                  icon: "📶",
                  title: "Enterprise WiFi",
                  desc: "Coverage planning, controller setup, guest WiFi, and access control.",
                },
                {
                  icon: "🛡️",
                  title: "Firewall & Security",
                  desc: "UTM firewall policies, VPNs, content filtering, and threat protection.",
                },
                {
                  icon: "🧠",
                  title: "Network Design",
                  desc: "Topology planning, capacity sizing, and best-practice architecture.",
                },
                {
                  icon: "🔧",
                  title: "Network Upgrade",
                  desc: "Hardware refresh, speed improvements, and downtime-minimized migration.",
                },
                {
                  icon: "📡",
                  title: "Cabling & Rack Setup",
                  desc: "Structured cabling guidance, patching, labeling, and rack organization.",
                },
                {
                  icon: "🧰",
                  title: "Managed Support",
                  desc: "Monitoring, troubleshooting, and preventive maintenance for uptime.",
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
                  <button className="text-blue-200 text-sm font-semibold hover:text-white transition">
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

        {/* Section 3: Solution cards */}
        <section className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-extrabold text-gray-900">
              Network Architecture Options
            </h3>
            <p className="text-gray-600 mt-2">
              Choose what fits your current environment and growth plans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Office LAN",
                sub: "Switching + VLANs",
                desc: "Optimized internal network for stable performance across teams and departments.",
                points: [
                  "VLAN segmentation",
                  "Fast switching",
                  "Clean documentation",
                ],
                color: "from-blue-400 to-blue-500",
              },
              {
                title: "Enterprise WiFi",
                sub: "Coverage + Control",
                desc: "Secure WiFi with proper coverage planning and managed access policies.",
                points: [
                  "Guest WiFi",
                  "Controller setup",
                  "Roaming optimization",
                ],
                color: "from-cyan-600 to-cyan-800",
              },
              {
                title: "Secure WAN",
                sub: "Multi-branch",
                desc: "Connect branches and remote teams with VPN and best-practice firewall security.",
                points: [
                  "Site-to-site VPN",
                  "Policy control",
                  "Redundancy planning",
                ],
                color: "from-blue-400 to-blue-500",
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
                src="/hero_background/data_center.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase mb-2">
                Network Engineering
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Designed properly, managed proactively
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We plan the topology, segment your traffic, and apply security
                best practices so your network stays smooth for users and safe
                for systems.
              </p>

              <p className="text-gray-700 leading-relaxed">
                You get clean documentation, labeled cabling guidance, and a
                setup that is easy to scale when you add branches or teams.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-700 p-8 md:p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-extrabold mb-2">
                Want a stronger, cleaner network setup?
              </h3>
              <p className="text-white/85 leading-relaxed">
                Share your site details and requirements. We will propose the
                right design, hardware, and rollout plan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition"
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
