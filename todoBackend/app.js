import express from 'express';
import todoRoutes from "./routes/todoRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import { authMiddleware } from './middlewares/authMiddleware.js';
import cors from "cors";

const app = express();
app.use(express.json());
// Allow requests from your frontend
app.use(cors({
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/api/user", authRoutes);
app.use("/api/todos", authMiddleware, todoRoutes);

export default app;