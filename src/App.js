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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function updateLoginStatus(status){
    setIsLoggedIn(status);
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Certificate/:id" element={<Certificate />} />
        <Route path="/Login" element={isLoggedIn? <Home /> : <Login updateLoginStatus={updateLoginStatus}/>} /> {/* na ftiakso ena logout page */}
        <Route path="/SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/Exam/:id" element={<Exam />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
