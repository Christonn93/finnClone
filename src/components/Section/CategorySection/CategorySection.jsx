// Importing react
import React from "react";

// Importing mui
import { Grid } from "@mui/material";

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
import OptionButton from "../../Button/OptionButton/OptionButton";

const CategorySection = () => {
 return (
  <Grid container spacing={2} rowSpacing={6}>
  
   <Grid item xs={2}>
    <OptionButton href={"/torget"} icon={<ChairOutlinedIcon fontSize="large" color="info" />} name={"Torget"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/eiendom"} icon={<MapsHomeWorkOutlinedIcon fontSize="large" color="info" />} name={"Eiendom"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/bil-og-næring"} icon={<AirportShuttleOutlinedIcon fontSize="large" color="info" />} name={"Bil og næring"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/jobb"} icon={<BusinessCenterOutlinedIcon fontSize="large" color="info" />} name={"Jobb"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/reise"} icon={<AirplaneTicketOutlinedIcon fontSize="large" color="info" />} name={"Reise"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/båt"} icon={<SailingOutlinedIcon fontSize="large" color="info" />} name={"Båt"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/mc"} icon={<TwoWheelerOutlinedIcon fontSize="large" color="info" />} name={"MC"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/feriehus-hytter"} icon={<CabinOutlinedIcon fontSize="large" color="info" />} name={"Feriehus & hytter"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/nybrukt mobil"} icon={<AodOutlinedIcon fontSize="large" color="info" />} name={"Ny/brukt mobil"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/bilabonoment"} icon={<AppsOutlinedIcon fontSize="large" color="info" />} name={"Bilabonoment"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/nettbil"} icon={<AppsOutlinedIcon fontSize="large" color="info" />} name={"Nettbil"} />
   </Grid>

   <Grid item xs={2}>
    <OptionButton href={"/mittanbud"} icon={<AppsOutlinedIcon fontSize="large" color="info" />} name={"Mittanbud"} />
   </Grid>
  </Grid>
 );
};

export default CategorySection;
