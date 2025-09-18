'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartCount: number;
  cartItems: CartItem[];
  cart: CartItem[]; // Alias for cartItems
  totalPrice: number;
  addToCart: (item: CartItem, event: React.MouseEvent) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const cartIconRef = useRef<HTMLDivElement>(null);

  // Initialize cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Update cart count, total price and save to localStorage
  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    setCartCount(count);
    setTotalPrice(total);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Create bubble animation
  const createBubble = (item: CartItem, event: React.MouseEvent) => {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    
    const bubble = document.createElement('div');
    bubble.className = 'cart-bubble';
    bubble.style.position = 'fixed';
    bubble.style.left = `${rect.left + rect.width / 2}px`;
    bubble.style.top = `${rect.top}px`;
    bubble.style.width = '40px';
    bubble.style.height = '40px';
    bubble.style.borderRadius = '50%';
    bubble.style.backgroundImage = `url(${item.image})`;
    bubble.style.backgroundSize = 'cover';
    bubble.style.backgroundPosition = 'center';
    bubble.style.zIndex = '1000';
    bubble.style.transition = 'all 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
    
    document.body.appendChild(bubble);
    
    // Get cart icon position
    const cartIcon = cartIconRef.current;
    if (!cartIcon) return;
    
    const cartRect = cartIcon.getBoundingClientRect();
    const targetX = cartRect.left + cartRect.width / 2;
    const targetY = cartRect.top + cartRect.height / 2;
    
    // Animate to cart
    setTimeout(() => {
      bubble.style.left = `${targetX}px`;
      bubble.style.top = `${targetY}px`;
      bubble.style.transform = 'scale(0.1)';
      bubble.style.opacity = '0.7';
    }, 10);
    
    // Remove bubble after animation
    setTimeout(() => {
      bubble.remove();
    }, 800);
  };

  const addToCart = (item: CartItem, event: React.MouseEvent) => {
    createBubble(item, event);
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === id);
      
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(i => 
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return prevItems.filter(i => i.id !== id);
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartCount, 
        cartItems, 
        cart: cartItems, // Alias for compatibility
        totalPrice,
        addToCart, 
        removeFromCart, 
        updateQuantity,
        clearCart 
      }}
    >
      {children}
      <div ref={cartIconRef} className="cart-icon-reference"></div>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};