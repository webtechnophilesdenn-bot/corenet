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
  FiTrendingUp,
  FiPieChart,
  FiSearch,
  FiGrid,
  FiActivity,
} from "react-icons/fi";

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 items-center h-[620px] gap-8">
            {/* LEFT: Image */}
            <div className="relative h-full flex items-center justify-center">
              <img
                src="/hero_background/data_analytics.jpeg"
                alt="Data Analytics"
                className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
              />
            </div>

            {/* RIGHT: Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                DATA ANALYTICS
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Turn raw data into decisions you can trust
              </h1>

              <p className="text-slate-200 max-w-xl leading-relaxed">
                We help teams collect, clean, model, and visualize data so
                leaders can act with confidence. From dashboards to predictive
                insights, our analytics work focuses on clarity, accuracy, and
                measurable business outcomes.
              </p>

              {/* Highlights */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Dashboards and BI",
                  "Data Engineering",
                  "Reporting Automation",
                  "Predictive Insights",
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
              Data analytics services
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Build reporting that is fast, reliable, and actually used
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If your reporting is slow, inconsistent, or spread across too many
              sheets, teams lose trust in data. We help you set up clean data
              pipelines, standard metrics, and dashboards that match how your
              business operates.
            </p>

            <p className="text-gray-700 leading-relaxed">
              You get a strong foundation: source mapping, data modeling,
              governance, and a step by step plan your team can run with.
            </p>
          </div>
        </section>

        {/* Section 2: Process + illustration split */}
        <section className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              From data chaos to trusted insights
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We map where data lives today, fix gaps, define metrics, and build
              a clean analytics layer. If you want, we also implement and manage
              the rollout including dashboards, access, and training.
            </p>

            <div className="space-y-3 mt-6">
              {[
                "Data discovery and current state assessment",
                "Source system mapping and KPI definition",
                "Data cleaning rules and validation checks",
                "Data modeling and analytics layer design",
                "Dashboard design and reporting automation",
                "Access control, governance, and auditability",
                "Documentation, handover, and data dictionary",
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
                  src="/hero_background/data_analytics_illustration.jpeg"
                  alt="Data analytics illustration"
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
                  src="/hero_background/data_analytics.mp4"
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
                Cleaner data, faster answers, better decisions
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We focus on outcomes: consistent metrics, faster reporting, and
                dashboards people trust. You get practical improvements that
                reduce manual work and make performance visible.
              </p>

              <div className="space-y-3">
                {[
                  "Unified dashboards with consistent KPIs",
                  "Automated reporting instead of manual spreadsheets",
                  "Data quality checks and validation rules",
                  "Governance, access control, and audit trails",
                  "Ongoing analytics support when needed",
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
              backgroundImage: "url('/hero_background/data_analytics.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-slate-950/55" />

            <div className="relative z-10 px-6 sm:px-5 md:px-7 py-12">
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  <span className="text-orange-400">Data Analytics</span> that
                  helps you
                  <br className="hidden md:block" />
                  see clearly and act faster
                </h2>
                <div className="w-16 h-1 bg-orange-400 mx-auto mt-6 rounded-full" />
              </div>

              <div className="mt-14 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    { title: "Trusted Metrics", icon: "✅" },
                    { title: "Less Manual Work", icon: "🧾" },
                    { title: "Faster Reporting", icon: "⚡" },
                    { title: "Better Visibility", icon: "👀" },
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
                    { title: "Dashboards", icon: "📊" },
                    { title: "Automation", icon: "🤖" },
                    { title: "Data Quality", icon: "🧼" },
                    { title: "Governance", icon: "📌" },
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
              We focus on business outcomes and trustworthy reporting, not
              dashboards that look good but nobody uses. Expect clean metrics,
              strong governance, and practical implementation.
            </p>
          </div>
        </section>

        {/* Section 6: Complete 360 solutions (analytics services) */}
        <section className="mt-26">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-4xl font-extrabold text-gray-900">
              Complete 360° data analytics
            </h3>
            <div className="w-14 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: FiBarChart2,
                title: "BI Dashboards",
                desc: "Executive and operational dashboards built on consistent KPIs.",
              },
              {
                icon: FiDatabase,
                title: "Data Engineering",
                desc: "Pipelines, ETL, modeling, and reliable data foundations.",
              },
              {
                icon: FiRefreshCw,
                title: "Reporting Automation",
                desc: "Automate recurring reports and reduce manual spreadsheet work.",
              },
              {
                icon: FiGrid,
                title: "Data Modeling",
                desc: "Clean metric definitions and models that scale across teams.",
              },
              {
                icon: FiSearch,
                title: "Analytics Discovery",
                desc: "Map sources, define KPIs, and identify quick wins with impact.",
              },
              {
                icon: FiShield,
                title: "Governance and Access",
                desc: "Role based access, auditability, and controlled data usage.",
              },
              {
                icon: FiTrendingUp,
                title: "Predictive Insights",
                desc: "Forecasting, trends, and practical models for decision support.",
              },
              {
                icon: FiPieChart,
                title: "Business Performance",
                desc: "Revenue, margin, funnel, and operational analytics with clarity.",
              },
              {
                icon: FiClipboard,
                title: "Data Dictionary and SOPs",
                desc: "Documentation, definitions, and runbooks your team can maintain.",
              },
              {
                icon: FiUsers,
                title: "Stakeholder Enablement",
                desc: "Training, onboarding, and adoption so dashboards get used.",
              },
              {
                icon: FiCloud,
                title: "Cloud Data Platforms",
                desc: "Guidance on warehousing, lakehouse, and scalable architectures.",
              },
              {
                icon: FiCheckCircle,
                title: "Data Quality Checks",
                desc: "Validation rules, alerts, and monitoring for trusted reporting.",
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
                Analytics advantages you can measure
              </h3>

              <div className="space-y-3">
                {[
                  "One version of truth for core business metrics",
                  "Faster reporting with less manual effort",
                  "Better visibility into performance, risk, and bottlenecks",
                  "Data quality checks that prevent wrong decisions",
                  "Governance for safe access and controlled reporting",
                  "Cleaner documentation and team handover",
                  "Ongoing analytics support when needed",
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
                  src="/hero_background/data_analytics_advantages.jpeg"
                  alt="Data analytics advantages"
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-14 rounded-3xl bg-white border border-gray-100 shadow-sm p-8 md:p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Need a clear analytics plan for 2026?
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-7">
            Share your sources, reporting needs, and goals. We will propose a
            roadmap that improves data quality, speeds up reporting, and builds
            dashboards your teams trust.
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
