import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

// Export instances that we'll attach interceptors to. One to intercept the request and one for hte response
export const axiosReq = axios.create();
export const axiosRes = axios.create();