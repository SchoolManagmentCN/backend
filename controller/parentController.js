import { getParentById, createParent, updateParent, deleteParent } from '../services/parentService.js';

export const getParent = async (req, res) => {
  const { id } = req.params;
  const parent = await getParentById(id);
  if (!parent) {
    return res.status(404).send('Parent not found');
  }
  res.json(parent);
};

export const addParent = async (req, res) => {
  const parentData = req.body;
  const newParent = await createParent(parentData);
  res.status(201).json(newParent);
};

export const editParent = async (req, res) => {
  const parentData = req.body;
  const updatedParent = await updateParent(parentData);
  res.json(updatedParent);
};

export const removeParent = async (req, res) => {
  const { id } = req.params;
  await deleteParent(id);
  res.status(204).send();
};