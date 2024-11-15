import parentModel from '../models/parentModel.js';

const parentRepository = {
  getParentById: async (id) => {
    return await parentModel.getParentById(id);
  },
  createParent: async (parentData) => {
    return await parentModel.createParent(parentData);
  },
  updateParent: async (parentData) => {
    return await parentModel.updateParent(parentData);
  },
  deleteParent: async (id) => {
    await parentModel.deleteParent(id);
  },
};

export default parentRepository;