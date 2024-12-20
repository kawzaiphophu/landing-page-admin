import axios, { AxiosInstance } from "axios";

function getClientSideValues() {
    if (typeof window !== 'undefined') {
        const token: string | null = localStorage.getItem("auth_token");
        return { token };
    }
    return { token: null };
}
const { token } = getClientSideValues();



const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${process.env.API_URL}`,
    timeout: 20000,
    headers: {
        Authorization: token ? `Bearer ${token}` : "",
    },
});

const configureAxios = () => {
    axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {

            if (error.response?.status === 401) {
                window.location.replace('/login');
            }
            return Promise.reject(error.response?.data || error);
        }
    );
};

configureAxios()
export { configureAxios, axiosInstance as MainApi };
