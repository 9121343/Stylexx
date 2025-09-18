'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from '@/components/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { FaUser, FaSignOutAlt, FaShoppingCart, FaSearch, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const { cartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 navbar-glass"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-3xl font-extrabold gradient-text"
            >
              StyleXX
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/customize">Customize</NavLink>
            <NavLink href="/ai-assistant">AI Assistant</NavLink>
            <NavLink href="/community">Community</NavLink>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link 
                href="/search" 
                className="p-2 rounded-full bg-slate-800/50 hover:bg-purple-600/20 transition-colors"
                title="Search"
              >
                <FaSearch className="text-gray-300 hover:text-purple-400 transition-colors" />
              </Link>
            </motion.div>

            {/* User Account */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link 
                    href="/account" 
                    className="p-2 rounded-full bg-slate-800/50 hover:bg-purple-600/20 transition-colors"
                    title="Profile"
                  >
                    {user?.avatar ? (
                      <img 
                        src={user.avatar} 
                        alt="Profile" 
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    ) : (
                      <FaUser className="text-gray-300 hover:text-purple-400 transition-colors" />
                    )}
                  </Link>
                </motion.div>
                <motion.button 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                  onClick={logout}
                  className="p-2 rounded-full bg-slate-800/50 hover:bg-red-600/20 transition-colors"
                  title="Logout"
                >
                  <FaSignOutAlt className="text-gray-300 hover:text-red-400 transition-colors" />
                </motion.button>
              </div>
            ) : (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link 
                  href="/login" 
                  className="gradient-button px-6 py-2 text-sm"
                  title="Login"
                >
                  Login
                </Link>
              </motion.div>
            )}

            {/* Cart */}
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <Link 
                href="/cart" 
                className="p-2 rounded-full bg-slate-800/50 hover:bg-purple-600/20 transition-colors relative"
                title="Cart"
              >
                <FaShoppingCart className="text-gray-300 hover:text-purple-400 transition-colors" />
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-slate-800/50 hover:bg-purple-600/20 transition-colors"
            >
              <div className="flex flex-col space-y-1">
                <div className="w-5 h-0.5 bg-gray-300 transition-transform"></div>
                <div className="w-5 h-0.5 bg-gray-300 transition-transform"></div>
                <div className="w-5 h-0.5 bg-gray-300 transition-transform"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-slate-700/50"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/shop">Shop</MobileNavLink>
              <MobileNavLink href="/customize">Customize</MobileNavLink>
              <MobileNavLink href="/ai-assistant">AI Assistant</MobileNavLink>
              <MobileNavLink href="/community">Community</MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
    <Link 
      href={href} 
      className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
    </Link>
  </motion.div>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
