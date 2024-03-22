import { Height } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const CollegeRankingCard = (props) => {
    return (
        <>
            <Link to="/coming-soon" style={{ textDecoration: 'none' }}>
            <Box sx={{
                width: '160px',
                height: '160px',
                backgroundColor: 'white',
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                // margin: '1rem',
                alignItems: 'center'
            }} >
                <img src={props.img} width="100px" height="100px" />

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '0.8rem',
                    fontWeight: '900',
                    lineHeight: '0.5rem',
                    letterSpacing: '0.02rem',
                    textAlign: 'left',
                    padding: '0.8rem 0 0 0.5rem',
                }} >{props.city}</Typography>
            </Box>
            </Link>
        </>
    )
}

export default CollegeRankingCard
