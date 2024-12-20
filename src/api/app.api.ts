import { ISignIn } from "@/types/app";
import { MainApi } from "./axios";
import { AxiosResponse } from "axios";


//!==================================================================================================

export default class AppApi {

    static signin(params: { username: string; password: string }): Promise<ISignIn> {
        return MainApi.post(`login`, { ...params }).then(
            (response) => {
                return response.data;
            }
        );
    }

    static uploadFile(files: File[]): Promise<{ fileExtension: string, filePath: string, fileSize: number }[]> {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append("files", file);
        });
        return MainApi.post('upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((res: AxiosResponse<{ fileExtension: string, filePath: string, fileSize: number }[]>) => {
            if (Array.isArray(res.data) && res.data.length > 0) {
                return res.data.map(file => ({
                    ...file,
                    filePath: `${process.env.API_URL?.replace('/api', '')}/${file.filePath}`
                }));

            } else {
                throw Error('Unexpected response format');
            }
        });
    }

}
//!==================================================================================================