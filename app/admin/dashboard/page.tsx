'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [newsPosts, setNewsPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const router = useRouter();

  // Simple password authentication (you should use proper auth in production)
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchNewsPosts();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setError('');
      fetchNewsPosts();
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setPassword('');
    setShowForm(false);
    setEditingPost(null);
  };

  const fetchNewsPosts = async () => {
    try {
      setIsLoadingPosts(true);
      const { data, error } = await supabase
        .from('news_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        alert(`Error fetching news posts: ${error.message || JSON.stringify(error)}`);
        throw error;
      }
      setNewsPosts(data || []);
    } catch (error: any) {
      console.error('Error fetching news posts:', error);
      // Show user-friendly error message
      if (error?.message) {
        alert(`Error: ${error.message}`);
      } else {
        alert('Failed to fetch news posts. Please check your Supabase connection and RLS policies.');
      }
    } finally {
      setIsLoadingPosts(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this news post?')) return;

    try {
      const { error } = await supabase
        .from('news_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchNewsPosts();
    } catch (error: any) {
      alert('Error deleting post: ' + error.message);
    }
  };

  const handleTogglePublish = async (post: any) => {
    try {
      const { error } = await supabase
        .from('news_posts')
        .update({
          published: !post.published,
          published_at: !post.published ? new Date().toISOString() : null,
        })
        .eq('id', post.id);

      if (error) throw error;
      fetchNewsPosts();
    } catch (error: any) {
      alert('Error updating post: ' + error.message);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Image
              src="/logo/header-logo.svg"
              alt="FORLAND Logo"
              width={200}
              height={60}
              className="mx-auto object-contain"
            />
            <h1
              className="text-3xl mt-6 mb-2"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                color: '#000000',
              }}
            >
              Admin Dashboard
            </h1>
            <p
              className="text-gray-600"
              style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}
            >
              Enter password to continue
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF0011] focus:border-[#DF0011] outline-none"
                style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                required
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full text-white py-3 rounded-lg"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                background: 'linear-gradient(90deg, #000000 0%, #910000 100%)',
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
                style={{
                  fontFamily: 'Effra, Arial, sans-serif',
                  fontWeight: 400,
                  color: '#000000',
                }}
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
                style={{
                  fontFamily: 'Effra, Arial, sans-serif',
                  background: '#DF0011',
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h2
            className="text-2xl"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              color: '#000000',
            }}
          >
            News Posts
          </h2>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingPost(null);
            }}
            className="px-6 py-2 text-white rounded-lg"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              background: '#DF0011',
            }}
          >
            + New Post
          </button>
        </div>

        {showForm && (
          <NewsPostForm
            post={editingPost}
            onClose={() => {
              setShowForm(false);
              setEditingPost(null);
            }}
            onSuccess={() => {
              setShowForm(false);
              setEditingPost(null);
              fetchNewsPosts();
            }}
          />
        )}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                  >
                    Title
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                  >
                    Status
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                  >
                    Created
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {newsPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className="text-sm font-medium text-gray-900"
                        style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                      >
                        {post.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            post.published
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                          style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                        >
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                        {post.featured && (
                          <span
                            className="px-2 py-1 text-xs rounded-full bg-[#DF0011] text-white"
                            style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                          >
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => {
                          setEditingPost(post);
                          setShowForm(true);
                        }}
                        className="text-[#DF0011] hover:underline"
                        style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleTogglePublish(post)}
                        className="text-blue-600 hover:underline"
                        style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                      >
                        {post.published ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:underline"
                        style={{ fontFamily: 'Effra, Arial, sans-serif' }}
                      >
                        Delete
                      </button>
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
        if (post) {
          // For existing post, exclude it from unfeaturing
          const { error: unfeatureError } = await supabase
            .from('news_posts')
            .update({ featured: false })
            .neq('id', post.id);

          if (unfeatureError) throw unfeatureError;
        } else {
          // For new post, unfeature all existing posts
          const { error: unfeatureError } = await supabase
            .from('news_posts')
            .update({ featured: false });

          if (unfeatureError) throw unfeatureError;
        }
      }

      const dataToSubmit = {
        ...formData,
        published_at: formData.published ? (post?.published_at || new Date().toISOString()) : null,
      };

      if (post) {
        // Update existing post
        const { error } = await supabase
          .from('news_posts')
          .update(dataToSubmit)
          .eq('id', post.id);
        if (error) throw error;
      } else {
        // Create new post
        const { error } = await supabase.from('news_posts').insert([dataToSubmit]);
        if (error) throw error;
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
                Image {formData.image_url && !selectedFile ? '(Current)' : ''}
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
