// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { CartProvider } from "./components/CartContext";  // adjust path if needed
import StyleAssistant from "./components/StyleAssistant";
import AIOutfitFeed from "./components/AIOutfitFeed";

import "./styles.css"; // Tailwind or other global styles

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StyleAssistant />} />
        <Route path="/ai-outfits" element={<AIOutfitFeed />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </CartProvider>
  );
}
