# StyleXX Deployment Guide

Your project has been successfully migrated to Supabase! Here's how to deploy it:

## 🗄️ Step 1: Set up Supabase Database

1. Go to your Supabase dashboard: https://afbhnjtvnywumihvlaqm.supabase.co
2. Navigate to "SQL Editor"
3. Run the schema from `supabase-schema.sql` to create the users table

## 🚀 Step 2: Deploy Backend to Railway

### Option A: Using Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Navigate to backend folder
cd backend

# Initialize Railway project
railway init

# Set environment variables
railway variables set SUPABASE_URL=https://afbhnjtvnywumihvlaqm.supabase.co
railway variables set SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmYmhuanR2bnl3dW1paHZsYXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MzQ4MTIsImV4cCI6MjA3MzAxMDgxMn0.NGStbsNSNagVXRXznmxBpVHS1bHcvZ-w0m6yXcSiKos
railway variables set SUPABASE_SERVICE_ROLE_KEY={{SUPABASE_SERVICE_ROLE_KEY}}
railway variables set JWT_SECRET={{JWT_SECRET}}
railway variables set GOOGLE_CLIENT_ID={{GOOGLE_CLIENT_ID}}
railway variables set GOOGLE_CLIENT_SECRET={{GOOGLE_CLIENT_SECRET}}
railway variables set FRONTEND_URL=https://your-frontend-url.vercel.app

# Deploy
railway up
```

### Option B: Using Railway Dashboard
1. Go to [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository and choose the `backend` folder
4. Set environment variables in Railway dashboard:
   - `SUPABASE_URL`: https://afbhnjtvnywumihvlaqm.supabase.co
   - `SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   - `SUPABASE_SERVICE_ROLE_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   - `JWT_SECRET`: your-secure-jwt-secret
   - `GOOGLE_CLIENT_ID`: your-google-client-id
   - `GOOGLE_CLIENT_SECRET`: your-google-client-secret
   - `FRONTEND_URL`: https://your-frontend-url.vercel.app

## 🌐 Step 3: Deploy Frontend to Vercel

### Option A: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend folder
cd frontend

# Deploy
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_API_URL production
# Enter your Railway backend URL when prompted

vercel env add NEXT_PUBLIC_SUPABASE_URL production
# Enter: https://afbhnjtvnywumihvlaqm.supabase.co

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
# Enter your Supabase anon key
```

### Option B: Using Vercel Dashboard
1. Go to [Vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Set Root Directory to `frontend`
5. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: https://your-backend-url.railway.app
   - `NEXT_PUBLIC_SUPABASE_URL`: https://afbhnjtvnywumihvlaqm.supabase.co
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   - `NEXTAUTH_URL`: https://your-frontend-url.vercel.app
   - `NEXTAUTH_SECRET`: your-nextauth-secret

## ✅ Step 4: Update CORS and URLs

After deployment:
1. Update `FRONTEND_URL` in Railway to your Vercel URL
2. Update `NEXT_PUBLIC_API_URL` in Vercel to your Railway URL
3. Redeploy both services

## 🔧 Alternative Deployment Platforms

### Backend Alternatives:
- **Render**: Similar to Railway, supports Node.js
- **Heroku**: Classic platform with add-ons
- **DigitalOcean App Platform**: Simple container deployment

### Frontend Alternatives:
- **Netlify**: Great for static sites and serverless functions
- **Cloudflare Pages**: Fast global CDN
- **GitHub Pages**: Free for public repositories

## 🧪 Testing Deployment

1. Visit your Vercel frontend URL
2. Test user registration/login
3. Check browser developer tools for API calls
4. Verify database entries in Supabase dashboard

## 🚨 Troubleshooting

- **CORS errors**: Update FRONTEND_URL in backend environment variables
- **Database connection issues**: Verify Supabase credentials
- **API not working**: Check Railway logs for errors
- **Build failures**: Ensure all dependencies are in package.json

Your StyleXX project is now ready for production! 🎉