'use client';

import React, { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useCart } from '@/components/CartContext';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: '1', name: 'Sneaker', price: 99, image: '/images/sneaker.png' },
  { id: '2', name: 'Boot', price: 120, image: '/images/boot.png' },
  { id: '3', name: 'Loafer', price: 80, image: '/images/loafer.png' },
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [flyingProduct, setFlyingProduct] = useState<Product | null>(null);
  const flyingRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product: Product) => {
    const button = e.currentTarget;
    const productCard = button.closest('.product-card');
    const cartIcon = document.getElementById('cart-icon');
    
    if (!productCard || !cartIcon || !flyingRef.current) return;

    const productRect = productCard.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    // Initialize flying bubble
    flyingRef.current.style.top = `${productRect.top}px`;
    flyingRef.current.style.left = `${productRect.left}px`;
    flyingRef.current.style.width = `${productRect.width}px`;
    flyingRef.current.style.height = `${productRect.height}px`;
    flyingRef.current.style.display = 'block';

    setFlyingProduct(product);

    const deltaX = cartRect.left + cartRect.width/2 - (productRect.left + productRect.width/2);
    const deltaY = cartRect.top + cartRect.height/2 - (productRect.top + productRect.height/2);

    controls.start({
      x: [0, deltaX/2, deltaX],
      y: [0, deltaY/2 - 80, deltaY],
      scale: [1, 1.2, 0.5],
      opacity: [1, 0.7, 0],
      transition: { duration: 1, ease: 'easeInOut' }
    }).then(() => {
      setFlyingProduct(null);
      addToCart({ ...product, quantity: 1 });
    });
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="product-card border rounded p-4 relative flex flex-col items-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-contain mb-3" 
          />
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="mb-3">${product.price}</p>
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}

      {flyingProduct && (
        <motion.div
          ref={flyingRef}
          initial={{ 
            x: 0, 
            y: 0, 
            scale: 1, 
            opacity: 1,
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            borderRadius: '50%',
            zIndex: 9999,
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)'
          }}
          animate={controls}
          className="w-24 h-24"
        >
          <img
            src={flyingProduct.image}
            alt={flyingProduct.name}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      )}
    </div>
  );
}