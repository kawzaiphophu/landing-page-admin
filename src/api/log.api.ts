


import { ILog } from "@/types/log.type";
import { MainApi } from "./axios";  
import { AxiosResponse } from "axios";

const path = 'activity-log';   

export default class LogApi {

  static findAll(params?: {
    page: number;
    pageLimit: number;
    sort?: string;
    sortBy?: string;
    search?: string;
  }): Promise<{
    data: ILog[];
    totalItems: number;
    totalPages: number;
  }> {
    return MainApi
      .get(`/${path}`, { params: { ...params } })
      .then((res: AxiosResponse) => {
        const data = res.data;
        const headers = res.headers;
        
        let totalItems = 0;
        let totalPages = 1;
        if (headers["content-range"]) {
          const range = headers["content-range"].split("/");
          totalItems = parseInt(range[1], 10);
          totalPages = Math.ceil(totalItems / (params?.pageLimit as number));
        }
        return { data, totalItems, totalPages };
      });
  }

}
