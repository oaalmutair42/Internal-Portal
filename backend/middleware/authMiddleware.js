const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'secret-key';

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }
  
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        console.error('JWT verification failed:', err);
        return res.status(403).json({ error: 'Invalid token' });
      }
  
      req.user = decoded;
      console.log('Decoded token payload:', req.user);
      next();
    });
};
module.exports = { authenticate };
