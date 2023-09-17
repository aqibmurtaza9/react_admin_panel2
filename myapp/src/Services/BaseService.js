import axios from "axios";
import {AppSettings} from './../Constants/AppSettings';

export default class BaseService {
  constructor() {
    axios.interceptors.request.use(
      async (config) => {
        //Need to change config.baseURL according to release (e.g for development, its Localhost)
       // config.baseURL = AppSettings.ApiUrls.Localhost;
        //debugger;
        var token = localStorage.getItem("user_token");
        //console.log(token);

        config.headers.authorization = "Bearer " + token;
        config.headers.token = token;
        //console.log(appState.state.token,"Token from appstate");

        return config;
      },

      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }

  
// ---------------------------------------axios
async makeGETRequest(url) {
  var token = localStorage.getItem("user_token");
  let basePath = AppSettings.ApiUrls.Localhost;
  url = basePath+url
  return  await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(function(response) {
    return response.data;
  })
  .catch(function(error) {
    alert("Error: "+error);
    console.log("Error: "+error);
  })
}

async makeHttpRequest(url, payload) {
  let basePath = AppSettings.ApiUrls.Localhost;
  url = basePath+url
  debugger;
  
var response1 = await  axios.post(url,payload)
  .then(function(response) {
    return response;
  })
  .catch(function(error) {
    alert("Error: "+error);
    console.log("Error: "+error);
  })

  return response1;
  //  return axios.post(url,{Email :"aqib",Password: "123"});
}
}
  