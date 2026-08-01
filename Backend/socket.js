import { Server } from "socket.io";

let io;

export const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "https://student-course-management-system-nu.vercel.app",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    console.log("🟢 User Connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("🔴 User Disconnected:", socket.id);
    });
  });
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket.io has not been initialized!");
  }

  return io;
};
