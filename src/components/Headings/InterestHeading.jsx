import React from 'react';
import HeadText from './HeadText';
import { Box, Typography } from '@mui/material';
import border from './border.png';

const InterestHeading = () => {
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '2rem',
        }}>
            <HeadText headText="Choose courses by interest" justify="center"/>
            <Box sx={{
                width: '150px',
                height: 'auto',
               
                 marginLeft:"8rem",
            }}>
                <img src={border} alt="Border" style={{ width: '100%', height: 'auto' }} />
            </Box>
         
            
        </Box>
    );
};

export default InterestHeading;
