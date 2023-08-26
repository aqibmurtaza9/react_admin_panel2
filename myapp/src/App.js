import React,{ useState } from 'react';
import './App.css';
import Login from './Components/Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import Dashboard  from './Components/Dashboard'
import Sidebarr from './Components/Layout/Sidebarr';
import Nav from './Components/Layout/Nav';


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
        return <Dashboard />;
      default:
        return null;
    }
  };
  const name = "Please Sign in to use";

  const handleClick = (email, password) =>{
      // console.log(email,password);
      if(email === 'aqibmurtaza9@gmail.com' && password === '123'){
          setLogin(true);
      }
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100"> 
      <div className="row">
          <div className="col-2 bg-white vh-100">
               <Sidebarr/>
          </div>
          <div className="col p-0">
              <Nav/>
          </div>
      </div>
    </div>
  );
}

export default App;
