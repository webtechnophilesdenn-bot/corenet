'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check admin cookie
    const cookies = document.cookie.split(';');
    const adminToken = cookies.find(cookie => cookie.trim().startsWith('admin-token='));
    
    if (adminToken) {
      setIsAuthenticated(true);
    } else {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie = 'admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    router.push('/admin/login');
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Admin Navbar */}
      <nav className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/admin/blog" className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CoreNet <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">Admin</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/admin/blog" className="px-6 py-3 bg-blue-100 text-blue-800 font-semibold rounded-2xl hover:bg-blue-200 transition-all duration-200">
              📝 Blogs
            </Link>
            <Link href="/admin/case-studies" className="px-6 py-3 bg-emerald-100 text-emerald-800 font-semibold rounded-2xl hover:bg-emerald-200 transition-all duration-200">
              📊 Case Studies
            </Link>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-8 w-full">
        {children}
      </main>
    </div>
  );
}
