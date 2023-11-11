// Importing React
import React from "react";

// Importing MUI
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

const InfoCard = () => {
 return (
  <Card sx={{ display: "flex" }}>
   <Box sx={{ display: "flex", flexDirection: "column" }}>
    <CardContent sx={{ 
      display: "flex",
      flexDirection: "column",
      flex: "1 0 auto", 
      gap: 2
      }}>
     <Typography component="div" variant="h3">
      Takk for at du gjenbruker
     </Typography>
     <Typography variant="body1" color="text.secondary" component="div">
      Interessen for kjøp og salg på FINN-torget er høyere enn aldri før! Det er bra for miljøet, det. Ooog lommeboka
     </Typography>
     <Button variant="contained" color="info">
      Se flere høstklær
     </Button>
    </CardContent>
   </Box>
   <CardMedia component="img" sx={{ width: 151 }} image="https://assets.finn.no/pkg/frontpage-podium/2.0.114/torget-klaer.png" alt="torget-klaer" />
  </Card>
 );
};

export default InfoCard;
