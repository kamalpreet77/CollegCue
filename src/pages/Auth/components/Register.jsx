import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Box, Grid, Typography, Button, Input, InputLabel, TextField, OutlinedInput, Link, Select, MenuItem, InputAdornment, FormControl } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SubtitlesIcon from '@mui/icons-material/Subtitles';

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showPassword, SetshowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    navigate("/next");
  };

  return (
    <Card
      sx={{
        maxWidth: "430px",
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "none",
        border: "none",
        padding: "1rem",
        "& *": {
          fontSize: "0.75rem",
          color: "#210366",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "1rem",
          padding: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", fontSize: "1.4rem !important" }}
          >
            Register Now To Apply
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>
            Get details and latest updates
          </Typography>
        </Box>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "90%",
            color: "#210366",
            display: "flex",
            flexDirection: "column",
            gap: "0.7rem",
          }}
        >
          {/*<Input
            id="firstName"
            type="text"
            required
            disableUnderline
            sx={{
              border: "1px solid gray",
              borderRadius: "0.625rem", // 10px in rem
              padding: "0.3125rem 1.1875rem", // 5px 19px in rem
            }}
          >
          </Input>*/}
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField 
              variant="outlined" 
              type="text"
              label="Full Name"
              placeholder="Name"
              required
              InputProps={{
                startAdornment: (
                  <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                )
              }}
              sx={{width: "100%"}}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'flex-end' }}>
            {/*<Select
              id="countryCode"
              value={selectedOption}
              required
              onChange={handleChange}
              sx={{
                border: "1px solid gray",
                borderRadius: "0.625rem", 
                padding: "0.3125rem 1.1875rem", 
                "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                  {
                    width: "1.875rem", 
                    padding: "0px 0.625rem !important",
                  },
              }}
            >
              <MenuItem value="+1">+1</MenuItem>
              <MenuItem value="+91">+91</MenuItem>
            </Select>*/}
            <TextField
              variant="outlined"
              type="number"
              select
              required
              sx={{width: "120px"}}
            >
              <MenuItem value="+1">+91</MenuItem>
              <MenuItem value="+91">+123</MenuItem>
              <MenuItem value="+44">+44</MenuItem>
            </TextField>
            <TextField 
              variant="outlined" 
              type="tel"
              label="Mobile Number"
              placeholder="999-999-9999"
              required
              InputProps={{
                startAdornment: (
                  <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                )
              }}
              sx={{width: "100%"}}
            />
          </Box>
            

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField 
              variant="outlined" 
              type="email"
              label="Email"
              placeholder="Email"
              required
              InputProps={{
                startAdornment: (
                  <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                )
              }}
              sx={{width: "100%"}}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField 
              variant="outlined" 
              type="text"
              label="City You Live In"
              placeholder="City"
              required
              InputProps={{
                startAdornment: (
                  <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                )
              }}
              sx={{width: "100%"}}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField 
              variant="outlined" 
              type="text"
              label="Course Interested In"
              placeholder="Course"
              required
              InputProps={{
                startAdornment: (
                  <SubtitlesIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                )
              }}
              sx={{width: "100%"}}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "0.7rem",
            }}
          >
            <Typography variant="p">
              By submitting this form, you accept and agree to
            </Typography>
            <Link
              sx={{
                color: "#210366",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Our Terms of Service and Privacy Policy.
            </Link>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link
              href="/alredy_register"
              sx={{
                fontSize: "0.7rem",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "600",
                color: "#210366",
              }}
            >
              Already registered
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{
                maxWidth: "9.375rem",
                backgroundColor: "#FF7900",
                borderRadius: "0.625rem !important",
                padding: "0.5rem 1.5rem",
                color: "#fff",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#2f1370",
                  backgroundColor: "#fff",
                  transition: "color 0.3s ease",
                },
              }}
            >
              Next
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
