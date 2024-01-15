import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({handleRemoveCookie}) {

    const navigate = useNavigate();

    const handleClick = () => {
        handleRemoveCookie();
        navigate("/");
    }

    return (<div>
        <h2>If you want to log out click here</h2>
        <Button onClick={handleClick} variant="contained" sx={{ mt: 3, mb: 2 }}>Log out</Button>
    </div>)
};