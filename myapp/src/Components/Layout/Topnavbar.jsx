import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Topnavbar extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <Navbar bg="light" variant="light" className='col-md-12'>
              <Navbar.Brand href="#" className='px-2'>Your App</Navbar.Brand>
              <Nav className="mr-auto">
                {/* Add your top navbar links here */}
                <lable>About us</lable>
              </Nav>
            </Navbar>
          </>
        );
    }
}
 
export default Topnavbar;