import express from "express";
import {
    protect,
    authorize
} from "../middleware/authMiddleware.js";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.post(
    "/",
    protect,
    authorize("Admin"),
    createCourse
);

router.get("/", getAllCourses);

router.get("/:id", getCourseById);

router.put(
    "/:id",
    protect,
    authorize("Admin"),
    updateCourse
);

router.delete(
    "/:id",
    protect,
    authorize("Admin"),
    deleteCourse
);

export default router;
