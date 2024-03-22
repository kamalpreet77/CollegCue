import React, { useState } from "react";
import { Box, Container, Divider } from "@mui/material";
import reviews from "./IIMBangaloreReviewsData.js";
import ReviewCard from "./ReviewCard.jsx";
import OrangeButton from "./OrangeButton.jsx";

const AllReviewCards = ({ getbgColor }) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Box>
      <Box
        sx={{
          flexDirection: "column",
          marginBottom: "2rem",
          display: "flex",
          gap: "1rem",
          overflow: "hidden",
          height: show ? "168rem" : "fit-content",
          transition: "height 0.3s ease-in-out",
        }}
      >
        {reviews.map((review, index) => (
          <Box key={index}>
            <ReviewCard {...review} getbgColor={getbgColor} />
            <Divider
              sx={{
                border: "2px solid rgba(123, 144, 255, 0.15)",
              }}
            />
          </Box>
        ))}
      </Box>
      <Container
        sx={{
          textAlign: "center",
          marginTop: "1.25rem",
        }}
      >
        <OrangeButton
          buttonName={`View All Reviews (${reviews.length})`}
          onClick={handleClick}
        />
      </Container>
    </Box>
  );
};

export default AllReviewCards;
