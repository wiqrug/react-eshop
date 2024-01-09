import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export default function MyProfile(){

    // Initial user data
  const initialUserData = {
    firstName: 'John',
    lastName: 'Doe',
    email: "email",
    // Add more fields as needed
  };
  // State to manage user data
  const [userData, setUserData] = useState(initialUserData);

  // State to track whether the user is in edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to save the updated user data
    setIsEditMode(false);
  };

  useEffect(() => {
    const cookieValue = Cookies.get("currentUser");
    if (cookieValue) {
      const cookieData = JSON.parse(cookieValue);
      setUserData((prevUserData) => ({ ...prevUserData, ...cookieData }));
    }
  }, []);

    return (
        <div>
          <h1>My Profile</h1>
          {isEditMode ? (
            // Edit mode form
            <form onSubmit={handleSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              {/* Add more fields as needed */}
              <button type="submit">Save</button>
            </form>
          ) : (
            // Display mode
            <div>
              <p>
                <strong>First Name:</strong> {userData.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {userData.lastName}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              {/* Display more fields as needed */}
              <button onClick={() => setIsEditMode(true)}>Edit</button>
            </div>
          )}
        </div>
      );
};