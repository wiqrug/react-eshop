// src/App.js
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Certificates from "./components/Certificates";
import Certificate from "./components/Certificate";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Exam from "./components/Exam";

const App = () => {
  const [certificates, setCertificates] = useState(null);

  const fetchMyData = () =>
  fetch("http://localhost:5021/api/Certificates")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching certificates:", error);
    });

  useEffect(() => {
    fetchMyData().then((data) => setCertificates(data.$values));
  }, []); // Empty dependency array to run only once


  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Certificates" element={<Certificates certificates={certificates} />} />
        <Route path="/Certificate/:id" element={<Certificate certificates={certificates} />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Exam/:id" element={<Exam />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
