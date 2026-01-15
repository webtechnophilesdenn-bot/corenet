"use client";

import Image from "next/image";
import Link from "next/link";

export default function HealthcareLifeSciencesPage() {
  const trustBadges = [
    "Security first delivery",
    "High availability design",
    "Enterprise support",
    "Compliance ready approach",
  ];

  const stats = [
    { k: "24/7", v: "Monitoring and support" },
    { k: "99.9%", v: "Uptime focused architecture" },
    { k: "< 15 min", v: "Response for critical alerts" },
    { k: "Multi site", v: "Clinics, labs, hospitals" },
  ];

  return (
    <main className="bg-[#070A12] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero_background/healthcare.jpg"
            alt="Healthcare IT"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#070A12]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.40),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.32),transparent_45%),radial-gradient(circle_at_60%_80%,rgba(16,185,129,0.20),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,18,0.10),rgba(7,10,18,0.70),rgba(7,10,18,1))]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="text-white/70">Industries</span>
            <span className="text-white/40">/</span>
            <span className="text-white">Healthcare and Life Sciences</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Secure, reliable IT for healthcare teams
              </h1>

              <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                We modernize infrastructure, strengthen security, and improve
                performance for hospitals, clinics, labs, and healthtech teams
                with a delivery model built for uptime and compliance.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-[#070A12] px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
                >
                  Talk to an expert
                </a>
                <a
                  href="/services/cybersecurity"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  View cybersecurity services
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {trustBadges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/85"
                  >
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6">
                <div className="text-xs font-semibold text-white/70">
                  At a glance
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.k}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-2xl font-semibold">{s.k}</div>
                      <div className="mt-1 text-xs text-white/75">{s.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-[#0B1022] p-4">
                  <div className="text-xs font-semibold text-white/75">
                    Built for clinical environments
                  </div>
                  <div className="mt-2 text-xs text-white/70 leading-relaxed">
                    Access control, audit visibility, encryption, backup
                    discipline, and resilient networking that supports care
                    delivery without friction.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-white/10" />
        </div>
      </section>

      {/* BODY */}
      <div className="bg-white text-slate-900">
        {/* SECTION: Sectors we serve */}
        <section className="pt-14">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Sectors we serve
              </div>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
                Healthcare and Life Sciences, end to end
              </h2>

              <p className="mt-3 text-slate-600 leading-relaxed">
                From digital health to clinical workflows, we help healthcare
                teams improve reliability, security, and patient experience with
                enterprise grade delivery.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  t: "Digital Health",
                  d: "Patient portals, apps, and digital journeys",
                  i: <IconPlus />,
                },
                {
                  t: "Connected Care",
                  d: "Secure connectivity across teams and sites",
                  i: <IconNetwork />,
                },
                {
                  t: "Clinical Workflows",
                  d: "Stability for HIS, EMR, PACS, and ops",
                  i: <IconWorkflow />,
                },
                {
                  t: "Digital Therapeutics",
                  d: "Platform support for modern care delivery",
                  i: <IconPulse />,
                },
                {
                  t: "Interoperability",
                  d: "Integrations and clean data exchange",
                  i: <IconLink />,
                },
                {
                  t: "Managed Services",
                  d: "Monitoring, patching, and IT support",
                  i: <IconShield />,
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-700 transition">
                      <div className="h-6 w-6">{x.i}</div>
                    </div>

                    <div className="flex-1">
                      <div className="text-base font-semibold text-slate-900">
                        {x.t}
                      </div>
                      <div className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {x.d}
                      </div>

                      <Link
                        href="/contact"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-700 transition"
                      >
                        Contact us
                        <span className="transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Why Corenet (steps infographic style) */}
        <section className="bg-white">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Why Corenet
              </h2>
              <div className="mt-3 mx-auto h-[2px] w-10 bg-rose-400" />
              <p className="mt-4 max-w-4xl mx-auto text-slate-600 leading-relaxed">
                Clear delivery, strong governance, and practical security keep
                critical systems stable. We plan rollouts with predictable
                timelines, align teams through clean decision making, and build
                controls that protect data without slowing operations.
              </p>
            </div>

            <div className="mt-12">
              <WhyCorenetSteps />
            </div>
          </div>
        </section>

        {/* SECTION: Alternating image + text blocks */}
        <section className="pb-14">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="space-y-12">
              {/* Block 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-xs font-semibold text-blue-700">
                    Digital Health
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    Transforming patient care with reliable platforms
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Build modern digital experiences while keeping privacy and
                    availability at the core. From portals to backend services,
                    we engineer for performance and trust.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        t: "Secure access",
                        d: "Strong identity, least privilege, audit ready.",
                      },
                      {
                        t: "High availability",
                        d: "Redundancy and monitoring to reduce downtime.",
                      },
                      {
                        t: "Performance tuning",
                        d: "Faster apps for clinical and admin staff.",
                      },
                      {
                        t: "Backup discipline",
                        d: "Recovery plans that actually work.",
                      },
                    ].map((x) => (
                      <div
                        key={x.t}
                        className="rounded-2xl border border-slate-200 bg-white p-5"
                      >
                        <div className="font-semibold text-slate-900">
                          {x.t}
                        </div>
                        <div className="mt-1 text-sm text-slate-600">{x.d}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                    >
                      Know more
                    </a>
                    <a
                      href="/services/cybersecurity"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                    >
                      Explore security
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="/hero_background/digital_health.jpg"
                        alt="Digital health"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 2 reverse */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="/hero_background/connected-care.jpg"
                        alt="Connected care"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div>
                    <div className="text-xs font-semibold text-blue-700 mb-2">
                      Connected care
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                      A simple view of our delivery model
                    </h2>

                    <div className="w-20 h-1 bg-blue-600 mb-4" />

                    <p className="text-gray-700 text-base leading-relaxed">
                      Our delivery model is built around clarity, control, and
                      continuity. Each phase is planned to align with real
                      healthcare operations, so teams stay ready and workflows
                      stay stable. Controlled rollouts reduce risk and keep
                      performance and security consistently high.
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                      >
                        Book a call
                      </a>
                      <a
                        href="/services"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                      >
                        View services
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-xs font-semibold text-blue-700">
                    Clinical Workflows
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    Boosting patient access with stable systems
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Reduce friction in appointment, billing, and clinical
                    operations with strong uptime, monitoring, and modernized
                    infrastructure.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { t: "Monitoring", d: "Actionable alerts, not noise." },
                      { t: "Patch management", d: "Controlled, predictable updates." },
                      { t: "Incident response", d: "Fast triage with clear escalation." },
                      { t: "Service desk", d: "Support that understands priorities." },
                    ].map((x) => (
                      <div
                        key={x.t}
                        className="rounded-2xl border border-slate-200 bg-white p-5"
                      >
                        <div className="font-semibold">{x.t}</div>
                        <div className="mt-1 text-sm text-slate-600">{x.d}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href="/services/managed-it"
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                    >
                      Know more
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="/hero_background/clinical-workflows.jpg"
                        alt="Clinical workflows"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Video */}
        <section className="border-t border-slate-100 bg-[#FAFBFF]">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Video - LEFT */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                  <div className="relative aspect-video bg-black">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster="/hero_background/healthcare.jpg"
                    >
                      <source
                        src="/hero_background/clinical-workflows.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>

              {/* Text - RIGHT */}
              <div className="lg:col-span-6">
                <div>
                  <div className="text-xs font-semibold text-blue-700 mb-2">
                    Quick overview
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    A simple view of our delivery model
                  </h2>

                  <div className="w-20 h-1 bg-blue-600 mb-4" />

                  <p className="text-gray-700 text-base leading-relaxed">
                    Clear phases, controlled rollout, and ongoing support form
                    the foundation of a well planned implementation strategy
                    aligned closely with real healthcare operations. Systems are
                    introduced gradually, teams are prepared in advance, and
                    workflows stay uninterrupted throughout the transition.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                    >
                      Book a call
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                    >
                      View services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base text-blue-100 mb-6">
              Let's discuss how CORENET can help optimize your IT infrastructure
              and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#solutions"
                className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                View Solutions
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}

/* =========================
   Why Steps (component outside)
========================= */

function WhyCorenetSteps() {
  const steps = [
    {
      num: "01",
      title: "Delivery Excellence",
      desc: "Structured rollout plans with predictable timelines and clear ownership.",
    },
    {
      num: "02",
      title: "Customer Centricity",
      desc: "Solutions designed around real clinical and admin workflows, not theory.",
    },
    {
      num: "03",
      title: "Strategic Alliances",
      desc: "Trusted partners that expand capability while we stay accountable end to end.",
    },
    {
      num: "04",
      title: "Security and Compliance",
      desc: "Practical controls, audit readiness, and resilience for critical environments.",
    },
    {
      num: "05",
      title: "Global + Local Understanding",
      desc: "Enterprise standards delivered with on ground context and faster execution.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
      {steps.map((s, idx) => (
        <div key={s.num} className="relative">
          {/* Arc */}
          <div className="relative h-12">
            <svg
              viewBox="0 0 120 40"
              className="w-full h-12"
              preserveAspectRatio="none"
            >
              <path
                d="M5,35 C30,5 90,5 115,35"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-slate-200"
                strokeLinecap="round"
              />
              <circle cx="60" cy="34" r="6" className="fill-blue-600" />
            </svg>

            {/* number badge */}
            <div className="absolute left-0 top-0">
              <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                {s.num}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="mt-4">
            <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {s.desc}
            </p>
          </div>

          {/* Connector line (desktop) */}
          {idx !== steps.length - 1 && (
            <div className="hidden md:block absolute -right-5 top-[18px] h-[2px] w-10 bg-slate-200" />
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================
   Icons
========================= */

function IconPlus() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m6-6H6" />
    </svg>
  );
}
function IconNetwork() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v6m0 6v6M4.5 7.5l7.5 3 7.5-3M4.5 16.5l7.5-3 7.5 3"
      />
    </svg>
  );
}
function IconWorkflow() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h10M7 12h6M7 17h10" />
    </svg>
  );
}
function IconPulse() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h3l2-4 4 8 2-4h5" />
    </svg>
  );
}
function IconLink() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 000-7.07 5 5 0 00-7.07 0L10 5m4 6a5 5 0 01-7.07 0L5.52 9.59a5 5 0 010-7.07 5 5 0 017.07 0L14 4"
      />
    </svg>
  );
}
function IconShield() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
      />
    </svg>
  );
}
