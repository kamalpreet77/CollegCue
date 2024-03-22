import React, { useState } from "react";
import { TextField, InputAdornment, Box, Typography } from "@mui/material";

export default function InputOne() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "4rem",
        marginTop: "2rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
        
      }}
    >
      <TextField
        variant="outlined"
        type="text"
        placeholder="Write here"
        required
        multiline
        minRows={10}
        maxRows={20}
        value={text}
        onChange={handleChange}
        inputProps={{ minLength: 200 }} 
        sx={{
          fontWeight: "600",
          fontSize: "1.25rem",
          color: "#210366",
          width: "100%",
          height: "225px",
          borderColor: "#7b90ff",
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          // boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15)",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "12px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottom: "none" },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#210366",
            fontSize: 15,
            marginTop:"1rem",
            fontWeight: "SemiBold",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      />
      <Typography sx={{fontSize:"15px", fontWeight:"400", color:"#FFA500"}}>Min Characters: 200</Typography>
    </Box>
  );
}
