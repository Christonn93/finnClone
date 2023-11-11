// Importing react
import React from "react";
import { Link } from "react-router-dom";

// Importing mui
import { Box, Typography } from "@mui/material";

const OptionButton = ({ icon, name, href }) => {
 return (
  <Box
   component={Link}
   to={href}
   sx={{
    display: "flex",
    flexDirection: "column",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    textDecoration: "none",
   }}
  >
   {icon}
   <Typography variant="body1">{name}</Typography>
  </Box>
 );
};

export default OptionButton;
