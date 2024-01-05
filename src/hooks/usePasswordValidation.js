import { useState } from "react";

export const usePasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setError] = useState("");

  const setPasswordError = () => setError("Passwords do not match");

  return {
    password,
    confirmPassword,
    passwordError,
    setPassword,
    setConfirmPassword,
    setPasswordError,
  };
};
