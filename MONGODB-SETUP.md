# MongoDB Setup Guide for StyleXX

## Option 1: MongoDB Atlas (Cloud - Easiest)

1. **Create Account**: https://www.mongodb.com/cloud/atlas
2. **Create Free Cluster**
3. **Get Connection String**
4. **Update `backend/.env`**:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/stylexx
   ```

## Option 2: Local MongoDB Installation

### Windows Installation:

1. **Download MongoDB**: https://www.mongodb.com/try/download/community
2. **Install with default settings**
3. **Create data directory**:
   ```cmd
   mkdir C:\data\db
   ```
4. **Start MongoDB**:
   ```cmd
   net start MongoDB
   ```

### If Service Doesn't Start:
```cmd
# Run as Administrator
cd "C:\Program Files\MongoDB\Server\7.0\bin"
mongod --dbpath "C:\data\db"
```

## Option 3: Docker (If you have Docker)

```bash
# Start MongoDB container
docker run -d --name mongodb -p 27017:27017 mongo:latest

# Stop when done
docker stop mongodb
```

## Verify MongoDB is Running

1. **Check if MongoDB is listening on port 27017**:
   ```cmd
   netstat -an | find "27017"
   ```

2. **Test connection**:
   ```bash
   # In backend directory
   npm run dev
   # Should connect without errors
   ```

## Troubleshooting

### Common Issues:
- **Port 27017 in use**: Another MongoDB instance running
- **Permission denied**: Run as administrator
- **Service won't start**: Check Windows Services

### Solutions:
1. **Restart MongoDB service**
2. **Check firewall settings**  
3. **Verify installation directory**
4. **Use MongoDB Atlas instead**
