// src/app/admin/login/page.tsx
'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      router.push('/admin');
    } else {
      setError('Invalid credentials. Use admin/admin123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="admin"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="admin123"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4 text-center">
          Credentials: admin / admin123
        </p>
      </div>
    </div>
  );
}