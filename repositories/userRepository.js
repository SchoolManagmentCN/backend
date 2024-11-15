import IUser from '../interface/IUser';
import userModel from '../models/userModel';

const findUserByUsername = async (username) => {
  return await userModel.getUserByUsername(username);
};

const createUser = async (userData) => {
  const user = new IUser(userData.id, userData.username, userData.password, userData.email);
  return await userModel.createUser(user);
};

export { findUserByUsername, createUser };