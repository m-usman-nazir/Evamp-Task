import * as React from "react";
import { TextField } from "@mui/material";

export function CrudTextField({
  label,
  required,
  value,
  onchange,
  multiline,
  minRows,
  type,
  id,
  name,
  error,
  helperText,
  fullWidth,
  formik,
}) {
  return (
    <TextField
      fullWidth={fullWidth}
      type={type}
      id={id}
      name={name}
      label={label}
      variant="outlined"
      sx={{ my: 1.5, minWidth: "300px" }}
      required={required && required}
      value={value}
      multiline={multiline && multiline}
      minRows={minRows}
      onChange={!formik ? (e) => onchange(e.target.value) : onchange}
      error={error}
      helperText={helperText}
    />
  );
}

// onChange={formik.handleChange}
// error={formik.touched.email && Boolean(formik.errors.email)}
// helperText={formik.touched.email && formik.errors.email}
