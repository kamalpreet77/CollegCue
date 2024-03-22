import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "0.5rem",
        marginTop: "2rem",
        "@media (max-width: 600px)": {
          flexDirection: "row",
        },
      }}
    >
      <div>
        <Checkbox {...label} defaultChecked style={{width:"25px", height:"25px"}}/>
        
      </div>

      <Typography
        sx={{ color: "#210366", fontSize: "15px", fontWeight: "400" }}
      >
        I agree with below mention T&C
      </Typography>
    </Box>
  );
}
