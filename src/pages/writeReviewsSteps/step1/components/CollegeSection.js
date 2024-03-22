import React from "react";
import {
  TextField,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";

export default function Last({ placeholder }) {
  return (
    <Box width="100%" display="flex" flexDirection="row" gap="1.5rem" marginTop="2rem">
      <TextField
        variant="outlined"
        type="text"
        placeholder={placeholder}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start"></InputAdornment>
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
      />
    </Box>
  );
}
