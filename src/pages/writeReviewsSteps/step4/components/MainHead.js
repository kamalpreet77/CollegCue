import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";

export default function MainHead({heading}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "4rem",
        marginTop: "4rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
       
        
       <Typography variant="h6" sx={{ color: "#210366" }}>
         {heading}
          </Typography>
    </Box>
  );
}
