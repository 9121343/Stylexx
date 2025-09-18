'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Try JWT decode first (for real tokens)
        let decoded: any;
        try {
          decoded = jwtDecode(token);
        } catch {
          // Fallback to base64 decode (for demo tokens)
          decoded = JSON.parse(atob(token));
        }
        
        setUser({
          id: decoded.id,
          name: decoded.name,
          email: decoded.email,
          avatar: decoded.avatar || ''
        });
      } catch (err) {
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    try {
      let decoded: any;
      try {
        decoded = jwtDecode(token);
      } catch {
        decoded = JSON.parse(atob(token));
      }
      
      setUser({
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        avatar: decoded.avatar || ''
      });
    } catch (err) {
      console.error('Failed to decode token:', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};