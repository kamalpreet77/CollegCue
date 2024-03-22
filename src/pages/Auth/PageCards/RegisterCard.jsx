import React from "react";
import { Box } from "@mui/material";
import LeftCard from "../components/LeftCard";
import Register from "../components/Register";
const RegisterCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1000px",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "1rem",
        gap: "1rem",
      }}
    >
      <LeftCard />
      <Register />
    </Box>
  );
};

export default RegisterCard;
