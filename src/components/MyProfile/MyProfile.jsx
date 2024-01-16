import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import  DisplayMode  from "./modes/DisplayMode";
import { createUpdateCandPayload } from "utils";
import EditMode from "./modes/EditMode";

export default function MyProfile({ cookieValue }) {
  const [candidate, setCandidate] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5021/api/Candidates/${cookieValue.candidateNumber}`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${cookieValue.token}`, // Assuming token is a JWT token
            'Content-Type': 'application/json',
            'currentUser': `${JSON.stringify(cookieValue)}`
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = createUpdateCandPayload(candidate);
    console.log(payload)
    
    await fetch(`http://localhost:5021/api/Candidates/${cookieValue.candidateNumber}`,
    {
      method: 'PUT',
      body: JSON.stringify(candidate),
      headers: {
        'Authorization': `Bearer ${cookieValue.token}`,
        'Content-Type': 'application/json',
        'currentUser': `${JSON.stringify(cookieValue)}`
      }
    });
    setIsEditMode(false);
  };

  return (
    <div className="myprofile-container">
      <h1 className="myprofile-title">My Profile</h1>
      {isEditMode ? (
        // Edit mode form
       <EditMode candidate={candidate} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
      ) : (
        // Display mode
        <DisplayMode candidate={candidate} setIsEditMode={setIsEditMode}/>
        
      )}
    </div>
  );
}
