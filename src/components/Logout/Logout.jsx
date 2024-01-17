import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css"; // Import your CSS file for styling

export default function Logout({ handleRemoveCookie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    handleRemoveCookie();
    navigate("/");
  };

  return (
    <div className="logout-container">
      <h2 className="logout-title">If you want to log out, click here</h2>
      <button onClick={handleClick} className="logout-button">
        Log out
      </button>
    </div>
  );
}
