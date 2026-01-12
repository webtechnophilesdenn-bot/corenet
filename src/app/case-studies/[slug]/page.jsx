import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/case-studies?published=true`);
    const data = await response.json();
    
    if (data.success) {
      return data.data.map(cs => ({
        slug: cs.slug,
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function CaseStudyDetail({ params }) {
  const { slug } = await params;
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/case-studies?published=true`, {
      cache: 'no-store'
    });
    
    const data = await response.json();
    
    if (!data.success) {
      notFound();
    }
    
    const caseStudy = data.data.find(cs => cs.slug === slug);
    
    if (!caseStudy) {
      notFound();
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm font-medium text-blue-300 mb-6">
              <Link href="/case-studies" className="hover:text-blue-200 transition-colors">
                Case Studies
              </Link>
              <span>→</span>
              <span className="capitalize">{caseStudy.industry}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {caseStudy.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="font-medium">{caseStudy.client_name}</span>
              </div>
              {caseStudy.project_duration && (
                <div className="bg-blue-800/50 px-4 py-1.5 rounded-full text-sm">
                  Duration: {caseStudy.project_duration}
                </div>
              )}
              <div className="bg-white/20 px-4 py-1.5 rounded-full text-sm">
                Industry: {caseStudy.industry}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge Section */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
                    <p className="text-gray-600">Problem statement and business impact</p>
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {caseStudy.challenge}
                </div>
              </div>

              {/* Solution Section */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
                    <p className="text-gray-600">Strategic approach and implementation</p>
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {caseStudy.solution}
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Results & Impact</h2>
                    <p className="text-gray-600">Measurable outcomes and business value</p>
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {caseStudy.results}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Client Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Client Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-medium text-gray-900">{caseStudy.client_name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Industry</div>
                    <div className="font-medium text-gray-900">{caseStudy.industry}</div>
                  </div>
                  {caseStudy.project_duration && (
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Project Duration</div>
                      <div className="font-medium text-gray-900">{caseStudy.project_duration}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg p-6">
                  <div className="text-4xl mb-4">❝</div>
                  <blockquote className="italic mb-4">
                    "{caseStudy.testimonial}"
                  </blockquote>
                  {caseStudy.testimonial_author && (
                    <div className="font-medium">
                      — {caseStudy.testimonial_author}
                    </div>
                  )}
                </div>
              )}

              {/* CTA */}
              <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Get Similar Results</h3>
                <p className="text-sm text-slate-300 mb-6">
                  Ready to transform your IT infrastructure? Let's discuss your requirements.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Case Studies */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to All Case Studies
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching case study:', error);
    notFound();
  }
}