import axios from "axios";
const Cookies = require("js-cookie");

const cookie = Cookies.get("currentUser");
const parsedCookie = JSON.parse(cookie);
const token = parsedCookie.token;

export const instance = axios.create({
  baseURL: "http://localhost:5021/api/",
  headers: { Authorization: cookie ? `Bearer ${token}` : "" },
});
