import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout";
import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const { user, token } = useSelector((state) => state.auth);
  console.log("user ",user);
  console.log("token ",token);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Default route inside Layout */}
            <Route index element={token?<HomePage/> :<LoginPage />} />
            {/* Example other page */}
            
          </Route>
        </Routes>
      </Router>

      {/* Toast container is global — should be outside Router */}
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
