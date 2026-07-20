import express from "express";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
