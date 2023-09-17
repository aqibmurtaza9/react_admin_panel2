import BaseService from './BaseService';

class AuthenticationServiceController extends BaseService {
 
    // isAuthenticated() {
    //     // Check if the user is authenticated (e.g., check for a token)
    //     var token = localStorage.getItem("user_token");
    //     if(token != null){
    //         return true;
    //     }
    //     else{ return false};
    //   }

      authenticateUser(email, password) {
        var response =  this.makeHttpRequest("auth/login", { Email: email, Password: password});
        return response;
      }
}
 
export const AuthenticationService = new AuthenticationServiceController();