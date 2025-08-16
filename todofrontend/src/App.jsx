import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout";
import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Todos from "./Pages/Todos/Todos";

function App() {
  const { user, token } = useSelector((state) => state.auth);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={token?<HomePage/> :<LoginPage />} />
            {token && <>
            <Route path="/todos" element={<Todos/>}/>
            </>}
            
          </Route>
        </Routes>
      </Router>

     <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark"
      />
    </>
  );
}

export default App;
