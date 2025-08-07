import express from 'express';
import todoRoutes from "./routes/todoRoutes.js";
import authRoutes from "./routes/authRoutes.js"

const app = express();
app.use(express.json());

app.use("/api/todos", authRoutes);
app.use("/api/todos", todoRoutes);

export default app;