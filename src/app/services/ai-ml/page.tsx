"use client";
import { useRouter } from "next/navigation";

export default function AIMLPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
      {/* Hero Section */}
      <div className="relative h-[560px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-[1.03]"
          style={{ backgroundImage: "url('/hero_background/ai_ml_hero.jpg')" }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-800/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

        {/* Subtle highlight blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 w-full items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_18px_rgba(232,121,249,0.9)]" />
                AI & ML SERVICES
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] mb-4">
                AI & ML{" "}
                <span className="text-fuchsia-200">Solutions</span>
              </h1>

              <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Build smart systems that automate work, uncover insights, and
                improve decision making. We deliver AI solutions from data
                pipelines to model deployment with security and scalability.
              </p>

              {/* Quick highlights */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Predictive Analytics",
                  "Computer Vision",
                  "NLP & Chatbots",
                  "MLOps Deployment",
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
                  className="px-6 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold transition shadow-lg shadow-fuchsia-600/20"
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
                  Practical AI that improves outcomes, with measurable KPIs and
                  secure deployment.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { k: "Data", v: "Pipelines Ready" },
                    { k: "Models", v: "Train + Tune" },
                    { k: "Deployment", v: "MLOps + APIs" },
                    { k: "Security", v: "Access Control" },
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
                  <span>Built for ops, sales, finance, support</span>
                  <span className="text-fuchsia-200 font-semibold">
                    Production ready
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
              <div className="text-xs font-semibold tracking-wider text-fuchsia-700 uppercase mb-2">
                Why choose CoreNet
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                AI that fits your business, not the other way around
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We start with your workflows and data. Then we design AI systems
                that reduce manual effort, improve accuracy, and unlock insights
                you can act on.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From forecasting and recommendations to automation and anomaly
                detection, we build solutions that can be monitored, improved,
                and trusted.
              </p>

              {/* Use cases row */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  ["📈", "Forecasting"],
                  ["🛒", "Recommendations"],
                  ["🧾", "Document AI"],
                  ["💬", "Chatbots"],
                  ["🛡️", "Fraud Detection"],
                  ["🔎", "Anomaly Alerts"],
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
              <div className="absolute -inset-6 bg-fuchsia-100/60 rounded-full blur-2xl" />

              <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-br from-fuchsia-50 to-white">
                <video
                  src="/hero_background/ai_ml_showcase.mp4"
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
                src="/hero_background/ai_ml_about.jpg"
                alt="About AI & ML"
                className="w-full h-[320px] object-cover"
              />
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wider text-fuchsia-700 uppercase mb-2">
                About AI & ML
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Turn data into decisions with reliable AI
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We help teams adopt AI safely by building clean datasets,
                selecting the right models, and deploying with monitoring. You
                get a clear approach that works long term.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Whether you are starting from scratch or improving an existing
                model, we deliver outcomes that are measurable and maintainable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Dark overlay services grid */}
        <section className="mt-10 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 overflow-hidden">
            <video
              src="/hero_background/ai_ml_dark_bg.mp4"
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
                Explore AI capabilities
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Everything you need for AI in production
              </h3>
              <p className="text-slate-200 leading-relaxed">
                From data prep to deployment and monitoring, we build AI systems
                that run reliably and improve over time.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-center">
              {[
                {
                  icon: "🧠",
                  title: "ML Model Development",
                  desc: "Build, train, and evaluate models aligned to your business goals.",
                },
                {
                  icon: "💬",
                  title: "NLP & Chatbots",
                  desc: "Support bots, internal copilots, and document based Q&A systems.",
                },
                {
                  icon: "👁️",
                  title: "Computer Vision",
                  desc: "Image and video intelligence for quality checks and automation.",
                },
                {
                  icon: "📊",
                  title: "Predictive Analytics",
                  desc: "Forecasting, churn prediction, demand planning, and optimization.",
                },
                {
                  icon: "🗂️",
                  title: "Data Engineering",
                  desc: "ETL pipelines, data cleaning, warehousing, and feature stores.",
                },
                {
                  icon: "⚙️",
                  title: "MLOps Deployment",
                  desc: "Deploy models with versioning, monitoring, and CI CD pipelines.",
                },
                {
                  icon: "🔐",
                  title: "AI Security & Governance",
                  desc: "Access controls, audit logs, and compliance ready workflows.",
                },
                {
                  icon: "🧪",
                  title: "PoC to Production",
                  desc: "Rapid prototypes that convert into production grade solutions.",
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
                  <button className="text-fuchsia-200 text-sm font-semibold hover:text-white transition">
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
              AI & ML Implementation Options
            </h3>
            <p className="text-gray-600 mt-2">
              Choose an approach that matches your data maturity and timelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Proof of Concept",
                sub: "2 to 4 weeks",
                desc: "Validate an AI use case quickly with clear outputs and success metrics.",
                points: ["Fast delivery", "Clear KPI targets", "Go no go decision"],
                color: "from-fuchsia-500 to-violet-600",
              },
              {
                title: "Production AI",
                sub: "End to end build",
                desc: "Data pipelines, model training, deployment, monitoring, and iteration.",
                points: ["MLOps ready", "Version control", "Monitoring dashboards"],
                color: "from-violet-600 to-indigo-700",
              },
              {
                title: "AI Automation",
                sub: "Workflow focused",
                desc: "Automate repetitive tasks using NLP, vision, and smart routing logic.",
                points: ["Reduce manual work", "Faster turnaround", "Higher accuracy"],
                color: "from-fuchsia-500 to-violet-600",
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
                src="/hero_background/ai_data_center.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wider text-fuchsia-700 uppercase mb-2">
                Data + MLOps
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Reliable pipelines. Stable models. Real outcomes.
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                We ensure your AI does not stop at experimentation. With MLOps,
                monitoring, and versioning, your models stay reliable as data
                changes.
              </p>

              <p className="text-gray-700 leading-relaxed">
                You get a system that can be audited, improved, and scaled
                without breaking workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-700 p-8 md:p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-extrabold mb-2">
                Ready to add AI to your business?
              </h3>
              <p className="text-white/85 leading-relaxed">
                Share your data sources and use case. We will propose the right
                model approach, timeline, and rollout plan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-fuchsia-700 font-semibold py-3 px-8 rounded-xl hover:bg-fuchsia-50 transition"
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
