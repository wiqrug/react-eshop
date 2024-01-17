import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export const useUserCookie = () => {
  const [cookie, setCookie] = useState(null);

  useEffect(() => {
    const storedCookie = Cookies.get("currentUser");
    if (storedCookie) {
      setCookie(JSON.parse(storedCookie));
    }
  }, []);

  const handleSetCookie = (cookie) => {
    const newValue = cookie;
    Cookies.set("currentUser", JSON.stringify(newValue), { expires: 7 }); // Set cookie with a 7-day expiration
    setCookie(newValue);
  };

  const handleRemoveCookie = () => {
    Cookies.remove("currentUser");
    setCookie("");
  };

  return { cookie, handleSetCookie, handleRemoveCookie };
};
