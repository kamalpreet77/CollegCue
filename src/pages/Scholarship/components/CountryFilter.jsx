import React from "react";
import { Box } from "@mui/material";
import countryData from "../utils/coutryfilters";
import CountryFilterButton from "./CountryFilterButton";
const CountryFilter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: ".5rem",
      }}
    >
      {countryData.map((country, index) => {
        return <CountryFilterButton key={index} country={country} />;
      })}
    </Box>
  );
};

export default CountryFilter;
