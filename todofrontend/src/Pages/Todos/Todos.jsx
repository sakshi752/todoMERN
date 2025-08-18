import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import React, { useState } from 'react';
import Button from "../../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./TodoService";

const Todos = () => {
    const [initialState, setInitialState] = useState({
        todo: "",
        description: ""
    });

    const { token } = useSelector((state) => state.auth);

    const [validationSchema] = useState(
        Yup.object({
            todo: Yup.string().required("Todo field is required"),
        })
    );

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const requestBody = {
            todo: values.todo,
            description: values.description,
        };
        addTodo(requestBody, dispatch, token);
        resetForm(); // clear form after submit
    };

    return (
        <div className="flex items-center justify-center ">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Add New Todo
                </h2>

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
                            <Button text={"Add"} type={"submit"} style={{
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
    );
};

export default Todos;
