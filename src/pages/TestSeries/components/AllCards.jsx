import { Container, Stack, Typography, Box, Grid } from "@mui/material";
import React from "react";

import Cards from "./Cards";

export default function AllCards() {
  let data = [
    { headings: "Mock Test-01: JEE Main 2023", attempts: "5344 Attempted" },
    { headings: "Mock Test-02: JEE Main 2023", attempts: "5062 Attempted" },
    { headings: "Mock Test-03: JEE Main 2023", attempts: "5994 Attempted" },
    { headings: "Mock Test-04: JEE Main 2023", attempts: "6861 Attempted" },
    { headings: "Mock Test-05: JEE Main 2023", attempts: "6970 Attempted" },
  ];

  return (
   <Container>
     
 
      <Box>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "600",
            textAlign: "left",
            color: "#210366",
            margin:"1rem"
          }}
        >
          Popular Tests
        </Typography>
      </Box>
      
        
     
      <Grid container spacing={2}>
        {data.map(({ headings, attempts }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Cards headings={headings} attempts={attempts} />
          </Grid>
        ))}
      </Grid>
      
      </Container>
  );
}
