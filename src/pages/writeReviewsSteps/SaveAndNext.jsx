import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";
function SaveAndNext({href1, href2}) {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      gap="1.5rem"
      marginTop="3rem"
      marginBottom="2rem"
      sx={{ justifyContent: "space-between" }}
    >
      <Button
        variant="contained"
        href={href1}
        sx={{
          width: "250px",
          height: "45px",
          borderRadius: "12px",
          bgcolor: "#e24c00",
          color: "white",
          "&:hover": {
            bgcolor: "#B0C4DE",
            color: "#4C516D",
          },
        }}
      >
        prev
      </Button>
      <Button
        variant="contained"
        href={href2}
        sx={{
          width: "250px",
          height: "45px",
          borderRadius: "12px",
          bgcolor: "#005f69",
          color: "white",
          "&:hover": {
            bgcolor: "#B0C4DE",
            color: "#4C516D",
          },
        }}
      >
        Save And Next
      </Button>
    </Box>
  );
}
export default SaveAndNext;
