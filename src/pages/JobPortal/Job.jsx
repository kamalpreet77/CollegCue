import React, { useState } from 'react';
import { Typography, Box, Container, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import LeftCard from './components/LeftCard';
import RightCard from './components/RightCard';
import FooterButtons from './components/FooterButtons';

function Job() {
  const [selectedJob, setSelectedJob] = useState('job1'); 
  const [selectedCategory, setSelectedCategory] = useState('category1'); 

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <container sx={{
      overflowX : 'hidden',
    }}>
      <Box sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor : '#BACBEE',
        '@media (min-width:800px)': {
          height: '90vh',
        }
      }}>
        <Typography variant="h2" gutterBottom sx={{
          fontSize : '50px',
          fontWeight : '700',
        }}>
          Job Listing
        </Typography>
        <Typography variant="h5" gutterBottom sx={{
          fontSize : '30px',
          fontWeight : '600',
        }}>
          We delivered blazing fast & striking work solution
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          borderRadius: '10px', 
          border: '1px solid #ccc',
          padding: '10px',
          marginTop : '4vh',
          boxSizing: 'border-box',
          '& > *': {
            marginBottom: '10px',
          },
          '@media (min-width:800px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '65vw',
          }
        }}>
          <FormControl sx={{ width: '100%', marginBottom: '10px',
            '@media (min-width:800px)': {
              width: '18vw',
              marginTop : '3vh',
            }
          }}>
              <InputLabel id="job-label">What are you looking for?</InputLabel>
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
              <MenuItem value="job1">Mumbai, India</MenuItem>
              <MenuItem value="job2">Bengaluru, India</MenuItem>
              <MenuItem value="job3">Hyderabad, India</MenuItem>
              <MenuItem value="job4">Chennai, India</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '100%', marginBottom: '10px',
            '@media (min-width:800px)': {
              width: '18vw',
              marginTop : '3vh',
            }
          }}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
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
              <MenuItem value="category1">Software Developer</MenuItem>
              <MenuItem value="category2">Web Developer</MenuItem>
              <MenuItem value="category3">Project Manager</MenuItem>
              <MenuItem value="category4">Data Scientist</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" sx={{ width: '100%',
            '@media (min-width:800px)': {
              width: '18vw',
            },
            '&:hover': {
              background: "#0047AB",
          },
          }}>Search</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "1vw",justifyContent : 'space-between',alignItems : 'flex-start',padding : '2%',
        '@media (max-width:800px)': {
          display : 'flex',
          flexDirection : 'column',
          justifyContent : 'center',
          alignItems : 'center',
        },
       }}>
          <Box sx={{
            width : '25%',
            '@media (max-width:800px)': {
              width : '90%',
            },
          }}>
            <LeftCard />
          </Box>
          <Box sx={{
            width : '70%',
            '@media (max-width:800px)': {
              width : '90%',
            },
          }}>
            <RightCard />
          </Box>
      </Box>
      <FooterButtons/>
    </container>
  );
}

export default Job;
