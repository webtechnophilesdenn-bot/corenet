"use client";
import { useRouter } from "next/navigation";

export default function ISPServicesPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[520px] overflow-hidden">
        {/* Background Image */}
        <div
          className=" absolute inset-0 bg-no-repeat bg-contain bg-[position:60%_60%] md:bg-[position:95%_100%] md:bg-[length:30%] bg-[length:70%]"
          style={{ backgroundImage: "url('/hero_background/isp.png')" }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 h-full flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            ISP SERVICES
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Enterprise Internet & Connectivity
          </h1>

          <p className="text-base md:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Reliable, high-speed internet with carrier-grade infrastructure,
            proactive monitoring, and SLA-backed uptime for growing and
            enterprise businesses.
          </p>

          {/* Quick highlights */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "99.9% Uptime SLA",
              "Up to 10 Gbps",
              "24/7 Monitoring",
              "Fast Installation",
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
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => router.push("/contact")}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
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
      </div>

      {/* Main Content (REPLACED) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        {/* Section 1: Clean split like ref 1 */}
        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase mb-2">
                Why choose CoreNet ISP
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Keeping your business connected is our top priority
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                CoreNet delivers enterprise-grade internet and networking built
                for business-critical performance. Expect stable connectivity,
                predictable latency, and consistent throughput.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From dedicated fiber to scalable bandwidth plans, we provide the
                foundation your teams need to run, grow, and stay online.
              </p>

              {/* Use cases row */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  ["📡", "Streaming Events"],
                  ["🎮", "Gaming"],
                  ["👥", "Meetings"],
                  ["📅", "Corporate Events"],
                  ["💻", "Work From Home"],
                  ["🎓", "Online Classes"],
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

            {/* Right globe style box */}
            <div className="relative">
              <div className="absolute -inset-6 bg-blue-100/50 rounded-full blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-br from-blue-50 to-white">
                {/* Replace this image with your own if needed */}
                <img
                  src="/hero_background/isp_globe.png"
                  alt="Connectivity"
                  className="w-full h-[500px] object-contain p-6"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden border border-gray-100">
              <video
                className="w-full h-[320px] object-cover"
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
                Our Network
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Fast, reliable internet built for real work
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                CoreNet ISP delivers stable connectivity for homes, offices, and
                growing businesses. From streaming and calls to cloud apps and
                large file work, our network is designed to stay smooth during
                peak hours too.
              </p>

              <p className="text-gray-700 leading-relaxed">
                With strong routing, proactive monitoring, and quick support,
                you get speed you can feel and uptime you can trust.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Dark overlay services grid like ref 2 */}
        <section className="mt-10 relative overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero_background/isp_dark_bg.png')",
            }}
          />
          <div className="absolute inset-0 bg-slate-950/70" />

          <div className="relative z-10 p-6 md:p-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-xs font-semibold tracking-wider text-slate-200 uppercase mb-2">
                Explore broadband and enterprise connectivity
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Built for stable performance
              </h3>
              <p className="text-slate-200 leading-relaxed">
                Connectivity options for offices, homes, events, and multi-site
                operations. Designed for reliability, speed, and predictable
                uptime.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-center">
              {[
                {
                  icon: "🌐",
                  title: "Leased Line Services",
                  desc: "Dedicated connectivity with SLA-backed uptime for mission-critical work.",
                },
                {
                  icon: "⚡",
                  title: "Bandwidth for Events",
                  desc: "Temporary high capacity internet for venues, exhibitions, and corporate events.",
                },
                {
                  icon: "📶",
                  title: "WiFi Services",
                  desc: "Enterprise WiFi setup, guest network, controller management, and security.",
                },
                {
                  icon: "🛡️",
                  title: "IP / VPN",
                  desc: "Secure private connectivity for branches, remote teams, and protected access.",
                },
                {
                  icon: "🏢",
                  title: "Business Broadband",
                  desc: "Reliable broadband plans for teams with scalable bandwidth options.",
                },
                {
                  icon: "📈",
                  title: "Bulk Bandwidth",
                  desc: "High volume bandwidth for campuses, buildings, and multi-tenant sites.",
                },
                {
                  icon: "🧩",
                  title: "LAN / WAN Setup",
                  desc: "Structured network setup and management for offices, warehouses, and sites.",
                },
                {
                  icon: "🧰",
                  title: "IT Support Services",
                  desc: "On-call support and proactive monitoring to keep you always online.",
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

        {/* Section 3: Connectivity tiers (gradient cards) */}
        <section className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-extrabold text-gray-900">
              Connectivity Solutions
            </h3>
            <p className="text-gray-600 mt-2">
              Choose the plan that matches your scale and performance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Fiber Optic",
                sub: "Up to 10 Gbps",
                desc: "Dedicated fiber connectivity with symmetrical speeds for performance-driven teams.",
                points: [
                  "Dedicated bandwidth",
                  "99.9% uptime SLA",
                  "24/7 monitoring",
                ],
                color: "from-blue-400 to-blue-500",
              },
              {
                title: "Broadband",
                sub: "Up to 1 Gbps",
                desc: "Flexible high-speed plans for growing businesses and multiple locations.",
                points: [
                  "Scalable bandwidth",
                  "Cost-effective plans",
                  "Quick deployment",
                ],
                color: "from-cyan-600 to-cyan-800",
              },
              {
                title: "SD-WAN",
                sub: "Multi-site",
                desc: "Smart routing with centralized control for stable connectivity across branches.",
                points: [
                  "Centralized management",
                  "Automatic failover",
                  "Enhanced security",
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

        {/* Section 4: About split like ref 3 */}
        <section className="mt-12 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden border border-gray-100">
              <img
                src="/hero_background/isp_about.png"
                alt="About ISP"
                className="w-full h-[320px] object-cover"
              />
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase mb-2">
                About CoreNet ISP
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Quality, stability, flexibility, and dedication
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our solutions are designed for consistent performance across
                enterprise environments. Whether you need dedicated
                connectivity, managed infrastructure, or multi-branch stability,
                we build solutions that scale with your business.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From setup to monitoring, we focus on uptime, speed, and support
                so your teams stay productive without interruptions.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-700 p-8 md:p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-extrabold mb-2">
                Ready to upgrade your connectivity?
              </h3>
              <p className="text-white/85 leading-relaxed">
                Speak to our experts and get a tailored ISP solution designed
                for your business needs.
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
