import React from "react";
import ChooseCourseByInterest from "./ChooseCourseByInterest";
import ChooseCourseByLevel from "./ChooseCourseByLevel";
import { Box, Divider } from "@mui/material";
import TopSearch from "./TopSearch";
import PageTitle from "../../components/Headings/PageTitle";

const ChooseCourses = () => {
  return (
    <Box >
      <TopSearch />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0px",
          justifyContent: "center",
          alignItems: "center",
          marginX: "auto",
          width: "100%",
          maxWidth: { xs: "90%", sm: "70%", md: "100%", lg: "100%" }, // Adjusted maxWidth for different media sizes
        }}
      >
        <ChooseCourseByInterest />
        <Divider variant="horizontal" sx={{
          width:"100%",
          
        }} />
        <ChooseCourseByLevel />
      </Box>
    </Box>
  );
};

export default ChooseCourses;
