import React from "react";
import FilterButtons from "./components/FilterButtons";
import { Container, Box } from "@mui/material";
import BoldHeading from "../../components/Headings/BoldHeading";
import PopularTags from "./components/PopularTags";
import AllTopReviewCards from "./components/AllTopReviewCards";
import Hero from "../StudyAbroad/Hero"
import AllReviewCards from "./components/AllReviewCards";
import PageNameHeading from "../../components/Headings/PageNameHeading";
import FilterButton from "../../components/Buttons/FilterButton";

const Review = () => {
  const colorData = [
    { A: "#2196F3" },
    { B: "#4CAF50" },
    { C: "#FF5722" },
    { D: "#2196F3" },
    { E: "#9C27B0" },
    { F: "#F44336" },
    { G: "#FFEB3B" },
    { H: "#009688" },
    { I: "#673AB7" },
    { J: "#FF9800" },
    { K: "#03A9F4" },
    { L: "#E91E63" },
    { M: "#8BC34A" },
    { N: "#FFC107" },
    { O: "#795548" },
    { P: "#00BCD4" },
    { Q: "#607D8B" },
    { R: "#FF4081" },
    { S: "#CDDC39" },
    { T: "#FF5722" },
    { U: "#009688" },
    { V: "#F44336" },
    { W: "#3F51B5" },
    { X: "#4CAF50" },
    { Y: "#9C27B0" },
    { Z: "#2196F3" },
  ];

  const getbgColor = (latter) => {
    const foundColor = colorData.find(
      (colorObject) => Object.keys(colorObject)[0] === latter
    );
    return foundColor[latter] || "#000000";
  };
  return (
    <>
      <Hero />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "0px ",
          paddingTop: "2rem",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <BoldHeading>Filter By</BoldHeading>
            <FilterButton>This Month</FilterButton>
            <FilterButton>This week</FilterButton>
            <FilterButton>This Quter</FilterButton>
          </Box>
          <FilterButtons />
        </Box>
        <Box>
          <BoldHeading>Most Popular Tags</BoldHeading>
          <PopularTags />
        </Box>
        <Box>
          <BoldHeading>Top Reviwes</BoldHeading>
          <AllTopReviewCards getbgColor={getbgColor} />
        </Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <BoldHeading>21561 Revivs Found Out of 289849</BoldHeading>
            <FilterButton>View more</FilterButton>
          </Box>
          <AllReviewCards getbgColor={getbgColor} />
        </Box>
      </Container>
    </>
  );
};

export default Review;
