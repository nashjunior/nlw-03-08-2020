import axios from "axios";

const api = axios.create({
  baseURL: "http://172.17.67.117:3333",
});

export default api;
