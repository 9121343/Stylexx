import './globals.css';
import { Navbar } from '@/components/Navbar';
import { CartProvider } from '@/components/CartContext';

export const metadata = {
  title: 'StyleXX',
  description: 'Your styling assistant',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
