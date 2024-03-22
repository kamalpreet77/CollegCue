import React from "react";
import { Container,Box } from "@mui/material";
import LevelHeading from "../../components/Headings/LevelHeading";
import LevelAllCards from "./LevelAllCards";

const ChooseCourseByLevel = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "#F7ECE3",
        padding: "3rem",
      }}
    >
      <LevelHeading />
      <LevelAllCards />
    </Box>
  );
};

export default ChooseCourseByLevel;
