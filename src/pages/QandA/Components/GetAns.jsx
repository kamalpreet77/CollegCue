import { Typography,Box } from "@mui/material";
import React from "react";

const GetAns = () => {
  return (
    <Box  sx={{
      width:"100%",
    }}>
      <Typography
        sx={{
          color: "#210366",
          fontSize:"27px",
          fontWeight: "700",
           wordWrap: "break-word",
           marginTop:"2rem ",
        }}
      >
        Get Answers on Test Preperation, Admissions & Campus Life
      </Typography>
    </Box>
  );
};

export default GetAns;
