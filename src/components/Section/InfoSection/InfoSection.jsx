// Importing React
import React from "react";

// Importing MUI
import { Box, Container} from "@mui/material";
import InfoCard from "../../Card/InfoCard/InfoCard";

const InfoSection = () => {
 return (
  <>
   <Box>
    <Container
     sx={{
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      padding: 2,
     }}
    >
     <InfoCard />
    </Container>
   </Box>
  </>
 );
};

export default InfoSection;
