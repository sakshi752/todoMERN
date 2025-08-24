import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
    const { id } = req.params;


    try {
        const todos = await Todo.find({ user: id });

        res.status(200).json({
            data: todos,
            message: "success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const addTodo = async (req, res) => {
    const { todo, description } = req.body;
    const userId = req.user.id;

    try {
        const newTodo = new Todo({
            todo,
            description,
            user: userId

        })

        await newTodo.save();
        res.status(200).json({
            message: "todo added successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteTodo = await Todo.findByIdAndDelete(id)
        res.status(200).json({
            message: "todo deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const editTodo = async (req, res) => {
    const { id } = req.params;
    const { todo, description } = req.body;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {
                todo, description
            }
        );

        if (!updatedTodo) {
            return res.status(400).json({ message: "Todo not found" });
        }

        res.status(200).json({ message: "todo updated successfully" });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}