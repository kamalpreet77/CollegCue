import { Box } from "@mui/material";
import React from "react";
import Question from ".component/Data"
import ReviewCard from "./ReviewCard.jsx";
const Ans = ({ getbgColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      {reviews.map((review, index) => {
        return <ReviewCard key={index} {...review} getbgColor={getbgColor} />;
      })}

    </Box>
  );
};

export default Ans;