import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import Nav from './Navbar/Nav.jsx';


class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container-fluid bg-secondary min-vh-100">
              <div className="row">
                <div className="col-2 bg-white vh-100">
                  <Sidebar />
                </div>
                <div className="col p-0">
                  <Nav />
                  <div className="p-2">
                      
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
 
export default Layout;