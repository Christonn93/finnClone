// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, Typography } from "@mui/material";

const NavLink = ({ text, icon }) => {
 return (
  <Box
   component={Link}
   to={""}
   sx={{
    display: "flex",
    flexBasis: "100%",
    gap: 1,
    alignItems: "center",
    width: "auto",
    color: "MenuText",
    textDecoration: "none",
    "&:hover": {
     textDecoration: "none",
     borderBottom: "1px solid #0063fb",
    },
   }}
  >
   {icon}
   <Typography variant="caption" component="p">
    {text}
   </Typography>
  </Box>
 );
};

export default NavLink;
