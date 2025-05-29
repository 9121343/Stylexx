'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useCart } from '@/components/CartContext';
import Link from 'next/link';

export function Navbar() {
  const { cart } = useCart();
  const cartIconRef = useRef<HTMLButtonElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);

  // Total quantity in cart
  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity ?? 0), 0);

  // Pulse effect when cart count changes
  useEffect(() => {
    if (totalQuantity > 0) {
      setCartPulse(true);
      const timeout = setTimeout(() => setCartPulse(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [totalQuantity]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-xl font-bold hover:underline">StyleXX</Link>
        <nav className="flex gap-6 font-medium">
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/customize" className="hover:underline">Customize</Link>
          <Link href="/ai-assistant" className="hover:underline">AI Assistant</Link>
          <Link href="/community" className="hover:underline">Community</Link>
        </nav>
        <div className="flex gap-4 text-2xl items-center">
          <button aria-label="Search" className="hover:text-blue-600">🔍</button>
          <button aria-label="Profile" className="hover:text-blue-600">👤</button>
          <button
            ref={cartIconRef}
            aria-label="Cart"
            className={`hover:text-blue-600 relative transition-transform ${cartPulse ? 'scale-125' : ''}`}
            onClick={() => setDrawerOpen(true)}
          >
            🛒
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      </header>

      {drawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs mx-4">
            <p className="mb-4 font-medium">Proceed to checkout?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDrawerOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <Link
                href="/checkout"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setDrawerOpen(false)}
              >
                Go to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
