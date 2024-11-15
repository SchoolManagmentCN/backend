import {db} from "../config/config";

const studentModel = {
  getStudentById: async (id) => {
    const studentRef = db.collection('students').doc(id);
    const studentDoc = await studentRef.get();
    return studentDoc.exists ? studentDoc.data() : null;
  },
  createStudent: async (studentData) => {
    const studentRef = db.collection('students').doc(studentData.id);
    await studentRef.set(studentData);
    return studentData;
  },
  updateStudent: async (studentData) => {
      const studentRef = db.collection('students').doc(studentData.id);
      await studentRef.update(studentData);
      return studentData;
  },
  deleteStudent: async (id) => {
      const studentRef = db.collection('students').doc(id);
      await studentRef.delete();
  },
}; 

export default studentModel;