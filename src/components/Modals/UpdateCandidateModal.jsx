import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import CandidateFormFields from "components/FormFields/CandidateFormField";
import React, { useEffect, useState } from "react";

export const UpdateCandidateModal = ({
  open,
  onClose,
  onSave,
  candidateNumber,
}) => {
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
  useEffect(() => {
    // Fetch candidate data using candidateNumber and populate states
    // This could be an API call or a lookup in local state
    // setFirstName(fetchedData.firstName);
    // ... set other fields
  }, [candidateNumber]);
  const handleSaveClick = () => {
    // Assuming you have state variables and setters for each field
    const updatedData = {
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

    onSave(updatedData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <CandidateFormFields
          firstName={firstName}
          setFirstName={setFirstName}
          middleName={middleName}
          password={password}
          setPassword={setPassword}
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
        />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSaveClick}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};
