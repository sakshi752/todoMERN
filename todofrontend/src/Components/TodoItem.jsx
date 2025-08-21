import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoItem = ({ todo, onDelete, onEdit }) => {
    return (
        <div className="flex flex-col p-3 bg-white shadow-sm rounded-lg mb-2 text-black">
            <div className="flex items-center border-b-1 mb-2">
                <span
                    className={`text-gray-800 font-extrabold tracking-wide text-xl`}
                >
                    {todo.todo}
                </span>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <p>{todo.description}</p>
                </div>
                <div className="flex items-center">
                    <button
                          onClick={() => onEdit(todo)}
                        className="text-blue-500 hover:text-blue-700 text-xl pr-2"
                    >
                        <MdEdit />
                    </button>
                    <button
                        onClick={() => onDelete(todo._id)}
                        className="text-red-500 hover:text-red-700 text-xl pr-2"
                    >
                        <MdDelete />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default TodoItem;
