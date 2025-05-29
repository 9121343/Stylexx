'use client';

import React, { useState } from 'react';
import { useCart } from '@/components/CartContext';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: 'p1', name: 'Cool Hat', price: 299, image: '/images/shop1.png' },
  { id: 'p2', name: 'Stylish Jacket', price: 1999, image: '/images/shop2.png' },
];

export default function ProductPage() {
  const { addToCart } = useCart();
  const [flyBubbles, setFlyBubbles] = useState([]);
  const router = useRouter();

  const handleAddToCart = (e, product) => {
    addToCart(product);

    const rect = e.currentTarget.getBoundingClientRect();
    setFlyBubbles((prev) => [
      ...prev,
      {
        id: product.id + Date.now(),
        img: product.image,
        startPos: {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        },
      },
    ]);
  };

  const removeBubble = (id) => {
    setFlyBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  return (
        <div className="bg-white text-black">
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between px-6 py-3">
            <div className="text-xl font-bold">StyleXX</div>
            <nav className="flex gap-6 font-medium">
              <a href="/shop" className="hover:underline">Shop</a>
              <a href="/customize" className="hover:underline">Customize</a>
              <a href="/ai-assistant" className="hover:underline">AI Assistant</a>
              <a href="/community" className="hover:underline">Community</a>
            </nav>
            <div className="flex gap-4 text-2xl items-center">
              <button aria-label="Search" className="hover:text-blue-600">🔍</button>
              <button aria-label="Profile" className="hover:text-blue-600">👤</button>
              <button id="cart-icon" aria-label="Cart" className="hover:text-blue-600 relative">
                🛒
              </button>
            </div>
      <div className="grid grid-cols-2 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded p-4 flex flex-col items-center"
          >
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
      </div>

      {/* ✨ Animation */}
      <AnimatePresence>
        {flyBubbles.map(({ id, img, startPos }) => (
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
              top: 20,
              right: 24,
              scale: 0.3,
              opacity: 0,
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => removeBubble(id)}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
