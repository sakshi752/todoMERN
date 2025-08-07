import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoTitle: { type: String, required: true },
    isPatent: { type: Boolean, required: true },
    parentTodo: { type: mongoose.Schema.Types.ObjectId, ref: 'Todo', default: null },
}, { timestamps: true })

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;