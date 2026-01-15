"use client";

import Image from "next/image";
import Link from "next/link";

export default function OthersIndustriesPage() {
  const trustBadges = [
    "Flexible engagement model",
    "Enterprise grade security",
    "Fast execution, clear governance",
    "Support that stays after go live",
  ];

  const stats = [
    { k: "20+", v: "Industry playbooks" },
    { k: "24/7", v: "Monitoring support" },
    { k: "99.9%", v: "Uptime mindset" },
    { k: "Multi site", v: "Delivery across locations" },
  ];

  return (
    <main className="bg-[#070A12] text-white">
      {/* HERO */}
      <section className="relative bg-[#070A12] overflow-hidden">
        {/* subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 pt-12 pb-14">
          {/* breadcrumb */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span>Industries</span>
            <span className="opacity-40">/</span>
            <span className="text-white">Others</span>
          </div>

          {/* headline */}
          <div className="mt-6 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
              Industries that do not fit a box still need reliable IT
            </h1>

            <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Many businesses operate across niche domains, hybrid models, or
              evolving sectors. We support them with the same discipline,
              security, and delivery clarity we bring to regulated industries.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-[#070A12] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                Talk to an expert
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Explore services
              </a>
            </div>
          </div>

          {/* industry mosaic */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Logistics",
              "Media & Entertainment",
              "Energy",
              "Hospitality",
              "Professional Services",
              "Non Profits",
              "Government Projects",
              "Startups",
              "Infrastructure",
              "Telecom",
              "Multi business groups",
              "Niche enterprises",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm text-white/85 hover:bg-white/10 transition"
              >
                {x}
              </div>
            ))}
          </div>

          {/* bottom separator */}
          <div className="mt-12 h-px w-full bg-white/10" />
        </div>
      </section>

      {/* BODY */}
      <div className="bg-white text-slate-900">
        {/* SECTION: Other industries grid */}
        <section className="container mx-auto px-4 pt-14">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Other industries we support
              </div>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
                The rest of the world still needs reliable IT
              </h2>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Here are common sectors that come under Others. If your sector
                is not listed, we can still map your environment and recommend
                next steps.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  t: "Hospitality and Tourism",
                  d: "PMS uptime, WiFi, POS, guest apps",
                  i: <IconHotel />,
                },
                {
                  t: "Logistics and Transportation",
                  d: "Tracking, fleet tools, route ops, uptime",
                  i: <IconTruck />,
                },
                {
                  t: "Media and Entertainment",
                  d: "Content pipelines, streaming ops, security",
                  i: <IconPlay />,
                },
                {
                  t: "Energy and Utilities",
                  d: "OT visibility, resilience, compliance controls",
                  i: <IconBolt />,
                },
                {
                  t: "Government and Public Sector",
                  d: "Governance, security, service continuity",
                  i: <IconBuilding />,
                },
                {
                  t: "NGOs and Foundations",
                  d: "Secure tools, low cost scale, reliability",
                  i: <IconHeart />,
                },
                {
                  t: "Telecom and ISP",
                  d: "Network operations, monitoring, rollout support",
                  i: <IconSignal />,
                },
                {
                  t: "Professional Services",
                  d: "Secure access, collaboration, data control",
                  i: <IconBriefcase />,
                },
                {
                  t: "Travel and Aviation",
                  d: "Booking flows, integration stability, uptime",
                  i: <IconPlane />,
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

            {/* CTA bar */}
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Not sure which category you fall into?
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  We can map your current setup and recommend the next steps.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition w-full sm:w-auto"
                >
                  Request an assessment
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition w-full sm:w-auto"
                >
                  View services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Corenet Operating Principles (replace WhySteps section) */}
        <section className="bg-white">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-20">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-blue-700">
                How we work
              </div>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                A delivery approach built for real operations
              </h2>

              <div className="mt-4 mx-auto h-[2px] w-12 bg-rose-400" />

              <p className="mt-5 text-slate-600 leading-relaxed">
                Different sectors have different constraints. Our model stays
                consistent: controlled change, clear ownership, and security
                that supports workflows instead of blocking them.
              </p>
            </div>

            {/* Main grid */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* LEFT: Operating principles */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      t: "Single point of accountability",
                      d: "One delivery owner responsible from planning through support. No handovers, no ambiguity.",
                    },
                    {
                      t: "Phased implementation",
                      d: "Rollouts designed in controlled stages to avoid disruption to live operations.",
                    },
                    {
                      t: "Business aligned governance",
                      d: "Decision making mapped to risk, impact, and business priority, not bureaucracy.",
                    },
                    {
                      t: "Security by design",
                      d: "Access control, monitoring, and recovery planned into systems from day one.",
                    },
                    {
                      t: "Operational continuity",
                      d: "Change happens without downtime surprises or productivity loss.",
                    },
                    {
                      t: "Vendor and tool integration",
                      d: "We connect systems, vendors, and platforms into a coherent operating model.",
                    },
                    {
                      t: "Documentation that lives",
                      d: "Runbooks, SOPs, and diagrams maintained as part of delivery, not afterthoughts.",
                    },
                    {
                      t: "Long term support model",
                      d: "Post go-live support with clear SLAs, ownership, and response expectations.",
                    },
                  ].map((x, i) => (
                    <div
                      key={`${x.t}-${i}`}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_44px_rgba(15,23,42,0.12)] transition"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        <div>
                          <h3 className="text-base font-semibold text-slate-900">
                            {x.t}
                          </h3>
                          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                            {x.d}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Outcomes & value */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <div className="text-xs font-semibold text-blue-700">
                    What this means for you
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold text-slate-900 leading-tight">
                    Fewer surprises. Better control.
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    This approach is built for organisations where downtime,
                    confusion, or weak ownership is not acceptable. You get
                    predictability without rigidity.
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      "Clear scope, timelines, and delivery checkpoints",
                      "Known escalation paths during critical situations",
                      "Reduced operational risk during change",
                      "Improved visibility into systems and dependencies",
                      "Confidence for leadership and operational teams",
                    ].map((t, i) => (
                      <div
                        key={`${t}-${i}`}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                      >
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600" />
                        <div className="text-sm font-medium text-slate-900">
                          {t}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                    >
                      View services
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition"
                    >
                      Talk to us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL-WIDTH CTA BELOW BOTH */}
            <div className="mt-10 w-full rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Need this mapped to your environment?
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    We translate this model into a clear rollout plan for your
                    setup.
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Video + text */}
        <section className="border-t border-slate-100 bg-[#FAFBFF]">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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
                      poster="/hero_background/isp_dark_bg.jpg"
                    >
                      <source
                        src="/hero_background/clinical-workflows.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div>
                  <div className="text-xs font-semibold text-blue-700 mb-2">
                    Quick overview
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    One delivery model, adapted to your reality
                  </h2>

                  <div className="w-20 h-1 bg-blue-600 mb-4" />

                  <p className="text-gray-700 text-base leading-relaxed">
                    Clear phases, controlled rollout, and ongoing support so
                    even niche or mixed environments stay stable, secure, and
                    easy to operate.
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

        <section className="border-t border-slate-100 bg-white">
          <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* TEXT - LEFT */}
              <div className="lg:col-span-6">
                <div>
                  <div className="text-xs font-semibold text-blue-700 mb-2">
                    How we adapt
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    Built to flex across industries and operating models
                  </h2>

                  <div className="w-20 h-1 bg-blue-600 mb-4" />

                  <p className="text-gray-700 text-base leading-relaxed">
                    Not every business fits into a single industry box. Our
                    delivery model is designed to adapt across niche sectors,
                    mixed environments, and evolving operations while keeping
                    structure, security, and stability intact.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                    >
                      Discuss your setup
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                    >
                      Explore services
                    </a>
                  </div>
                </div>
              </div>

              {/* VIDEO - RIGHT */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                  <div className="relative aspect-video bg-black">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster="/hero_background/isp_dark_bg.jpg"
                    >
                      <source
                        src="/hero_background/adapt.mp4"
                        type="video/mp4"
                      />
                    </video>

                    {/* subtle overlay for premium look */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
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
   Why steps component
========================= */

function WhySteps() {
  const steps = [
    {
      num: "01",
      title: "Delivery Excellence",
      desc: "Clear milestones, timelines, and ownership from day one.",
    },
    {
      num: "02",
      title: "Operational Clarity",
      desc: "Work aligned to how your teams actually operate.",
    },
    {
      num: "03",
      title: "Governance and Control",
      desc: "Change control, reporting, and risk management built in.",
    },
    {
      num: "04",
      title: "Security and Compliance",
      desc: "Practical controls that fit workflows and regulations.",
    },
    {
      num: "05",
      title: "Support That Stays",
      desc: "Monitoring, response, and continuous improvements.",
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

function IconHotel() {
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
        d="M3 21V7a2 2 0 012-2h12a2 2 0 012 2v14M7 21V9h10v12M7 13h10"
      />
    </svg>
  );
}
function IconTruck() {
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
        d="M3 7h11v10H3V7zM14 10h4l3 3v4h-7v-7z"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17a2 2 0 104 0M17 17a2 2 0 104 0"
      />
    </svg>
  );
}
function IconPlay() {
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
        d="M8 5v14l11-7L8 5z"
      />
    </svg>
  );
}
function IconBolt() {
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
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
      />
    </svg>
  );
}
function IconBuilding() {
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
        d="M4 21V7a2 2 0 012-2h6v16M16 21V3h4v18"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 9h2M8 13h2M8 17h2M17 7h1M17 11h1M17 15h1"
      />
    </svg>
  );
}
function IconHeart() {
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
        d="M12 21s-7-4.5-9-9a5 5 0 019-5 5 5 0 019 5c-2 4.5-9 9-9 9z"
      />
    </svg>
  );
}
function IconSignal() {
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
        d="M6 18h.01M10 14h.01M14 10h.01M18 6h.01"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20c4-4 12-4 16 0"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17c3-3 7-3 10 0"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14c2-2 2-2 4 0"
      />
    </svg>
  );
}
function IconBriefcase() {
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
        d="M9 6V5a2 2 0 012-2h2a2 2 0 012 2v1"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8h16v11a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"
      />
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12h16"
      />
    </svg>
  );
}
function IconPlane() {
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
        d="M10.5 21l1.5-6 9-6a2 2 0 00-2-2l-9 6L3 10.5l2-2 6 1.5 6-4.5"
      />
    </svg>
  );
}
