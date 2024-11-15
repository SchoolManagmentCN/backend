import { db } from '../config/config.js';

const teacherModel = {
  getTeacherById: async (id) => {
    const teacherRef = db.collection('teachers').doc(id);
    const teacherDoc = await teacherRef.get();
    return teacherDoc.exists ? teacherDoc.data() : null;
  },
  createTeacher: async (teacherData) => {
    const teacherRef = db.collection('teachers').doc(teacherData.id);
    await teacherRef.set(teacherData);
    return teacherData;
  },
  updateTeacher: async (teacherData) => {
    const teacherRef = db.collection('teachers').doc(teacherData.id);
    await teacherRef.update(teacherData);
    return teacherData;
  },
  deleteTeacher: async (id) => {
    const teacherRef = db.collection('teachers').doc(id);
    await teacherRef.delete();
  },
};

export default teacherModel;