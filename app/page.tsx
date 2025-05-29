'use client';

import Link from "next/link";
import { Button } from "../src/components/ui/button";
import { useCart } from "@/components/CartContext";

// Sample products to add to cart
const products = [
  { id: 'p1', name: 'Cool Hat', price: 299 },
  { id: 'p2', name: 'Stylish Jacket', price: 1999 },
];

export default function HomePage() {
  const { addToCart } = useCart();

  return (
    <div className="bg-white text-black">
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between px-6 py-3">
            <div className="text-xl font-bold">StyleXX</div>
            <nav className="flex gap-6 font-medium">
              <a href="/shop" className="hover:underline">Shop</a>
              <a href="/customize" className="hover:underline">Customize</a>
              <a href="/ai-assistant" className="hover:underline">AI Assistant</a>
              <a href="/community" className="hover:underline">Community</a>
            </nav>
            <div className="flex gap-4 text-2xl items-center">
              <button aria-label="Search" className="hover:text-blue-600">🔍</button>
              <button aria-label="Profile" className="hover:text-blue-600">👤</button>
              <button id="cart-icon" aria-label="Cart" className="hover:text-blue-600 relative">
                🛒
              </button>
            </div>
          </header>

      <section className="text-center p-8 bg-black text-white">
        <img src="/images/hero.jpg" alt="Fashion Model" className="mx-auto" />
        <h2 className="text-3xl font-bold mt-4">StyleXX: Fashion of the Future</h2>
        <p className="mt-2">Customize your unique style with our AI-powered design tools.</p>
        <Link href="/shop">
          <Button className="mt-4">Shop Now</Button>
        </Link>
      </section>

      <section className="p-6">
        <h3 className="text-lg font-bold mb-2">Featured Video</h3>
        <div className="bg-black text-white p-4 rounded">
          <img src="/images/video-thumbnail.jpg" alt="Video" />
        </div>
      </section>

      <section className="p-6 grid grid-cols-2 gap-4">
        <div>
          <img src="/images/men.jpg" alt="Men" />
          <p className="text-center">Men</p>
        </div>
        <div>
          <img src="/images/women.jpg" alt="Women" />
          <p className="text-center">Women</p>
        </div>
      </section>

      <section className="p-6">
        <h3 className="text-lg font-bold mb-4">New Arrivals</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img src="/images/jacket.jpg" alt="Jacket" />
            <h4>Cyberpunk Jacket</h4>
            <p>Explore the latest in tech-infused fashion.</p>
          </div>
          <div>
            <img src="/images/trousers.jpg" alt="Trousers" />
            <h4>Techwear Trousers</h4>
            <p>Durable and stylish for the urban explorer.</p>
          </div>
          <div>
            <img src="/images/shoes.jpg" alt="Shoes" />
            <h4>Neon Runners</h4>
            <p>Lightweight and responsive for any terrain.</p>
          </div>
        </div>
      </section>

      <section className="p-6">
        <h3 className="text-lg font-bold mb-4">Top Picks</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img src="/images/dress.jpg" alt="Dress" />
            <h4>Holographic Dress</h4>
            <p>Shimmering and elegant for any occasion.</p>
          </div>
          <div>
            <img src="/images/tee.jpg" alt="Tee" />
            <h4>Adaptive Tee</h4>
            <p>Thermoactive and form-fitting for ultimate comfort.</p>
          </div>
          <div>
            <img src="/images/accessory.jpg" alt="Accessory" />
            <h4>Modular Accessories</h4>
            <p>Customize your look with interchangeable parts.</p>
          </div>
        </div>
      </section>

      {/* New Section: Add products with Add to Cart buttons */}
      <section className="p-6">
        <h3 className="text-lg font-bold mb-4">Shop Products</h3>
        <div className="grid grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded p-4">
              <h4 className="font-semibold">{product.name}</h4>
              <p className="mb-2">₹{product.price}</p>
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                onClick={() => addToCart({ ...product, quantity: 1 })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center p-8 bg-gray-100">
        <h3 className="text-xl font-bold mb-2">Unleash Your Style with AI</h3>
        <p className="mb-4">Our AI Style Assistant helps you design unique pieces tailored to your preferences. Get started now!</p>
        <Link href="/ai-assistant">
          <Button>Try AI Assistant</Button>
        </Link>
      </section>

      <section className="p-6">
        <h3 className="text-lg font-bold mb-4">Customer Testimonials</h3>
        <div className="space-y-4">
          <div>
            <strong>Liam</strong> <span className="text-sm text-gray-500">2 months ago</span>
            <p>StyleXX has completely transformed my wardrobe.</p>
          </div>
          <div>
            <strong>Chloe</strong> <span className="text-sm text-gray-500">3 months ago</span>
            <p>I love the unique designs and the ability to personalize my clothing.</p>
          </div>
          <div>
            <strong>Owen</strong> <span className="text-sm text-gray-500">1 month ago</span>
            <p>The attention to detail and the futuristic aesthetic of StyleXX are unmatched.</p>
          </div>
        </div>
      </section>

      <section className="p-6">
        <h3 className="text-lg font-bold mb-4">Community Looks</h3>
        <div className="grid grid-cols-6 gap-2">
          {[...Array(6)].map((_, i) => (
            <img key={i} src={`/images/look${i + 1}.jpg`} alt={`Look ${i + 1}`} />
          ))}
        </div>
      </section>

      <footer className="text-center p-4 border-t mt-8">
        <div className="space-x-4 mb-2">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <p>&copy; 2025 StyleXX. All rights reserved.</p>
      </footer>
    </div>
  );
}
