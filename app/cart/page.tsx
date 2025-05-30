'use client';

import Link from 'next/link';
import { useCart } from '@/components/CartContext';
import type { Product } from '@/components/CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  
  // Add type annotations to reduce parameters
  const totalAmount = cart.reduce((sum: number, item: Product) => sum + item.price * item.quantity, 0);
  const shipping = 5.0;
  const grandTotal = totalAmount + shipping;

  return (
    <div className="max-w-xl mx-auto px-4 py-6 text-black bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link href="/">
          <button className="text-xl">&#8592;</button>
        </Link>
        <h1 className="flex-grow text-center font-semibold text-xl">Cart</h1>
      </div>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item: Product) => (  // Add type annotation here
              <div key={item.id} className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ... rest of your cart page ... */}
        </>
      )}
    </div>
  );
}