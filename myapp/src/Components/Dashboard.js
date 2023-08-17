import React, { Component, useState } from 'react';
import '../App.css';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

function Dashboard() {

    const [minimize, setMinimize] = useState(false);
    return ( 
        <>
        {/* sidebar */}
           <div className="main-dashboard">
                <div className={(minimize === false ? "sidebar" : "sidebar sidebar-close" )}>
                    <ul className='info'>
                        <li>Super Star Martial Arts <a onClick={() => setMinimize(!minimize)}>{minimize === true ? <BsArrowRightCircle/> : <BsArrowLeftCircle/>} </a> <small className='small-text'>Your Account ID : 1133</small></li>
                    </ul>
                    <ul className='nav-options'>
                        <li><a href='#'><i className='icon-size'><BsFillLaptopFill/></i> Dashboard</a></li>
                        <li><a href='#'><i className='icon-size'> <BsFillLaptopFill/></i> Franchise Dashboard</a></li>
                        <li><a href='#'><i className='icon-size'> <BsFillPeopleFill/></i> Add New Contact</a></li>
                    </ul>
                </div>
           
                {/* top navbar */}
                <div className={(minimize === false ? "top-nav-main" : "top-nav-main top-nav-main-close")}>
                    <div className="top-nav" >
                        <ul>
                            <li>nav1</li>
                            <li>nav2</li>
                            <li>nav3</li>
                        </ul>
                    </div>
                </div>
           </div>

          
        </>
     );
}

export default Dashboard;