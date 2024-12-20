import { MainApi } from "./axios";
import { AxiosResponse } from "axios";
import { ISupplier } from "@/types/supplier.type";


const path = 'supplier'

//!==================================================================================================
export default class SupplierApi {
    static create(params: ISupplier): Promise<AxiosResponse> {
        return MainApi.post(`${path}`, { ...params }).then(
            (response) => response
        );
    }

    static findAll(params?: {
        page: number;
        pageLimit: number;
        sort?: string;
        sortBy?: string;
        search?: string;
    }): Promise<{
        data: ISupplier[];
        totalItems: number;
        totalPages: number;
        headers?: object;
    }> {
        return MainApi
            .get(`/${path}`, { params: { ...params } })
            .then((res: AxiosResponse) => {
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
            });
    }

    static findOne(id: number): Promise<{ data: ISupplier }> {
        return MainApi.get(`${path}/${id}`).then((res: AxiosResponse) => res);
    }

    static delete(customerId: number): Promise<AxiosResponse> {
        return MainApi.delete(`${path}/${customerId}`).then(
            (response) => response
        );
    }

    static update(borrowerId: number,params: ISupplier): Promise<number> {
        return MainApi.patch(`${path}/${borrowerId}`, { ...params }).then(
            (response) => {
                return response.status;
            }
        );
    }

    // static findFiles(id: number): Promise<{ data: IFiles }> {
    //     return MainApi.get(`${path}/${id}/files`).then((res: AxiosResponse) => res);
    // }

    static checkDuplicate(type: "ID_CARD" | "TAX_NUMBER", text: string, borrowerId?: number): Promise<{ data: boolean }> {
        const url = `${path}/check-duplicate`;
        const params = new URLSearchParams({ type, text: text.toString() });
        if (borrowerId) {
            params.append('borrowerId', borrowerId.toString());
        }
        return MainApi.get(`${url}?${params.toString()}`)
            .then((res: AxiosResponse) => res);
    }

    static excel(params?: {
        page: number;
        pageLimit: number;
        sort?: string;
        sortBy?: string;
        search?: string;
    }): Promise<void> {
        return MainApi
            .get(`/${path}/excel`, { params: { ...params } })
            .then((res: AxiosResponse) => {
                const fileUrl = `${process.env.API_URL?.replace('/api', '')}/${res.data.reportPath}`;
                window.open(fileUrl, '_blank');
            }).catch((error) => { throw (error) })
    }
}
//!==================================================================================================