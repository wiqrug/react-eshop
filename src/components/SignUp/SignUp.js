import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  LockOutlinedIcon,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "../mui";

import { useState } from "react";
import { loginProcedure, signUp } from "../../api";
import { useNavigate, Link } from "react-router-dom";
import { usePasswordValidation } from "hooks";
import { createSignupPayload, formatAsISO } from "utils";

const defaultTheme = createTheme();

export default function SignUp() {
  const {
    password,
    confirmPassword,
    passwordError,
    setPassword,
    setConfirmPassword,
    setPasswordError,
  } = usePasswordValidation();

  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); //
    if (password !== confirmPassword) {
      setPasswordError();
      return;
    }

    const data = new FormData(event.currentTarget);
    const payload = createSignupPayload(data);

    await signUp(payload);
    loginProcedure(data, setCurrentUser);

    try {
      const response = await fetch("http://localhost:5021/api/Candidates", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log(data);
        await loginProcedure(data, setCurrentUser);
        navigate("/");
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
                <Link to="../Login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
