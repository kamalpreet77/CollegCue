import React from "react";
import { Box, Typography } from "@mui/material";

const menuItems = [
  "Info",
  "Courses & Fees",
  "Admission 2023",
  "Reviews",
  "CutOff",
  "Placement",
  "Ranking",
  "Gallery",
  "Scholarship",
  "Faculty",
  "News & Articles",
  "Hostel",
  "College Compare",
  "Q&A",
];

const NavigationMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {menuItems.map((item, index) => (
        <Typography
          key={index}
          variant="h6"
          style={{ margin: "10px", cursor: "pointer", fontSize: ".8rem" }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default NavigationMenu;
