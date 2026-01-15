"use client";

import React from "react";
import Image from "next/image";

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
      {/* HERO with background image */}
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
        <section className="container mx-auto px-4 pt-14">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-blue-700">
                Sectors we serve
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                Healthcare and Life Sciences, end to end
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                From digital health to clinical workflows, we help healthcare
                teams improve reliability, security, and patient experience with
                enterprise grade delivery.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { t: "Digital Health", i: <IconPlus /> },
                { t: "Connected Care", i: <IconNetwork /> },
                { t: "Clinical Workflows", i: <IconWorkflow /> },
                { t: "Digital Therapeutics", i: <IconPulse /> },
                { t: "Interoperability", i: <IconLink /> },
                { t: "Managed Services", i: <IconShield /> },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 flex items-center gap-3 hover:bg-slate-50 transition"
                >
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    {x.i}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 leading-snug">
                    {x.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Why us */}
        <section className="container mx-auto px-4 py-14">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="text-center">
              <div className="text-xs font-semibold text-blue-700">
                Why Corenet
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                Delivery that feels calm, even in critical environments
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Clear planning, predictable rollout, and strong governance so
                clinical operations keep moving.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
              {[
                { t: "Delivery Excellence", i: <IconCheck /> },
                { t: "Customer Centricity", i: <IconUser /> },
                { t: "Strategic Alliances", i: <IconHandshake /> },
                { t: "Security and Compliance", i: <IconLock /> },
                { t: "Global Presence, Local Understanding", i: <IconGlobe /> },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-center hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition"
                >
                  <div className="mx-auto h-12 w-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    {x.i}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-slate-900">
                    {x.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Alternating image + text blocks */}
        <section className="container mx-auto px-4 pb-14">
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
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 lg:order-1 order-2">
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

                <div className="lg:col-span-5 lg:order-2 order-1">
                  <div className="text-xs font-semibold text-blue-700">
                    Connected Care
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    Enhancing care coordination across teams and locations
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Secure networking and integrations so clinicians, labs, and
                    admin systems stay aligned. We focus on clarity, stability,
                    and safe data flow.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        t: "Secure remote access",
                        d: "Role based access with strong controls.",
                      },
                      {
                        t: "Multi site connectivity",
                        d: "SD WAN and resilient branch networks.",
                      },
                      {
                        t: "Integration friendly",
                        d: "Clean interfaces for data exchange.",
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
                      href="/services/network-solutions"
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                    >
                      Know more
                    </a>
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
                      {
                        t: "Monitoring",
                        d: "Actionable alerts, not noisy dashboards.",
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
                        d: "Support teams that understand priorities.",
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
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="container mx-auto px-4 py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-xs font-semibold text-blue-700">
                    Quick overview
                  </div>
                  <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    A simple view of our delivery model
                  </h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Clear phases, controlled rollout, and ongoing support
                    aligned to healthcare operations.
                  </p>

                  <div className="mt-5 flex gap-3">
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

                <div className="lg:col-span-7">
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
  <source src="/hero_background/clinical-workflows.mp4" type="video/mp4" />
</video>
    </div>
    <div className="p-5">
      <div className="text-sm font-semibold">Healthcare IT overview</div>
      <div className="mt-1 text-sm text-slate-600">
        Uptime, security, and support designed for critical systems.
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* =========================
   Icons (component ke bahar)
========================= */

function IconPlus() {
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
        d="M12 6v12m6-6H6"
      />
    </svg>
  );
}
function IconNetwork() {
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
        d="M12 3v6m0 6v6M4.5 7.5l7.5 3 7.5-3M4.5 16.5l7.5-3 7.5 3"
      />
    </svg>
  );
}
function IconWorkflow() {
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
        d="M7 7h10M7 12h6M7 17h10"
      />
    </svg>
  );
}
function IconPulse() {
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
        d="M4 12h3l2-4 4 8 2-4h5"
      />
    </svg>
  );
}
function IconLink() {
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
        d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 000-7.07 5 5 0 00-7.07 0L10 5m4 6a5 5 0 01-7.07 0L5.52 9.59a5 5 0 010-7.07 5 5 0 017.07 0L14 4"
      />
    </svg>
  );
}
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
function IconCheck() {
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
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
function IconUser() {
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
        d="M12 12a4 4 0 100-8 4 4 0 000 8zm7 8a7 7 0 00-14 0"
      />
    </svg>
  );
}
function IconHandshake() {
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
        d="M8 12l2 2 4-4 2 2 3-3"
      />
    </svg>
  );
}
function IconLock() {
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
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}
function IconGlobe() {
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
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9c2.5-2.5 4-5.5 4-9s-1.5-6.5-4-9m0 18c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9"
      />
    </svg>
  );
}
