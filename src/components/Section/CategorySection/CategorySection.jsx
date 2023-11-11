// Importing react
import React from "react";
import { Link } from "react-router-dom";

// Importing mui
import { Box, Grid, Typography } from "@mui/material";

// Importing Icons
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import AodOutlinedIcon from "@mui/icons-material/AodOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const CategorySection = () => {
 return (
  <Grid container spacing={2}>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <ChairOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Torget</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <MapsHomeWorkOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Eiendom</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <AirportShuttleOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Bil og næring</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <BusinessCenterOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Jobb</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <AirplaneTicketOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Reise</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <SailingOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Båt</Typography>
    </Box>
   </Grid>

   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <TwoWheelerOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">MC</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <CabinOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Feriehus & hytter</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <AodOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Ny/brukt mobil</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <AppsOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Bilabonoment</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <AppsOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Nettbil</Typography>
    </Box>
   </Grid>
   <Grid item xs={2}>
    <Box
     component={Link}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textDecoration: "none",
     }}
    >
     <AppsOutlinedIcon fontSize="large" color="info" />
     <Typography variant="body2">Mittanbud</Typography>
    </Box>
   </Grid>
  </Grid>
 );
};

export default CategorySection;
