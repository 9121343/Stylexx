'use client';

import { useCart } from '@/components/CartContext';

const products = [
  { id: 'p1', name: 'Red T-Shirt', price: 499 },
  { id: 'p2', name: 'Blue Jeans', price: 999 },
  { id: 'p3', name: 'Black Hoodie', price: 1299 },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div>
      <h1 className="text-2xl mb-4">Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h2 className="font-bold">{product.name}</h2>
              <p>₹{product.price}</p>
            </div>
            <button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
