import React from "react";
import background from "../assets/loginbackground.png";
import { Box } from "@mui/material";
import ResuestOtpCard from "../PageCards/ResuestOtpCard";

const RequestOtp = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        borderRadius: "20px",
        width: "100%",
        height: "100%",
        position: "relative",
        padding: "2.5rem",
        "& *": {
          fontSize: "0.8rem important",
        },
        '@media (max-width:800px)': {
          padding : '1rem',
        }
      }}
    >
      <img
        src={background}
        alt="background"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          zIndex: "-1",
        }}
      />
      <ResuestOtpCard />
    </Box>
  );
};

export default RequestOtp;
