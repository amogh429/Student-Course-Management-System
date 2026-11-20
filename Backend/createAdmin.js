import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import User from "./models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.error(
        "ADMIN_EMAIL and ADMIN_PASSWORD must be set in your .env file."
      );
      process.exit(1);
    }

    const existingAdmin = await User.findOne({
      email: adminEmail,
    });

    if (existingAdmin) {
      console.log("A user with this email already exists.");

      if (existingAdmin.role !== "Admin") {
        existingAdmin.role = "Admin";
        await existingAdmin.save();

        console.log("Existing user has been promoted to Admin.");
      } else {
        console.log("This user is already an Admin.");
      }

      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const admin = await User.create({
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "Admin",
    });

    console.log("Admin created successfully.");
    console.log(`Email: ${admin.email}`);
    console.log("Role: Admin");

    process.exit(0);
  } catch (error) {
    console.error("Failed to create Admin:", error.message);
    process.exit(1);
  }
};

createAdmin();
