import express from "express";

import {
  createEnrollment,
  getAllEnrollments,
  getMyEnrollments,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment,
} from "../controllers/enrollmentController.js";

import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin only
router.post("/", protect, authorize("Admin"), createEnrollment);

// Admin only - all enrollments
router.get("/", protect, authorize("Admin"), getAllEnrollments);

// Student - own enrollments only
router.get("/my", protect, authorize("Student"), getMyEnrollments);

// Admin only
router.get("/:id", protect, authorize("Admin"), getEnrollmentById);

// Admin only
router.put("/:id", protect, authorize("Admin"), updateEnrollment);

// Admin only
router.delete("/:id", protect, authorize("Admin"), deleteEnrollment);

export default router;
