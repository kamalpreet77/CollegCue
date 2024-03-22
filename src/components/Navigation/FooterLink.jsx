import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const FooterLink = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                justifyContent: 'space-evenly',
                alightItems: "center",
                fontWeight: "bold",
                color: "white",
                width: "600px",
                '@media (max-width :770px)': {
                    flexDirection: "column",
                    justifyContent: 'flex-start',
                    marginLeft: "2rem",
                    width: "auto",
                    gap: '20px'
                }
            }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase', color: '#fff', fontWeight: 'bold' }}>
                    About
                </Typography>
                <Box sx={{
                    borderBottom: '3px solid #FF0000',
                    width: '20%',
                    margin: '1rem 0',
                }} />
                <Link
                    href="/top-universities"
                    style={{ display: 'block', margin: '12px 0', color: '#fff', textDecoration: 'none' }}
                >
                    <Typography variant="inherit">
                        Top University
                    </Typography>
                </Link>
                <Link
                    href="/exam"
                    style={{ display: 'block', margin: '12px 0', color: '#fff', textDecoration: 'none' }}
                >
                    <Typography variant="inherit" >
                        Top Exam
                    </Typography>
                </Link>
                <Link
                    href="/study-abroad/*"
                    style={{ display: 'block', margin: '12px 0', color: '#fff', textDecoration: 'none' }}
                >
                    <Typography variant="inherit" >
                        Study Abroad
                    </Typography>
                </Link>
                <Link
                    href="/job-portal"
                    style={{ display: 'block', margin: '12px 0', color: '#fff', textDecoration: 'none' }}
                >
                    <Typography variant="inherit" >
                        Job Portal 
                    </Typography>
                </Link>
            </Box>
            {/* second part  */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase', color: '#fff', fontWeight: 'bold' }}>
                    OTHER LINKS
                </Typography>
                <Box sx={{
                    borderBottom: '3px solid #FF0000',
                    width: '20%',
                    margin: '1rem 0',

                }} />
                <Link
                    href="/coming-soon"
                    style={{ display: 'block', margin: '12px 0', color: '#fff', textDecoration: 'none' }}
                >
                    About collegeCue
                </Link>
                <Link
                    href="/coming-soon"
                    style={{ display: 'block', margin: '12px 0', color: '#fff', textDecoration: 'none' }}
                >
                    Advertising
                </Link>
                <Link
                    href="/coming-soon"
                    style={{ display: 'block', margin: '12px 0', color: '#fff', textDecoration: 'none' }}
                >
                    Career
                </Link>
                <Link
                    href="/coming-soon"
                    style={{ display: 'block', margin: '12px 0', color: '#fff', textDecoration: 'none' }}
                >
                    Contact Us
                </Link>
                <Link
                    href="/coming-soon"
                    style={{ display: 'block', margin: '12px 0', color: '#fff', textDecoration: 'none' }}
                >
                    Terms & Conditions
                </Link>
            </Box>
        </Box >
    )
}

export default FooterLink