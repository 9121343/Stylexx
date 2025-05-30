'use client';

import React from 'react';
import { useCart, Product } from './CartContext';

const products: Product[] = [
  { id: 'p1', name: 'Cool Hat', price: 299, image: '/images/cool-hat.png' },
  { id: 'p2', name: 'Nice Shirt', price: 499, image: '/images/nice-shirt.png' },
  { id: 'p3', name: 'Stylish Jacket', price: 999, image: '/images/jacket.png' },
];

const ShopPage: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border rounded p-4 flex flex-col items-center">
          <img src={product.image} alt={product.name} className="mb-2 w-32 h-32 object-cover" />
          <h3 className="font-semibold">{product.name}</h3>
          <p className="mb-2">₹{product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
