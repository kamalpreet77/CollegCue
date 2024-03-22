import { Box } from "@mui/material";
import React from "react";
import reviews from "./Data.js";
import Card from "./Card.jsx";
import Search from "./Search.jsx";
import GetAns from "./GetAns.jsx";

const AllAnsCard = ({ getbgColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        paddingTop: 0,
        "@media (max-width: 768px)": {
          padding: "1rem",
          flexDirection:"column" // Adjust padding for smaller screens
        },
      }}
    >
      <GetAns />
      <Search />

      {reviews.map((Answer, index) => {
        return (
          <Card key={index} {...Answer} getbgColor={getbgColor} />
        );
      })}
    </Box>
  );
};

export default AllAnsCard;
