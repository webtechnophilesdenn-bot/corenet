import {
  FiCpu,
  FiDatabase,
  FiShare2,
  FiBarChart2,
  FiShuffle,
  FiShield,
  FiCloud,
  FiWifi,
  FiSettings,
} from "react-icons/fi";

export default function MulticloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[520px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-contain
               bg-[position:60%_60%]
               md:bg-[position:100%_40%]
               bg-[length:70%]
               md:bg-[length:32%]"
          style={{
            backgroundImage: "url('/hero_background/multicloud.png')",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-8 h-full flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            MULTI CLOUD SERVICES
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Multicloud Infrastructure Solutions
          </h1>

          <p className="text-base md:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Leverage the power of multiple cloud platforms with seamless
            integration, unified management, and optimized performance across
            AWS, Azure, Google Cloud, and private cloud environments.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Vendor Lock-In Avoidance",
              "Unified Cloud Management",
              "Cost Optimized Workloads",
              "Enterprise Grade Security",
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
            <a
              href="/contact-us"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
            >
              Request a Quote
            </a>

            <a
              href="/contact-us"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold transition"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-2 sm:px-3 md:px-4 py-10">
        {/* Section 1: Clean intro (like ref 1) */}
        <section className="pb-10">
          <div className="max-w-6xl">
            <div className="text-xs font-semibold tracking-wider text-purple-700 uppercase mb-2">
              Multi cloud services
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Harness the power of multiple clouds without complexity
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Diversifying your cloud services across multiple providers can
              significantly enhance your organization’s capabilities. CoreNet
              helps you design a multi cloud strategy that fits your workloads
              and budget while keeping security and performance strong.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Whether it’s IaaS, PaaS, hybrid, or a blend across AWS, Azure,
              GCP, and private cloud, we build a cohesive environment that stays
              manageable and cost efficient.
            </p>
          </div>
        </section>

        {/* Section 2: Flexibility + illustration split (like ref 1 + last image layout) */}
        <section className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Flexibility and scalability
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Multi cloud makes your business more flexible. Instead of relying
              on one vendor for everything, you choose the best cloud per use
              case. That gives better control over pricing, security, and
              performance.
            </p>

            <div className="space-y-3 mt-6">
              {[
                "Avoid vendor lock in and improve negotiating power",
                "Pick the best region and service for each workload",
                "Scale per application without re platforming pain",
                "Improve resilience with multi region redundancy",
                "Avoid vendor lock in and improve negotiating power",
                "Pick the best region and service for each workload",
                "Scale per application without re platforming pain",
                "Improve resilience with multi region redundancy",
              ].map((t, i) => (
                <div key={`${i}-${t}`} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-600" />
                  <p className="text-gray-700 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="text-lg font-bold text-gray-900 mb-2">
                Enhanced performance
              </div>
              <p className="text-gray-700 leading-relaxed mb-5">
                Multi cloud can also boost performance and user experience by
                placing workloads closer to users, reducing latency, and
                balancing across providers.
              </p>

              {/* You can change this image path */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-purple-50 border border-gray-100">
                <img
                  src="/hero_background/multi_cloud.jpg"
                  alt="Multi cloud illustration"
                  className="w-full h-[220px] md:h-[260px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Migrate with confidence (like ref 2) */}
        <section className="mt-12 rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div className="relative">
              <div className="absolute -inset-10 bg-purple-100/60 blur-2xl rounded-full" />
              <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-gray-100 overflow-hidden">
                {/* You can change this image path */}
                <img
                  src="/hero_background/migration.gif"
                  alt="Migration providers"
                  className="w-full h-[520px] object-contain"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Migrate with confidence
              </h3>
              <p className="text-lg font-semibold text-purple-700 mb-4">
                Let our experts handle everything
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you’re using cPanel, Plesk, WordPress, or any other
                control panel, our team can migrate workloads and services into
                a multi cloud environment with minimal downtime.
              </p>

              <div className="space-y-3">
                {[
                  "All files, emails, and databases",
                  "No surprise limits, clear scope",
                  "Minimal to zero downtime approach",
                  "Schedule migration at your convenience",
                  "Preview and validation before go live",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-purple-700 font-bold">✓</span>
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex justify-center px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
                >
                  Schedule Migration
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center px-6 py-3 rounded-xl border border-purple-200 text-purple-700 font-semibold hover:bg-purple-50 transition"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Blue benefits strip (like ref 3) */}
        {/* Section 4: Blue benefits strip (SAME like screenshot) */}
        <section className="mt-12 w-full overflow-hidden">
          <div
            className="relative w-full"
            style={{
              backgroundImage: "url('/hero_background/blue-network-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-blue-950/55" />

            <div className="relative z-10 px-6 sm:px-5 md:px-7 py-12">
              {/* Title */}
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  <span className="text-orange-400">Cloud Services</span> are
                  the best solution for
                  <br className="hidden md:block" />
                  your business
                </h2>
                <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full" />
              </div>

              {/* 5 columns x 2 rows on desktop */}
              <div className="mt-14 max-w-6xl mx-auto">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    { title: "Reduced Costs", icon: "💲" },
                    { title: "Improved Efficiency", icon: "⚡" },
                    { title: "Increased Productivity", icon: "⏱️" },
                    { title: "Easy Maintainance", icon: "⚙️" }, // screenshot spelling
                    { title: "Collaboration & Resource Pooling", icon: "👥" },
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className={`relative px-10 py-10 text-center ${
                        idx !== 0 ? "lg:border-l lg:border-white/15" : ""
                      }`}
                    >
                      {/* dotted line between columns */}
                      {idx !== 0 && (
                        <span className="absolute left-0 top-1/2 hidden lg:block h-24 -translate-y-1/2 border-l border-dashed border-white/25" />
                      )}

                      <div className="text-3xl mb-4 text-white/90">
                        {item.icon}
                      </div>
                      <div className="text-xl font-extrabold text-white leading-snug">
                        {item.title}
                      </div>

                      {/* dotted line under row 1 */}
                      <span className="absolute left-10 right-10 bottom-0 hidden lg:block border-b border-dashed border-white/25" />
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    { title: "Scalability", icon: "↗️" },
                    { title: "Sustainability", icon: "🌱" },
                    { title: "Backup", icon: "🗄️" },
                    { title: "Data Security", icon: "🛡️" },
                    { title: "Disaster Recovery", icon: "💾" },
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

        {/* Section 5: Why work with us + partner logos (like ref 4) */}
        <section className="mt-12">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">
              Why work with us
            </h3>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We help organizations plan, migrate, and run multi cloud
              environments with clear governance, strong security, and
              measurable cost control. You get a team that stays with you from
              design to operations.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {[
              { name: "Google Cloud Partner", img: "/hero_background/gcp.png" },
              { name: "Chrome Enterprise", img: "/hero_background/chrome.png" },
              {
                name: "Microsoft Partner",
                img: "/hero_background/microsoft.png",
              },
            ].map((p) => (
              <div key={p.name} className="flex justify-center">
                <img src={p.img} alt={p.name} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Complete 360 solutions (like ref 5 grid) */}
        <section className="mt-26">
          {/* Heading */}
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-4xl font-extrabold text-gray-900">
              Complete 360° solutions
            </h3>
            <div className="w-14 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: FiCpu,
                title: "Compute",
                desc: "Scalable and customizable virtual machines and containers across clouds.",
              },
              {
                icon: FiDatabase,
                title: "Storage and Databases",
                desc: "Fast, secure storage and managed databases for applications.",
              },
              {
                icon: FiShare2,
                title: "Networking",
                desc: "High quality cloud networking, VPN, and interconnect solutions.",
              },
              {
                icon: FiBarChart2,
                title: "Big Data",
                desc: "Multiple services for big data storage and analytics at scale.",
              },
              {
                icon: FiShuffle,
                title: "Data Transfer",
                desc: "Fast and secure migration, replication, and sync workflows.",
              },
              {
                icon: FiShield,
                title: "Identity & Security",
                desc: "Centralized IAM, encryption, policies, and compliance controls.",
              },
              {
                icon: FiCloud,
                title: "API Platform & Ecosystems",
                desc: "API management and integrations that help businesses grow.",
              },
              {
                icon: FiWifi,
                title: "Internet of Things",
                desc: "Secure device connectivity and data processing at scale.",
              },
              {
                icon: FiSettings,
                title: "Management Tools",
                desc: "Monitoring, logging, and governance through unified dashboards.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <item.icon className="text-orange-500 w-10 h-10" />
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: GCP advantages style split (like ref 6) */}
        <section className="mt-14 rounded-3xl bg-gradient-to-br from-slate-50 to-purple-50 border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                Multi cloud advantages that you can measure
              </h3>

              <div className="space-y-3">
                {[
                  "Future proof infrastructure planning",
                  "Global availability with region choice",
                  "Complete solutions for IaaS and PaaS",
                  "Powerful data and analytics options",
                  "Scalable and secure by design",
                  "Cost effective workload placement",
                  "Higher performance through smart routing",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-purple-700 font-bold">•</span>
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-3 rounded-xl transition"
                >
                  Connect with us now
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center border border-purple-200 text-purple-700 font-semibold px-7 py-3 rounded-xl hover:bg-white/60 transition"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-purple-200/40 blur-2xl rounded-full" />
              <div className="relative rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                {/* You can change this image path */}
                <img
                  src="/hero_background/advantages.png"
                  alt="Advantages"
                  className="w-full h-[340px] object-contain p-6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-14 rounded-3xl bg-white border border-gray-100 shadow-sm p-8 md:p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Ready to embrace multi cloud?
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-7">
            Let us design and implement a multi cloud strategy that maximizes
            flexibility and performance while keeping security and cost under
            control.
          </p>
          <a
            href="/contact"
            className="inline-flex justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition"
          >
            Schedule Consultation
          </a>
        </section>
      </div>
    </main>
  );
}
