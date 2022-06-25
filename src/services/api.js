import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const token = localStorage.getItem("@nex:token");

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default api;
