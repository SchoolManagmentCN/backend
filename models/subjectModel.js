import { db } from '../config/config.js';

const subjectModel = {
  getSubjectById: async (id) => {
    const subjectRef = db.collection('subjects').doc(id);
    const subjectDoc = await subjectRef.get();
    return subjectDoc.exists ? subjectDoc.data() : null;
  },
  createSubject: async (subjectData) => {
    const subjectRef = db.collection('subjects').doc(subjectData.id);
    await subjectRef.set(subjectData);
    return subjectData;
  },
  updateSubject: async (subjectData) => {
    const subjectRef = db.collection('subjects').doc(subjectData.id);
    await subjectRef.update(subjectData);
    return subjectData;
  },
  deleteSubject: async (id) => {
    const subjectRef = db.collection('subjects').doc(id);
    await subjectRef.delete();
  },
  getAllSubjects: async () => {
    const subjectsRef = db.collection('subjects');
    const subjectsSnapshot = await subjectsRef.get();
    const subjects = [];
    subjectsSnapshot.forEach((doc) => {
      subjects.push(doc.data());
    });
    return subjects;
  }
};

export default subjectModel;
