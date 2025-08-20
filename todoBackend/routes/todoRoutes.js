import express from "express";
import { addTodo, deleteTodo, getTodos } from "../controllers/todoController.js";


const router = express.Router();

// api to get todo list
router.get("/", getTodos);
// api to add a new todo
router.post("/", addTodo);

router.delete("/:id",deleteTodo)

export default router;


