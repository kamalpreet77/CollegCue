import React from "react";
import dropDownData from "../utils/filterOption";
import { Box } from "@mui/material";
import DropDown from "./DropDown";

const DropDownFilter = () => {
  console.log(dropDownData);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
        // fontSize: "0.875rem",
        fontSize: "1rem",
      }}
    >
      {dropDownData.map((menu, index) => {
        return <DropDown key={index} {...menu} />;
      })}
    </Box>
  );
};

export default DropDownFilter;
