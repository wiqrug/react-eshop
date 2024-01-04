import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const defaultTheme = createTheme();

export default function SignUp() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault(); //
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    const data = new FormData(event.currentTarget);

    const formatAsISO = (dateString) => {
      return dateString ? new Date(dateString).toISOString() : null;
    };

    const jsonPayload = {
      firstName: data.get("firstName"),
      middleName: data.get("middleName"),
      lastName: data.get("lastName"),
      gender: data.get("gender"),
      nativeLanguage: data.get("nativeLanguage"),
      birthDate: formatAsISO(data.get("birthDate")),
      photoIDType: data.get("photoIDType"),
      photoIDNumber: data.get("photoIDNumber"),
      photoIDIssueDate: formatAsISO(data.get("photoIDIssueDate")),
      email: data.get("email"),
      address: data.get("address"),
      addressLine2: data.get("addressLine2"),
      countryOfResidence: data.get("countryOfResidence"),
      stateOrTerritoryOrProvince: data.get("stateOrTerritoryOrProvince"),
      townOrCity: data.get("townOrCity"),
      postalCode: data.get("postalCode"),
      landlineNumber: data.get("landlineNumber"),
      mobileNumber: data.get("mobileNumber"),
      password: data.get("password"),
    };

    try {
      const response = await fetch(
        "http://localhost:5021/api/Candidates",
        {
          method: "POST",
          body: JSON.stringify(jsonPayload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.body);
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response Data:", responseData);
      } else {
        console.error(
          "Failed to submit form data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred while submitting form data", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="middleName" label="Middle Name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="gender" label="Gender" required fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="nativeLanguage"
                  label="Native Language"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="birthDate"
                  label="Birth Date"
                  required
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="photoIDType"
                  label="Photo ID Type"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="photoIDNumber"
                  label="Photo ID Number"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="photoIDIssueDate"
                  label="Photo ID Issue Date"
                  required
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email Address"
                  required
                  fullWidth
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  required
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  required
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField name="address" label="Address" required fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="addressLine2"
                  label="Address Line 2"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="countryOfResidence"
                  label="Country of Residence"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="stateOrTerritoryOrProvince"
                  label="State or Territory or Province"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="townOrCity"
                  label="Town or City"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="postalCode"
                  label="Postal Code"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="landlineNumber"
                  label="Landline Number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="mobileNumber"
                  label="Mobile Number"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="../Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
