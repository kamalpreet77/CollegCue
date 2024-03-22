import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import background from "../Assets/Background.jpg";

const HeroSection = () => {
  const [selectedJob, setSelectedJob] = useState("Developer");
  const [selectedLocation, setSelectedLocation] = useState("Mumbai");
  const [selectedKey, setSelectedKey] = useState("");

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleKeyChange = (event) => {
    setSelectedKey(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "auto",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          padding: "20px",
          "@media (min-width:500px)": {
            height: "130vh",
          },
        }}
      >
        <Box
          sx={{
            "@media (min-width:500px)": {
              marginTop: "-50vh",
              marginBottom: "3vh",
            },
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "50px",
              fontWeight: "380",
              lineHeight: "15px",
              textAlign: "center",
              marginTop: "50px",
              "@media (max-width:800px)": {
                lineHeight: "100px",
              },
              "@media (min-width:800px)": {
                marginBottom: "8vh",
                fontSize: "85px",
              },
            }}
          >
            Find your job without any hassle.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: "25px",
              fontWeight: "300",
            }}
          >
            Jobs & Job search. Find jobs in global. Executive jobs & work.
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          backgroundColor :'white',
          borderRadius: '10px', 
          //border: '1px solid #ccc', 
          paddingTop: '25px',
          marginTop: '100px',
          boxSizing: 'border-box', 
          '& > *': {
            marginBottom: '10px',
            marginTop:"10px",
          },
          '@media (min-width:800px)': {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '65%',
          }
        }}>
          <FormControl sx={{ width: '50%', marginBottom: '10px', 
            '@media (min-width:800px)': {
              width: '10vw',
              //marginTop: '3vh',
              
            }
          }}>
            <InputLabel id="job-label" sx={{marginLeft:"18px"}} >Job Categories</InputLabel>
            <Select
              labelId="job-label"
              id="job-select"
              value={selectedJob}
              onChange={handleJobChange}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }} 
            >
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Coder">Coder</MenuItem>
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="Artist">Artist</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: '50%', marginBottom: '10px', 
            '@media (min-width:800px)': {
              width: '10vw',
              //marginTop: '3vh',
              
            }
          }}>
            <InputLabel id="category-label" sx={{marginLeft:"25px"}}>Location</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={selectedLocation}
              onChange={handleLocationChange}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
            >
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Bengaluru">Bengaluru</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Noida">Noida</MenuItem>
            </Select>
          </FormControl>
            
          <Button variant="contained" sx={{
            width: '50%',
            marginRight:"30px",
            bgcolor:"green",
            '@media (min-width:800px)': {
              width: '15vw',
            },
            '&:hover': {
              background: "#0047AB",
            },
            marginBottom:"20px"
          }}>Search</Button>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
