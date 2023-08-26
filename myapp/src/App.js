import React,{ useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Dashboard from './Components/Pages/Dashboard/Dashboard.jsx'

function App() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [isLogin, setLogin] = useState(false);
  const [toggle, setToggle] = useState(false);

  const options = [
    {
      name: 'Dashboard',
      icon: <BsFillLaptopFill/>, 
    },
    {
      name: 'Franchise Dashboard',
      icon: <BsFillLaptopFill/>,
    },
    {
      name: 'Add New Contact',
      icon: <BsFillLaptopFill/>,
    },
  ];

  const renderSelectedComponent = () => {
    switch (selectedOption?.name) {
      case 'Dashboard':
        return '<Dashboard />';
      default:
        return null;
    }
  };

  const handleClick = (email, password) =>{
      // console.log(email,password);
      if(email === 'aqibmurtaza9@gmail.com' && password === '123'){
          setLogin(true);
      }
  };

  return (
        <>
        <Router>
            <Routes>
              <Route path="/"  element={<Login/>}/>
              <Route element={<Layout/>}>
                <Route path="/dashboard"  element={<Dashboard/>}/>
              </Route>
            </Routes>
        </Router>
        </>
  );
}

export default App;
