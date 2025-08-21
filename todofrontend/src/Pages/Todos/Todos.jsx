import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import Button from "../../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, getTodos } from "./TodoService";
import { IoCloseSharp } from "react-icons/io5";
import TodoItem from "../../Components/TodoItem";

const Todos = () => {
    const [initialState, setInitialState] = useState({
        todo: "",
        description: ""
    });
    const [validationSchema] = useState(
        Yup.object({
            todo: Yup.string().required("Todo field is required"),
        })
    );
    const [modal, setModal] = useState(false);
    const [todoList, setTodoList] = useState([]);
    const { token } = useSelector((state) => state.auth);
    const todos = useSelector((state) => state.todos.data);
    const dispatch = useDispatch();
    const [formType, setFormType] = useState("Add")


    useEffect(() => {
        if (todoList.length === 0) {
            getTodoList()
        } else {
            const todoData = todos.data;
            setTodoList(todoData)
        }
    }, []);

    const getTodoList = async () => {
        getTodos({}, dispatch, token)
    }
    const onDelete = async (id) => {
        await deleteTodo(id, token)
        getTodoList()
    }

    const onEdit = async (todo) => {
        setInitialState({
            todo: todo.todo,
            description: todo.description
        })
        setFormType("Edit")
        setModal(true)
    }

    const handleSubmit = async (values, { resetForm }) => {
        const requestBody = {
            todo: values.todo,
            description: values.description,
        };
        await addTodo(requestBody, dispatch, token);
        resetForm();
        setModal(false);
        getTodoList()
    };

    return (
        <div>
            <Button
                text="Add Todo"
                type="button"
                style={{
                    backgroundColor: "#020926",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
                click={() => setModal(true)}
            />
            <div className="grid grid-cols-3 gap-4">
                {todos.length > 0 ? todos.map((todo) => <>
                    <TodoItem key={todo._id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
                </>) : <>
                    <p>Todo list is empty</p>
                </>}
            </div>
            {modal &&
                <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
                    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 text-black">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                                {formType === "Add" ? "Add New Todo" : "Edit Todo"}
                            </h2>
                            <IoCloseSharp className="text-xl cursor-pointer" onClick={() => setModal(false)} />
                        </div>


                        <Formik
                            initialValues={initialState}
                            validationSchema={validationSchema}
                            enableReinitialize
                            onSubmit={handleSubmit}
                        >
                            <Form className="space-y-6 text-black">
                                {/* Todo Field */}
                                <div className="flex flex-col">
                                    <label className="mb-1 font-medium text-gray-700">Todo</label>
                                    <Field
                                        name="todo"
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Enter your todo"
                                    />
                                    <ErrorMessage
                                        name="todo"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                {/* Description Field */}
                                <div className="flex flex-col">
                                    <label className="mb-1 font-medium text-gray-700">
                                        Todo Description
                                    </label>
                                    <Field
                                        as="textarea"
                                        name="description"
                                        rows="4"
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Add a short description..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center">
                                    <Button text={formType === "Add" ? "Add" : "Edit"} type={"submit"} style={{
                                        backgroundColor: "#020926",
                                        color: "white",
                                        padding: "10px",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer"
                                    }} />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            }
        </div>
    );
};

export default Todos;
