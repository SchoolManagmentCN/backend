const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secret } = require('../config/config');
const userRepository = require('../repositories/userRepository');

const login = async (username, password) => {
  const user = await userRepository.findUserByUsername(username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
  return { token };
};

const register = async (username, password) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  return await userRepository.createUser({ username, password: hashedPassword });
};

module.exports = {
  login,
  register
};