import express from "express";
import { addTodo, getTodos } from "../controllers/todoController.js";


const router = express.Router();

// api to get todo list
router.get("/", getTodos);
// api to add a new todo
router.post("/", addTodo);

export default router;


