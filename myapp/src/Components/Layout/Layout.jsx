import React, { Component } from 'react';
import UserInfo from '../UserDetail/UserInfo';
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
                  <div className="flex-column p-0">
                    <Sidebarr />
                  </div>
                  <div className="col-md-12 ml-sm-auto col-lg-12 px-md-0">
                    <Topnavbar />
                      <div className="content flex-grow-1">
                      <UserInfo/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
}
 
export default Layout;