import axios from "axios";

export const api = axios.create({
    baseURL: "https://682f107d746f8ca4a47fa71c.mockapi.io"
})

api.interceptors.request.use((config) => {
    // if(token){
    //     config.headers.Authorization = "Bearer token"
    // }
    return config
})

api.interceptors.response.use((config) => {
    return config
})