import teacherRepository from '../repositories/teacherRepository.js';

const getTeacherById = async (id) => {
  return await teacherRepository.getTeacherById(id);
};

const createTeacher = async (teacherData) => {
  return await teacherRepository.createTeacher(teacherData);
};

const updateTeacher = async (teacherData) => {
  return await teacherRepository.updateTeacher(teacherData);
};

const deleteTeacher = async (id) => {
  await teacherRepository.deleteTeacher(id);
};

export { getTeacherById, createTeacher, updateTeacher, deleteTeacher };