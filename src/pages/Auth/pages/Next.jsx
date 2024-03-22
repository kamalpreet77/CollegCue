import { Box } from "@mui/material";
import React from "react";
import NextCard from "../PageCards/NextCard";
import bacground from "../assets/loginbackground.png";
const Next = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        padding: "2.5rem",
        '@media (max-width:800px)': {
          padding : '1rem',
        }
      }}
    >
      <img
        src={bacground}
        alt="background"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          zIndex: "-1",
        }}
      />
      <NextCard />
    </Box>
  );
};

export default Next;
