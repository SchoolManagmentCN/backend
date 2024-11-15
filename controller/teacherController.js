import { getTeacherById, createTeacher, updateTeacher, deleteTeacher } from '../services/teacherService.js';

export const getTeacher = async (req, res) => {
  const { id } = req.params;
  const teacher = await getTeacherById(id);
  if (!teacher) {
    return res.status(404).send('Teacher not found');
  }
  res.json(teacher);
};

export const addTeacher = async (req, res) => {
  const teacherData = req.body;
  const newTeacher = await createTeacher(teacherData);
  res.status(201).json(newTeacher);
};

export const editTeacher = async (req, res) => {
  const teacherData = req.body;
  const updatedTeacher = await updateTeacher(teacherData);
  res.json(updatedTeacher);
};

export const removeTeacher = async (req, res) => {
  const { id } = req.params;
  await deleteTeacher(id);
  res.status(204).send();
};