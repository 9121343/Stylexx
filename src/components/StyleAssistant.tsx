'use client';

import React, { useState } from 'react';
import { useCart, Product } from '@/components/CartContext';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar'; // Navbar is a named export

type Outfit = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

export default function StyleAssistant() {
  const { addToCart } = useCart();
  const router = useRouter();

  const [style, setStyle] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [colors, setColors] = useState('');
  const [budget, setBudget] = useState('');

  const outfits: Outfit[] = [
    {
      id: 'casual-chic',
      title: 'Casual Chic',
      description: 'A relaxed yet stylish outfit for everyday wear.',
      price: 150,
      image: '/images/casual-chic.jpg',
    },
    {
      id: 'elegant-evening',
      title: 'Elegant Evening',
      description: 'Sophisticated attire for a special night out.',
      price: 200,
      image: '/images/elegant-evening.jpg',
    },
  ];

  const addOutfitToCart = (outfit: Outfit) => {
    // Typecast to Product expected by CartContext
    const product: Product = {
      id: outfit.id,
      name: outfit.title,
      price: outfit.price,
      image: outfit.image,
      quantity: 1,
    };
    addToCart(product);
  };

  const handleGenerateLooks = () => {
    router.push('/ai-outfits');
  };

  return (
    <div className="min-h-screen bg-[#fff8f8]">
      <Navbar /> {/* Navbar is a named export */}

      <div className="p-5 space-y-4 max-w-md mx-auto font-sans">
        <h1 className="text-xl font-bold text-center">Discover Your Perfect Style</h1>

        <textarea
          className="w-full p-3 border rounded-md"
          placeholder="Describe your preferred style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-3 border rounded-md"
          placeholder="Body type"
          value={bodyType}
          onChange={(e) => setBodyType(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-3 border rounded-md"
          placeholder="Favorite colors"
          value={colors}
          onChange={(e) => setColors(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-3 border rounded-md"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <button
          onClick={handleGenerateLooks}
          className="w-full bg-black text-white py-3 rounded-md font-medium"
        >
          Generate Looks
        </button>

        <h2 className="text-lg font-semibold pt-4">Outfit Suggestions</h2>

        {outfits.map((outfit) => (
          <div key={outfit.id} className="bg-white rounded-md shadow p-3 space-y-2">
            <img src={outfit.image} alt={outfit.title} className="rounded-md" />
            <h3 className="font-bold">{outfit.title}</h3>
            <p className="text-gray-600">{outfit.description}</p>
            <p className="font-semibold">${outfit.price}</p>
            <button
              onClick={() => addOutfitToCart(outfit)}
              className="mt-2 bg-blue-600 text-white py-1 px-3 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}

        <div className="space-y-3 pt-4">
          <button className="w-full bg-gray-200 text-black py-3 rounded-md font-medium">
            Regenerate Looks
          </button>
          <button
            onClick={() => outfits.forEach(addOutfitToCart)}
            className="w-full bg-black text-white py-3 rounded-md font-medium"
          >
            Add Entire Outfit to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
