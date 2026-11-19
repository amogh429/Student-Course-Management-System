import express from "express";

import {
  createStudent,
  getAllStudents,
  getStudentById,
  getMyStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin only
router.post("/", protect, authorize("Admin"), createStudent);

// Admin only - view all students
router.get("/", protect, authorize("Admin"), getAllStudents);

// Logged-in student - view own profile
router.get("/me", protect, authorize("Student"), getMyStudent);

// Admin can view any student
router.get("/:id", protect, authorize("Admin"), getStudentById);

// Admin only
router.put("/:id", protect, authorize("Admin"), updateStudent);

// Admin only
router.delete("/:id", protect, authorize("Admin"), deleteStudent);

export default router;
