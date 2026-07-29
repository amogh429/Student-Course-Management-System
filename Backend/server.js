import express from "express";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/enrollments",enrollmentRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET","POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User Connected:",socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected:",socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
