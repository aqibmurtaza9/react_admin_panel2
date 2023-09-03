import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import Nav from './Navbar/Nav.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard.jsx';
import './Layout.css';
class Layout extends Component {
  constructor(props) {
    super(props);
  }
    render() { 
        return (
            <div className="container-fluid  min-vh-100">
              <div className="row">
                <div className="fixed sidebar-bg vh-100">
                  <Sidebar />
                </div>
                <div className="col p-0 ">
                  <Nav />
                  <div className="col p-2">
                      {/* component rendring */}
                      {this.props.children}
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
 
export default Layout;