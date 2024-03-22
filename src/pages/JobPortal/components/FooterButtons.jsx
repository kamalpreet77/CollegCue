import React from 'react';
import { Typography, Box, Container, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import OrangeButton from '../../Institutes/Button/OrangeButton';

const footerButtons = () => {
  return (
    <>
      <Box sx={{
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : '5%',
        '@media (max-width:800px)': {
          flexDirection: 'column',
          textAlign : 'center',
        }
      }}>
        <Box sx={{
          display : 'flex',
          flexDirection : 'column',
          maxWidth : '70%',
          '@media (max-width:800px)': {
            maxWidth : '95%',
          }
        }}>
            <Typography variant='h3' sx={{
              fontWeight: "380", fontSize: "40px" ,
            }}>
              Most complete job portal.
            </Typography>
            <Typography variant='p'>
              Signup and start find your job or talents.
            </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px', 
            '@media (max-width:800px)': {
              flexDirection: 'column',
              gap: '16px',
            },
          }}
        >
          <OrangeButton text="Looking for a job" />
          <OrangeButton text="Post a Job" />
        </Box>
      </Box>
    </>
  )
}

export default footerButtons;