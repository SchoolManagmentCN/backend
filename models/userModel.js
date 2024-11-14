import { db } from '../config/config';

const userModel = {
  getUserById: async (id) => {
    const userRef = db.collection('users').doc(id);
    const userDoc = await userRef.get();
    return userDoc.exists ? userDoc.data() : null;
  },
  createUser: async (userData) => {
    const userRef = db.collection('users').doc(userData.id);
    await userRef.set(userData);
    return userData;
  },
};

module.exports = userModel;