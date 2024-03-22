import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function MainHead({ onAddMoreClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        marginTop: "0.5rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <Button  onClick={onAddMoreClick} endIcon={<AddCircleRoundedIcon />} style={{ width:"fit-content",color: "#002244", backgroundColor: "#8DA399" , border:"1px solid lightgrey", borderRadius:"12px" }}>
        <Typography sx={{ fontSize: "15px", fontWeight: "300", color: "#002244" }}>Add More</Typography>
      </Button>
    </Box>
  );
}
