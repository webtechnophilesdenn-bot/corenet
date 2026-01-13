// src/components/CaseStudyCard.tsx
import { CaseStudy } from '@/types';
import Link from 'next/link';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export default function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-blue-300 h-full ${
        featured ? 'border-2 border-blue-200 shadow-md' : ''
      }`}>
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          {caseStudy.image ? (
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          )}
          {featured && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            </div>
          )}
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
              {caseStudy.category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
                  {caseStudy.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="truncate">{caseStudy.client}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {caseStudy.challenge.substring(0, 100)}...
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {caseStudy.author}
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {caseStudy.duration || 'N/A'}
                </div>
              </div>
              <div className="flex items-center gap-1 text-blue-600 font-medium">
                <span>View Details</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Technologies */}
          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
            <div className="pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-1">
                {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
                {caseStudy.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded text-xs font-medium border border-gray-100">
                    +{caseStudy.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}