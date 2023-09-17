import React, { Component } from 'react';
import { BsHouse } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { BsBootstrapFill } from "react-icons/bs";
import './Sidebar.css';

class Sidebar extends Component {

  constructor(props){
    super(props);
  }
    state = {  }

  
    render() { 
      
      const {hideTextClass} = this.props;
      const options = [
      {
        name: 'Dashboard',
        icon: <BsSpeedometer2/>, 
        class : ''
      },
      {
        name: 'Franchise Dashboard',
        icon: <BsHouse/>,
        class : 'sm-text'
      },
    ]; 
        return (
          <>
            <nav class="navbar">
                <a class="navbar-brand mx-auto" href="#">Aqib</a>
                <div class="container-fluid">
                  <ul class="navbar-nav">
                  {options.map((option, index) => (
                    <li className="nav-item" key={index}>
                      <a className="nav-link text-color" href="#">
                        <i className="fs-5 me-3">{option.icon}</i>
                        <span className={`${option.class} ${hideTextClass}`}>{option.name}</span>
                      </a>
                    </li>
                  ))}
                  </ul>
                </div>
              </nav>
          </>
        );
    }
}
 
export default Sidebar;