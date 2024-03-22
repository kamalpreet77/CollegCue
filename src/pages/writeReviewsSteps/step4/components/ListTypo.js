import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function MainHeading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: "4rem",
        marginTop: "0.5rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
     
            <Typography sx={{ color: "#A33709", fontSize: "15px", fontWeight: "400" }}>
              Things You liked and disliked about Your Campus Life, Faculty, Placement, Infrastructure and Course
            </Typography>


    
        
    </Box>
  );
}
