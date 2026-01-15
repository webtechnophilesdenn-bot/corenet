"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FinancialServicesPage() {
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
    { k: "Multi region", v: "Branches, HQ, cloud" },
  ];

  return (
    <main className="bg-[#070A12] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero_background/financial.jpg"
            alt="Financial services IT"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#070A12]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.40),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.32),transparent_45%),radial-gradient(circle_at_60%_80%,rgba(16,185,129,0.18),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,18,0.10),rgba(7,10,18,0.70),rgba(7,10,18,1))]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="text-white/70">Industries</span>
            <span className="text-white/40">/</span>
            <span className="text-white">Financial Services</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Secure, resilient IT for financial operations
              </h1>

              <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                We strengthen infrastructure, security, and performance for
                banks, fintechs, insurers, and payment teams with a delivery
                model built for uptime, compliance, and risk control.
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
                    Built for regulated environments
                  </div>
                  <div className="mt-2 text-xs text-white/70 leading-relaxed">
                    Role based access, audit visibility, encryption, backup
                    discipline, and resilient networking to protect transactions
                    and customer data without slowing business.
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
                Financial Services, end to end
              </h2>

              <p className="mt-3 text-slate-600 leading-relaxed">
                From core systems to customer facing platforms, we help finance
                teams improve reliability, security, and performance with
                enterprise grade delivery.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  t: "Digital Banking",
                  d: "Customer apps, portals, onboarding flows",
                  i: <IconCard />,
                },
                {
                  t: "Payments and Switching",
                  d: "Secure rails, integrations, availability",
                  i: <IconSwap />,
                },
                {
                  t: "Risk and Compliance",
                  d: "Audit readiness, controls, governance",
                  i: <IconShield />,
                },
                {
                  t: "Trading and Data",
                  d: "Low latency infrastructure and observability",
                  i: <IconChart />,
                },
                {
                  t: "Core Systems",
                  d: "Stability for core banking and back office",
                  i: <IconGrid />,
                },
                {
                  t: "Managed Services",
                  d: "Monitoring, patching, and IT support",
                  i: <IconWrench />,
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

        {/* SECTION: Why Corenet */}
        <section className="bg-white">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Why Corenet
              </h2>
              <div className="mt-3 mx-auto h-[2px] w-10 bg-rose-400" />
              <p className="mt-4 max-w-4xl mx-auto text-slate-600 leading-relaxed">
                Delivery that keeps risk low and availability high. We plan and
                execute with predictable timelines, governance that aligns teams,
                and security controls that protect transactions without adding
                friction.
              </p>
            </div>

            <div className="mt-12">
              <WhyCorenetSteps />
            </div>
          </div>
        </section>

        {/* SECTION: Alternating blocks */}
        <section className="pb-14">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="space-y-12">
              {/* Block 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-xs font-semibold text-blue-700">
                    Digital Banking
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    Better customer journeys, built on stable platforms
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Build modern digital experiences while keeping security and
                    availability at the core. From onboarding to servicing, we
                    engineer for performance and trust.
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
                        d: "Faster apps for customers and staff.",
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
                        src="/hero_background/digital-banking.jpg"
                        alt="Digital banking"
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
                        src="/hero_background/payments.jpg"
                        alt="Payments and switching"
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
                      Payments and switching
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                      Controlled rollout for critical transaction systems
                    </h2>

                    <div className="w-20 h-1 bg-blue-600 mb-4" />

                    <p className="text-gray-700 text-base leading-relaxed">
                      We design rollouts to keep outages and risk low. Changes
                      move through clear phases with testing, visibility, and
                      rollback planning, so transaction flows stay stable.
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
                    Risk and Compliance
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    Security controls that support operations
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Practical security, audit readiness, and resilient recovery
                    for regulated environments. Visibility and control without
                    slowing teams down.
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
                        src="/hero_background/risk-compliance.jpg"
                        alt="Risk and compliance"
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
                      poster="/hero_background/financial.jpg"
                    >
                      <source
                        src="/hero_background/financial.mp4"
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
                    A delivery model built for critical systems
                  </h2>

                  <div className="w-20 h-1 bg-blue-600 mb-4" />

                  <p className="text-gray-700 text-base leading-relaxed">
                    Clear phases, controlled rollout, and ongoing support keep
                    transaction systems stable. We plan changes carefully, keep
                    teams prepared, and maintain visibility and governance from
                    start to finish.
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
   Why Steps
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
      title: "Customer Centricity",
      desc: "Solutions designed around real operations, not theory.",
    },
    {
      num: "03",
      title: "Strategic Alliances",
      desc: "Trusted partners that expand capability while we stay accountable.",
    },
    {
      num: "04",
      title: "Security and Compliance",
      desc: "Practical controls, audit readiness, and resilience for regulated teams.",
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
            <svg viewBox="0 0 120 40" className="w-full h-12" preserveAspectRatio="none">
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
              <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                {s.num}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
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

function IconCard() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7h18M4 7h16a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2zM7 15h4"
      />
    </svg>
  );
}

function IconSwap() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 7h11l-2-2m2 2l-2 2M17 17H6l2 2m-2-2l2-2"
      />
    </svg>
  );
}

function IconChart() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 19h16M6 16v-5m5 5V7m5 9v-3"
      />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"
      />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 7a6 6 0 01-8.6 5.4L7 17.8a2 2 0 01-2.8 0l-1-1a2 2 0 010-2.8l5.4-5.4A6 6 0 0121 7z"
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
