import React from "react";

const TodoItem = ({ todo, onDelete , onEdit }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white shadow-sm rounded-lg mb-2 text-black">
      {/* Left Section - Checkbox + Text */}
      <div className="flex items-center gap-3">
        <span
          className={`text-gray-800 text-base ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.todo}
        </span>
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-3">
        <button
        //   onClick={() => onEdit(todo.id)}
          className="text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          Edit
        </button>
        <button
        //   onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
