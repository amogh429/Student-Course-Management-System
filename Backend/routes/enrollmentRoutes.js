import express from "express";
import { createEnrollment,getAllEnrollments } from "../controllers/enrollmentController.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/", createEnrollment);
router.get("/",getAllEnrollments);

export default router;
