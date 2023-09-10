import React, { Component } from 'react';
import axios from "axios";

class Authentication extends Component {
  constructor(){
}
    isAuthenticated() {
        // Check if the user is authenticated (e.g., check for a token)
        var token = localStorage.getItem("user_token");
        if(token != null){
            return true;
        }
        else{ return false};
      }
}
 
export default Authentication;