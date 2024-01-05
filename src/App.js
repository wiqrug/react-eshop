// src/App.js
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Certificates from "./components/Certificates";
import Certificate from "./components/Certificate";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import { useCertificates } from "./hooks";
import Exam from "components/Exam";

const App = () => {
  //fetched certificates
  const certificates = useCertificates();

  const [currentUser, setCurrentUser] = useState();

  console.log(currentUser);

  return (
    <>
      <NavBar />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
