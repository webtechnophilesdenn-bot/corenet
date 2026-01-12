'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminCaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const router = useRouter();

  const fetchCaseStudies = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/case-studies');
      const data = await response.json();
      
      if (data.success) {
        setCaseStudies(data.data);
      } else {
        setError('Failed to fetch case studies');
      }
    } catch (error) {
      setError('Error fetching case studies');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;

    try {
      const response = await fetch(`/api/case-studies/${id}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchCaseStudies(); // Refresh the list
        alert('Case study deleted successfully');
      } else {
        alert(data.error || 'Failed to delete case study');
      }
    } catch (error) {
      console.error(error);
      alert('Error deleting case study');
    }
  };

  const togglePublish = async (id, currentStatus) => {
    try {
      const caseStudy = caseStudies.find(cs => cs.id === id);
      if (!caseStudy) return;

      const response = await fetch(`/api/case-studies/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...caseStudy, published: !currentStatus }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchCaseStudies(); // Refresh the list
      } else {
        alert(data.error || 'Failed to update case study');
      }
    } catch (error) {
      console.error(error);
      alert('Error updating case study');
    }
  };

  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesSearch = cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    if (filterStatus === 'published') return matchesSearch && cs.published;
    if (filterStatus === 'draft') return matchesSearch && !cs.published;
    
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading case studies...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Case Studies</h1>
              <p className="text-gray-600 mt-2">Manage and publish your case studies</p>
            </div>
            <Link
              href="/admin/case-studies/create"
              className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span className="text-xl">+</span> Add New Case Study
            </Link>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Case Studies
              </label>
              <input
                type="text"
                placeholder="Search by title, client, or industry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow p-6">
            <div className="text-2xl font-bold">{caseStudies.length}</div>
            <div className="text-sm opacity-90">Total Case Studies</div>
          </div>
          <div className="bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl shadow p-6">
            <div className="text-2xl font-bold">
              {caseStudies.filter(cs => cs.published).length}
            </div>
            <div className="text-sm opacity-90">Published</div>
          </div>
          <div className="bg-linear-to-r from-yellow-500 to-yellow-600 text-white rounded-xl shadow p-6">
            <div className="text-2xl font-bold">
              {caseStudies.filter(cs => !cs.published).length}
            </div>
            <div className="text-sm opacity-90">Drafts</div>
          </div>
        </div>

        {/* Case Studies Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title & Client
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Industry
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCaseStudies.map((cs) => (
                  <tr key={cs.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">{cs.title}</div>
                        <div className="text-sm text-gray-600">{cs.client_name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {cs.industry}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => togglePublish(cs.id, cs.published)}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                          cs.published
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                        }`}
                      >
                        {cs.published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(cs.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/case-studies/${cs.id}/edit`}
                          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </Link>
                        <Link
                          href={`/case-studies/${cs.slug}`}
                          target="_blank"
                          className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleDelete(cs.id)}
                          className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No case studies found</div>
              <Link
                href="/admin/case-studies/create"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Create your first case study →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}