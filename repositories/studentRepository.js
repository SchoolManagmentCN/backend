const studentModel = require('../models/studentModel');

const findStudentById = async (id) => {
  return await studentModel.getStudentById(id);
};

const createStudent = async (studentData) => {
  return await studentModel.createStudent(studentData);
};

module.exports = {
  findStudentById,
  createStudent,
};