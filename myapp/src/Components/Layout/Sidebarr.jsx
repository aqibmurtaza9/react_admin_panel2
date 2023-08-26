import React, { Component } from 'react';
import { BsHouse } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { BsBootstrapFill } from "react-icons/bs";
import './Sidebar.css';

class Sidebarr extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <div className="bg-white p-2">
                <div className="m-2">
                    <i className="me-2 fs-4"><BsBootstrapFill/></i>
                    <span className="brand-name">Aqib</span>
                </div>
                <hr className="text-dark"/>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action py-2">
                      <i className="fs-5  me-3"><BsSpeedometer2/></i>
                      <span className="fs-5">Dashboard</span>
                    </a>
                    <a className="list-group-item list-group-item-action py-2">
                      <i className="fs-5 me-3"><BsHouse/></i>
                      <span className="fs-5">Home</span>
                    </a>
                </div>
            </div>
          </>
        );
    }
}
 
export default Sidebarr;