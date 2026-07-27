import express from "express";
import {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment
} from "../controllers/enrollmentController.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/", createEnrollment);
router.get("/", getAllEnrollments);
router.get("/:id", getEnrollmentById);
router.put("/:id",updateEnrollment);
router.delete("/:id",deleteEnrollment);

export default router;
