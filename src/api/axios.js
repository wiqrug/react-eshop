import axios from "axios";
const Cookies = require("js-cookie");

export const instance = axios.create({
  baseURL: "http://localhost:5021/api/",
});

instance.interceptors.request.use(
  function (config) {
    const cookie = Cookies.get("currentUser");
    const parsedCookie = cookie ? JSON.parse(cookie) : "";
    const token = parsedCookie?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
