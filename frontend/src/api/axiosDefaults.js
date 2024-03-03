// IMPORTANT!!
 // Because this React app is running in the same workspace as the API,

 // there is no need to set a separate baseURL until you reach deployment.

 // Setting a baseURL before you reach deployment will cause errors
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

// Export instances that we'll attach interceptors to. One to intercept the request and one for hte response
export const axiosReq = axios.create();
export const axiosRes = axios.create();