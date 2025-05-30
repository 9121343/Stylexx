declare module '@/components/Header' {
  const Header: React.ComponentType;
  export default Header;
}

declare module '@/components/CartContext' {
  export const CartProvider: React.ComponentType<{ children: React.ReactNode }>;
  export function useCart(): any;
}

declare module '@/components/CartIcon' {
  const CartIcon: React.ComponentType;
  export default CartIcon;
}