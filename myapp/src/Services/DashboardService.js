import BaseService from "./BaseService";

class DashboardController  extends  BaseService{

    getDashboardData(){
        var response = this.makeGETRequest("dashboard/getDetail");
        return response;
    }
}

export const DashboardService = new DashboardController();