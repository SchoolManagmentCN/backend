import subjectModel from '../models/subjectModel.js';

const subjectRepository = {
  getSubjectById: async (id) => {
    return await subjectModel.getSubjectById(id);
  },
  createSubject: async (subjectData) => {
    return await subjectModel.createSubject(subjectData);
  },
  updateSubject: async (subjectData) => {
    return await subjectModel.updateSubject(subjectData);
  },
  deleteSubject: async (id) => {
    await subjectModel.deleteSubject(id);
  },
  getAllSubjects: async () => {
    return await subjectModel.getAllSubjects();
  }
};

export default subjectRepository;
