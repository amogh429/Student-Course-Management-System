import express from "express";
import {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
} from "../controllers/enrollmentController.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/", createEnrollment);
router.get("/", getAllEnrollments);
router.get("/:id", getEnrollmentById);

export default router;
