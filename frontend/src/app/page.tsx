'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLogin, setKeepLogin] = useState(false);
  const [isPWA, setIsPWA] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // PWA 환경 감지 (standalone 모드)
    const isStandalone =
      (typeof window !== 'undefined' &&
        (window.matchMedia('(display-mode: standalone)').matches ||
          // iOS
          ((window.navigator as unknown as { standalone: boolean }).standalone === true)));
    setIsPWA(isStandalone);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('email: ' + email + ' password: ' + password);
    if (email === 'worker' && password === 'worker') {
      localStorage.setItem('role', 'worker');
      router.push('/company/search');
    } else if (email === 'chief' && password === 'chief') {
      localStorage.setItem('role', 'chief');
      router.push('/draft/overview');
    } else if (email === 'manager' && password === 'manager') {
      localStorage.setItem('role', 'manager');
      router.push('/draft/overview');
    } else if (email === 'supervisor' && password === 'supervisor') {
      localStorage.setItem('role', 'supervisor');
      router.push('/draft/overview');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleGoogleLogin = async () => {
    const email = 'workor.d.atv@gmail.com';
    const password = 'wor.d8551';
    try {
      const response = await axios.post('/api/user/login', {
        email,
        password
      });
      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem('workerId', userData.workerId);
        localStorage.setItem('name', userData.name);
        localStorage.setItem('email', userData.email);
        localStorage.setItem('status', userData.status);
        if (userData.status === 'admin') {
          router.push('/api/admin/home');
        } else {
          router.push('/api/worker/home');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.');
    }
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    const confirmReset = confirm('Are you sure you want to reset your password?');
    if (confirmReset) {
      router.push('/api/user/forgot');
    }
  };

  // PWA 환경이면 앱 스타일의 화면, 아니면 기존 로그인 화면
  if (isPWA) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-blue-300">
        <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">앱 로그인</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="text"
              name="email"
              placeholder="아이디"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-gray-50"
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-gray-50"
            />
            <div className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={keepLogin}
                onChange={(e) => setKeepLogin(e.target.checked)}
                className="accent-purple-500 rounded"
              />
              <span>로그인 상태 유지</span>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg mt-2 transition-colors"
            >
              로그인
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-3 text-gray-400 text-sm">또는</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.5 29.6 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5c11.3 0 20.5-9.2 20.5-20.5 0-1.4-.1-2.7-.3-4z" /><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.2 19.2 13.5 24 13.5c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.5 29.6 3.5 24 3.5c-7.2 0-13.3 4.1-16.7 10.2z" /><path fill="#FBBC05" d="M24 44.5c5.6 0 10.5-1.9 14.4-5.1l-6.7-5.5c-2 1.4-4.5 2.1-7.7 2.1-6.1 0-11.3-4.1-13.2-9.6l-7 5.4C6.7 39.9 14.7 44.5 24 44.5z" /><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c1.7 0 3.2.5 4.5 1.4l6.4-6.4C34.5 5.5 29.6 3.5 24 3.5c-7.2 0-13.3 4.1-16.7 10.2z" /></g></svg>
            Google로 계속하기
          </button>
        </div>
      </div>
    );
  }

  // 기존 웹 로그인 화면
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Welcome!</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </span>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-gray-50"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="8" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-gray-50"
            />
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center gap-2 select-none">
              <input
                type="checkbox"
                checked={keepLogin}
                onChange={(e) => setKeepLogin(e.target.checked)}
                className="accent-purple-500 rounded"
              />
              Keep me logged in
            </label>
            <button
              type="button"
              className="text-purple-500 hover:underline font-medium"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-400 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg mt-2 transition-colors"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-3 text-gray-400 text-sm">또는</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.5 29.6 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5c11.3 0 20.5-9.2 20.5-20.5 0-1.4-.1-2.7-.3-4z" /><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.2 19.2 13.5 24 13.5c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.5 29.6 3.5 24 3.5c-7.2 0-13.3 4.1-16.7 10.2z" /><path fill="#FBBC05" d="M24 44.5c5.6 0 10.5-1.9 14.4-5.1l-6.7-5.5c-2 1.4-4.5 2.1-7.7 2.1-6.1 0-11.3-4.1-13.2-9.6l-7 5.4C6.7 39.9 14.7 44.5 24 44.5z" /><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c1.7 0 3.2.5 4.5 1.4l6.4-6.4C34.5 5.5 29.6 3.5 24 3.5c-7.2 0-13.3 4.1-16.7 10.2z" /></g></svg>
          Continue with Google
        </button>
        <div className="text-center mt-6 text-sm text-gray-500">
          Do not have an account?{' '}
          <a href="/api/user/register" className="text-purple-500 font-semibold hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
