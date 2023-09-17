import React, { Component } from 'react';
import {DashboardService} from './../../../Services/DashboardService';
import axios from 'axios';
import { AppSettings } from '../../../Constants/AppSettings';

class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.state={
            data : [],
            welcome : ''
        }
    }

    async componentDidMount(){
            var response = await DashboardService.getDashboardData();
            debugger
            if(response.result != null ){
                this.setState({welcome : response.result.info});
            }
    }

    render() { 
        return <div> 
            <h2>Dashboard</h2>
            <p>{this.state.welcome}</p>
        </div>;
    }
}
 
export default Dashboard;