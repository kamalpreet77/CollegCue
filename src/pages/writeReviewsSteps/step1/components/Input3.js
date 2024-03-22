import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

export default function InputFive() {
  const [universityName, setUniversityName] = useState("");


  const handleChangeUniversity = (event) => {
    setUniversityName(event.target.value);
  };


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
      <TextField
        variant="outlined"
        type="text"
        label={
          <Typography variant="h6" sx={{ wordWrap:"wrap", color: "#C4510A" }}>
            Year of Admission
          </Typography>
        }
        placeholder="2023"
        required
        select
        value={universityName}
        onChange={handleChangeUniversity}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <CalendarMonthOutlinedIcon width="30px" height="30px" sx={{ color: "#210366" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          fontWeight: "600",
          fontSize: "1.25rem",
          color: universityName ? "orange" : "#210366",
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
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottom: "none" },
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
        <MenuItem value="2021">2021</MenuItem>
        <MenuItem value="2022">2022</MenuItem>
        <MenuItem value="2023">2023</MenuItem>
      </TextField>
      <TextField
        variant="outlined"
        type="text"
        label={
          <Typography variant="h6" sx={{ color: "#C4510A" }}>
            Course fees
          </Typography>
        }
        
        required
        placeholder="yr"
     
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ marginLeft: "25px", marginRight: "15px" }}
            >
            
            </InputAdornment>
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
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottom: "none" },
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
  );
}
