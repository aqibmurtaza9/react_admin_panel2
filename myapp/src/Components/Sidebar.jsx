import React, { useState } from 'react';
import '../App.css';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

function Sidebar({options, onSelectOption}) {

    const [minimize, setMinimize] = useState(false);

    return ( 
        <>
      
        {/* sidebar */}
        <div className="main-dashboard">
            <div className={(minimize === false ? "sidebar" : "sidebar sidebar-close" )}>
                <ul className='info'>
                    <li><div className={(minimize === false  ? "display-info" : "menu-text")}>Super Star Martial Arts <small className='small-text'>Your Account ID : 1133</small></div> <a style={{paddingLeft: '4px'}} onClick={() => setMinimize(!minimize)}>{minimize === true ? <BsArrowRightCircle/> : <BsArrowLeftCircle/>} </a></li>
                </ul>
                <ul className='nav-options'>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => onSelectOption(option)}><a ><i className={(minimize === false ? "icon-size" : "icon-size option-padding-close")}>
                        {option.icon}</i>
                        <span className={(minimize === false  ? "" : "menu-text"  )}> {option.name}</span></a></li>
                    ))}
                </ul>
            </div>
        
            {/* top navbar */}
            <div className={(minimize === false ? "top-nav-main" : "top-nav-main top-nav-main-close")}>
                <div className="top-nav" >
                <div class="dropdown">
                    <button type="button" class="btn dropdown-toggle " data-toggle="dropdown">
                    Dropdown button
                    </button>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
          
        </>
     );
}

export default Sidebar;