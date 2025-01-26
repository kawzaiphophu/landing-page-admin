
import { IUser } from "@/types/user.type";
import { MainApi } from "./axios";  
import { AxiosResponse } from "axios";

const path = 'users';   

export default class UserApi {
  // Create a user
  static create(params: IUser): Promise<AxiosResponse> {
    return MainApi.post(`${path}`, { ...params }).then((response) => response);
  }

  // Find all users with optional pagination, sorting, etc.
  static findAll(params?: {
    page: number;
    pageLimit: number;
    sort?: string;
    sortBy?: string;
    search?: string;
  }): Promise<{
    data: IUser[];
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

  // Find a single user by ID
  static findOne(id: number): Promise<IUser> {
    return MainApi.get(`${path}/${id}`).then((res: AxiosResponse) => res.data);
  }

  // Update a user by ID
  static update(userId: number, params: IUser): Promise<IUser> {
    return MainApi.patch(`${path}/${userId}`, { ...params }).then((response) => response.data);
  }

  // Delete a user (soft delete, changing status to 'deleted')
  static delete(userId: number): Promise<AxiosResponse> {
    return MainApi.delete(`${path}/${userId}`).then((response) => response);
  }
}
