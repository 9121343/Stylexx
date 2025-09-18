# StyleXX - Fashion E-commerce Platform

A modern, full-stack fashion e-commerce platform with AI-powered styling assistance and customization features.

## 🏗️ Project Structure

```
stylexx/
├── 🌐 frontend/          # Next.js React Application
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable React components
│   ├── contexts/         # React context providers
│   ├── public/           # Static assets
│   └── package.json      # Frontend dependencies
│
├── 🚀 backend/           # Node.js Express API
│   ├── controllers/      # Route handlers
│   ├── models/          # MongoDB models
│   ├── index.js         # Server entry point
│   └── package.json     # Backend dependencies
│
├── start-frontend.bat   # Start frontend only
├── start-backend.bat    # Start backend only
├── start-both.bat       # Start both servers
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Start Everything (Recommended)
```bash
# Double-click this file or run:
start-both.bat
```

### Option 2: Start Manually

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Access Your Application

Once both servers are running:
- **Frontend (Main App):** http://localhost:3000
- **Backend API:** http://localhost:5000

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **Framer Motion** - Animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Passport.js** - OAuth integration

## ✨ Features

- ✅ **E-commerce Core** - Product catalog, shopping cart, user accounts
- ✅ **AI Styling Assistant** - Personalized fashion recommendations
- ✅ **Product Customization** - Interactive design tools
- ✅ **User Authentication** - JWT + OAuth (Google)
- ✅ **Community Features** - Fashion community and sharing
- ✅ **Responsive Design** - Mobile-friendly dark theme
- ✅ **Admin Dashboard** - Product and order management

## 📱 Available Pages

- **Homepage** - Hero section with featured products
- **Shop** - Product catalog with filters
- **Cart** - Shopping cart management
- **Account** - User profile and order history
- **Customize** - Product customization interface
- **AI Assistant** - Styling chat bot
- **Community** - Fashion community features
- **Contact** - Contact form and support
- **FAQ** - Frequently asked questions
- **About** - Company information

## 🔧 Development

### Prerequisites
- **Node.js** (v18+)
- **MongoDB** (local or Atlas)
- **Git**

### Environment Setup

1. **Backend Environment** (`backend/.env`):
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/stylexx
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:3000
```

2. **Frontend Environment** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🗄️ Database

The application uses MongoDB. You can either:
- Run MongoDB locally
- Use MongoDB Atlas (cloud)

Update the `MONGODB_URI` in `backend/.env` accordingly.

## 🎯 Testing

1. Start both servers
2. Visit http://localhost:3000
3. Test login (any email/password works in demo mode)
4. Add products to cart
5. Navigate through all pages

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel
```

### Backend (Railway/Heroku)
```bash
cd backend
# Set environment variables
# Deploy to your platform
```

## 📚 Documentation

- [Frontend Documentation](frontend/README.md)
- [Backend Documentation](backend/README.md)
- [API Documentation](backend/README.md#api-endpoints)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🎉 What's Next?

- [ ] Real AI integration (OpenAI/custom model)
- [ ] Payment processing (Stripe/PayPal)
- [ ] Advanced product filtering
- [ ] Real-time chat support
- [ ] Mobile app (React Native)
- [ ] Admin dashboard improvements

---

**StyleXX - Where Fashion Meets Technology** ✨
