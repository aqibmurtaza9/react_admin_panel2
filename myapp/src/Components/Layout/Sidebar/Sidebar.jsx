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
                {/* <div className="m-2">
                    <i className="me-2 fs-4"><BsBootstrapFill/></i>
                    <span className="brand-name">Aqib</span>
                </div>
                <hr className="text-dark"/>
                <div className="navbar-nav mr-auto sidebar-bg">
                    <a className="nav-link py-2 sidebar-bg">
                      <i className="fs-5  me-3"><BsSpeedometer2/></i>
                      <span className="fs-5">Dashboard</span>
                    </a>
                    <a className="list-group-item list-group-item-action py-2 sidebar-bg">
                      <i className="fs-5 me-3"><BsHouse/></i>
                      <span className="fs-5">Home</span>
                    </a>
                </div> */}
          </>
        );
    }
}
 
export default Sidebar;