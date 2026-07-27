import express from "express";
import { createEnrollment } from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", createEnrollment);

export default router;
