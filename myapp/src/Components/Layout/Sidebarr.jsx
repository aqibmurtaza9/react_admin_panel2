import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Nav } from 'react-bootstrap';
class Sidebarr extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <Nav className="col-md-2 d-none d-md-block bg-dark sidebar">
              {/* Sidebar content */}
              {/* Add your sidebar content here */}
            </Nav>
          </>
        );
    }
}
 
export default Sidebarr;