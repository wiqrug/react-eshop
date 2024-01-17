import React from "react";
import {
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Container,
  createTheme,
  ThemeProvider,
} from "../mui";

import { login, signUp } from "../../api";
import { useNavigate } from "react-router-dom";
import { useEmailValidation, usePasswordValidation } from "../../hooks";
import { createSignupPayload } from "../../utils";

import { Password, PersonalInfo } from "./inputGroups";
import Header from "./Header";
import Footer from "./Footer";

const defaultTheme = createTheme();

export default function SignUp({ handleSetCookie }) {
  const {
    password,
    confirmPassword,
    passwordError,
    setPassword,
    setConfirmPassword,
    setPasswordError,
  } = usePasswordValidation();

  const {
    email,
    setEmail,
    emailError,
    setEmailError
  } = useEmailValidation();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError();
      return;
    }

    try {
      const data = new FormData(event.currentTarget);
      const payload = createSignupPayload(data);

      await signUp(payload);
//       const user = await login(data);
// console.log(user)
//       handleSetCookie({
//         token: user.token,
//         candidateNumber: user.user.candidateNumber,
//         firstName: user.user.firstName
//       });

      // navigate("/");
    } catch (error) {
      if (error.Error === "This email address is already in use") {
        setEmailError();
      } else {
        console.error("An error occurred while submitting form data", error);
      }
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
          <Header />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <PersonalInfo emailError={emailError}/>
              <Password
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                passwordError={passwordError}
              />
              {/* <PhotoId />
              <LocationInfo /> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Footer />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

