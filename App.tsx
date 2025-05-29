import React from "react";
import ShopPage from "@/components/ShopPage";
import { CartProvider } from "@/components/CartContext";
import "./styles.css"; // or wherever Tailwind CSS is imported

export default function App() {
  return (
    <CartProvider>
      <ShopPage />
    </CartProvider>
  );
}
