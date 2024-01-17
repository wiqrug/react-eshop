import { useState } from "react";

/**
 * Creates state variables for password validation fields.
 * Also exposes a function to set a standard error message
 */
export const useEmailValidation = () => {
  const [email, setEmail] = useState("");
  const [emailError, setError] = useState("");

  const setEmailError = () => setError("Email already in use");

  return {
    email,
    setEmail,
    emailError,
    setEmailError
  };
};
