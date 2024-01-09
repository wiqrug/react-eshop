import { login } from "../api";
import { useNavigate } from "react-router-dom";

/**
 * Makes login request -> sets current user -> navigates to homepage
 */
export const useLoginUser = ({handleSetCookie}) => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const user = await login(data);

      handleSetCookie({
        email: user.user.email,
        token: user.token,
        candidateNumber: user.user.candidateNumber
      });

      navigate("/");
    } catch (error) {
      console.error("An error occurred while submitting form data", error);
    }
  };

  return handleSubmit;
};
