import { login as loginService, register as registerService } from '../services/authService.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db, secret } from '../config/config.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const { token } = await loginService(username, password);
    res.header('Authorization', token).send(token);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    await registerService(username, password);
    res.send('User registered successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const logout = (req, res) => {
  res.header('Authorization', '').send('Logged out successfully');
};

export const getUser = async (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).send('Username is required');
  }

  const userRef = db.collection('users').doc(username);
  const userDoc = await userRef.get();

  if (!userDoc.exists) {
    return res.status(404).send('User not found');
  }

  res.send(userDoc.data());
};
