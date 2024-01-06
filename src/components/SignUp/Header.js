import React from "react";
import { Avatar, LockOutlinedIcon, Typography } from "../mui";

const Header = () => (
  <>
    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
  </>
);

export default Header;
