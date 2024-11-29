import { db } from '../config/config.js';

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
  getUserByUsername(username) {
    const userRef = db.collection('users').doc(username);
    return userRef.get().then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        return null;
      }
    });
  }
};

export default userModel;
