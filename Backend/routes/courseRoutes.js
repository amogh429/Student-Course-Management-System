import express from "express";
import {
  createCourse,
  getAllCourses,
} from "../controllers/courseController.js";

const router = express.Router();
router.post("/", createCourse);
router.get("/", getAllCourses);

export default router;
