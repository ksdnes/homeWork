import React from "react";
import { Button } from "@mui/material";

//reusable component
function RunButton({ onClick, label, marginTop, marginLeft }) {
  const buttonStyle = {
    marginLeft: marginLeft,
    marginTop: marginTop,
  };
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      style={buttonStyle}
    >
      {label}
    </Button>
  );
}

export default RunButton;
