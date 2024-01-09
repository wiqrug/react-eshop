import Cookies from "js-cookie";

export const getCookie = () => {
  const cookieValue = Cookies.get("currentUser");
  if (cookieValue) {
    try {
      return JSON.parse(cookieValue);
    } catch (error) {
      console.error("Error parsing JSON from cookie", error);
      return null;
    }
  }
  return null; // Return null or a sensible default if the cookie is not set
};
