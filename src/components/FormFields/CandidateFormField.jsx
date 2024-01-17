import React from "react";
import { TextField, Grid } from "@mui/material";
// import { formatAsISO } from "utils";
import { convertFromISOToYYYYMMDD } from "utils/convertFromISOToYYYYMMDD";
import { candidateFieldConfigurations } from "utils/candidateFieldConfigurations";

const CandidateFormFields = ({ onChange, ...fields }) => {
  const handleDateChange = (fieldName, dateValue) => {
    const event = {
      target: {
        name: fieldName,
        value: dateValue,
      },
    };
    onChange(event);
  };
  const fieldConfigurations = candidateFieldConfigurations();
  return (
    <Grid container spacing={2}>
      {fieldConfigurations.map((field) => (
        <Grid item xs={12} sm={6} key={field.name}>
          <TextField
            name={field.name}
            label={field.label}
            type={field.type}
            fullWidth
            value={
              field.convert
                ? convertFromISOToYYYYMMDD(fields[field.name])
                : fields[field.name]
            }
            onChange={
              field.type === "date"
                ? (e) => handleDateChange(field.name, e.target.value)
                : onChange
            }
            InputLabelProps={
              field.type === "date" ? { shrink: true } : undefined
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CandidateFormFields;

// import React from "react";
// import FormField from './FormField';
// import { candidateFieldConfigurations } from "utils/candidateFieldConfigurations";

// const CandidateFormFields = ({ onChange, ...fields }) => {

//     return (
//       <FormField onChange={onChange} {...fields} fieldConfigurations={candidateFieldConfigurations} />
//     );
//   };

//   export default CandidateFormFields;
