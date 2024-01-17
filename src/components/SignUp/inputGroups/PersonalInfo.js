import { Grid, TextField } from "../../mui";
import React from "react";

const PersonalInfo = () => (
  <>
    <Grid item xs={12} sm={6}>
      <TextField name="firstName" label="First Name" required fullWidth />
    </Grid>

    <Grid item xs={12} sm={6}>
      <TextField name="lastName" label="Last Name" required fullWidth />
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
  </>
);

export default PersonalInfo;
