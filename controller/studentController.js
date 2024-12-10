import { v4 as uuidv4 } from 'uuid';
import { createStudent, deleteStudent, getStudentById, updateStudent, getAllStudents } from '../services/studentService.js';
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
  try {
    console.log('Request body:', req.body);
    console.log('Files received:', req.files);

    // Objeto estudiante con valores por defecto para evitar undefined
    const studentData = {
      name: req.body.student.name || '',
      gender: req.body.student.gender || '',
      dateOfBirth: req.body.student.dateOfBirth || '',
      religion: req.body.student.Religion || '',
      admissionDate: req.body.student.admissionDate || '',
      classes: req.body.student.classes || '',
      fatherName: req.body.student.fatherName || '',
      motherName: req.body.student.motherName || '',
      email: req.body.student.email || '',
      createdAt: new Date().toISOString()
    };

    // Objeto padre con valores por defecto para evitar undefined
    const parentData = {
      name: req.body.parent.name || '',
      gender: req.body.parent.gender === 'undefined' ? '' : (req.body.parent.gender || ''),
      phone: req.body.parent.phone || '',
      religion: req.body.parent.religion || '',
      occupation: req.body.parent.occupation || '',
      email: req.body.parent.email || '',
      address: req.body.parent.address || '',
      createdAt: new Date().toISOString()
    };

    // Subir imágenes si existen
    if (req.files?.studentImage?.[0]) {
      const studentImageUrl = await uploadImageToAzure(req.files.studentImage[0]);
      studentData.profileImageUrl = studentImageUrl;
    }

    if (req.files?.parentImage?.[0]) {
      const parentImageUrl = await uploadImageToAzure(req.files.parentImage[0]);
      parentData.profileImageUrl = parentImageUrl;
    }

    // Crear registros en Firebase usando una transacción
    await db.runTransaction(async (transaction) => {
      // Primero crear el padre
      const newParentRef = db.collection('parents').doc();
      const parentId = newParentRef.id;
      parentData.id = parentId;

      // Luego crear el estudiante
      const newStudentRef = db.collection('students').doc();
      const studentId = newStudentRef.id;
      studentData.id = studentId;
      studentData.parentId = parentId;

      // Ejecutar la transacción
      transaction.set(newParentRef, parentData);
      transaction.set(newStudentRef, studentData);
    });

    res.status(201).json({
      message: 'Student and parent created successfully',
      student: studentData,
      parent: parentData
    });

  } catch (error) {
    console.error('Error in addStudent:', error);
    res.status(500).json({
      message: 'Error adding student and parent',
      error: error.message
    });
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

export const getStudents = async (req, res) => {
    const students = await getAllStudents();
    res.json(students);
}
