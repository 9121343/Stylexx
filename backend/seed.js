require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('./models/User');

const sampleUser = new User({
  name: "Alex Morgan",
  email: "alex@stylexx.com",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  orders: 24,
  wishlist: 8,
  reviews: 12,
  customDesigns: 4,
  address: {
    street: "123 Cyber Street",
    city: "Neo Tokyo",
    state: "Digital District",
    zip: "10001"
  },
  ordersList: [
    { id: "STX-7842", date: "Oct 12, 2023", status: "Delivered", total: 129.99 },
    { id: "STX-6721", date: "Oct 8, 2023", status: "Shipped", total: 89.99 },
    { id: "STX-5589", date: "Oct 2, 2023", status: "Processing", total: 149.99 }
  ],
  notifications: true
});

sampleUser.save()
  .then(() => {
    console.log('User created successfully');
    console.log(`User ID: ${sampleUser._id}`);
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error creating user:', err);
    mongoose.disconnect();
  });