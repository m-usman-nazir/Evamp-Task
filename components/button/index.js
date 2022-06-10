import * as React from "react";
import { Button } from "@mui/material";

export function CrudButton({ variant, onclick, title, sx, type }) {
  return (
    <Button
      type={type}
      onClick={onclick}
      variant={variant}
      sx={{
        textTransform: "capitalize",
        backgroundColor: "rgba(96,103,241,0.9)",
        "&:hover": {
          backgroundColor: "rgba(96,103,255,1)",
        },
      }}
      style={sx && sx}
    >
      {title}
    </Button>
  );
}
