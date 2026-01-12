// src/app/admin/layout.jsx
'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Skip check for login page
    if (pathname === '/admin/login') {
      setIsLoading(false);
      return;
    }

    // Check admin token
    const checkAuth = () => {
      const cookies = document.cookie.split(';');
      const adminToken = cookies.find(cookie => 
        cookie.trim().startsWith('admin-token=')
      );
      
      if (!adminToken) {
        router.push('/admin/login');
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();
    
    // Also check on page load
    window.addEventListener('load', checkAuth);
    return () => window.removeEventListener('load', checkAuth);
  }, [router, pathname]);

  if (isLoading && pathname !== '/admin/login') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = () => {
    document.cookie = 'admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/admin/blog" className="text-xl font-bold text-gray-900">
                CORENET Admin
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/admin/blog" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname.includes('/admin/blog') 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Blogs
              </Link>
              <Link 
                href="/admin/case-studies" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname.includes('/admin/case-studies') 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Case Studies
              </Link>
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}