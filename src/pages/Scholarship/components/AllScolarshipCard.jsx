import React from "react";
import data from "../utils/data";
import ScolarshipCard from "./ScolarshipCard";
import { Box, Container } from "@mui/material";

const AllScolarshipCard = () => {
  return (
    <Container maxWidth="lg">
      
    <Box
      sx={{
        display: "flex",
        // justifyContent: "space-evenly",
        justifyContent: "flexStart",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      {data.map((scholarship, index) => (
        <ScolarshipCard key={index} {...scholarship} />
      ))}
    </Box>
    </Container>

  );
};

export default AllScolarshipCard;
