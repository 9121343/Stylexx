# StyleXX Frontend

This is the frontend application for StyleXX - a modern fashion e-commerce platform built with Next.js.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Framer Motion** - Animation library

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── account/           # User account page
│   ├── ai-assistant/      # AI styling assistant
│   ├── cart/              # Shopping cart
│   ├── contact/           # Contact page
│   ├── customize/         # Product customization
│   ├── faq/               # FAQ page
│   ├── login/             # Login page
│   ├── shop/              # Product catalog
│   └── ...
├── components/            # Reusable React components
├── contexts/              # React contexts
├── public/                # Static assets
├── services/              # API service functions
└── ...config files
```

## 🎨 Features

- ✅ Modern responsive design with dark theme
- ✅ Shopping cart with local storage
- ✅ User authentication system
- ✅ Product customization interface
- ✅ AI styling assistant (mock)
- ✅ Community features
- ✅ Contact forms with validation

## 🔧 Configuration

Environment variables can be added to `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🌐 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages

- **Homepage** (`/`) - Landing page with hero section and features
- **Shop** (`/shop`) - Product catalog with search and filters
- **Cart** (`/cart`) - Shopping cart management
- **Login** (`/login`) - User authentication
- **Account** (`/account`) - User profile and order history
- **Customize** (`/customize`) - Product customization tools
- **AI Assistant** (`/ai-assistant`) - Styling chat interface
- **Community** (`/community`) - Fashion community features
- **Contact** (`/contact`) - Contact form and information
- **FAQ** (`/faq`) - Frequently asked questions
- **About** (`/about`) - Company information
