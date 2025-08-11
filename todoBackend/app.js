import express from 'express';
import todoRoutes from "./routes/todoRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();
app.use(express.json());

app.use("/api/user", authRoutes);
app.use("/api/todos", authMiddleware, todoRoutes);

export default app;