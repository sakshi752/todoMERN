import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
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
    const { todoTitle, isParent, parentTodo } = req.body;

    try {
        const newTodo = new Todo({
            todoTitle, isParent, parentTodo
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

// export const deleteTodo = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deleteTodo = await Todo.findByIdAndDelete(id)

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }