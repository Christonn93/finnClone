// Importing React
import React, { Link } from "react-router-dom";

// Importing MUI
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

// Importing MUI Icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PreviewRoundedIcon from "@mui/icons-material/PreviewRounded";

// Importing components
import FooterSvg from "../components/Logo/FooterSvg";

const Footer = () => {
 const AnchorLink = ({ href, content }) => {
  const LinkStyle = {
   color: "#000",
   textDecoration: "none",
  };

  return (
   <Box component={Link} to={href} sx={LinkStyle}>
    {content}
   </Box>
  );
 };

 return (
  <Box
   sx={{
    borderTop: "0.5px solid #545454",
    marginTop: 3
   }}
  >
   <Container>
    <Grid container spacing={3} mt={3} mb={3}>
     <Grid item xs={4}>
      <FooterSvg />
     </Grid>

     <Grid
      item
      xs={2}
      sx={{
       display: "flex",
       flexDirection: "column",
       gap: 1,
      }}
     >
      <Typography variant="h3">For bedrifter</Typography>
      <AnchorLink content={"Bli bedriftskunde"} href={""} />
      <AnchorLink content={"Informasjon og inspirasjon"} href={""} />
      <AnchorLink content={"Admin for bedrifter"} href={""} />
     </Grid>

     <Grid
      item
      xs={2}
      sx={{
       display: "flex",
       flexDirection: "column",
       gap: 1,
      }}
     >
      <Typography variant="h3">Om FINN</Typography>
      <AnchorLink content={"Jobbe i FINN"} href={""} />
      <AnchorLink content={"FINNspirasjon"} href={""} />
     </Grid>

     <Grid
      item
      xs={2}
      sx={{
       display: "flex",
       flexDirection: "column",
       gap: 1,
      }}
     >
      <Typography variant="h3">Personvern</Typography>
      <AnchorLink content={"Personvernerklæring"} href={""} />
      <AnchorLink content={"Personvern i FINN"} href={""} />
      <AnchorLink content={"Innstillinger for personvern"} href={""} />
      <AnchorLink content={"Cookies"} href={""} />
     </Grid>

     <Grid
      item
      xs={2}
      sx={{
       display: "flex",
       flexDirection: "column",
       gap: 1,
      }}
     >
      <Typography variant="h3">Få hjelp</Typography>
      <AnchorLink content={"Kundeservice"} href={""} />
      <AnchorLink content={"Trygg handel på FINN"} href={""} />
      <AnchorLink content={"Fiks ferdig"} href={""} />
      <AnchorLink content={"Brukervilkår"} href={""} />
      <AnchorLink content={"Annonseregler"} href={""} />
     </Grid>
    </Grid>
    <Box
     sx={{
      borderTop: "0.5px solid #545454",
      padding: 2
     }}
    >
     <Grid container spacing={3} mt={1}>
      <Grid
       item
       xs={4}
       sx={{
        display: "flex",
        gap: 3,
       }}
      >
       <IconButton>
        <FacebookRoundedIcon fontSize="large"/>
       </IconButton>
       <IconButton>
        <PreviewRoundedIcon fontSize="large"/>
       </IconButton>
       <IconButton>
        <PreviewRoundedIcon fontSize="large"/>
       </IconButton>
       <IconButton>
        <PreviewRoundedIcon fontSize="large"/>
       </IconButton>
      </Grid>
      <Grid item xs={8}>
       <Typography variant="caption">
        Innholdet er beskyttet etter åndsverkloven. Regelmessig, systematisk eller kontinuerlig innhenting, lagring, indeksering, distribusjon og all annen form for sammenstilling av data tillates
        ikke uten eksplisitt, skriftlig tillatelse fra FINN.no. © 1996–2023 FINN.no AS
       </Typography>
      </Grid>
     </Grid>
    </Box>
   </Container>
  </Box>
 );
};

export default Footer;
