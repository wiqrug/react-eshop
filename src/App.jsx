// src/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Certificates from "./components/Certificates";
import Certificate from "./components/Certificate";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Exam from "./components/Exam";
import { useCertificates } from "./hooks";
import CandidateCertificates from "components/CandidateCertificates/CandidateCertificates";
import Cookies from "js-cookie";
import Logout from "components/Logout/Logout";
import MyProfile from "components/MyProfile";
import Admin from "components/Admin/Admin";

const App = () => {
  //fetched certificates
  const { certificates, fetchCertificates } = useCertificates();

  const [cookieValue, setcookieValue] = useState("");

  useEffect(() => {
    // Retrieve the cookie value when the component mounts
    const storedCookie = Cookies.get("currentUser");
    if (storedCookie) {
      // Parse the JSON string into an object
      setcookieValue(JSON.parse(storedCookie));
    }
  }, []);

  const handleSetCookie = (cookie) => {
    // Set a new cookie value with an object
    const newValue = cookie;
    Cookies.set("currentUser", JSON.stringify(newValue), { expires: 7 }); // Set cookie with a 7-day expiration
    setcookieValue(newValue);
  };

  const handleRemoveCookie = () => {
    // Remove the cookie
    Cookies.remove("currentUser");
    setcookieValue("");
  };

  return (
    <>
      <NavBar cookieValue={cookieValue} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Certificates"
          element={
            <Certificates
              certificates={certificates}
              cookieValue={cookieValue}
              isAdminView={false}
              fetchCertificates={fetchCertificates}
            />
          }
        />
        <Route
          path="/Certificate/:id"
          element={
            <Certificate
              certificates={certificates}
              cookieValue={cookieValue}
            />
          }
        />
        <Route
          path="/Login"
          element={<Login handleSetCookie={handleSetCookie} />}
        />
        <Route
          path="/SignUp"
          element={<SignUp handleSetCookie={handleSetCookie} />}
        />
        <Route
          path="/MyProfile"
          element={
            cookieValue ? (
              <MyProfile />
            ) : (
              <Login handleSetCookie={handleSetCookie} />
            )
          }
        />

        <Route
          path="/Logout"
          element={<Logout handleRemoveCookie={handleRemoveCookie} />}
        />
        <Route path="/Exam/:id" element={<Exam />} />
        <Route
          path="/Admin"
          element={
            cookieValue ? (
              <Admin
                certificates={certificates}
                cookieValue={cookieValue}
                fetchCertificates={fetchCertificates}
              />
            ) : (
              <NotFound />
            )
          }
        />

        <Route path="/MyCertificates" element={<CandidateCertificates />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
