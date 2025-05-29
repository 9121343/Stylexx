'use client';

import Link from 'next/link';
import { useCart } from '@/components/CartContext';

export default function CartPage() {
  const { cart, totalAmount, removeFromCart } = useCart();

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
            {cart.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
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

          {/* Promo Code */}
          <input
            type="text"
            placeholder="Promo Code"
            className="mt-6 w-full border border-gray-300 rounded-md px-4 py-2"
          />

          {/* Summary */}
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>${shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery</p>
              <p>3–5 Business Days</p>
            </div>
            <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-300">
              <p>Total</p>
              <p>${grandTotal.toFixed(2)}</p>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="mt-6 bg-black text-white w-full py-3 rounded-full font-semibold">
            Checkout
          </button>

          {/* Secure Checkout */}
          <div className="mt-8">
            <h2 className="font-semibold text-lg mb-4">Secure Checkout</h2>
            <div className="space-y-3">
              {[
                {
                  label: 'Payment Methods',
                  iconPath:
                    'M17 9V7a5 5 0 00-10 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z',
                },
                {
                  label: 'Shipping Address',
                  iconPath:
                    'M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7z',
                },
                {
                  label: 'Billing Address',
                  iconPath: 'M3 3h18v18H3V3z',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center w-10 h-10">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d={item.iconPath} />
                    </svg>
                  </div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Review */}
          <div className="mt-8">
            <h2 className="font-semibold text-lg mb-4">Customer Reviews</h2>
            <div className="flex items-center gap-3">
              <img
                src="https://i.imgur.com/YzfjP3l.png"
                alt="Sophia"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Sophia Carter</p>
                <p className="text-xs text-gray-500">2 weeks ago</p>
              </div>
            </div>
            <div className="text-yellow-500 text-lg mt-1">★★★★★</div>
            <p className="mt-2 text-sm text-gray-800">
              I love the quality of the custom t-shirts and hoodies! The
              designs are exactly what I wanted, and the delivery was fast.
              Highly recommend StyleXX!
            </p>
            <div className="flex gap-4 mt-2 text-gray-500 text-sm">
              <span>👍 2</span>
              <span>💬</span>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="mt-10 border-t pt-4 text-xs text-gray-500 text-center space-y-2">
        <div className="flex justify-around">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <div>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex justify-center gap-4 text-xl">
          <a href="#" aria-label="Twitter">
            🐦
          </a>
          <a href="#" aria-label="Instagram">
            📸
          </a>
          <a href="#" aria-label="Facebook">
            📘
          </a>
        </div>
        <p>&copy; 2024 StyleXX. All rights reserved.</p>
      </footer>
    </div>
  );
}
