import React, { Component } from 'react';
import Sidebarr from './Sidebarr';
import Topnavbar from './Topnavbar';

class Layout extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <div className="App">
              <div className="container-fluid">
                <div className="row">
                  <Sidebarr />
                  <main
                    role="main"
                    className="col-md-12 ml-sm-auto col-lg-12 px-md-0"
                  >
                    <Topnavbar />
                    {/* Main content */}
                    {/* Add your main content here */}
                  </main>
                </div>
              </div>
            </div>
          </>
        );
    }
}
 
export default Layout;