// Importing React
import React from "react";

// Importing MUI
import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const InputField = () => {
 return (
  <FormControl sx={{ width: 2 / 2 }} variant="outlined">
   <InputLabel
   shrink={false}
   >Søk etter FINN-kode</InputLabel>
   <OutlinedInput
    id="search"
    endAdornment={
     <InputAdornment position="end">
      <SearchIcon fontSize="large"/>
     </InputAdornment>
    }
   />
  </FormControl>
 );
};

const SearchBar = () => {
 return (
  <Box sx={{ m: 1, width: 2 / 2 }}>
   <InputField />
  </Box>
 );
};

export default SearchBar;
