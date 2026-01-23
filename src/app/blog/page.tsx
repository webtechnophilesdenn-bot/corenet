// src/app/blog/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { db } from "@/lib/db";
import { Blog } from "@/types";
import Link from "next/link";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const normalize = (v: any) => String(v ?? "").trim();
  const normalizeLower = (v: any) => normalize(v).toLowerCase();

  const uniqueSorted = (arr: string[]) =>
    Array.from(new Set(arr.map(normalize).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b),
    );

  useEffect(() => {
    loadBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const publishedBlogs = await db.getPublishedBlogs();

      setBlogs(publishedBlogs);
      setFilteredBlogs(publishedBlogs);

      // Extract unique categories (normalized + sorted)
      const uniqueCategories = uniqueSorted(
        publishedBlogs.map((blog) => blog.category),
      );
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Failed to load blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = blogs;

    const selectedCategoryNorm = normalize(selectedCategory);
    const searchNorm = normalizeLower(searchTerm);

    // Filter by category (normalized compare)
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (blog) => normalize(blog.category) === selectedCategoryNorm,
      );
    }

    // Filter by search term
    if (searchNorm) {
      filtered = filtered.filter((blog) => {
        const title = normalizeLower(blog.title);
        const excerpt = normalizeLower(blog.excerpt || "");
        const tags = Array.isArray(blog.tags) ? blog.tags : [];

        const tagHit = tags.some((tag) =>
          normalizeLower(tag).includes(searchNorm),
        );

        return (
          title.includes(searchNorm) ||
          excerpt.includes(searchNorm) ||
          tagHit
        );
      });
    }

    setFilteredBlogs(filtered);
  }, [selectedCategory, searchTerm, blogs]);

  const featuredBlogs = useMemo(() => blogs.filter((b) => !!b.featured), [blogs]);

  const popularTags = useMemo(() => {
    const tags = blogs.flatMap((b) => (Array.isArray(b.tags) ? b.tags : []));
    return uniqueSorted(tags).slice(0, 8);
  }, [blogs]);

  const totalReadTime = useMemo(
    () => blogs.reduce((sum, b) => sum + (Number(b.readTime) || 0), 0),
    [blogs],
  );

  const authorsCount = useMemo(
    () => new Set(blogs.map((b) => normalize(b.author)).filter(Boolean)).size,
    [blogs],
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading articles...</p>
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
            {/* LEFT: Image */}
            <div className="relative h-full flex items-center justify-center">
              <img
                src="/hero_background/blog.png"
                alt="Blog"
                className="w-full max-w-sm object-contain"
              />
            </div>

            {/* RIGHT: Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                EXPERT INSIGHTS
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Corenet Insights Blog
              </h1>

              <p className="text-slate-200 max-w-xl leading-relaxed">
                Expert articles, guides, and analysis on IT infrastructure,
                cybersecurity, cloud computing, and digital transformation
                strategies.
              </p>

              {/* Highlights */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  `${blogs.length} Articles`,
                  `${authorsCount} Authors`,
                  `${totalReadTime}+ min reading`,
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
                  href="#articles"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-semibold transition"
                >
                  Explore Articles
                </a>

                <a
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 font-semibold transition"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Featured Blogs */}
        {featuredBlogs.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Featured Articles
                </h2>
                <p className="text-gray-600">
                  Must-read insights from our top experts
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <span>⭐ Editor&apos;s Pick</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBlogs.slice(0, 2).map((blog) => (
                <BlogCard key={blog.id} blog={blog} featured />
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search &amp; Filter Articles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">
                Search Articles
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search by title, excerpt, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">
                Filter by Category
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

          {/* Results count and tags */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  {filteredBlogs.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {blogs.length}
                </span>{" "}
                articles
                {searchTerm && (
                  <span>
                    {" "}
                    matching{" "}
                    <span className="font-semibold">&quot;{searchTerm}&quot;</span>
                  </span>
                )}
                {selectedCategory !== "all" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="font-semibold">{selectedCategory}</span>
                  </span>
                )}
              </div>

              {(selectedCategory !== "all" || searchTerm) && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchTerm("");
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

            {/* Popular Tags */}
            {popularTags.length > 0 && (
              <div>
                <p className="text-sm text-gray-600 mb-2">Popular topics:</p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors border border-gray-200"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        <div id="articles">
          {filteredBlogs.length === 0 ? (
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {searchTerm || selectedCategory !== "all"
                  ? "Try adjusting your search terms or filters to see more results."
                  : "No blog articles are available at the moment."}
              </p>
              {(searchTerm || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchTerm("");
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm font-medium shadow-sm"
                >
                  Show All Articles
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">All Articles</h3>
                <p className="text-gray-600 mt-1">
                  Browse our complete collection of expert insights and analysis
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
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
