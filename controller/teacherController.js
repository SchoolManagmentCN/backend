import { v4 as uuidv4 } from 'uuid';
import { createTeacher, deleteTeacher, getTeacherById, updateTeacher, getAllTeachers } from '../services/teacherService.js';
import { uploadImageToAzure } from '../services/azureService.js';

export const getTeacher = async (req, res) => {
  const { id } = req.params;
  const teacher = await getTeacherById(id);
  if (!teacher) {
    return res.status(404).send('Teacher not found');
  }
  res.json(teacher);
};

export const addTeacher = async (req, res) => {
  try {
    const teacherData = req.body;
    teacherData.id = uuidv4(); // Generar un ID único para el maestro

    // Subir imagen si existe
    if (req.file) {
      const teacherImageUrl = await uploadImageToAzure(req.file);
      teacherData.profileImageUrl = teacherImageUrl;
    }

    const newTeacher = await createTeacher(teacherData);
    res.status(201).json(newTeacher);
  } catch (error) {
    console.error('Error in addTeacher:', error);
    res.status(500).json({
      message: 'Error adding teacher',
      error: error.message
    });
  }
};

export const editTeacher = async (req, res) => {
  try {
    const teacherData = req.body;

    // Subir imagen si existe
    if (req.file) {
      const teacherImageUrl = await uploadImageToAzure(req.file);
      teacherData.profileImageUrl = teacherImageUrl;
    }

    const updatedTeacher = await updateTeacher(teacherData);
    res.json(updatedTeacher);
  } catch (error) {
    console.error('Error in editTeacher:', error);
    res.status(500).json({
      message: 'Error updating teacher',
      error: error.message
    });
  }
};

export const removeTeacher = async (req, res) => {
  const { id } = req.params;
  await deleteTeacher(id);
  res.status(204).send();
};

export const getTeachers = async (req, res) => {
  const teachers = await getAllTeachers();
  res.json(teachers);
};
