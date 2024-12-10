import { db } from '../config/config.js';

const parentModel = {
  getParentById: async (id) => {
    const parentRef = db.collection('parents').doc(id);
    const parentDoc = await parentRef.get();
    return parentDoc.exists ? parentDoc.data() : null;
  },
  createParent: async (parentData) => {
    const parentRef = db.collection('parents').doc(parentData.id);
    await parentRef.set(parentData);
    return parentData;
  },
  updateParent: async (parentData) => {
    const parentRef = db.collection('parents').doc(parentData.id);
    await parentRef.update(parentData);
    return parentData;
  },
  deleteParent: async (id) => {
    const parentRef = db.collection('parents').doc(id);
    await parentRef.delete();
  },
  getAllParents: async () => {
      const parents = [];
      const parentsSnapshot = await db.collection('parents').get();
      parentsSnapshot.forEach((doc) => {
          parents.push(doc.data());
      });
      return parents;
  }
};

export default parentModel;
