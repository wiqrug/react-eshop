import { useUserCookie } from "hooks";
import React, { useEffect, useState } from "react";
import "./myprofile.css";

export default function MyProfile() {
  // Initial user data
  const initialUserData = {
    firstName: "John",
    lastName: "Doe",
    email: "email",
    // Add more fields as needed
  };

  const [userData, setUserData] = useState(initialUserData);

  const [isEditMode, setIsEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsEditMode(false);
  };

  const { cookie } = useUserCookie();

  useEffect(() => {
    if (cookie) {
      setUserData((prevUserData) => ({ ...prevUserData, ...cookie }));
    }
  }, [cookie]);

  return (
    <div className="myprofile-container">
      <h1 className="myprofile-title">My Profile</h1>
      {isEditMode ? (
        <form onSubmit={handleSubmit} className="myprofile-form">
          <div className="myprofile-form-group">
            <label htmlFor="firstName" className="myprofile-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              className="myprofile-input"
            />
          </div>
          <div className="myprofile-form-group">
            <label htmlFor="lastName" className="myprofile-label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              className="myprofile-input"
            />
          </div>
          <div className="myprofile-form-group">
            <label htmlFor="email" className="myprofile-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="myprofile-input"
            />
          </div>

          <button type="submit" className="myprofile-button">
            Save
          </button>
        </form>
      ) : (
        <div className="myprofile-details">
          <p>
            <strong>First Name:</strong> {userData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {userData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>

          <button
            onClick={() => setIsEditMode(true)}
            className="myprofile-button"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
