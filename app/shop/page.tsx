'use client';

import React, { useRef, useState } from 'react';
import { useCart } from '@/components/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const products = [
  { id: 'p1', name: 'Cool Hat', price: 299, image: '/images/shop1.png' },
  { id: 'p2', name: 'Stylish Jacket', price: 1999, image: '/images/shop2.png' },
];

export default function ShopPage() {
  const { addToCart, cart } = useCart();
  const cartIconRef = useRef<HTMLButtonElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [flyBubbles, setFlyBubbles] = useState<
    { id: string; img: string; startPos: { x: number; y: number } }[]
  >([]);
  const [cartPulse, setCartPulse] = useState(false);

  // Total quantity in cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product: typeof products[0]) => {
    addToCart(product);

    const buttonRect = e.currentTarget.getBoundingClientRect();
    if (!cartIconRef.current) return;
    const cartRect = cartIconRef.current.getBoundingClientRect();

    setFlyBubbles((prev) => [
      ...prev,
      {
        id: product.id + Date.now(),
        img: product.image,
        startPos: {
          x: buttonRect.left + buttonRect.width / 2,
          y: buttonRect.top + buttonRect.height / 2,
        },
      },
    ]);

    // Trigger pulse animation on cart icon
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 300);
  };

  const removeBubble = (id: string) => {
    setFlyBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navbar */}
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

      {/* Product Grid */}
      <main className="pt-24 px-6 grid grid-cols-2 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} width={120} height={120} />
            <h4 className="font-semibold mt-2">{product.name}</h4>
            <p>₹{product.price}</p>
            <button
              className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>

      {/* Flying bubbles animation */}
      <AnimatePresence>
        {flyBubbles.map(({ id, img, startPos }) => {
          if (!cartIconRef.current) return null;
          const cartRect = cartIconRef.current.getBoundingClientRect();

          return (
            <motion.img
              key={id}
              src={img}
              alt="Flying product"
              initial={{
                position: 'fixed',
                left: startPos.x,
                top: startPos.y,
                width: 40,
                height: 40,
                borderRadius: '50%',
                zIndex: 1000,
                opacity: 1,
              }}
              animate={{
                left: cartRect.left + cartRect.width / 2 - 20,
                top: cartRect.top + cartRect.height / 2 - 20,
                scale: 1.5,
                opacity: 0,
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              exit={{ opacity: 0 }}
              onAnimationComplete={() => removeBubble(id)}
            />
          );
        })}
      </AnimatePresence>

      {/* Checkout Modal */}
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
    </div>
  );
}
