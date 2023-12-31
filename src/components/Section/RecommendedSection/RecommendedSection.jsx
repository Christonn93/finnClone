// Importing React
import React from "react";

// Importing MUI
import { Box, Container, Grid, Typography } from "@mui/material";

// Importing components
import ItemCard from "../../Card/ItemCard/ItemCard";
import useApi from "../../../hooks/useApi";

const items = [
 {
  id: 1,
  name: "name",
  image: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
  location: "location",
 },
 {
  id: 2,
  name: "name2",
  image: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
  location: "location",
 },
 {
  id: 3,
  name: "name3",
  image: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
  location: "location",
 },
 {
  id: 4,
  name: "name4",
  image: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
  location: "location",
 },
];

const RecommendedSection = () => {
 const {data, isLoading, isError} = useApi();

 console.log(data);

 return (
  <>
   <Box>
    <Container
     sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
     }}
    >
     <Typography variant="h3" component={"h4"} sx={{ fontStyle: "initial" }}>
      Anbefalinger til deg
     </Typography>

     <Grid container spacing={5} rowSpacing={4}>
      {data.map((e) => {
       return (
        <Grid item xs={4} key={e.id}>
         <ItemCard heading={e.title} image={e.image} location={e.location} url={e.id}/>
        </Grid>
       );
      })}
     </Grid>
    </Container>
   </Box>
  </>
 );
};

export default RecommendedSection;
