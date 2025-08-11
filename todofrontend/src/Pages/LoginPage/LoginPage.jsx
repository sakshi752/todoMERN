import React, { useState } from 'react'
import * as yup from 'yup';

const LoginPage = () => {
  const [registerPage,setRegisterPage] = useState(true);
  return (
    <div>
      <h2>
      {registerPage? "Register":"Login"}  
      </h2>
      <form>
        
      </form>
    </div>
  )
}

export default LoginPage
