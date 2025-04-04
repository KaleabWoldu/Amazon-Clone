import axios from "axios";

const axiosInstance = axios.create({
    // local instance of firebase function
    // baseURL: "http://127.0.0.1:5001/clone-2bc60/us-central1/api",
    // deployed version of firebase function
    baseURL: "https://api-ym6x7vc75a-uc.a.run.app",
});


export { axiosInstance };