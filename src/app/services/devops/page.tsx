"use client";
import { useRouter } from "next/navigation";

export default function DevOpsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative h-[560px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-[1.03]"
          style={{ backgroundImage: "url('/hero_background/devops_hero.jpeg')" }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-800/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

        {/* Subtle highlight blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 w-full items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
                DEVOPS SERVICES
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] mb-4">
                DevOps <span className="text-emerald-200">Automation</span>
              </h1>

              <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Ship faster with reliable CI CD, Infrastructure as Code, and
                cloud-native deployments. We build DevOps pipelines that improve
                stability, security, and delivery speed.
              </p>

              {/* Quick highlights */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "CI CD Pipelines",
                  "Kubernetes & Docker",
                  "Infrastructure as Code",
                  "Monitoring & Alerts",
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
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition shadow-lg shadow-emerald-600/20"
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
                  Automated delivery, consistent environments, and production
                  visibility with measurable reliability improvements.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { k: "Delivery", v: "CI CD Ready" },
                    { k: "Infra", v: "IaC + GitOps" },
                    { k: "Ops", v: "Monitoring" },
                    { k: "Security", v: "Policy + Secrets" },
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
                  <span>Built for product teams, ops, and engineering</span>
                  <span className="text-emerald-200 font-semibold">
                    Always deployable
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
              <div className="text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
                Why choose CoreNet
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                DevOps that makes releases faster and systems safer
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We reduce manual work in deployments, remove environment issues,
                and improve reliability through automation. Your team ships more
                often with fewer incidents.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From CI CD and containerization to IaC and monitoring, we build
                pipelines that stay consistent across staging and production.
              </p>

              {/* Use cases row */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  ["🚀", "Faster Releases"],
                  ["🧩", "Stable Environments"],
                  ["🛡️", "Security Controls"],
                  ["📦", "Containers"],
                  ["☁️", "Cloud Deployments"],
                  ["📈", "Observability"],
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
              <div className="absolute -inset-6 bg-emerald-100/60 rounded-full blur-2xl" />

              <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-br from-emerald-50 to-white">
                <video
                  src="/hero_background/devops_showcase.mp4"
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
                src="/hero_background/devops_about.jpeg"
                alt="About DevOps"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
                About DevOps
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Build a delivery system your team can trust
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We help teams standardize environments, automate deployments,
                and create clear operational runbooks. The result is fewer
                outages, faster rollouts, and better visibility.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Whether you are starting fresh or cleaning up existing systems,
                we implement DevOps that is practical, secure, and maintainable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Dark overlay services grid */}
        <section className="mt-10 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 overflow-hidden">
            <video
              src="/hero_background/devops_dark_bg.mp4"
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
                Explore DevOps capabilities
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Everything you need for DevOps in production
              </h3>
              <p className="text-slate-200 leading-relaxed">
                Automate releases, standardize infrastructure, and monitor
                systems with a DevOps setup that scales.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-center">
              {[
                {
                  icon: "🧱",
                  title: "Infrastructure as Code",
                  desc: "Terraform, CloudFormation, and Git-based environment control.",
                },
                {
                  icon: "🔁",
                  title: "CI CD Pipelines",
                  desc: "Build, test, and deploy automation with safe approvals and rollback.",
                },
                {
                  icon: "📦",
                  title: "Containers & Kubernetes",
                  desc: "Docker images, orchestration, scaling, and workload isolation.",
                },
                {
                  icon: "📡",
                  title: "Monitoring & Alerts",
                  desc: "Metrics, logs, and tracing with dashboards and on-call alerting.",
                },
                {
                  icon: "🔐",
                  title: "Secrets & Policies",
                  desc: "Secrets management, RBAC, policies, and secure runtime configs.",
                },
                {
                  icon: "☁️",
                  title: "Cloud Deployments",
                  desc: "AWS, Azure, GCP deployments with best practice architecture.",
                },
                {
                  icon: "🧯",
                  title: "Backup & DR",
                  desc: "Recovery plans, snapshots, runbooks, and disaster readiness.",
                },
                {
                  icon: "🧪",
                  title: "SRE Practices",
                  desc: "SLIs, SLOs, incident response, and reliability improvements.",
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
                  <button className="text-emerald-200 text-sm font-semibold hover:text-white transition">
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
              DevOps Implementation Options
            </h3>
            <p className="text-gray-600 mt-2">
              Choose an approach that matches your current maturity and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quick Setup",
                sub: "2 to 3 weeks",
                desc: "Start with CI CD, basic monitoring, and a clean deployment workflow.",
                points: ["Fast setup", "Best practice templates", "Clear handover"],
                color: "from-emerald-500 to-teal-600",
              },
              {
                title: "Production DevOps",
                sub: "End to end build",
                desc: "IaC, Kubernetes, pipeline hardening, security, and observability.",
                points: ["IaC + GitOps", "Rollbacks", "Dashboards + alerts"],
                color: "from-teal-600 to-cyan-700",
              },
              {
                title: "Reliability Upgrade",
                sub: "SRE focused",
                desc: "Improve uptime, reduce incidents, and optimize performance at scale.",
                points: ["SLOs + SLIs", "Incident response", "Capacity planning"],
                color: "from-emerald-500 to-teal-600",
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
              <div className="text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
                Delivery + Operations
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Automated pipelines. Observable systems. Fewer incidents.
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We ensure your deployments are repeatable and your environments
                are consistent. With monitoring, logs, and alerting, your team
                gets visibility and control.
              </p>

              <p className="text-gray-700 leading-relaxed">
                You get a system that can scale, be audited, and be improved
                without breaking delivery speed.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 p-8 md:p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-extrabold mb-2">
                Ready to ship faster with DevOps?
              </h3>
              <p className="text-white/85 leading-relaxed">
                Share your stack and current setup. We will propose the right
                pipeline, infrastructure plan, and rollout strategy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-emerald-700 font-semibold py-3 px-8 rounded-xl hover:bg-emerald-50 transition"
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
