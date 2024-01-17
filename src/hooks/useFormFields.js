import { useState } from "react";

const useFormFields = (initialState) => {
  const [fields, setFields] = useState(initialState);

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return {
    fields,
    setFields,
    handleFieldChange,
  };
};

export default useFormFields;
