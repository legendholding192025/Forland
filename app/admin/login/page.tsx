'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Simple password authentication (you should use proper auth in production)
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_authenticated', 'true');
      setError('');
      router.push('/admin/dashboard');
    } else {
      setError('Incorrect password');
    }
  };

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
