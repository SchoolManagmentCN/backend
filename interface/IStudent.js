class IStudent
{
    constructor(id, name, gender, fatherName, motherName, dateOfBirth, Religion, fatherOccupation, email, admissionDate, classes)
    {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.dateOfBirth = dateOfBirth;
        this.Religion = Religion;
        this.fatherOccupation = fatherOccupation;
        this.email = email;
        this.admissionDate = admissionDate;
        this.classes = classes;
    }
}

export default IStudent;
