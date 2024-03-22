import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";

export default function LevelThree() {
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
        <Button
          sx={{
            bgcolor: " #93351C ",
            color: "#FFFFFF",
            height: "65px",
            width: "20%",
          }}
        >
          Grad
        </Button>
        <TextField
          variant="outlined"
          type="text"
          placeholder="University/College"
       
          
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "25px", marginRight: "15px" }}
              ></InputAdornment>
            ),
          }}
          sx={{
            fontWeight: "600",
            fontSize: "1.25rem",
            color: "#210366",
            width: "100%",
            height: "65px",
            borderColor: "#7b90ff",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            borderRadius: "12px",
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-root": { height: "100%" },
            "& .MuiInputBase-input": {
              color: "#4C516D",
              fontSize: 20,
              fontWeight: "SemiBold",
              textAlign: "left",
              border:"none"
            },
          }}
        >
         
        </TextField>
      </Box>
      <Box display="flex" flexDirection="row" width="50%">
        <TextField
          variant="outlined"
          type="text"
          placeholder="0.0%"
          defaultValue="0.0%"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "25px", marginRight: "15px" }}
              ></InputAdornment>
            ),
          }}
          sx={{
            fontWeight: "600",
            fontSize: "1.25rem",
            color: "#210366",
            width: "100%",
            height: "65px",
            borderColor: "#7b90ff",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            borderRadius: "12px",
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-root": { height: "100%" },
            "& .MuiInputBase-input": {
              color: "#4C516D",
              fontSize: 20,
              fontWeight: "SemiBold",
              textAlign: "left",
              border:"none"
            },
          }}
        ></TextField>

        
      </Box>
    </Box>
  );
}
