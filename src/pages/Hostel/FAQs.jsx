import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const FAQs = () => {
  return (
    <>
      <Box sx={{
        marginTop: '1rem',
        marginLeft: '1rem',
        width: '630px',
      }}>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontStyle: 'bold',
          fontWeight: '700',
          fontSize: '20px',
          color: '#210366'
        }}>IIM Bangalore Hostel FAQs</Typography>
      </Box>
    </>
  )
}

export default FAQs;
