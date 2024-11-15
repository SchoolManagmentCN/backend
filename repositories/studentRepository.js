import studentModel from '../models/studentModel.js';

const studentRepository = {
  getStudentById: async (id) => {
    return await studentModel.getStudentById(id);
  },
  createStudent: async (studentData) => {
    return await studentModel.createStudent(studentData);
  },
  updateStudent: async (studentData) => {
    return await studentModel.updateStudent(studentData);
  },
  deleteStudent: async (id) => {
    await studentModel.deleteStudent(id);
  },
};

export default studentRepository;