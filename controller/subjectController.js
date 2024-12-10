import { v4 as uuidv4 } from 'uuid';
import { createSubject, deleteSubject, getSubjectById, updateSubject, getAllSubjects } from '../services/subjectService.js';

export const getSubject = async (req, res) => {
  const { id } = req.params;
  const subject = await getSubjectById(id);
  if (!subject) {
    return res.status(404).send('Subject not found');
  }
  res.json(subject);
};

export const addSubject = async (req, res) => {
  const subjectData = req.body;
  subjectData.id = uuidv4(); // Generar un ID único para la materia
  const newSubject = await createSubject(subjectData);
  res.status(201).json(newSubject);
};

export const editSubject = async (req, res) => {
  const subjectData = req.body;
  const updatedSubject = await updateSubject(subjectData);
  res.json(updatedSubject);
};

export const removeSubject = async (req, res) => {
  const { id } = req.params;
  await deleteSubject(id);
  res.status(204).send();
};

export const getSubjects = async (req, res) => {
  const subjects = await getAllSubjects();
  res.json(subjects);
};
