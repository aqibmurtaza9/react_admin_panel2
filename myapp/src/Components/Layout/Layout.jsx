import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import Nav from './Navbar/Nav.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard.jsx';
import './Layout.css';
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state={
          sidebarClassWidthClass :'fixed',
          
    };
  }
   
  handleToggleSidebar=(isToggled)=>{
              if(isToggled){
               this.setState({sidebarClassWidthClass : 'collpased-fixed'});
              }
              else{
                this.setState({sidebarClassWidthClass : 'fixed'});
              }
    
  }


    render() { 
        return (
            <div className="container-fluid  min-vh-100">
              <div className="row">
                <div className={`${this.state.sidebarClassWidthClass} sidebar-bg vh-100`}>
                  <Sidebar />
                </div>
                <div className="col p-0 ">
                  <Nav onToggleSidebar={this.handleToggleSidebar}/>
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