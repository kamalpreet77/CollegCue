import { Box, Typography } from "@mui/material";
import React from "react";

const BoldHeading = ({ children, textAlign ,color}) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{

          fontSize: "2.5rem",
          lineHeight: "3rem",
          letterSpacing: "0em",
          color: color,
          fontWeight: "bold",
          marginBottom: "1rem",
          textAlign: textAlign,
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default BoldHeading;
