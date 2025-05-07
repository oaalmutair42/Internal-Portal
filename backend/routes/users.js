const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userModel = require('../models/userModel');
const { requireRole } = require('../middleware/auth');
const { authenticate } = require('../middleware/authMiddleware');


router.get('/admin-only', requireRole('admin'), userController.adminOnly);

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);

router.get('/profile', authenticate, async (req, res) => {
    try {
      console.log('Token payload:', req.user); // Debug log
      if (!req.user || !req.user.user_id) {
        return res.status(400).json({ error: 'Invalid user data in token' });
      }
      const user = await userModel.getUserById(req.user.user_id); // Use req.user.user_id
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ user });
    } catch (err) {
      console.error('Profile error:', err);
      res.status(500).json({ error: 'Server error' });
    }
});
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.post('/login', userController.loginUser);

module.exports = router;
