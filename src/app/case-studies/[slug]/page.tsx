// src/app/case-studies/[slug]/page.tsx
import { db } from '@/lib/db';
import { CaseStudy } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ 
  params 
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params; // ✅ Await the Promise
  
  if (!slug) {
    return { title: 'Case Study Not Found' };
  }
  
  try {
    const caseStudy = await db.getCaseStudyBySlug(slug);
    if (!caseStudy) {
      return { title: 'Case Study Not Found' };
    }
    
    return {
      title: `${caseStudy.title} - Corenet`,
      description: caseStudy.challenge.substring(0, 160),
      openGraph: {
        title: caseStudy.title,
        description: caseStudy.challenge.substring(0, 160),
        images: caseStudy.image ? [{
          url: caseStudy.image,
          width: 1200,
          height: 630,
        }] : [],
        type: 'article',
      },
    };
  } catch {
    return { title: 'Case Study Not Found' };
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params; // ✅ Await the Promise
  
  // Handle undefined/empty slug
  if (!slug) {
    notFound();
  }

  const caseStudy: CaseStudy | null = await db.getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full -mr-40 -mt-40 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full -ml-40 -mb-40 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Success Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center text-sm mb-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-medium">{caseStudy.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{caseStudy.industry}</span>
              </div>
              {caseStudy.duration && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{caseStudy.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Main Image */}
        <div className="mb-16">
          {caseStudy.image ? (
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              width={1200}
              height={600}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
              priority
            />
          ) : (
            <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Challenge, Solution, Results */}
          <div className="lg:col-span-2 space-y-12">
            {/* Client Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  {caseStudy.category}
                </span>
                {caseStudy.featured && (
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{caseStudy.title}</h2>
              <p className="text-2xl text-gray-600 mb-8">{caseStudy.client}</p>
              {caseStudy.testimonial && (
                <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700">
                  "{caseStudy.testimonial.quote}"
                  <div className="mt-2 text-sm font-medium text-gray-500">
                    — {caseStudy.testimonial.author}, {caseStudy.testimonial.position}
                  </div>
                </blockquote>
              )}
            </div>

            {/* Challenge */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                The Challenge
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{caseStudy.challenge}</p>
              </div>
            </div>

            {/* Solution */}
            {caseStudy.solution && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Our Solution
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>{caseStudy.solution}</p>
                </div>
              </div>
            )}

            {/* Results */}
            {caseStudy.results && (
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl shadow-sm border border-emerald-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Results Achieved
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>{caseStudy.results}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 self-start">
            {/* Project Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Project Details</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-900 font-medium">{caseStudy.author}</span>
                </div>
                {caseStudy.duration && (
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{caseStudy.duration}</span>
                  </div>
                )}
                {caseStudy.teamSize && (
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H1v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.128 0M9.863 9.857a3 3 0 006.274 0" />
                    </svg>
                    <span>{caseStudy.teamSize} team members</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-medium">{caseStudy.industry}</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            {caseStudy.technologies && caseStudy.technologies.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics */}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-sm border border-indigo-100 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Metrics</h4>
                <div className="space-y-2">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-indigo-100 last:border-b-0">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <span className="font-bold text-lg text-indigo-700">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-20 text-center">
          <a 
            href="/case-studies" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200 font-medium shadow-sm border border-gray-300 text-lg group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            View All Case Studies
          </a>
        </div>
      </div>
    </div>
  );
}
