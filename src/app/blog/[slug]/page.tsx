// src/app/blog/[slug]/page.tsx
import { db } from '@/lib/db';
import { Blog } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  if (!slug) {
    return { title: 'Article Not Found' };
  }
  
  try {
    const blog = await db.getBlogBySlug(slug);
    if (!blog) {
      return { title: 'Article Not Found' };
    }
    
    return {
      title: `${blog.title} - Corenet Insights`,
      description: blog.excerpt,
      openGraph: {
        title: blog.title,
        description: blog.excerpt,
        images: blog.image ? [{
          url: blog.image,
          width: 1200,
          height: 630,
        }] : [],
        type: 'article',
        publishedTime: blog.publishedAt,
        authors: [blog.author],
        tags: blog.tags,
      },
      authors: [{ name: blog.author }],
      keywords: blog.tags,
    };
  } catch {
    return { title: 'Article Not Found' };
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }

  const blog: Blog | null = await db.getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -mr-36 -mt-36 opacity-20 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                {blog.category}
              </span>
              {blog.featured && (
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">{blog.author}</span>
                {blog.authorRole && (
                  <span className="text-gray-300">• {blog.authorRole}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{blog.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', { 
                  month: 'long', day: 'numeric', year: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Featured Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={630}
              className="w-full h-96 md:h-[500px] object-cover"
              priority
            />
          ) : (
            <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01" />
              </svg>
            </div>
          )}
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Content */}
            <div className="prose prose-xl max-w-none text-gray-800 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-3 mb-12 lg:mb-0">
            {/* Stats */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Article Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{blog.views || 0} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{blog.tags?.length || 0} topics</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:sticky lg:top-24 self-start">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">About Author</h4>
              <div className="text-sm text-gray-600 space-y-2">
                <p>{blog.author} • {blog.authorRole}</p>
                <p className="text-xs">{blog.readTime} min read</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200 font-medium shadow-sm border border-gray-300 text-lg group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
