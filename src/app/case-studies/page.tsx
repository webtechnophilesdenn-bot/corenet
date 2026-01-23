// src/app/case-studies/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import { db } from "@/lib/db";
import { CaseStudy } from "@/types";
import Link from "next/link";

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<CaseStudy[]>(
    [],
  );

  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [industries, setIndustries] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const normalize = (v: any) => String(v ?? "").trim();

  const uniqueSorted = (arr: string[]) =>
    Array.from(new Set(arr.map(normalize).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b),
    );

  useEffect(() => {
    loadCaseStudies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadCaseStudies = async () => {
    try {
      setLoading(true);

      // NOTE: published only (agar draft bhi chahiye dropdown me, yaha getCaseStudies() use karo)
      const publishedCaseStudies = await db.getPublishedCaseStudies();

      setCaseStudies(publishedCaseStudies);
      setFilteredCaseStudies(publishedCaseStudies);

      // Extract unique industries and categories (normalized + sorted)
      const uniqueIndustries = uniqueSorted(
        publishedCaseStudies.map((cs) => cs.industry),
      );
      const uniqueCategories = uniqueSorted(
        publishedCaseStudies.map((cs) => cs.category),
      );

      setIndustries(uniqueIndustries);
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Failed to load case studies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const selectedIndustryNorm = normalize(selectedIndustry);
    const selectedCategoryNorm = normalize(selectedCategory);

    let filtered = caseStudies;

    if (selectedIndustry !== "all") {
      filtered = filtered.filter(
        (cs) => normalize(cs.industry) === selectedIndustryNorm,
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (cs) => normalize(cs.category) === selectedCategoryNorm,
      );
    }

    setFilteredCaseStudies(filtered);
  }, [selectedIndustry, selectedCategory, caseStudies]);

  const featuredCaseStudies = useMemo(
    () => caseStudies.filter((cs) => !!cs.featured),
    [caseStudies],
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading case studies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 items-center h-[520px] gap-8">
            {/* LEFT: Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                CASE STUDIES
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Real Results. Proven Impact.
              </h1>

              <p className="text-slate-200 max-w-xl leading-relaxed">
                See how Corenet helps organizations solve complex technology
                challenges through secure infrastructure, cloud modernization,
                and scalable systems.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Enterprise Use Cases",
                  "Security-first Execution",
                  "Measurable Business Outcomes",
                  "Cloud & Infrastructure Experts",
                ].map((t) => (
                  <div
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm"
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#case-studies"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-semibold transition"
                >
                  View Case Studies
                </a>

                <a
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 font-semibold transition"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="relative h-full flex items-center justify-center">
              <img
                src="/hero_background/case-studies.png"
                alt="Case Studies"
                className="w-full max-w-sm object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Featured Projects
                </h2>
                <p className="text-gray-600">
                  Highlighted success stories with exceptional results
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <span>⭐ Top Performers</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.slice(0, 2).map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} featured />
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter Case Studies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">
                Industry
              </label>
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white appearance-none"
                >
                  <option value="all" className="text-gray-500">
                    All Industries
                  </option>
                  {industries.map((industry) => (
                    <option
                      key={industry}
                      value={industry}
                      className="text-gray-900"
                    >
                      {industry}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">
                Solution Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white appearance-none"
                >
                  <option value="all" className="text-gray-500">
                    All Categories
                  </option>
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="text-gray-900"
                    >
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  {filteredCaseStudies.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {caseStudies.length}
                </span>{" "}
                case studies match your criteria
              </div>

              {(selectedIndustry !== "all" || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSelectedIndustry("all");
                    setSelectedCategory("all");
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div id="case-studies">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No case studies found
              </h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {selectedIndustry !== "all" || selectedCategory !== "all"
                  ? "Try adjusting your filters to see more results."
                  : "No case studies are available at the moment."}
              </p>
              {(selectedIndustry !== "all" || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSelectedIndustry("all");
                    setSelectedCategory("all");
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm font-medium shadow-sm"
                >
                  Show All Case Studies
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  All Case Studies
                </h3>
                <p className="text-gray-600 mt-1">
                  Browse our complete collection of client success stories
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCaseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Back Link */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-200 font-medium shadow-sm border border-gray-300"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
