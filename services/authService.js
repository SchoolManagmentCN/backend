import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { secret } from '../config/config';
import { findUserByUsername, createUser } from '../repositories/userRepository';

const login = async (username, password) => {
  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  const user = await findUserByUsername(username);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
  return { token };
};

const register = async (username, password) => {
  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    throw new Error('Username already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await createUser({ id: Date.now().toString(), username, password: hashedPassword });
};

export { login, register };