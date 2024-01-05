import { login } from "api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
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

  return handleSubmit;
};
