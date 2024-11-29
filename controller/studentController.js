import {createStudent, deleteStudent, getStudentById, updateStudent} from '../services/studentService.js';
import {createParent} from "../services/parentService.js";
import {uploadImageToAzure} from '../services/azureService.js';

export const getStudent = async (req, res) => {
  const { id } = req.params;
  const student = await getStudentById(id);
  if (!student) {
    return res.status(404).send('Student not found');
  }
  res.json(student);
};

export const addStudent = async (req, res) => {
  const studentData = req.body.student;
  const parentData = req.body.parent;
  const studentImage = req.files.studentImage; // Assuming you're using multer for file uploads
  const parentImage = req.files.parentImage;

  try {
    if (studentImage) {
      studentData.profileImageUrl = await uploadImageToAzure(studentImage);
    }

    if (parentImage) {
      parentData.profileImageUrl = await uploadImageToAzure(parentImage);
    }

    const newParent = await createParent(parentData);
    studentData.parentId = newParent.id;

    const newStudent = await createStudent(studentData);
    res.status(201).json({ student: newStudent, parent: newParent });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const editStudent = async (req, res) => {
  const studentData = req.body;
  const image = req.file;

  if (image) {
    studentData.profileImageUrl = await uploadImageToAzure(image);
  }

  const updatedStudent = await updateStudent(studentData);
  res.json(updatedStudent);
};

export const removeStudent = async (req, res) => {
  const { id } = req.params;
  await deleteStudent(id);
  res.status(204).send();
};
