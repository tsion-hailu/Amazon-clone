import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: "http://127.0.0.1:5001/fir-c00f2/us-central1/api"
  // baseURL: "http://localhost:5050"
  baseURL:"https://amazon-api-deploy-1-4w83.onrender.com/"
});

export { axiosInstance };
