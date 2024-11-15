import { getStudentById, createStudent, updateStudent, deleteStudent } from '../services/studentService.js';

export const getStudent = async (req, res) => {
  const { id } = req.params;
  const student = await getStudentById(id);
  if (!student) {
    return res.status(404).send('Student not found');
  }
  res.json(student);
};

export const addStudent = async (req, res) => {
  const studentData = req.body;
  const newStudent = await createStudent(studentData);
  res.status(201).json(newStudent);
};

export const editStudent = async (req, res) => {
  const studentData = req.body;
  const updatedStudent = await updateStudent(studentData);
  res.json(updatedStudent);
};

export const removeStudent = async (req, res) => {
  const { id } = req.params;
  await deleteStudent(id);
  res.status(204).send();
};