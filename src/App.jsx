// src/App.js
import React, { useState } from "react";
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


const App = () => {
  //fetched certificates
  const certificates = useCertificates();

  // dummy data for currently signed in user
  const [currentUser, setCurrentUser] = useState({
    email: "test@test.comp",
    name: "pipas",
    lastName: "dick",
    candidateNumber: 1
  });

  return (
    <>
      <NavBar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Certificates"
          element={<Certificates certificates={certificates} />}
        />
        <Route
          path="/Certificate/:id"
          element={<Certificate certificates={certificates} />}
        />
        <Route
          path="/Login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/SignUp"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        />
        <Route path="/Exam/:id" element={<Exam />} />

        <Route path="/MyCertificates" element={<CandidateCertificates />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
