// handles logic per route
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');


const SECRET = process.env.JWT_SECRET || 'secret-key';

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: 'Email and password required.' });

  try {
    const user = await userModel.findUserByEmail(email);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { user_id: user.user_id, role: user.role },
      SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token, user: { user_id: user.user_id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await userModel.createUser(name, email, hashedPassword, role);
    res.status(201).json({ user_id: userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.getUserById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json({ users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email, role } = req.body;
  
    try {
      const changes = await userModel.updateUser(id, name, email, role);
      if (changes === 0) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User updated' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
      const changes = await userModel.deleteUser(id);
      if (changes === 0) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const adminOnly = (_req, res) => {
    res.json({ message: 'Welcome, admin!' });
  };
  
  module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
    adminOnly,
    loginUser
  };

