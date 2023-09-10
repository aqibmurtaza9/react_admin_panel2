import React,{ useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate  } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Dashboard from './Components/Pages/Dashboard/Dashboard.jsx'
import ProtectedRoutes from './Routes/ProtectedRoutes';


function App() {

  const [isLogin, setLogin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    // You can add your login logic here
    if (email === 'aqibmurtaza9@gmail.com' && password === '123') {
      setLogin(true);
      console.log("Login successful");
      navigate('/dashboard');
    }
  };

  return (
        <>
            <Routes>
              <Route path="/"  element={<Login onLogin={handleLogin}/>}/>
              <Route  path="/dashboard"  
                      element={
                      <ProtectedRoutes children={<Layout children ={<Dashboard/>} />}>
                      </ProtectedRoutes>
                      }             
              />
            </Routes>
        </>
  );
}

export default App;
