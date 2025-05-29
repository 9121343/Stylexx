// src/components/AIOutfitFeed.jsx
import React from "react";
import { Home, Search, Heart, User } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const filters = ["Gender", "Category", "Color", "Price"];
const sortOptions = ["Popularity", "Price", "Newest"];
const aiStyles = ["Minimalist", "Streetwear", "Business Casual"];
const outfits = [
  { img: "/outfit1.png" },
  { img: "/outfit2.png" },
  { img: "/outfit3.png" },
  { img: "/outfit4.png" },
  { img: "/outfit5.png" },
  { img: "/outfit6.png" },
];

export default function AIOutfitFeed() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-[#fff8f8] flex flex-col"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <header className="flex items-center p-4 font-bold text-xl justify-center border-b border-gray-200 relative">
        <button
          className="absolute left-4 text-lg font-semibold"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ←
        </button>
        StyleXX
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Filters */}
        <section>
          <h2 className="font-bold text-lg mb-2">Filter</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, i) => (
              <button
                key={i}
                className="bg-[#fceef0] px-3 py-1 rounded-full text-sm hover:bg-[#fcced4] transition"
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Sort */}
        <section>
          <h2 className="font-bold text-lg mb-2">Sort</h2>
          <div className="flex gap-2">
            {sortOptions.map((option, i) => (
              <button
                key={i}
                className="bg-[#fceef0] px-3 py-1 rounded-full text-sm hover:bg-[#fcced4] transition"
              >
                {option}
              </button>
            ))}
          </div>
        </section>

        {/* AI Recommended Categories */}
        <section>
          <h2 className="font-bold text-lg mb-2">AI Recommended</h2>
          <div className="flex flex-wrap gap-2">
            {aiStyles.map((style, i) => (
              <button
                key={i}
                className="bg-[#fceef0] px-3 py-1 rounded-full text-sm hover:bg-[#fcced4] transition"
              >
                {style}
              </button>
            ))}
          </div>
        </section>

        {/* Outfit Grid */}
        <section className="grid grid-cols-2 gap-4">
          {outfits.map((outfit, i) => (
            <img
              key={i}
              src={outfit.img}
              alt={`Outfit ${i + 1}`}
              className="rounded-xl object-cover w-full aspect-[3/4]"
              loading="lazy"
            />
          ))}
        </section>
      </main>

      <footer className="flex justify-around p-3 border-t border-gray-200 bg-white">
        <Home size={24} className="cursor-pointer" />
        <Search size={24} className="cursor-pointer" />
        <Heart size={24} className="cursor-pointer" />
        <User size={24} className="cursor-pointer" />
      </footer>
    </motion.div>
  );
}
