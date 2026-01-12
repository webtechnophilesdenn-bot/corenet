'use client';
import { useEffect, useState } from 'react';

export default function TestDBPage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('/api/case-studies');
        const data = await response.json();
        
        if (data.success) {
          setCaseStudies(data.data);
        } else {
          setError(data.error || 'Failed to fetch data');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading database test...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Database Error</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <div className="bg-gray-100 p-4 rounded text-sm font-mono">
            Check your .env.local file:<br/>
            DATABASE_URL=postgresql://corenet_user:Postgres@123@localhost:5432/corenet
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Database Connection Test</h1>
        
        <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">✅ Connection Successful!</h2>
          <p className="text-green-600">
            Found {caseStudies.length} case studies in the database.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg">{cs.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  cs.published 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {cs.published ? 'Published' : 'Draft'}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Client:</span> {cs.client_name}</p>
                <p><span className="font-medium">Industry:</span> {cs.industry}</p>
                <p><span className="font-medium">Duration:</span> {cs.project_duration || 'N/A'}</p>
                
                {cs.technologies && cs.technologies.length > 0 && (
                  <div>
                    <span className="font-medium">Technologies:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {cs.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {cs.technologies.length > 3 && (
                        <span className="text-gray-500 text-xs">+{cs.technologies.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 line-clamp-2">{cs.challenge}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a 
            href="/case-studies" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Public Case Studies
          </a>
          <a 
            href="/admin/login" 
            className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Go to Admin Panel
          </a>
        </div>
      </div>
    </div>
  );
}