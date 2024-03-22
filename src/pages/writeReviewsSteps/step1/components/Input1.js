import React, { useState, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const fields = [
  {
    label: "University/College Name",
    state: "universityName",
    icon: <AccountBalanceIcon width="15px" height="15px" sx={{ color: "#893f45" }} />,
   
    options: ["Abc", "def", "ghi"]
  },
  {
    label: "Select Course",
    state: "courseName",
    icon: <SchoolOutlinedIcon width="15px" height="15px" sx={{ color: "#893f45" }} />,
   
    options: ["Abc", "def", "ghi"]
  },
  {
    label: "Name",
    state: "name",
    icon: <PersonOutlineOutlinedIcon width="15px" height="15px" sx={{ color: "#893f45" }} />,
    
    defaultValue: "Your Name"
  },
  {
    label: "Email",
    state: "email",
    icon: <EmailOutlinedIcon width="15px" height="15px" sx={{ color: "#893f45" }} />,
   
    defaultValue: "Your Email"
  }
];

export default function InputOne({ universityOnly }) {
  const [formData, setFormData] = useState({
    universityName: "",
    courseName: "",
    name: "Your Name",
    email: "Your Email"
  });

  useEffect(() => {
    if (universityOnly) {
      setFormData({ universityName: "", courseName: "", name: "Your Name", email: "Your Email" });
    }
  }, [universityOnly]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "3rem",
        marginTop: "2rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      {fields.map((field, index) => (
        <Box key={index} width="100%">
          {(!universityOnly || (field.state === 'universityName' || field.state === 'courseName')) && (
            <TextField
              variant="outlined"
              type="text"
              label={
                <Typography variant="h6" sx={{ wordWrap:"wrap", color: "#C4510A" }}>
                  {field.label}
                </Typography>
              }
              placeholder={field.placeholder}
              required
              select={!!field.options}
              value={formData[field.state]}
              // defaultValue="99999-99999"
              onChange={(event) => handleChange(field.state, event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    {field.icon}
                  </InputAdornment>
                ),
              }}
              sx={{
                fontWeight: "200",
                fontSize: "1rem",
                color: formData[field.state] ? "orange" : "#C4510A",
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
              {field.options && field.options.map((option, index) => (
                <MenuItem key={index} value={option}>{option}</MenuItem>
              ))}
            </TextField>
          )}
          {(!universityOnly || (field.state === 'universityName' || field.state === 'courseName')) && field.state === 'email' && (
            <Typography  color="primary" sx={{
              marginLeft:"1rem",
              flexWrap:"wrap",
              fontSize:"12px",
            }}>
              Visit dashboard to change email 
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
          }