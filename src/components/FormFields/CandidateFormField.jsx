import React from "react";
import { TextField, Grid } from "@mui/material";
import { formatAsISO } from "utils";
import { convertFromISOToYYYYMMDD } from "utils/convertFromISOToYYYYMMDD";

const CandidateFormFields = ({
  firstName,
  setFirstName,
  middleName,
  password,
  setPassword,
  setMiddleName,
  lastName,
  setLastName,
  gender,
  setGender,
  nativeLanguage,
  setNativeLanguage,
  birthDate,
  setBirthDate,
  photoIDType,
  setPhotoIDType,
  photoIDNumber,
  setPhotoIDNumber,
  photoIDIssueDate,
  setPhotoIDIssueDate,
  address,
  setAddress,
  addressLine2,
  setAddressLine2,
  countryOfResidence,
  setCountryOfResidence,
  stateOrTerritoryOrProvince,
  setStateOrTerritoryOrProvince,
  townOrCity,
  setTownOrCity,
  postalCode,
  setPostalCode,
  landlineNumber,
  setLandlineNumber,
  mobileNumber,
  setMobileNumber,
  email,
  setEmail,
}) => {
  const handleDateChange = (setter, dateValue) => {
    // Convert to ISO format
    const formattedDate = formatAsISO(dateValue);
    setter(formattedDate);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="First Name"
          type="text"
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Middle Name"
          type="text"
          fullWidth
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Last Name"
          type="text"
          fullWidth
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Gender"
          type="text"
          fullWidth
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Native Language"
          type="text"
          fullWidth
          value={nativeLanguage}
          onChange={(e) => setNativeLanguage(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Birth Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={convertFromISOToYYYYMMDD(birthDate)} // Display in yyyy-MM-dd format
          onChange={(e) => handleDateChange(setBirthDate, e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Photo ID Type"
          type="text"
          fullWidth
          value={photoIDType}
          onChange={(e) => setPhotoIDType(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Photo ID Number"
          type="text"
          fullWidth
          value={photoIDNumber}
          onChange={(e) => setPhotoIDNumber(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Photo ID Issue Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={convertFromISOToYYYYMMDD(photoIDIssueDate)} // Display in yyyy-MM-dd format
          onChange={(e) =>
            handleDateChange(setPhotoIDIssueDate, e.target.value)
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Address"
          type="text"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Address Line 2"
          type="text"
          fullWidth
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Country of Residence"
          type="text"
          fullWidth
          value={countryOfResidence}
          onChange={(e) => setCountryOfResidence(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="State/Territory/Province"
          type="text"
          fullWidth
          value={stateOrTerritoryOrProvince}
          onChange={(e) => setStateOrTerritoryOrProvince(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Town/City"
          type="text"
          fullWidth
          value={townOrCity}
          onChange={(e) => setTownOrCity(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Postal Code"
          type="text"
          fullWidth
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Landline Number"
          type="text"
          fullWidth
          value={landlineNumber}
          onChange={(e) => setLandlineNumber(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Mobile Number"
          type="text"
          fullWidth
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default CandidateFormFields;
