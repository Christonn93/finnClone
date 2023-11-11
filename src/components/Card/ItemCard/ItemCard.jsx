// Importing React
import React from "react";

// Importing MUI
import { Box, Card, CardMedia, Typography } from "@mui/material";

const ItemCard = ({ image, location, heading }) => {
 return (
  <Box
   component={"div"}
   sx={{
    "&:hover": {
     backgroundColor: "#456789",
    },
   }}
  >
   <Card>
    <CardMedia component="img" sx={{ width: "100%" }} image={image} />
   </Card>
   <Box p={1}>
    <Typography variant="caption">{location}</Typography>
    <Typography variant="h4">{heading}</Typography>
   </Box>
  </Box>
 );
};

export default ItemCard;
