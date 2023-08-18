import React from 'react';
import './App.css';
import Login from './Components/Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Layout';
function App() {
  const name = "Please Sign in to use";

  const handleClick = (email, password) =>{
      // console.log(email,password);
      window.history = '/dashboard'
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login handleClick={handleClick}/>}/>
        <Route path="/dashboard" element={<Layout />}/>
      </Routes>
    </Router>
  );
}

export default App;
