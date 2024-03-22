import React from "react";
import ReviewData from "../data.js";

import TopReviewCard from "./TopReviewCard.jsx";
import { Box } from "@mui/material";

const AllTopReviewCards = ({ getbgColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      {ReviewData.map((review, index) => (
        <TopReviewCard key={index} {...review} getbgColor={getbgColor} />
      ))}
    </Box>
  );
};

export default AllTopReviewCards;
