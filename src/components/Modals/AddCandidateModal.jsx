import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import CandidateFormFields from "components/FormFields/CandidateFormField";

const AddCandidateModal = ({ open, onClose, onSave }) => {
  // const [candidateNumber, setCandidateNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [photoIDType, setPhotoIDType] = useState("");
  const [photoIDNumber, setPhotoIDNumber] = useState("");
  const [photoIDIssueDate, setPhotoIDIssueDate] = useState("");
  const [address, setAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [countryOfResidence, setCountryOfResidence] = useState("");
  const [stateOrTerritoryOrProvince, setStateOrTerritoryOrProvince] =
    useState("");
  const [townOrCity, setTownOrCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [landlineNumber, setLandlineNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    const candidateData = {
      firstName,
      middleName,
      lastName,
      gender,
      nativeLanguage,
      birthDate,
      photoIDType,
      photoIDNumber,
      photoIDIssueDate,
      address,
      addressLine2,
      countryOfResidence,
      stateOrTerritoryOrProvince,
      townOrCity,
      postalCode,
      landlineNumber,
      mobileNumber,
      email,
      password,
    };

    console.log("From Add Candidate Modal");
    console.log(candidateData);
    onSave(candidateData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <CandidateFormFields
          firstName={firstName}
          setFirstName={setFirstName}
          middleName={middleName}
          setMiddleName={setMiddleName}
          lastName={lastName}
          setLastName={setLastName}
          gender={gender}
          setGender={setGender}
          nativeLanguage={nativeLanguage}
          setNativeLanguage={setNativeLanguage}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          photoIDType={photoIDType}
          setPhotoIDType={setPhotoIDType}
          photoIDNumber={photoIDNumber}
          setPhotoIDNumber={setPhotoIDNumber}
          photoIDIssueDate={photoIDIssueDate}
          setPhotoIDIssueDate={setPhotoIDIssueDate}
          address={address}
          setAddress={setAddress}
          addressLine2={addressLine2}
          setAddressLine2={setAddressLine2}
          countryOfResidence={countryOfResidence}
          setCountryOfResidence={setCountryOfResidence}
          stateOrTerritoryOrProvince={stateOrTerritoryOrProvince}
          setStateOrTerritoryOrProvince={setStateOrTerritoryOrProvince}
          townOrCity={townOrCity}
          setTownOrCity={setTownOrCity}
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          landlineNumber={landlineNumber}
          setLandlineNumber={setLandlineNumber}
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCandidateModal;
