'use client';

import React from 'react';
import { useCart } from '@/components/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cartItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[320px] bg-white shadow-xl z-50 p-5 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl">
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-sm">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded p-3 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm text-gray-800">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="mt-4">
                <Button className="w-full">Checkout</Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
