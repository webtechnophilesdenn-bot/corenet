"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function EducationEdtechPage() {
  const trustBadges = [
    "Student data protection",
    "High availability learning systems",
    "Performance at peak load",
    "Compliance ready delivery",
  ];

  const stats = [
    { k: "24/7", v: "Monitoring and support" },
    { k: "99.9%", v: "Uptime focused architecture" },
    { k: "< 15 min", v: "Response for critical alerts" },
    { k: "Multi platform", v: "Web, mobile, LMS" },
  ];

  return (
    <main className="bg-[#070A12] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero_background/education.webp" // add this image in public/hero_background
            alt="Education and EdTech"
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
            <span className="text-white">Education and EdTech</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Reliable technology for learning at scale
              </h1>

              <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                We help schools, universities, and EdTech teams build stable
                platforms, protect student data, and deliver smooth learning
                experiences across web and mobile.
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
                    Built for learning environments
                  </div>
                  <div className="mt-2 text-xs text-white/70 leading-relaxed">
                    Secure identity, role based access, resilient
                    infrastructure, and performance planning for peak traffic
                    during exams, admissions, and live classes.
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
        <section className="container mx-auto px-4 pt-14">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Sectors we serve
              </div>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
                Education delivery, end to end
              </h2>

              <p className="mt-3 text-slate-600 leading-relaxed">
                From LMS reliability to student data protection, we help teams
                modernize learning systems while keeping performance and
                security strong.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  t: "Learning Platforms",
                  d: "LMS, portals, course delivery, and content systems",
                  i: <IconBook />,
                },
                {
                  t: "Student Experience",
                  d: "Web and mobile performance for daily learning journeys",
                  i: <IconSpark />,
                },
                {
                  t: "Digital Classrooms",
                  d: "Video, live sessions, and collaboration readiness",
                  i: <IconVideo />,
                },
                {
                  t: "Data and Analytics",
                  d: "Reporting, dashboards, and decision support",
                  i: <IconChart />,
                },
                {
                  t: "Identity and Access",
                  d: "SSO, role based access, and user lifecycle",
                  i: <IconKey />,
                },
                {
                  t: "Managed Services",
                  d: "Monitoring, patching, backup discipline, and support",
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
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group"
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

        {/* SECTION: Why Corenet (steps) */}
        <section className="bg-white">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Why Corenet
              </h2>
              <div className="mt-3 mx-auto h-[2px] w-10 bg-rose-400" />
              <p className="mt-4 max-w-4xl mx-auto text-slate-600 leading-relaxed">
                Stable learning systems need predictable delivery, clean
                governance, and practical security. We help you reduce downtime,
                protect student data, and keep platforms smooth during peak
                traffic.
              </p>
            </div>

            <div className="mt-12">
              <WhyCorenetSteps />
            </div>
          </div>
        </section>

        {/* SECTION: Alternating blocks */}
        <section className="container mx-auto px-4 pb-14">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="space-y-12">
              {/* Block 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-xs font-semibold text-blue-700">
                    Learning Platforms
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    LMS and portals that stay fast and available
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Keep course delivery stable with performance tuning, strong
                    monitoring, and safe release cycles.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        t: "Performance tuning",
                        d: "Faster pages and smoother student journeys.",
                      },
                      {
                        t: "High availability",
                        d: "Redundancy that reduces downtime during peaks.",
                      },
                      {
                        t: "Release control",
                        d: "Predictable deployments with rollback plans.",
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
                      href="/services/cloud"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                    >
                      Explore cloud
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="/hero_background/education-platforms.jpg" // add image
                        alt="Learning platforms"
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
                        src="/hero_background/identity-education.jpg" // add image
                        alt="Identity and access"
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
                      Identity and access
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                      Secure access for students, staff, and parents
                    </h2>

                    <div className="w-20 h-1 bg-blue-600 mb-4" />

                    <p className="text-gray-700 text-base leading-relaxed">
                      Role based access, SSO, audit visibility, and clean user
                      lifecycle controls that protect student data without
                      slowing learning down.
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                      >
                        Book a call
                      </a>
                      <a
                        href="/services/cybersecurity"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                      >
                        View security
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-xs font-semibold text-blue-700">
                    Managed services
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    Support that keeps learning running
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Monitoring, patching, and incident response built for
                    schools and EdTech teams with real peak traffic.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        t: "Monitoring",
                        d: "Actionable alerts, less noise.",
                      },
                      {
                        t: "Patch management",
                        d: "Controlled, predictable updates.",
                      },
                      {
                        t: "Incident response",
                        d: "Fast triage with clear escalation.",
                      },
                      {
                        t: "Service desk",
                        d: "Support that understands priorities.",
                      },
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
                        src="/hero_background/education-support.png" // add image
                        alt="Education support"
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
                      poster="/hero_background/education.jpg"
                    >
                      <source
                        src="/hero_background/education-overview.mp4" // add mp4
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
                    A delivery model built for peak load
                  </h2>

                  <div className="w-20 h-1 bg-blue-600 mb-4" />

                  <p className="text-gray-700 text-base leading-relaxed">
                    Clear phases, controlled rollout, and ongoing support to
                    keep learning platforms stable during admissions, exams, and
                    live class peaks.
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

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base text-blue-100 mb-6">
                Let's discuss how CORENET can help optimize your IT
                infrastructure and drive growth
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
   Why steps
========================= */

function WhyCorenetSteps() {
  const steps = [
    {
      num: "01",
      title: "Delivery Excellence",
      desc: "Structured rollouts with predictable timelines and clear ownership.",
    },
    {
      num: "02",
      title: "Student and Teacher Centric",
      desc: "Solutions aligned to real learning workflows and daily operations.",
    },
    {
      num: "03",
      title: "Strategic Alliances",
      desc: "Trusted partners that expand capability while we stay accountable end to end.",
    },
    {
      num: "04",
      title: "Security and Privacy",
      desc: "Practical controls, audit readiness, and protection for student data.",
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

            <div className="absolute left-0 top-0">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                  {s.num}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-base font-semibold text-slate-900">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {s.desc}
            </p>
          </div>

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

function IconShield() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.5c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2V20H7a3 3 0 01-3-3V6.5z"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 20V6.5c0-1.1.9-2 2-2"
      />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l1.2 5.2L18 8l-4.3 2.6L15 16l-3-2.5L9 16l1.3-5.4L6 8l4.8-.8L12 2z"
      />
    </svg>
  );
}

function IconVideo() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7a2 2 0 012-2h9a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 10l3-2v8l-3-2v-4z"
      />
    </svg>
  );
}

function IconChart() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 19h16"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 16V9m5 7V6m5 10v-4"
      />
    </svg>
  );
}

function IconKey() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 11l-7 7v3h3l2-2h2l2-2v-2l2-2"
      />
    </svg>
  );
}
