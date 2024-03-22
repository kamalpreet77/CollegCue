import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";

export default function MainHead({text, required}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "4rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
       
        
       <Typography variant="h6" sx={{ color: "#6A5ACD"}}>
          {text}
          </Typography>
        
         { !required && <Typography sx={{ color: "#210366", fontSize: "15px", fontWeight: "400" }}>
              What to include?
            </Typography>}
         {required==="true" &&   <Typography
        sx={{ color: "#210366", fontSize: "15px", fontWeight: "400" }}
      > Max limit 5MB per image, upload photos of the college, hostel, events photos etc.
        
      </Typography> }
    </Box>
  );
}
