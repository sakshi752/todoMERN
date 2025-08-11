import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Button from '../../Components/Button';

const LoginPage = () => {
  const [registerPage, setRegisterPage] = useState(true);
  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [validationSchema, setValidationSchema] = useState(Yup.object({
    name: Yup.string().min(3, "Must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  }));
  const handleSubmit = ()=>{

  }


  return (
    <div className='flex flex-col justify-center items-center'>
      <h2>
        {registerPage ? "Register" : "Login"}
      </h2>

      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        enableReinitialize
      >
        <Form>
<div>
          <label>Name:</label>
          <Field name="name" className="border p-1" />
          <ErrorMessage name="name" component="div" className="text-red-500" />
        </div>
        <div>
          <label>Email:</label>
          <Field name="email" className="border p-1" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>
        <div>
          <label>Password:</label>
          <Field name="password" className="border p-1" />
          <ErrorMessage name="password" component="div" className="text-red-500" />
        </div>
        <Button text={"Register"} click={handleSubmit}/>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage
