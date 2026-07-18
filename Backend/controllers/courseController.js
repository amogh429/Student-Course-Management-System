import Course from "../models/Course.js";

export const createCourse = async (req, res) => {
    try {

        const course = await Course.create(req.body);

        res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: course
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: courses.length,
            data: courses
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getCourseById = async (req, res) => {
    try {

        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            });
        }

        res.status(200).json({
            success: true,
            data: course
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
