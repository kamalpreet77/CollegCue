import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FilterComponent from "../../../components/FilterComponent/FilterComponent";
const AllAnsSet = () => {
  return (
    <Stack
      sx={{
        "@media (max-width:800px)": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#210366",
            fontSize: 25,
            fontWeight: "600",
            wordWrap: "break-word",
            marginTop: "0.5rem",
            paddingBottom:"1rem",
          }}
        >
          Found 17175 Course
        </Typography>
      </Box>
      <FilterComponent/>
    </Stack>
  );
};

export default AllAnsSet;

