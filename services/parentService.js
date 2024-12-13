import parentRepository from '../repositories/parentRepository.js';

const getParentById = async (id) => {
  return await parentRepository.getParentById(id);
};

const createParent = async (parentData) => {
  return await parentRepository.createParent(parentData);
};

const updateParent = async (parentData) => {
  return await parentRepository.updateParent(parentData);
};

const deleteParent = async (id) => {
  await parentRepository.deleteParent(id);
};

const getAllParents = async () => {
    return await parentRepository.getAllParents();
}

export { getParentById, createParent, updateParent, deleteParent, getAllParents };
