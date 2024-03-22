import { Box } from "@mui/material";
import React from "react";
import reviews from "./Dataa";
import Card from "./Card";

const AllReviewCards = ({ getbgColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        gap: "1rem",
        marginTop: "3.5rem",
        marginBottom: "2rem",
      }}
    >
      {reviews.map((review, index) => {
        return <Card key={index} {...review} />;
      })}
    </Box>
  );
};

export default AllReviewCards;
