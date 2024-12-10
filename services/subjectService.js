import subjectRepository from '../repositories/subjectRepository.js';

const getSubjectById = async (id) => {
  return await subjectRepository.getSubjectById(id);
};

const createSubject = async (subjectData) => {
  return await subjectRepository.createSubject(subjectData);
};

const updateSubject = async (subjectData) => {
  return await subjectRepository.updateSubject(subjectData);
};

const deleteSubject = async (id) => {
  await subjectRepository.deleteSubject(id);
};

const getAllSubjects = async () => {
  return await subjectRepository.getAllSubjects();
}

export { getSubjectById, createSubject, updateSubject, deleteSubject, getAllSubjects };
