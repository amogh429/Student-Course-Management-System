import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllStudents = async (req, res) => {
    try {

        const students = await Student.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const getStudentById = (req, res) => {
  res.send("Get Student By ID API");
};

export const updateStudent = (req, res) => {
  res.send("Update Student API");
};

export const deleteStudent = (req, res) => {
  res.send("Delete Student API");
};
