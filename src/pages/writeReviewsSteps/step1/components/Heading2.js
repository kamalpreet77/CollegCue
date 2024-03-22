import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";

export default function HeadingTwo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "4rem",
        marginTop: "2rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box width="60%" display="flex" flexDirection="row" gap="1.5rem">
        <Typography
          sx={{
            color: "#210366",
         
            height: "65px",
            width: "20%",
          }}
        >
          Level
        </Typography>
        <Typography
          sx={{
            color: "#210366",
         
            height: "65px",
            width: "20%",
          }}
        >
         Board/University
        </Typography>
       
      </Box>
      <Box display="flex" flexDirection="row" width="50%">
      <Typography
          sx={{
            color: "#210366",
         
            height: "65px",
            width: "20%",
          }}
        >
          Percentage/CGPA
        </Typography>
      </Box>
    </Box>
  );
}
