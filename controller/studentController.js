import { v4 as uuidv4 } from 'uuid';
import { createStudent, deleteStudent, getStudentById, updateStudent } from '../services/studentService.js';
import { createParent } from '../services/parentService.js';
import { uploadImageToAzure } from '../services/azureService.js';
import { db } from '../config/config.js';

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
    await db.runTransaction(async (transaction) => {
      if (studentImage) {
        studentData.profileImageUrl = await uploadImageToAzure(studentImage);
      }

      if (parentImage) {
        parentData.profileImageUrl = await uploadImageToAzure(parentImage);
      }

      // Create parent and get the new parent's ID
      const newParentRef = db.collection('parents').doc();
      parentData.id = newParentRef.id;
      transaction.set(newParentRef, parentData);

      // Create student with the parent's ID
      const newStudentRef = db.collection('students').doc();
      studentData.id = uuidv4(); // Generate a unique ID for the student
      studentData.parentId = newParentRef.id;
      transaction.set(newStudentRef, studentData);
    });

    res.status(201).json({ message: 'Student and parent created successfully' });
  } catch (error) {
    res.status(400).send(`Error adding student and parent: ${error.message}`);
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
