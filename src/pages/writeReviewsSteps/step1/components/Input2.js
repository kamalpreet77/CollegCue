import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Button,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function InputThree() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "3rem",
        alignItems:"center",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        width="100%"
        sx={{ marginTop:"0rem",display: "flex", flexDirection: "row", alignItems: "flex-end" , gap:"0.5rem"}}
      >
        <TextField
          required
          id="outlined-required"
          type="number"
          defaultValue="+91"
          select
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
          <MenuItem value="+1">+91</MenuItem>
          <MenuItem value="+91">+123</MenuItem>
          <MenuItem value="+44">+44</MenuItem>
        </TextField>
        <TextField
          variant="outlined"
          type="tel"
          label={
            <Typography variant="h6" sx={{ color: "#C4510A" }}>
              Mobile Number
            </Typography>
          }
          required
          defaultValue="99999-99999"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "25px", marginRight: "15px" }}
              >
                <CallOutlinedIcon
                  width="30px"
                  height="30px"
                  sx={{ color: "#210366" }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            fontWeight: "600",
            fontSize: "1.25rem",
            marginTop: "1rem",
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
        ></TextField>
      </Box>
      <Box display="flex" flexDirection="column" width="100%" sx={{ marginTop: "1rem",}}>
      <TextField
        variant="outlined"
        type="text"
        label={
          <Typography variant="h6" sx={{ wordWrap:"wrap", color: "#C4510A" }}>
            Gender
          </Typography>
        }
        placeholder="Gender"
        required
        select
        
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ marginLeft: "25px", marginRight: "15px" }}
            >
              <PersonOutlineOutlinedIcon width="30px" height="30px" sx={{ color: "#210366" }} />
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
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Prefer Not to say">Prefer Not to say</MenuItem>
      </TextField>
      </Box>
      <Box width="100%" display="flex" flexDirection="row" sx={{paddingTop: "1rem",}}>
      <TextField
        required
        id="outlined-required"
        
        
        label={
          <Typography variant="h6" sx={{ wordWrap:"wrap", color: "#C4510A" }}>
            Refferal Code
          </Typography>
        }
        placeholder="Enter Refferal Code"
      
       
       
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ marginLeft: "25px", marginRight: "15px" }}
            >
              <GroupsOutlinedIcon width="30px" height="30px" sx={{ color: "#210366" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          fontWeight: "600",
          fontSize: "1.25rem",
          color:  "#210366",
          width: "80%",
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
      <Button sx={{ bgcolor:"#5F9EA0", color:"#FFFFFF", height:"65px", width:"20%",
      "&:hover": {
       bgcolor:"#B9D9EB",
       color:"#1F305E"
      },
    }}>Apply Now</Button>
      </Box>
      <Box display="flex" flexDirection="column" width="100%" sx={{paddingTop: "1rem",}}>
      <TextField
        variant="outlined"
        type="text"
        label={
          <Typography variant="h6" sx={{ color: "#C4510A" }}>
            Linkedin 
          </Typography>
        }
        
        required
        defaultValue="Linkedin-id"
     
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ marginLeft: "25px", marginRight: "15px" }}
            >
              <LinkedInIcon width="30px" height="30px" sx={{ color: "#210366" }} />
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
      <Typography  color="primary" sx={{
        marginLeft:"1rem",
        flexWrap:"wrap",
        fontSize:"12px",
      }}>
        Visit dashboard to change LinkedIn id
      </Typography>
      </Box>
    </Box>
  );
}