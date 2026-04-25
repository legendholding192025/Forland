'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  createNewsPost,
  deleteNewsPost,
  fetchAllNewsPostsForAdmin,
  resetFeaturedNewsPosts,
  updateNewsPost,
  updateNewsPostPublished,
} from '@/lib/website-data';
import Image from 'next/image';
import Link from 'next/link';

type LeadType = 'get_in_touch' | 'request_quote' | 'test_drive' | 'service';

interface Lead {
  id: string;
  type: LeadType;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  raw: Record<string, any>;
}

const LEAD_TYPES: { value: LeadType | 'all'; label: string; color: string }[] = [
  { value: 'all', label: 'All Leads', color: '#6b7280' },
  { value: 'get_in_touch', label: 'Get In Touch', color: '#2563eb' },
  { value: 'request_quote', label: 'Request Quote', color: '#7c3aed' },
  { value: 'test_drive', label: 'Test Drive', color: '#059669' },
  { value: 'service', label: 'Service', color: '#d97706' },
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'news' | 'leads'>('news');
  const [newsPosts, setNewsPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);

  // Leads state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [leadsError, setLeadsError] = useState<string | null>(null);
  const [leadTypeFilter, setLeadTypeFilter] = useState<LeadType | 'all'>('all');
  const [leadSourceFilter, setLeadSourceFilter] = useState<'all' | 'qr'>('all');
  const [leadSearch, setLeadSearch] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const router = useRouter();

  useEffect(() => {
    const authStatus = sessionStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchNewsPosts();
      fetchLeads();
    } else {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setShowForm(false);
    setEditingPost(null);
    router.push('/admin/login');
  };

  const fetchLeads = async () => {
    setIsLoadingLeads(true);
    setLeadsError(null);
    try {
      const res = await fetch('/api/admin/leads');
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Failed to fetch leads');
      }

      if (json.errors?.length) {
        const hint =
          json.dataBackend === 'postgres' || json.usingServiceKey
            ? ''
            : '\n\nYou need to add SUPABASE_SERVICE_ROLE_KEY to .env.local (find it at Supabase → Settings → API → service_role key) and restart the dev server.';
        setLeadsError(json.errors.join('\n') + hint);
      }

      const normalize = (row: any): Lead => {
        const type = row._lead_type as LeadType;
        const { _lead_type, ...rawWithoutMeta } = row;
        return {
          id: `${type}-${row.id}`,
          type,
          name:
            type === 'request_quote'
              ? row.full_name || ''
              : `${row.first_name || ''} ${row.last_name || ''}`.trim(),
          email: row.email || '',
          phone: row.phone || '',
          created_at: row.created_at,
          raw: rawWithoutMeta,
        };
      };

      setLeads((json.leads || []).map(normalize));
    } catch (err: any) {
      setLeadsError('Error fetching leads: ' + err.message);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const handleDeleteLead = async (lead: Lead) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ table: lead.type, id: lead.raw.id }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Delete failed');
      if (selectedLead?.id === lead.id) setSelectedLead(null);
      fetchLeads();
    } catch (err: any) {
      alert('Error deleting lead: ' + err.message);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesType = leadTypeFilter === 'all' || l.type === leadTypeFilter;
    const matchesSource =
      leadSourceFilter === 'all' ||
      (l.type === 'request_quote' && l.raw?.source === 'qr');
    const q = leadSearch.toLowerCase();
    const matchesSearch =
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      l.phone.toLowerCase().includes(q);
    return matchesType && matchesSource && matchesSearch;
  });

  const fetchNewsPosts = async () => {
    try {
      setIsLoadingPosts(true);
      const data = await fetchAllNewsPostsForAdmin();
      setNewsPosts(data || []);
    } catch (error: any) {
      console.error('Error fetching news posts:', error);
      if (error?.message) {
        alert(`Error: ${error.message}`);
      } else {
        alert('Failed to fetch news posts. Check your data backend (Supabase or PostgreSQL) configuration.');
      }
    } finally {
      setIsLoadingPosts(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this news post?')) return;

    try {
      await deleteNewsPost(id);
      fetchNewsPosts();
    } catch (error: any) {
      alert('Error deleting post: ' + error.message);
    }
  };

  const handleTogglePublish = async (post: any) => {
    try {
      await updateNewsPostPublished(post.id, {
        published: !post.published,
        published_at: !post.published ? new Date().toISOString() : null,
      });
      fetchNewsPosts();
    } catch (error: any) {
      alert('Error updating post: ' + error.message);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>
            Redirecting to login...
          </p>
        </div>
      </div>
    );
  }

  const getLeadTypeMeta = (type: LeadType) =>
    LEAD_TYPES.find((t) => t.value === type) ?? LEAD_TYPES[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logo/header-logo.svg"
                alt="FORLAND Logo"
                width={150}
                height={45}
                className="object-contain"
              />
              <h1
                className="text-2xl"
                style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400, color: '#000000' }}
              >
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/newsfeed"
                className="text-[#DF0011] hover:underline"
                style={{ fontFamily: 'Effra, Arial, sans-serif' }}
              >
                View Newsfeed
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white rounded-lg"
                style={{ fontFamily: 'Effra, Arial, sans-serif', background: '#DF0011' }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 border-t border-gray-200">
            {[
              { key: 'news', label: 'News Posts' },
              { key: 'leads', label: `Leads${leads.length ? ` (${leads.length})` : ''}` },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as 'news' | 'leads')}
                className="px-6 py-3 text-sm border-b-2 transition-colors"
                style={{
                  fontFamily: 'Effra, Arial, sans-serif',
                  borderBottomColor: activeTab === tab.key ? '#DF0011' : 'transparent',
                  color: activeTab === tab.key ? '#DF0011' : '#6b7280',
                  background: 'transparent',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── NEWS POSTS TAB ── */}
        {activeTab === 'news' && (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2
                className="text-2xl"
                style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400, color: '#000000' }}
              >
                News Posts
              </h2>
              <button
                onClick={() => { setShowForm(true); setEditingPost(null); }}
                className="px-6 py-2 text-white rounded-lg"
                style={{ fontFamily: 'Effra, Arial, sans-serif', background: '#DF0011' }}
              >
                + New Post
              </button>
            </div>

            {showForm && (
              <NewsPostForm
                post={editingPost}
                onClose={() => { setShowForm(false); setEditingPost(null); }}
                onSuccess={() => { setShowForm(false); setEditingPost(null); fetchNewsPosts(); }}
              />
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Title', 'Status', 'Created', 'Actions'].map((h) => (
                        <th
                          key={h}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {newsPosts.map((post) => (
                      <tr key={post.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                            {post.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col gap-1">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${post.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                              style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                            >
                              {post.published ? 'Published' : 'Draft'}
                            </span>
                            {post.featured && (
                              <span className="px-2 py-1 text-xs rounded-full bg-[#DF0011] text-white" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                                Featured
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(post.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => { setEditingPost(post); setShowForm(true); }}
                              className="px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                              style={{ fontFamily: 'Effra, Arial, sans-serif', background: '#2563eb' }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleTogglePublish(post)}
                              className={`px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity ${post.published ? 'bg-orange-600' : 'bg-blue-600'}`}
                              style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                            >
                              {post.published ? 'Unpublish' : 'Publish'}
                            </button>
                            <button
                              onClick={() => handleDelete(post.id)}
                              className="px-4 py-2 rounded-lg text-white bg-red-600 hover:opacity-90 transition-opacity"
                              style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {isLoadingPosts && (
                  <div className="text-center py-12 text-gray-500" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                    Loading posts...
                  </div>
                )}
                {!isLoadingPosts && newsPosts.length === 0 && (
                  <div className="text-center py-12 text-gray-500" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                    No news posts yet. Create your first post!
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* ── LEADS TAB ── */}
        {activeTab === 'leads' && (
          <>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2
                className="text-2xl"
                style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400, color: '#000000' }}
              >
                Leads
              </h2>
              <button
                onClick={fetchLeads}
                className="self-start sm:self-auto px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#374151' }}
              >
                ↻ Refresh
              </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-col sm:flex-row gap-3">
              {/* Type filter pills */}
              <div className="flex flex-wrap gap-2">
                {LEAD_TYPES.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setLeadTypeFilter(t.value)}
                    className="px-3 py-1.5 rounded-full text-xs transition-all"
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      background: leadTypeFilter === t.value ? t.color : '#f3f4f6',
                      color: leadTypeFilter === t.value ? '#ffffff' : '#374151',
                      border: `1.5px solid ${leadTypeFilter === t.value ? t.color : '#e5e7eb'}`,
                    }}
                  >
                    {t.label}
                    {t.value !== 'all' && (
                      <span className="ml-1 opacity-75">
                        ({leads.filter((l) => l.type === t.value).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Source filter (QR tracking) */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>Source:</span>
                {(['all', 'qr'] as const).map((src) => (
                  <button
                    key={src}
                    onClick={() => setLeadSourceFilter(src)}
                    className="px-3 py-1.5 rounded-full text-xs transition-all"
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      background: leadSourceFilter === src ? '#111827' : '#f3f4f6',
                      color: leadSourceFilter === src ? '#fff' : '#374151',
                      border: `1.5px solid ${leadSourceFilter === src ? '#111827' : '#e5e7eb'}`,
                    }}
                  >
                    {src === 'all' ? 'All' : 'QR code only'}
                    {src === 'qr' && (
                      <span className="ml-1 opacity-75">
                        ({leads.filter((l) => l.type === 'request_quote' && l.raw?.source === 'qr').length})
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="sm:ml-auto">
                <input
                  type="text"
                  placeholder="Search name, email, phone…"
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  className="w-full sm:w-64 px-4 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none"
                  style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
                />
              </div>
            </div>

            {/* Error banner */}
            {leadsError && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p
                  className="text-sm font-medium text-red-700 mb-1"
                  style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                >
                  Could not fetch leads
                </p>
                <pre
                  className="text-xs text-red-600 whitespace-pre-wrap"
                  style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                >
                  {leadsError}
                </pre>
              </div>
            )}

            {/* Leads table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Type', 'Name', 'Email', 'Phone', 'Source', 'Date', 'Actions'].map((h) => (
                        <th
                          key={h}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredLeads.map((lead) => {
                      const meta = getLeadTypeMeta(lead.type);
                      return (
                        <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className="px-2 py-1 text-xs rounded-full text-white"
                              style={{ fontFamily: 'Effra, Arial, sans-serif', background: meta.color }}
                            >
                              {meta.label}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                            {lead.name || '—'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                            {lead.email || '—'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                            {lead.phone || '—'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                            {lead.type === 'request_quote' && lead.raw?.source === 'qr' ? (
                              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs">QR code</span>
                            ) : lead.type === 'request_quote' ? (
                              <span className="text-gray-400">Website</span>
                            ) : (
                              '—'
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                            {new Date(lead.created_at).toLocaleDateString('en-GB', {
                              day: '2-digit', month: 'short', year: 'numeric',
                            })}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="px-4 py-1.5 rounded-lg text-white text-xs hover:opacity-90 transition-opacity"
                                style={{ fontFamily: 'Effra, Arial, sans-serif', background: '#2563eb' }}
                              >
                                View
                              </button>
                              <button
                                onClick={() => handleDeleteLead(lead)}
                                className="px-4 py-1.5 rounded-lg text-white text-xs bg-red-600 hover:opacity-90 transition-opacity"
                                style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {isLoadingLeads && (
                  <div className="text-center py-12 text-gray-500" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                    Loading leads…
                  </div>
                )}
                {!isLoadingLeads && filteredLeads.length === 0 && (
                  <div className="text-center py-12 text-gray-400" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                    {leads.length === 0 ? 'No leads yet.' : 'No leads match your filters.'}
                  </div>
                )}
              </div>
            </div>

            {/* Results count */}
            {!isLoadingLeads && filteredLeads.length > 0 && (
              <p className="mt-3 text-sm text-gray-400" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                Showing {filteredLeads.length} of {leads.length} total leads
              </p>
            )}
          </>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <LeadDetailModal lead={selectedLead} onClose={() => setSelectedLead(null)} onDelete={(lead) => { handleDeleteLead(lead); }} />
      )}
    </div>
  );
}

function LeadDetailModal({
  lead,
  onClose,
  onDelete,
}: {
  lead: Lead;
  onClose: () => void;
  onDelete: (lead: Lead) => void;
}) {
  const meta = LEAD_TYPES.find((t) => t.value === lead.type)!;

  const FIELD_LABELS: Record<string, string> = {
    first_name: 'First Name',
    last_name: 'Last Name',
    full_name: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    company_name: 'Company Name',
    company_size: 'Company Size',
    position: 'Position',
    time_of_purchase: 'Time of Purchase',
    model: 'Model',
    emirates: 'Emirate',
    additional_info: 'Additional Info',
    source: 'Source',
    created_at: 'Submitted At',
  };

  const SKIP_FIELDS = new Set(['id', 'updated_at']);

  const fields = Object.entries(lead.raw).filter(([k]) => !SKIP_FIELDS.has(k));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 text-sm rounded-full text-white"
                style={{ fontFamily: 'Effra, Arial, sans-serif', background: meta.color }}
              >
                {meta.label}
              </span>
              <h2
                className="text-xl"
                style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400, color: '#000000' }}
              >
                Lead Details
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl leading-none"
            >
              ✕
            </button>
          </div>

          <dl className="space-y-4">
            {fields.map(([key, value]) => {
              if (value === null || value === undefined || value === '') return null;
              const label = FIELD_LABELS[key] || key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
              const display =
                key === 'created_at'
                  ? new Date(value as string).toLocaleString('en-GB', {
                      day: '2-digit', month: 'short', year: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })
                  : key === 'source'
                    ? (value === 'qr' ? 'QR code' : String(value))
                    : String(value);
              return (
                <div key={key} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <dt
                    className="text-xs uppercase tracking-wider text-gray-400 mb-1"
                    style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                  >
                    {label}
                  </dt>
                  <dd
                    className="text-sm text-gray-900 whitespace-pre-wrap break-words"
                    style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                  >
                    {display}
                  </dd>
                </div>
              );
            })}
          </dl>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => { onDelete(lead); onClose(); }}
              className="px-5 py-2 rounded-lg text-white text-sm bg-red-600 hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'Effra, Arial, sans-serif' }}
            >
              Delete Lead
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#374151' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsPostForm({ post, onClose, onSuccess }: { post: any; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    excerpt: post?.excerpt || '',
    image_url: post?.image_url || '',
    author: post?.author || '',
    featured: post?.featured || false,
    published: post?.published || false,
    seo_title: post?.seo_title || '',
    seo_description: post?.seo_description || '',
    seo_keywords: post?.seo_keywords || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (10MB max)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        alert('File size exceeds 10MB limit. Please choose a smaller file.');
        e.target.value = '';
        return;
      }
      
      setSelectedFile(file);
      setFormData({ ...formData, image_url: '' }); // Clear existing URL when file is selected
      
      // Upload file immediately
      setIsUploading(true);
      setUploadProgress(0);
      try {
        const imageUrl = await uploadFile(file);
        if (imageUrl && imageUrl.trim().length > 0) {
          setFormData({ ...formData, image_url: imageUrl });
          setSelectedFile(null); // Clear selected file after successful upload
        } else {
          throw new Error('Received empty image URL from server');
        }
      } catch (error: any) {
        console.error('Upload error:', error);
        const errorMessage = error.message || 'Unknown error occurred during upload';
        alert(`Error uploading image: ${errorMessage}\n\nPlease check:\n- Your internet connection\n- File size (max 10MB)\n- File format (images only)`);
        e.target.value = ''; // Clear file input on error
        setSelectedFile(null);
        setFormData({ ...formData, image_url: '' }); // Clear image URL on error
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
      }
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    // Use Next.js API route to avoid CORS issues
    const xhr = new XMLHttpRequest();

    // Track upload progress - show 0-80% for browser to server upload
    // The remaining 20% will be for server to external API upload
    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        // Map 0-100% of browser upload to 0-80% of total progress
        const browserProgress = Math.round((e.loaded / e.total) * 80);
        setUploadProgress(browserProgress);
      }
    });

    return new Promise((resolve, reject) => {
      // When browser upload completes, we're at 80%
      // Now we wait for the server to upload to external API
      let progressInterval: NodeJS.Timeout | null = null;
      
      // Simulate progress from 80% to 95% while waiting for server response
      const startServerProgress = () => {
        let currentProgress = 80;
        progressInterval = setInterval(() => {
          if (currentProgress < 95) {
            currentProgress += 1;
            setUploadProgress(currentProgress);
          }
        }, 200); // Update every 200ms
      };

      // Handle completion
      xhr.addEventListener('load', () => {
        if (progressInterval) {
          clearInterval(progressInterval);
        }
        
        // Complete to 100%
        setUploadProgress(100);
        
        // Small delay to show 100% before resolving
        setTimeout(() => {
          if (xhr.status === 200 || xhr.status === 201) {
            try {
              const response = JSON.parse(xhr.responseText);
              
              // Check for success response format
              if (response.success && response.url) {
                resolve(response.url);
              } else if (response.error) {
                reject(new Error(response.error));
              } else if (!response.success) {
                reject(new Error(response.message || 'Upload failed'));
              } else {
                reject(new Error('Invalid response format: URL not found in response'));
              }
            } catch (error: any) {
              reject(new Error(`Failed to process response: ${error.message}`));
            }
          } else {
            let errorMessage = `Upload failed with status ${xhr.status}`;
            try {
              const errorResponse = JSON.parse(xhr.responseText);
              errorMessage = errorResponse.error || errorResponse.message || errorMessage;
            } catch (e) {
              if (xhr.responseText) {
                errorMessage = `${errorMessage}: ${xhr.responseText.substring(0, 200)}`;
              }
            }
            reject(new Error(errorMessage));
          }
        }, 300);
      });

      // Handle network errors
      xhr.addEventListener('error', () => {
        if (progressInterval) {
          clearInterval(progressInterval);
        }
        reject(new Error('Network error: Failed to connect to upload server. Please check your internet connection.'));
      });

      xhr.addEventListener('abort', () => {
        if (progressInterval) {
          clearInterval(progressInterval);
        }
        reject(new Error('Upload was cancelled'));
      });

      // Handle timeout
      xhr.timeout = 60000; // 60 seconds timeout
      xhr.addEventListener('timeout', () => {
        if (progressInterval) {
          clearInterval(progressInterval);
        }
        reject(new Error('Upload timeout: The upload took too long. Please try again with a smaller file.'));
      });

      // Start the upload
      xhr.open('POST', '/api/upload-image');
      xhr.send(formData);
      
      // Start simulating server progress after a short delay
      // This gives time for the browser upload to start
      setTimeout(() => {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
          startServerProgress();
        }
      }, 500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required SEO fields
    if (!formData.seo_title || !formData.seo_title.trim()) {
      alert('SEO Title is required');
      return;
    }
    if (!formData.seo_description || !formData.seo_description.trim()) {
      alert('SEO Description is required');
      return;
    }
    if (!formData.seo_keywords || !formData.seo_keywords.trim()) {
      alert('SEO Keywords are required');
      return;
    }

    // Validate required image field
    if (!formData.image_url || !formData.image_url.trim()) {
      alert('Image is required. Please upload an image before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Image should already be uploaded when file was selected
      // If there's a selected file but no image_url, upload might have failed
      if (selectedFile && !formData.image_url) {
        alert('Please wait for the image upload to complete or select a different image.');
        setIsSubmitting(false);
        return;
      }

      // If marking as featured, unfeature all other posts first
      if (formData.featured) {
        await resetFeaturedNewsPosts(post ? post.id : null);
      }

      const dataToSubmit = {
        ...formData,
        published_at: formData.published ? (post?.published_at || new Date().toISOString()) : null,
      };

      if (post) {
        await updateNewsPost(post.id, dataToSubmit);
      } else {
        await createNewsPost(dataToSubmit);
      }

      onSuccess();
    } catch (error: any) {
      alert('Error saving post: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2
              className="text-2xl"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                color: '#000000',
              }}
            >
              {post ? 'Edit Post' : 'New Post'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              style={{ fontFamily: 'Effra, Arial, sans-serif' }}
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                Title <span style={{ color: '#DF0011' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none text-black"
                style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
                required
              />
            </div>

            <div>
              <label className="block mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                Excerpt
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none text-black"
                style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
                rows={3}
              />
            </div>

            <div>
              <label className="block mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                Content <span style={{ color: '#DF0011' }}>*</span>
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none text-black"
                style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
                rows={10}
                required
              />
            </div>

            <div>
              <label className="block mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                Image <span style={{ color: '#DF0011' }}>*</span> {formData.image_url && !selectedFile ? '(Current)' : ''}
              </label>
              
              {/* File Upload Input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none text-black mb-2"
                style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
                disabled={isUploading || isSubmitting}
              />
              <p className="text-sm mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>
                Maximum file size: 10MB
              </p>

              {/* Upload Progress */}
              {isUploading && (
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}>
                      Uploading...
                    </span>
                    <span className="text-sm font-medium" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}>
                      {uploadProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#DF0011] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Current Image Preview (only when editing existing post with image, and no new upload) */}
              {formData.image_url && !selectedFile && !isUploading && post?.image_url && formData.image_url === post.image_url && (
                <div className="mt-2">
                  <p className="text-sm mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>
                    Current image:
                  </p>
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-300">
                    <img
                      src={formData.image_url}
                      alt="Current"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, image_url: '' })}
                    className="mt-2 text-sm text-[#DF0011] hover:underline"
                    style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                  >
                    Remove current image
                  </button>
                </div>
              )}

              {/* Uploading Status */}
              {isUploading && (
                <div className="mt-2">
                  <p className="text-sm mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>
                    Uploading image...
                  </p>
                </div>
              )}

              {/* Uploaded Image Preview (shows after successful upload, different from original) */}
              {formData.image_url && !isUploading && (!post?.image_url || formData.image_url !== post.image_url) && (
                <div className="mt-2">
                  <p className="text-sm mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>
                    Uploaded image:
                  </p>
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-300">
                    <img
                      src={formData.image_url}
                      alt="Uploaded"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, image_url: '' });
                      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
                      if (fileInput) fileInput.value = '';
                    }}
                    className="mt-2 text-sm text-[#DF0011] hover:underline"
                    style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                  >
                    Remove uploaded image
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                Author
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none text-black"
                style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
              />
            </div>

            {/* SEO Section */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3
                className="text-xl mb-4"
                style={{
                  fontFamily: 'Effra, Arial, sans-serif',
                  fontWeight: 400,
                  color: '#000000',
                }}
              >
                SEO Settings
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                    SEO Title <span style={{ color: '#DF0011' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.seo_title}
                    onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none text-black"
                    style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
                    placeholder="Custom title for search engines"
                    maxLength={500}
                    required
                  />
                  <p className="text-xs mt-1" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>
                    Recommended: 50-60 characters
                  </p>
                </div>

                <div>
                  <label className="block mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                    SEO Description <span style={{ color: '#DF0011' }}>*</span>
                  </label>
                  <textarea
                    value={formData.seo_description}
                    onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none text-black"
                    style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
                    placeholder="Meta description for search engines"
                    rows={3}
                    maxLength={500}
                    required
                  />
                  <p className="text-xs mt-1" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>
                    Recommended: 150-160 characters
                  </p>
                </div>

                <div>
                  <label className="block mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                    SEO Keywords <span style={{ color: '#DF0011' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.seo_keywords}
                    onChange={(e) => setFormData({ ...formData, seo_keywords: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none text-black"
                    style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
                    placeholder="Comma-separated keywords (e.g., forland, trucks, uae)"
                    required
                  />
                  <p className="text-xs mt-1" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>
                    Separate keywords with commas. These will be added to the default keywords.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="published" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                  Publish immediately
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="featured" style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000', fontWeight: 400 }}>
                  Mark as Featured Post
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#000000' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 text-white rounded-lg disabled:opacity-50"
                style={{
                  fontFamily: 'Effra, Arial, sans-serif',
                  background: '#DF0011',
                }}
              >
                {isSubmitting ? 'Saving...' : post ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
