'use client';
import React from 'react';

export default function ShopContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product listings will go here */}
        <div className="border rounded-lg p-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
          <h2 className="text-xl font-semibold mt-2">Product Name</h2>
          <p className="text-gray-600">$29.99</p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}