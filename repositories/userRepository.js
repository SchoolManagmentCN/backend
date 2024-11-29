import IUser from '../interface/IUser.js';
import userModel from '../models/userModel.js';

const findUserByUsername = async (username) => {
  return await userModel.getUserByUsername(username);
};

const createUser = async (userData) => {
  const user = new IUser(userData.id, userData.username, userData.password, userData.email);
  return await userModel.createUser(user);
};
//l
export { findUserByUsername, createUser };
