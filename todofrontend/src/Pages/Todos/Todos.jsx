import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import React, { useState } from 'react'
import Button from "../../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./TodoService";

const Todos = () => {
    const [initialState, setInitialState] = useState({
        todo: "",
        description: ""
    });
    const { user, token } = useSelector((state) => state.auth);
    const [validationSchema, setValidationSchema] = useState(Yup.object({
        todo: Yup.string().required("Todo field is required"),
    }));
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        const requestBody = {
            todo: values.todo,
            description: values.description
        }
        addTodo(requestBody,dispatch,token);
    }

    return (
        <div>
            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className='flex flex-col mb-8'>
                        <label>Todo:</label>
                        <Field name="todo" className="border p-1" />
                        <ErrorMessage name="todo" component="div" className="text-red-500" />
                    </div>
                    <div className='flex flex-col mb-8'>
                        <label>Todo Description:</label>
                        <Field
                            as="textarea"
                            name="description"
                            className="border p-1"
                        />
                    </div>
                    <div>
                        <Button text={"Add"} type={"submit"} />
                    </div>
                </Form>

            </Formik>
        </div>
    )
}

export default Todos
