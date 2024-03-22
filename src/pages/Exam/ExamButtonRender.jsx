import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ExamButtonRender = () => {
  const buttons = [
    "JEE Main",
    "NEET",
    "CAT",
    "GATE",
    "CLAT",
    "JEE Advanced",
    "COMEDK UGET",
    "AP EAPCET",
    "WBJEE",
    "KCET",
  ];

  return (
    <Container>
      <Box
        sx={{
          margin: "0rem 0rem",
          marginLeft: "-5px", // Adjust left margin as needed
          marginRight: "5rem",
          marginTop: "-4rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px", // Adjust the gap between buttons as needed
          justifyContent: "flex-start", // Left-align buttons
        }}
      >
        {buttons.map((label, index) => (
          <Typography
            key={index}
            variant="body1"
            component="p"
            sx={{
              fontFamily: "Arial, sans-serif", // Example font family
              fontSize: "16px", // Example font size
              fontWeight: "bold", // Example font weight
              color: "rgb(43,116,149)",
              cursor: "pointer",
            }}
          >
            {label}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default ExamButtonRender;
