// src/types.d.ts
import { Product } from '@/components/CartContext';

declare module '@/components/Header' {
  const Header: React.ComponentType;
  export default Header;
}

declare module '@/components/CartContext' {
  export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  
  export const CartProvider: React.ComponentType<{ children: React.ReactNode }>;
  export function useCart(): {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
  };
}

declare module '@/components/CartIcon' {
  const CartIcon: React.ComponentType;
  export default CartIcon;
}t