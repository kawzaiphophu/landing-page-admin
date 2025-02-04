import { MainApi } from "./axios";
import { AxiosResponse } from "axios";
import { ISupplier } from "@/types/supplier.type";
import {
  IFileMissing,
  ILateProject,
  ILateYear,
  IMaProject,
  IOrderMissingFile,
  IOrderWaranty,
  IPeriod,
  ISummary,
  ISummaryYear,
} from "@/types/dashboard.type";
import { IProject } from "@/types/project.type";

const path = "dashboard";

//!==================================================================================================
export default class DashboardApi {
  static projectSummary(params: {
    dateFrom: string;
    dateTo: string;
  }): Promise<ISummary> {
    return MainApi.get(`${path}/project-summary`, {
      params: { ...params },
    }).then((response) => response.data);
  }

  static projectSummaryYear(): Promise<ISummaryYear[]> {
    return MainApi.get(`${path}/project-summary-year`).then(
      (response) => response.data
    );
  }
  static lateSummaryYear(): Promise<ILateYear[]> {
    return MainApi.get(`${path}/late-payment`).then(
      (response) => response.data
    );
  }

  static project(): Promise<{
    fileMissing: IFileMissing[];
    lateProjects: ILateProject[];
    maProjects: IMaProject[];
    latePeriodDue: IPeriod[];
    latePeriodDuePayment: IPeriod[];
  }> {
    return MainApi.get(`${path}/projects`).then((response) => response.data);
  }

  static order(): Promise<{
    orderWaranty: IOrderWaranty[];
    orderMissingFile: IOrderMissingFile[];
  }> {
    return MainApi.get(`${path}/orders`).then((response) => response.data);
  }
}
//!==================================================================================================
