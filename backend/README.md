# StyleXX Backend

This is the backend API for StyleXX - a REST API built with Node.js, Express, and MongoDB.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **Passport.js** - Authentication middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
backend/
├── controllers/           # Route handlers
│   └── authController.js  # Authentication logic
├── models/               # Database models
│   └── User.js           # User model
├── .env                  # Environment variables
├── index.js              # Server entry point
├── package.json          # Dependencies
└── seed.js               # Database seeder
```

## 🔧 Environment Setup

Create a `.env` file with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/stylexx
JWT_SECRET=your-super-secret-jwt-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

## 🗄️ Database

### MongoDB Setup

#### Option 1: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Database will be created automatically

#### Option 2: MongoDB Atlas (Cloud)
1. Create account at mongodb.com/atlas
2. Create new cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## 🔐 Authentication

The API supports:
- **JWT Authentication** - Secure token-based auth
- **Google OAuth 2.0** - Social login with Google
- **User Management** - Registration, login, profile

## 🛣️ API Endpoints

### Authentication
- `POST /api/auth/google` - Google OAuth login
- `GET /auth/google` - Initiate Google OAuth
- `GET /auth/google/callback` - Google OAuth callback

### Users
- `GET /api/user/:id` - Get user profile
- `POST /api/user/:id/address` - Update user address

### Health Check
- `GET /` - API status check

## 🔒 Authentication Flow

1. User initiates login via Google OAuth
2. Redirected to Google for authorization
3. Google redirects back with authorization code
4. Server exchanges code for user profile
5. Server creates/updates user in database
6. Server generates JWT token
7. Token sent to frontend for subsequent requests

## 📊 User Schema

```javascript
{
  googleId: String,
  email: String (unique),
  name: String,
  avatar: String,
  joinDate: String,
  orders: Number,
  wishlist: Number,
  reviews: Number,
  customDesigns: Number,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  ordersList: Array,
  notifications: Boolean
}
```

## 🌐 Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run seed` - Seed database with sample data

## 🔧 Middleware

- **CORS** - Configured for frontend origin
- **Express.json()** - JSON body parsing
- **Passport.js** - Google OAuth strategy

## 🚀 Production Deployment

1. Set environment variables
2. Ensure MongoDB is accessible
3. Run `npm install --production`
4. Start with `npm start`

## 🐛 Troubleshooting

### Common Issues

- **MongoDB connection failed**: Check MONGODB_URI and ensure MongoDB is running
- **JWT errors**: Verify JWT_SECRET is set
- **CORS errors**: Ensure FRONTEND_URL matches frontend URL
- **Google OAuth issues**: Verify GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET
