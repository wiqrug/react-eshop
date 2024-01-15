import { useUserCookie } from "hooks";
import React, { useEffect, useState } from "react";
import "./MyProfile.css";

export default function MyProfile({ cookieValue }) {
  const [candidate, setCandidate] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5021/api/Candidates/${cookieValue.candidateNumber}`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${cookieValue.token}`, // Assuming token is a JWT token
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const candidateData = await response.json();
          setCandidate(candidateData); // Set user data assuming it's similar to candidate data
          console.log(candidateData)
        } else {
          console.error('Fetch error:', response.status);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    if (cookieValue) {
      fetchData();
    }
  }, [cookieValue]);

  // State to track whether the user is in edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCandidate({ ...candidate, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to save the updated user data
    setIsEditMode(false);
  };

  const { cookie } = useUserCookie();

  useEffect(() => {
    if (cookie) {
      setCandidate((prevcandidate) => ({ ...prevcandidate, ...cookie }));
    }
  }, [cookie]);

  return (
    <div className="myprofile-container">
      <h1 className="myprofile-title">My Profile</h1>
      {isEditMode ? (
        // Edit mode form
        <form onSubmit={handleSubmit} className="myprofile-form">
          <div className="myprofile-form-group">
            <label htmlFor="firstName" className="myprofile-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={candidate.firstName}
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
              value={candidate.lastName}
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
              value={candidate.email}
              onChange={handleInputChange}
              className="myprofile-input"
            />
          </div>
          {/* Add more fields as needed */}
          <button type="submit" className="myprofile-button">
            Save
          </button>
        </form>
      ) : (
        // Display mode
        <div className="myprofile-details">
          <p>
            <strong>First Name:</strong> {candidate && candidate.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {candidate.lastName}
          </p>
          <p>
            <strong>Email:</strong> {candidate.email}
          </p>
          {/* Display more fields as needed */}
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
