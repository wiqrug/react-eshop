import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function DisplayMode ({ candidate, setIsEditMode }) {
  return (
    <>
    <div className="myprofile-details">
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          Account Info
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <strong>Email:</strong> {candidate && candidate.email}
          </p>
          <p>
            <strong>Member since:</strong> {candidate && candidate.createdAt && new Date(candidate.createdAt).toLocaleDateString()}
          </p>
        </AccordionDetails> 
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          Personal Info
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <strong>First Name:</strong> {candidate && candidate.firstName}
          </p>
          <p>
            <strong>Middle Name:</strong> {candidate && candidate.middleName}
          </p>
          <p>
            <strong>Last Name:</strong> {candidate && candidate.lastName}
          </p>
          <p>
            <strong>Gender:</strong> {candidate && candidate.gender}
          </p>
          <p>
            <strong>Native Language:</strong> {candidate && candidate.nativeLanguage}
          </p>
          <p>
            <strong>Birth Date:</strong> {candidate && candidate.birthDate && new Date(candidate.birthDate).toLocaleDateString()}
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          ID Info
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <strong>Photo ID Type:</strong> {candidate && candidate.photoIDType}
          </p>
          <p>
            <strong>Photo ID Number:</strong> {candidate && candidate.photoIDNumber}
          </p>
          <p>
            <strong>Photo ID Issue Date:</strong> {candidate && candidate.photoIDIssueDate && new Date(candidate.photoIDIssueDate).toLocaleDateString()}
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          Contact Info
        </AccordionSummary>
        <p>
          <strong>Address:</strong> {candidate && candidate.address}
        </p>
        <p>
          <strong>Address Line 2:</strong> {candidate && candidate.addressLine2}
        </p>
        <p>
          <strong>Country of Residence:</strong> {candidate && candidate.countryOfResidence}
        </p>
        <p>
          <strong>State/Territory/Province:</strong> {candidate && candidate.stateOrTerritoryOrProvince}
        </p>
        <p>
          <strong>Town/City:</strong> {candidate && candidate.townOrCity}
        </p>
        <p>
          <strong>Postal Code:</strong> {candidate && candidate.postalCode}
        </p>
        <p>
          <strong>Landline Number:</strong> {candidate && candidate.landlineNumber}
        </p>
        <p>
          <strong>Mobile Number:</strong> {candidate && candidate.mobileNumber}
        </p>
      </Accordion>
      <button onClick={() => setIsEditMode(true)} className="myprofile-button">
        Edit
      </button>
    </div>
    </>
  )
  }
