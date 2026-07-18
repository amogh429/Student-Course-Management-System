import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        courseName: {
            type: String,
            required: [true, "Course name is required"],
            trim: true,
        },

        courseCode: {
            type: String,
            required: [true, "Course code is required"],
            unique: true,
            uppercase: true,
            trim: true,
        },

        department: {
            type: String,
            required: [true, "Department is required"],
            trim: true,
        },

        semester: {
            type: Number,
            required: [true, "Semester is required"],
            min: 1,
            max: 8,
        },

        credits: {
            type: Number,
            required: [true, "Credits are required"],
            min: 1,
            max: 10,
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
