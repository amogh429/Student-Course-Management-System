import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import indexRoutes from "./routes/indexRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api",indexRoutes);




const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
