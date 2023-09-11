import React, { Component } from 'react';
import './Login.css'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };
      }

      handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        console.log(email,password)
       this.props.onLogin(email, password); // Call the parent's callback function
      };

    render() { 
        return <div className=" d-flex align-items-center justify-content-center vh-100 login-bg">
                    <div className="col-md-4 shadow-lg mb-5 bg-white rounded">
                        <div className="card border">
                            <div className="card-body">
                                <h4 className="card-title text-center">Login</h4>
                                <form onSubmit={this.handleFormSubmit}>
                                <div className="form-group mt-2">
                                    {/* <label htmlFor="username">Username</label> */}
                                    <input type="text" name="email" className="form-control" id="username" placeholder="Enter username"/>
                                </div>
                                <div className="form-group mt-2">
                                    {/* <label htmlFor="password">Password</label> */}
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-warning mt-2 w-100">Sign in</button>
                                 <a className="link-primary hover" href="#">forgot password?</a>
                                </form>
                                <br/>
                                <button type="submit" className="tomato btn w-100">Need a login? Create an account</button>
                            </div>
                        </div>
                    </div>
                </div>;
            
    }
}
 
export default Login;