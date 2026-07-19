import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} from "../controllers/courseController.js";

const router = express.Router();
router.post("/", createCourse);
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.put("/:id", updateCourse);

export default router;
