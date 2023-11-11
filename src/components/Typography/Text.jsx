// Importing React
import React from "react";

// Importing MUI
import { Typography } from "@mui/material";

const Text = ({ variant, color, content }) => {
 return (
  <Typography variant={variant} color={color}>
   {content}
  </Typography>
 );
};

export default Text;
