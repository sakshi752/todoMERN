import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import React, { useState } from 'react'

const Todos = () => {
    const [initialState, setInitialState] = useState({
        todo: "",
        date: "",
        // : ""
    })


    const [validationSchema, setValidationSchema] = useState(Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    }));
    return (
        <div>
            <Formik>

            </Formik>
        </div>
    )
}

export default Todos
