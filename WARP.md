# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

StyleXX is a full-stack fashion e-commerce platform with AI-powered features, built with Next.js frontend and Express.js backend. The application focuses on personalized shopping experiences, custom designs, and AI-driven style recommendations.

**Current Project Structure:**
- `frontend/` - Next.js React application (port 3000)
- `backend/` - Express.js API server (port 5000)
- Batch files for easy startup on Windows

## Development Commands

### Quick Start (Recommended)
```bash
# Use the provided batch files (Windows)
start-both.bat           # Starts both servers
start-frontend.bat       # Frontend only
start-backend.bat        # Backend only
```

### Manual Setup

#### Frontend (Next.js)
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server (port 3000)
npm run dev

# Build for production (currently has issues - see Known Issues)
npm run build

# Start production server
npm run start
```

#### Backend (Express.js)
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server with nodemon (port 5000)
npm run dev

# Start production server
npm start
```

## Architecture Overview

### Frontend Structure
- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS 4.x with custom animations
- **Language**: TypeScript with strict configuration
- **Authentication**: JWT-based with Google OAuth integration
- **State Management**: React Context (AuthContext, CartContext)
- **Animations**: Framer Motion for interactive UI elements

### Key Frontend Directories
- `frontend/app/` - Next.js App Router pages and layouts
- `frontend/components/` - Reusable React components
- `frontend/contexts/` - React Context providers for global state
- `frontend/public/` - Static assets and images
- `frontend/services/` - API service functions

### Backend Structure
- **Framework**: Express.js with MongoDB
- **Authentication**: Passport.js with Google OAuth 2.0
- **Database**: MongoDB with Mongoose ODM
- **Security**: JWT tokens, CORS middleware
- **Port**: 5000 (default)

### Key Backend Directories
- `backend/controllers/` - Route handlers and business logic
- `backend/models/` - Mongoose schemas and models
- `backend/index.js` - Main server entry point

## Environment Configuration

### Frontend (.env.local)
**Location**: `frontend/.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Backend (.env)
**Location**: `backend/.env`
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/stylexx
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FRONTEND_URL=http://localhost:3000
```

## Known Issues & Solutions

### 1. Frontend Build Error (Critical)
**Issue**: Framer Motion compatibility issue with Next.js 15.5.2
```
Error: It's currently unsupported to use "export *" in a client boundary
```

**Location**: `frontend/components/Footer.tsx`

**Solution**: 
- Downgrade Next.js to 14.x, or
- Replace framer-motion imports with specific named imports, or
- Use alternative animation library

### 2. MongoDB Connection Required
**Issue**: Backend requires MongoDB to be running locally

**Solutions**:
1. **Install MongoDB locally**:
   ```bash
   # Download MongoDB Community Server
   # Start MongoDB service
   mongod --dbpath /path/to/data/directory
   ```

2. **Use MongoDB Atlas (Cloud)**:
   - Update `MONGODB_URI` in `backend/.env`
   - Use Atlas connection string

### 3. Missing Environment Files
**Status**: ✅ Fixed - Created `frontend/.env.local`

## Authentication Flow

1. User initiates Google OAuth login via frontend
2. Backend handles OAuth callback using Passport.js
3. JWT token generated and returned to frontend
4. Token stored in localStorage and decoded for user state
5. AuthContext manages authentication state across components

## Cart Management

The application features a sophisticated cart system with:
- Animated product-to-cart bubbles using DOM manipulation
- Persistent cart state via localStorage
- Context-based cart state management
- Real-time cart count updates in navigation

## Development Notes

### Component Structure
- Use functional components with TypeScript interfaces
- Implement 'use client' directive for client-side components
- Follow established Context pattern for global state
- Maintain separation between server and client components

### API Integration
- Frontend uses Axios for API calls to Express backend
- Backend provides RESTful endpoints with JWT authentication
- MongoDB integration handles user profiles and application data

### Styling Approach
- Tailwind CSS 4.x with custom gradient backgrounds
- Custom CSS classes for complex animations
- Dark theme with purple/pink gradient scheme
- Responsive design with mobile-first approach

### Path Mapping (TypeScript)
```json
{
  "@/*": ["./"],
  "@/components/*": ["components/*"],
  "@/contexts/*": ["contexts/*"],
  "@/services/*": ["services/*"]
}
```

## Testing and Development Checklist

Before development:
1. ✅ Install MongoDB or set up Atlas connection
2. ✅ Create environment files (.env.local for frontend, .env for backend)
3. ❌ Fix framer-motion build issues
4. ✅ Install dependencies for both frontend and backend
5. Test authentication flow with Google OAuth
6. Verify cart functionality with localStorage persistence

## Current Status Summary

**✅ Working:**
- Backend server starts successfully
- Frontend development server runs
- Dependencies installed
- Environment configuration

**❌ Issues:**
- Frontend build fails due to framer-motion compatibility
- MongoDB connection required for full functionality
- Authentication requires Google OAuth setup

**🚀 Ready for Development:**
Once the build issue is resolved and MongoDB is set up, the application will be fully functional for development.

## Key Dependencies

**Frontend:**
- `next@15.5.2` - React framework (causing build issues)
- `framer-motion@12.15.0` - Animations (compatibility issue)
- `tailwindcss@4.1.8` - Styling framework
- `react-hot-toast` - Toast notifications
- `jwt-decode` - Client-side JWT parsing

**Backend:**
- `express@4.21.2` - Web framework
- `mongoose@8.15.1` - MongoDB object modeling
- `passport-google-oauth20` - Google OAuth strategy
- `jsonwebtoken@9.0.2` - JWT token handling
- `nodemon@3.1.10` - Development server auto-reload
