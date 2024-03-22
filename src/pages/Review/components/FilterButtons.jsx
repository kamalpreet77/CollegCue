import { Box } from "@mui/material";
import React from "react";
import FilterButton from "../../../components/Buttons/FilterButton";

const FilterButtons = () => {
  const filters = [
    "All Country",
    "UK",
    "Canada",
    "Australia",
    "USA",
    "Netherlands",
    "Germany",
    "Ireland",
    "Sweden",
    "New Zealand",
    "Singapore",
    "France",
    "Hong Kong",
    "Malaysia",
    "UAE",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {filters.map((filter, index) => {
        return <FilterButton key={index}>{filter}</FilterButton>;
      })}
    </Box>
  );
};

export default FilterButtons;
