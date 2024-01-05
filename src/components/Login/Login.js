import React, { useState } from "react";

import { login } from "../../api";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  ThemeProvider,
  createTheme,
} from "components/mui";
import Header from "./Header";
import Footer from "./Footer";
import Inputs from "./Inputs";

const defaultTheme = createTheme();

export default function Login() {
  //edo eixes kai currentUser alla dne to xrisimopoiouses
  const [, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const user = await login(data);

      setCurrentUser({
        email: user.email,
        token: user.token,
      });

      navigate("/");
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
          <Header />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Inputs />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Footer />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
