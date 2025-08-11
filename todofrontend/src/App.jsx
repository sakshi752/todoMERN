import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout";
import React from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default route inside Layout */}
          <Route index element={<LoginPage />} />
          {/* Example other page */}
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
