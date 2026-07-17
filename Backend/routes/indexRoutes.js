import express from "express";
import { getApiStatus } from "../controllers/indexController.js";

const router = express.Router();

router.get("/", getApiStatus);

export default router;
