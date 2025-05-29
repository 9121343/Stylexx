import React from "react";
// import ShopPage from "@/components/ShopPage";
import { CartProvider } from "@/components/CartContext";
import "./styles.css";

export default function App() {
  return (
    <CartProvider>
      {/* <ShopPage /> */}
      <div>Welcome to Stylexx!</div>
    </CartProvider>
  );
}
