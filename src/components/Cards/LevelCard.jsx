import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import CourseNameBtn from '../Buttons/CourseNameBtn'
import ExploreAllCoursesBtn from '../Buttons/ExploreAllCoursesBtn'

const LevelCard = ({ imagePath, levelHeading, exploreAllCourseLink, btn }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsHovered(false); // Reset hover state when component unmounts
    }, []);

    return (
        <Box
            sx={{
                backgroundColor:"white",
                borderRadius: "28px",
                height: "450px",
                marginRight: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                overflow: "hidden",
                border: isHovered ? "2px solid #EC5800":'1px solid #ddd',
                boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.3)' : '0 1px 1px rgba(0,0,0,0.05)',
                position: "relative",
                marginBottom: "1.25rem",
                flex: "0 0 33.333%",
                maxWidth: "30.333%",
                '@media (max-width: 768px)': {
                    flex: '0 0 calc(100% - 1rem)',
                    maxWidth: 'calc(100% - 1rem)',
                    marginRight: '1rem',
                },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box
                component="img"
                src={imagePath}
                alt="Banner Image"
                sx={{
                    borderBottom:"1px solid lightgrey",
                    width: "100%",
                    borderRadius: '28px',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s',
                }}
            />
            <Typography
                sx={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    lineHeight: "1.6rem",
                    textAlign: "left",
                    color: isHovered ? '#EC5800' : "#4C516D",
                    margin: '1rem',
                }}
            >
                {levelHeading}
            </Typography>
            <Grid
                container
                spacing={2}
                direction="row"  // Display buttons in a row
                justifyContent="center" // Center the buttons horizontally
                alignItems="center" // Center the buttons vertically
                sx={{
                    paddingLeft: "1rem",
                    paddingRight:"1rem",
                    alignItems:"center",
                    flexWrap: 'wrap', // Allow buttons to wrap to the next line on smaller screens
                    width: '100%', // Ensure the Grid takes up the full width of its container
                    maxWidth: '100%', // Ensure the Grid doesn't exceed its container's width
                    marginTop: 'auto', // Push the buttons to the bottom of the card
                }}
            >
                {btn.map((btn, index) => (
                    <Grid item key={index} xs={12}  sm={12} md={12} lg={4} xl={4} > {/* Ensure each item occupies 4 out of 12 columns on extra-small screens */}
                        <CourseNameBtn courseName={btn.courseName} link={btn.link} isHovered={isHovered} />
                    </Grid>
                ))}
            </Grid>
            <ExploreAllCoursesBtn exploreAllCourseLink={exploreAllCourseLink} isHovered={isHovered} />
        </Box>
    )
}

export default LevelCard;
