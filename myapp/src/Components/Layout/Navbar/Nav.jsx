import React, { Component } from 'react';
import { BsJustifyLeft } from "react-icons/bs";
import 'bootstrap/js/dist/dropdown';
import './Nav.css';

class Nav extends Component {
    constructor(props){
        super(props);

        this.state = { 
            isToggled : false
        } 
    }

    handleSidebar=(e)=>{
        e.preventDefault();
        console.log("collapse click");
        const { isToggled } = this.state;
        this.setState({ isToggled: !isToggled});
        this.props.onToggleSidebar(this.state.isToggled);
        console.log(isToggled)
    }

    render() { 
        return (
            <div className="sidebar-bg">
                <nav className="navbar navbar-expand-sm navbar-white nav-bg px-3 nav-radius ">
                    <a className="fs-4 navbar-brand pointer" href="" onClick={this.handleSidebar}><BsJustifyLeft/></a>
                    <button className="navbar-toggler d lg-none"  type="button" data-bs-toggle="collapse" 
                      data-toggle="dropdown" aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                       <ul className="navbar-nav  ms-auto mt-2 mt-lg-0" >
                           <li className="nav-item dropdown ">
                                <a href="" className="nav-link dropdown-toggle " id="dropdownId" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    User                
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Profile</a>
                                    <a className="dropdown-item" href="#">Setting</a>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                           </li>
                       </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Nav;