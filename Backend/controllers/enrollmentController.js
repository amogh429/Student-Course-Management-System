import Enrollment from "../models/Enrollment.js";
import Student from "../models/Student.js";
import Course from "../models/Course.js";

export const createEnrollment = async (req, res) => {
    try {

        const { student, course } = req.body;

        // Check if student exists
        const existingStudent = await Student.findById(student);

        if (!existingStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Check if course exists
        const existingCourse = await Course.findById(course);

        if (!existingCourse) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            });
        }

        // Create enrollment
        const enrollment = await Enrollment.create({
            student,
            course
        });

        res.status(201).json({
            success: true,
            message: "Student enrolled successfully",
            data: enrollment
        });

    } catch (error) {

        // Duplicate enrollment
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Student is already enrolled in this course"
            });
        }

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
