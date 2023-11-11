// Importing React
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

// Importing components
import SearchBar from "../../Search/SearchBar";
import MapButton from "../../Button/MapButton/MapButton";

const SearchSection = () => {
 return (
  <Box
   component="div"
   sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
   }}
  >
   <SearchBar />
   <MapButton />
  </Box>
 );
};

export default SearchSection;
