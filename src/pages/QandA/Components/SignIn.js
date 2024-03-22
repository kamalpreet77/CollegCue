import React from "react";
import { Box, Typography, Button } from "@mui/material";
import gift from "../Assets/gift.png";

const SignIn = () => {
  return (
    <Box
      sx={{
        background: "#ffffff",
        marginTop: "2rem",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "390px" }}>
        <img
          src={gift}
          alt="gift.png"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Typography
        sx={{
          color: "#210366",
          fontSize: { xs: "24px", md: "32px" },
          fontFamily: "Roboto, sans-serif",
          fontWeight: "600",
          wordWrap: "break-word",
          textAlign: "center",
        }}
      >
        ANSWER THE FOLLOWING
      </Typography>
     
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            background: "#FF7900",
            color: "white",
            fontSize: "18px",
            fontWeight: "400",
            wordWrap: "break-word",
            width: { xs: "100%", md: "auto" },
          }}
        >
          Sign In
        </Button>
        <Button
          sx={{
            background: "white",
            color: "#210366",
            fontSize: "18px",
            fontWeight: "400",
            fontFamily: "Roboto, sans-serif",
            wordWrap: "break-word",
            width: { xs: "100%", md: "auto" },
          }}
        >
          Sign Up
        </Button>
      </Box>
      <Typography
        sx={{
          color: "#210366",
          fontSize: "20px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "400",
          wordWrap: "break-word",
          textAlign: "center",
        }}
      >
        Check Terms and Conditions
      </Typography>
    </Box>
  );
};

export default SignIn;
