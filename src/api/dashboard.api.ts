import { MainApi } from "./axios";
import { AxiosResponse } from "axios";
import { ISupplier } from "@/types/supplier.type";
import { IFileMissing, ILateProject, IMaProject, IOrderWaranty, ISummary, ISummaryYear } from "@/types/dashboard.type";
import { IProject } from "@/types/project.type";


const path = 'dashboard'

//!==================================================================================================
export default class DashboardApi {
    static projectSummary(params: {dateFrom:string,dateTo:string}):  Promise<ISummary> {
        return MainApi.get(`${path}/project-summary`, { params: { ...params }}).then(
            (response) => response.data
        );
    }
    static projectSummaryYear():  Promise<ISummaryYear[]> {
        return MainApi.get(`${path}/project-summary-year`).then(
            (response) => response.data
        );
    }

    static project():  Promise<{fileMissing:IFileMissing[],lateProjects:ILateProject[],maProjects:IMaProject[]}> {
        return MainApi.get(`${path}/projects`).then(
            (response) => response.data
        );
    }

    static orderWaranty():  Promise<IOrderWaranty[]> {
        return MainApi.get(`${path}/warranty-orders`).then(
            (response) => response.data
        );
    }


}
//!==================================================================================================