// Importing React
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

// Importing components
import SearchSection from "../components/Section/SearchSection/SearchSection";
import CategorySection from "../components/Section/CategorySection/CategorySection";
import InfoSection from "../components/Section/InfoSection/InfoSection";
import RecommendedSection from "../components/Section/RecommendedSection/RecommendedSection";

const Home = () => {
 return (
  <>
   <Box
    sx={{
     marginTop: 2,
    }}
   >
    <Box
     sx={{
      display: "flex",
      flexDirection: "column",
      gap: 4,
     }}
    >
     <SearchSection />
     <CategorySection />
     <InfoSection />
     <RecommendedSection />
    </Box>
   </Box>
  </>
 );
};

export default Home;
