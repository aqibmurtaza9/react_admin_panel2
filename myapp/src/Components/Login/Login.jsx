import React, { Component } from 'react';
import './Login.css'
class Login extends React.Component {
    render() { 
        return <div class="container d-flex align-items-center justify-content-center vh-100">
                        <div class="col-md-6 shadow-lg mb-5 bg-white rounded ">
                            <div class="card border">
                                <div class="card-body">
                                    <h4 class="card-title">Login</h4>
                                    <form >
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="Enter username"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Password"/>
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-2">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>;
            
    }
}
 
export default Login
;