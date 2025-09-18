const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.googleLogin = async (req, res) => {
  const { token } = req.body;
  try {
    // In real app, verify Google token with Google API
    const decoded = jwt.decode(token);
    const email = decoded?.email;
    
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
        name: decoded?.name || 'User',
        avatar: decoded?.picture || '',
      });
    }

    const jwtToken = jwt.sign(
      { id: user.id, email: user.email, name: user.name, avatar: user.avatar }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1d' }
    );
    res.json({ token: jwtToken, user });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
};
