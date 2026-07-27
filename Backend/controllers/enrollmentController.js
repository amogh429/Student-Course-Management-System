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

export const getAllEnrollments = async (req, res) => {
    try {

        const enrollments = await Enrollment.find()
            .populate("student")
            .populate("course");

        res.status(200).json({
            success: true,
            count: enrollments.length,
            data: enrollments
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


export const getEnrollmentById = async (req, res) => {
    try {

        const enrollment = await Enrollment.findById(req.params.id)
            .populate(
                "student",
                "studentName studentId email department semester"
            )
            .populate(
                "course",
                "courseName courseCode department semester credits"
            );

        if (!enrollment) {
            return res.status(404).json({
                success: false,
                message: "Enrollment not found"
            });
        }

        res.status(200).json({
            success: true,
            data: enrollment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const updateEnrollment = async (req, res) => {
    try {

        const { status } = req.body;

        const enrollment = await Enrollment.findByIdAndUpdate(
            req.params.id,
            { status },
            {
                new: true,
                runValidators: true
            }
        )
        .populate(
            "student",
            "studentName studentId department semester"
        )
        .populate(
            "course",
            "courseName courseCode credits"
        );

        if (!enrollment) {
            return res.status(404).json({
                success: false,
                message: "Enrollment not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Enrollment updated successfully",
            data: enrollment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const deleteEnrollment = async (req, res) => {
    try {

        const enrollment = await Enrollment.findByIdAndDelete(req.params.id);

        if (!enrollment) {
            return res.status(404).json({
                success: false,
                message: "Enrollment not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Enrollment deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
