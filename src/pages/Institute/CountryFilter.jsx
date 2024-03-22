import React from "react";
import { Box, Typography } from "@mui/material";
import Btns from "./Data";
import CountryFilterButton from "../../components/Buttons/CountryFilterButton";

const CountryFilter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
        width: "100%",
        overflow: "hidden",
        border: "1px solid #edeff0",
        borderRadius: "2.7px",
        flexDirection: "row",
        padding: "0.5rem",
        marginBottom: "0.75rem",
        boxShadow: "0 0 5px 0 rgba(207,207,207,0.5)",
      }}
    >
      <Box
        sx={{
          letterSpacing: "0.4px",
          margin: "10px 15px 0 0 ",
          
          boxSizing: "border-box",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            color: "#4C516D",
            fontWeight: 600,
            borderRight: "1px solid #dbd7d7",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            paddingBottom: "0.25rem",
            paddingtop: "0.25rem",
            position: "relative",
          }}
        >
          Select city
        </Typography>
      </Box>
      {Btns.map((btn) => (
        <CountryFilterButton
          key={btn.index}
          index={btn.index}
          name={btn.name}
        />
      ))}
    </Box>
  );
};

export default CountryFilter;
