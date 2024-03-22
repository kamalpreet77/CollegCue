import React from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";

const data = [
  { label: "12th" },
  { label: "10th" }
];

export default function LevelOne() {
  return (
    <Box>
      {data.map((item) => (
        <Box
          key={item.label}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            gap: "4rem",
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
            ...(item.label === "10th" && { marginTop: "2rem" }) 
          }}
        >
          <Box width="60%" display="flex" flexDirection="row" gap="1.5rem">
            <Button
              sx={{
                bgcolor: " #93351C ",
                color: "#FFFFFF",
                height: "65px",
                width: "20%",
              }}
            >
              {item.label}
            </Button>
            <TextField
              variant="outlined"
              type="text"
              defaultValue="CBSE"
              placeholder="percentage"
              required
              select
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginLeft: "25px", marginRight: "15px" }}
                  ></InputAdornment>
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
                  color: "#210366",
                  fontSize: 20,
                  fontWeight: "SemiBold",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <MenuItem value="Abc">abc</MenuItem>
              <MenuItem value="def">def</MenuItem>
              <MenuItem value="ghi">ghi</MenuItem>
            </TextField>
          </Box>
          <Box display="flex" flexDirection="row" width="50%">
            <TextField
              variant="outlined"
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginLeft: "25px", marginRight: "15px" }}
                  ></InputAdornment>
                ),
              }}
              sx={{
                fontWeight: "600",
                fontSize: "1.25rem",
                color: "#210366",
                width: "70%",
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
            ></TextField>

            <TextField
              variant="outlined"
              type="text"
              label={
                <Typography variant="h6" sx={{ color: "#210366" }}>
                  Percentage
                </Typography>
              }
              select
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginLeft: "25px", marginRight: "15px" }}
                  ></InputAdornment>
                ),
              }}
              sx={{
                fontWeight: "600",
                fontSize: "1.25rem",
                color: "#210366",
                width: "30%",
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
            >
              <MenuItem value="Abc">abc</MenuItem>
              <MenuItem value="def">def</MenuItem>
              <MenuItem value="ghi">ghi</MenuItem>
            </TextField>
          </Box>
        </Box>
      ))}
    </Box>
  );
            }
