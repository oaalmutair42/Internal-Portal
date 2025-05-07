function requireRole(role) {
    return (req, res, next) => {
      const userRole = req.headers['x-user-role'];
  
      if (!userRole || userRole !== role) {
        return res.status(403).json({ error: 'Access denied: insufficient role.' });
      }
  
      next();
    };
}
 
module.exports = { requireRole };
  