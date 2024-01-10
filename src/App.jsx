// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Certificates from "./components/Certificates";
import Certificate from "./components/Certificate";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Exam from "./components/Exam";
import { useCertificates, useUserCookie } from "./hooks";
import CandidateCertificates from "components/CandidateCertificates/CandidateCertificates";
import Logout from "components/Logout/Logout";
import MyProfile from "components/MyProfile";
import Admin from "components/Admin";

const App = () => {
  //fetched certificates

  const { cookie, handleSetCookie, handleRemoveCookie } = useUserCookie();
  const { certificates, fetchCertificates } = useCertificates();

  return (
    <>
      <NavBar cookieValue={cookie} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Certificates"
          element={
            <Certificates
              certificates={certificates}
              cookieValue={cookie}
              fetchCertificates={fetchCertificates}
            />
          }
        />
        <Route
          path="/Certificate/:id"
          element={
            <Certificate certificates={certificates} cookieValue={cookie} />
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
            cookie ? <MyProfile /> : <Login handleSetCookie={handleSetCookie} />
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
            cookie ? (
              <Admin
                certificates={certificates}
                cookieValue={cookie}
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
