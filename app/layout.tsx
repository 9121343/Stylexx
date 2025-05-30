import '@/styles/global.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/components/CartContext';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'StyleXX - Fashion of the Future',
  description: 'Customize your unique style with our AI-powered design tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com/" 
          crossOrigin="anonymous" 
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700;900&family=Space+Grotesk:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
