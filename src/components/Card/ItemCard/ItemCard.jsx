// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, Card, CardMedia, Typography } from "@mui/material";

const ItemCard = ({ image, location, heading, url }) => {
 return (
  <Box
   component={"div"}
   sx={{
    padding: 1,
    "&:hover": {
     backgroundColor: "rgba(241,249,255,255)",
    },
   }}
  >
   <Box
    component={Link}
    to={"item"}
    sx={{
     color: "#000",
     textDecoration: "none",
    }}
   >
    <Card>
     <CardMedia component="img" sx={{ width: "100%", height: "250px" }} image={image} />
    </Card>
    <Box p={1}>
     <Typography variant="caption">{location}</Typography>
     <Typography variant="h4">{heading}</Typography>
    </Box>
   </Box>
  </Box>
 );
};

export default ItemCard;
