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
  const handleSubmit = () => {

  }


  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl my-10 font-bold tracking-wider'>
        {registerPage ? "Register" : "Login"}
      </h1>

      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        enableReinitialize
      >
        <Form className='w-[40%]'>
          <div className='flex flex-col mb-8'>
            <label>Name:</label>
            <Field name="name" className="border p-1" />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>
          <div className='flex flex-col mb-8'>
            <label>Email:</label>
            <Field name="email" className="border p-1" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <div className='flex flex-col mb-8'>
            <label>Password:</label>
            <Field name="password" className="border p-1" />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
          <div className='w-[100%]'>
            <Button text={"Register"} click={handleSubmit} style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              width: "100%",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              textAlign: "center"
            }} />
          </div>

        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage
