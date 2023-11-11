// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, Typography } from "@mui/material";

// Importing Icons
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";

const MapButton = () => {
 return (
  <Box
   component={Link}
   sx={{
    display: "flex",
    gap: 2,
    color: "black",
    textDecoration: "none",
    "&:hover": {
     textDecoration: "underline",
    },
   }}
  >
   <MapTwoToneIcon />
   <Typography variant="button" color="black">
    Kart
   </Typography>
  </Box>
 );
};

export default MapButton;
