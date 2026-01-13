// src/components/BlogCard.tsx
import { Blog } from '@/types';
import Link from 'next/link';

interface BlogCardProps {
  blog: Blog;
  featured?: boolean;
}

export default function BlogCard({ blog, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-blue-300 h-full transform hover:-translate-y-1 ${
        featured ? 'border-2 border-blue-200 shadow-md' : ''
      }`}>
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          {blog.image ? (
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
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
              {blog.category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
              {blog.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {blog.excerpt || blog.content.substring(0, 120)}...
            </p>
            
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {blog.readTime || 5} min read
              </div>
            </div>
            
            {blog.authorRole && (
              <p className="text-xs text-gray-500 mb-3 italic">{blog.authorRole}</p>
            )}
          </div>
          
          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-1 mb-3">
                {blog.tags.slice(0, 3).map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium border border-blue-100"
                  >
                    #{tag}
                  </span>
                ))}
                {blog.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded text-xs font-medium border border-gray-100">
                    +{blog.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          {/* Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-1 text-blue-600 font-medium text-sm">
              <span>Read Article</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}