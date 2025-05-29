'use client';

import { useCart } from '@/components/CartContext';

export default function CartPage() {
  const { cartItems, totalAmount, removeFromCart } = useCart();

  const shipping = 5.0;
  const grandTotal = totalAmount + shipping;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="mb-2 flex justify-between items-center"
            >
              <span>
                {item.name} - Qty: {item.quantity} - ₹
                {item.price * item.quantity}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <p>Total: ₹{totalAmount.toFixed(2)}</p>
        <p>Shipping: ₹{shipping.toFixed(2)}</p>
        <p className="font-bold">Grand Total: ₹{grandTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}
