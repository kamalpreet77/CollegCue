import { Box } from "@mui/material";
import React from "react";
import LoginCard from "../components/LoginCard";
import bacground from "../assets/loginbackground.png";
import WhySignUpCard from "../components/WhySignUpCard";
const Login = () => {
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
        mt : "4rem"
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
      <WhySignUpCard />
      <LoginCard />
    </Box>
  );
};

export default Login;
