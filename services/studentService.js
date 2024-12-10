import studentRepository from '../repositories/studentRepository.js';

const getStudentById = async (id) => {
  return await studentRepository.getStudentById(id);
};

const createStudent = async (studentData) => {
  return await studentRepository.createStudent(studentData);
};

const updateStudent = async (studentData) => {
  return await studentRepository.updateStudent(studentData);
};

const deleteStudent = async (id) => {
  await studentRepository.deleteStudent(id);
};

const getAllStudents = async () => {
  return await studentRepository.getAllStudents();
}

export { getStudentById, createStudent, updateStudent, deleteStudent, getAllStudents};
