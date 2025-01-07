import { MainApi } from "./axios";
import { AxiosResponse } from "axios";
import { IProject } from "@/types/project.type";

const path = "projects";

//!==================================================================================================
export default class ProjectApi {
  static create(params: IProject): Promise<AxiosResponse> {
    return MainApi.post(`${path}`, { ...params }).then((response) => response);
  }

  static findAll(params?: {
    page: number;
    pageLimit: number;
    sort?: string;
    sortBy?: string;
    search?: string;
  }): Promise<{
    data: IProject[];
    totalItems: number;
    totalPages: number;
    headers?: object;
  }> {
    return MainApi.get(`/${path}`, { params: { ...params } }).then(
      (res: AxiosResponse) => {
        const data = res.data;
        const headers = {
          "content-range": res.headers["content-range"],
        };

        let totalItems = 0;
        let totalPages = 1;
        if (headers["content-range"]) {
          const range = headers["content-range"].split("/");
          totalItems = parseInt(range[1], 10);
          totalPages = Math.ceil(totalItems / (params?.pageLimit as number));
        }
        return { data, totalItems, totalPages };
      }
    );
  }

  static findOne(id: number): Promise<{ data: IProject }> {
    return MainApi.get(`${path}/${id}`).then((res: AxiosResponse) => res);
  }

  static delete(customerId: number): Promise<AxiosResponse> {
    return MainApi.delete(`${path}/${customerId}`).then((response) => response);
  }

  static update(borrowerId: number, params: IProject): Promise<number> {
    return MainApi.patch(`${path}/${borrowerId}`, { ...params }).then(
      (response) => {
        return response.status;
      }
    );
  }

  static updateMaDoc(
    projectId: number,
    params:  Document[] 
  ): Promise<number> {
    return MainApi.patch(`${path}/${projectId}/updateMaDoc`, {
      documentsMa: params,
    }).then((response) => {
      return response.status;
    });
  }

  static checkDuplicate(
    type: "ID_CARD" | "TAX_NUMBER",
    text: string,
    borrowerId?: number
  ): Promise<{ data: boolean }> {
    const url = `${path}/check-duplicate`;
    const params = new URLSearchParams({ type, text: text.toString() });
    if (borrowerId) {
      params.append("borrowerId", borrowerId.toString());
    }
    return MainApi.get(`${url}?${params.toString()}`).then(
      (res: AxiosResponse) => res
    );
  }

  static excel(params?: {
    page: number;
    pageLimit: number;
    sort?: string;
    sortBy?: string;
    search?: string;
  }): Promise<void> {
    return MainApi.get(`/${path}/excel`, { params: { ...params } })
      .then((res: AxiosResponse) => {
        const fileUrl = `${process.env.API_URL?.replace("/api", "")}/${
          res.data.reportPath
        }`;
        window.open(fileUrl, "_blank");
      })
      .catch((error) => {
        throw error;
      });
  }

  static async excelTemplate(projectId: number, type: string): Promise<void> {
    try {
      const response = await MainApi.get(`/${path}/${projectId}/${type}`, {
        responseType: "blob", // This ensures you get the file data as a binary blob
      });

      // Create a Blob URL and trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${type}_template.xlsx`); // Set the file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading Excel template:", error);
    }
  }
}
//!==================================================================================================
