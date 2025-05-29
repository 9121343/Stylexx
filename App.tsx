import React from "react";
import { CartProvider } from "@/components/CartContext";
import "./styles.css";  // Your Tailwind or custom CSS import

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <h1>Welcome to Stylexx</h1>
        {/* You can add other components you have, e.g., Navbar, ProductList */}
      </div>
    </CartProvider>
  );
}

export default App;
