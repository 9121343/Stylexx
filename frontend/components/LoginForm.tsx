// components/LoginForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import OAuthLogin from './OAuthLogin';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Simulated login for demo
      const response = await axios.post('http://localhost:5000/api/auth/google', {
        token: 'simulated_token_for_demo'
      });

      localStorage.setItem('token', response.data.token);
      router.push('/account');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="glass-card bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Log In to StyleXX
        </h2>

        {error && (
          <div className="mb-4 bg-red-900/30 border border-red-700 text-red-400 p-3 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full ${
              loading ? 'bg-blue-400' : 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500'
            } text-white py-3 rounded-lg font-semibold transition-all duration-300`}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => router.push('/forgot-password')}
            className="text-sm text-gray-400 hover:text-cyan-400"
          >
            Forgot Password?
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800/50 text-gray-400">Or continue with</span>
          </div>
        </div>

        <OAuthLogin />

        <div className="text-center mt-6 text-sm text-gray-400">
          Don't have an account?{' '}
          <button 
            onClick={() => router.push('/signup')} 
            className="text-cyan-400 hover:text-cyan-300"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}