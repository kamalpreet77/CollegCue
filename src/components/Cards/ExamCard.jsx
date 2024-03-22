import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ExamCard = ({ examName, examDescription, registrationPage, readMore }) => {
  return (
    <Box
      sx={{
        borderRadius: "18px",
        width: "22rem",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "1rem auto",
        textAlign: "center",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "rgba(99, 99, 99, 0.5) 0px 4px 16px 0px",
        },
      }}
    >
      <Box
        sx={{
          padding: "1rem 1.8rem",
          height: "5.5rem",
          backgroundColor: "#4F5DE4",
          borderRadius: "18px 18px 0px 0px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {examName}
        </Typography>
      </Box>

      <Box sx={{ padding: "0.5rem 1rem", overflow: "hidden" }}>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: 500,
            lineHeight: "1.4rem",
            textAlign: "center",
            color: "#210366",
          }}
        >
          {examDescription ? examDescription.slice(0, 140) + "..." : ""}
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          color: "#ffffff",
          backgroundColor: "#7B90FF",
          fontWeight: 600,
          fontSize: "0.9rem",
          letterSpacing: "0.02em",
          borderRadius: "12px",
          margin: "0.5rem auto",
          "&:hover": {
            backgroundColor: "#5f77db",
          },
        }}
      >
        {registrationPage}
      </Button>

      <Button
        sx={{
          display: "block",
          color: "#210366",
          fontSize: "0.9rem",
          fontWeight: 600,
          lineHeight: "1.5rem",
          textAlign: "center",
          textTransform: "none",
          margin: "15px auto",
          "&:hover": {
            color: "#FF8911",
          },
        }}
        href={readMore}
      >
        Read More
      </Button>
    </Box>
  );
};

export default ExamCard;
