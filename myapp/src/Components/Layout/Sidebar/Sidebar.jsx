import React, { Component } from 'react';
import { BsHouse } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { BsBootstrapFill } from "react-icons/bs";
import './Sidebar.css';

class Sidebar extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <nav class="navbar">
                <a class="navbar-brand mx-auto" href="#">Aqib</a>
                <div class="container-fluid">
                  <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link text-color " href="#">
                          <i className="fs-5  me-3 "><BsSpeedometer2/></i>
                              Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-color" href="#">
                          <i className="fs-5  me-3"><BsHouse/></i>
                              Home
                        </a>
                    </li>
                  </ul>
                </div>
              </nav>
          </>
        );
    }
}
 
export default Sidebar;