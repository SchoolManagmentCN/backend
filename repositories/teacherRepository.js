import teacherModel from '../models/teacherModel.js';

const teacherRepository = {
  getTeacherById: async (id) => {
    return await teacherModel.getTeacherById(id);
  },
  createTeacher: async (teacherData) => {
    return await teacherModel.createTeacher(teacherData);
  },
  updateTeacher: async (teacherData) => {
    return await teacherModel.updateTeacher(teacherData);
  },
  deleteTeacher: async (id) => {
    await teacherModel.deleteTeacher(id);
  },
  getAllTeachers: async () => {
      return await teacherModel.getAllTeachers();
  }
};

export default teacherRepository;
