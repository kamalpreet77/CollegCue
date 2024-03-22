import React from "react";
import RegisterCard from "../PageCards/RegisterCard";
import background from "../assets/loginbackground.png";
import { Box } from "@mui/material";

const Register = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        borderRadius: "20px",
        width: "100%",
        height: "100%",
        padding: "2.5rem",
        mt : "4rem",
        position: "relative",
        "& *": {
          fontSize: "0.8rem important",
        },
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
      <RegisterCard />
    </Box>
  );
};

export default Register;
