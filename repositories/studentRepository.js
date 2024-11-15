import studentModel from '../models/studentModel';


const studentRepository = {
    getStudentById: async (id) => {
      await studentModel.getStudentById(id);
    },
    createStudent : async (studentData) => {
        await studentModel.createStudent(student);
    },
    updateStudent: async (studentData) => {
        await studentModel.updateStudent(student);
    },
    deleteStudent: async (id) => {
        await studentModel.deleteStudent(id);
    },
}

export default studentRepository;