import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";

export default function HeadingThree() {
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
       <Typography variant="h6" sx={{ wordWrap: "wrap", color: "#210366" }}>
          Name the other Colleges and Courses You have applied
        </Typography>
        
    </Box>
  );
}
