import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import React, { useState } from 'react'
import Button from "../../Components/Button";

const Todos = () => {
    const [initialState, setInitialState] = useState({
        todo: "",
    });
    const [validationSchema, setValidationSchema] = useState(Yup.object({
        todo: Yup.string().required("Todo field is required"),
    }));

    const handleSubmit = (values) => {

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
                        <Field name="email" className="border p-1" />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div>
                        <Button text={"Delete"} type={"submit"} />
                    </div>
                </Form>

            </Formik>
        </div>
    )
}

export default Todos
