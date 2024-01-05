// src/App.js
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Certificates from "./components/Certificates/Certificates";
import Certificate from "./components/Certificate/Certificate";
import Login from "./components/Login/Login";
import { Link, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Exam from "./components/Exam/Exam";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Certificate/:id" element={<Certificate />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Exam/:id" element={<Exam />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
