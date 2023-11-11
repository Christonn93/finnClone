// Importing React
import React from "react";

// Importing MUI
import { Box, IconButton, Typography } from "@mui/material";

// Importing Icons
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";

const MapButton = () => {
 return (
  <Box
  component="div"
   sx={{
    display: "flex",
   }}
  >
   <IconButton>
    <MapTwoToneIcon />
    <Typography variant="button">Kart</Typography>
   </IconButton>
  </Box>
 );
};

export default MapButton;
