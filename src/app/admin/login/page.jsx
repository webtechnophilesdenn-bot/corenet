// src/app/admin/login/page.jsx

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '' 
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Fixed admin credentials
    if (formData.email === 'admin@corenet.co.in' && formData.password === 'admin123') {
      // Set auth cookie (24h)
      document.cookie = `admin-token=${Date.now()}; path=/; max-age=86400`;
      router.push('/admin/blog');
      return;
    }

    setError('Invalid email or password');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 space-y-8 border border-white/20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-2xl text-sm font-mono">
            <strong>👤 Email:</strong> admin@corenet.co.in<br/>
            <strong>🔑 Password:</strong> admin123
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="admin@corenet.co.in"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="admin123"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {error && (
            <div className="p-4 bg-red-100 border border-red-400 rounded-2xl text-red-700 text-sm animate-pulse">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 px-8 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : '🚀 Enter Admin Panel'}
          </button>
        </form>

        <div className="text-center pt-6 border-t border-gray-200">
          <a href="/" className="text-blue-500 hover:underline text-sm font-medium">
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
}
