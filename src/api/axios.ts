import axios from "axios";

const axiosInstance = axios.create({baseURL: `http://${window.location.host}/api/`});

export default axiosInstance;