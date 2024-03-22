import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import MyButton from '../../components/Buttons/MyButton';

const TopCourses = () => {
  const heading = 'Courses';
  const buttons = [
    {
      label: 'BE/B.Tech',
      link: '/coming-soon',
    },
    {
      label: 'BA',
      link: '/coming-soon',
    },
    {
      label: 'B.Sc',
      link: '/coming-soon',
    },
    {
      label: 'MBA/PGDM',
      link: '/coming-soon',
    },
    {
      label: 'M.Sc',
      link: '/coming-soon',
    },
    {
      label: 'ME/M.Tech',
      link: '/coming-soon',
    },
    {
      label: 'M.A.',
      link: '/coming-soon',
    },
    {
      label: 'Doctrate',
      link: '/coming-soon',
    },
    {
      label: 'BDS',
      link: '/coming-soon',
    },
    {
      label: 'Polytechnic',
      link: '/coming-soon',
    },
    {
      label: 'MD',
      link: '/coming-soon',
    },
    {
      label: 'M.Phil/Ph.D in Science',
      link: '/coming-soon',
    },
    {
      label: 'B.Com',
      link: '/coming-soon',
    },
    {
      label: 'BBA/BBM',
      link: '/coming-soon',
    },
    {
      label: 'BBA',
      link: '/coming-soon',
    },
    {
      label: 'Diploma in Engineering',
      link: '/coming-soon',
    },
    {
      label: 'M.Phil/Ph.D Arts',
      link: '/coming-soon',
    },
    {
      label: 'M.Com',
      link: '/coming-soon',
    },
    {
      label: 'B.Ed',
      link: '/coming-soon',
    },
    {
      label: 'M.Phil/PH.D in Engineering',
      link: '/coming-soon',
    },

  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Typography
            sx={{
              color: "#210366",
              fontWeight: 700,
              fontSize: "1.3rem"
            }}>
            {heading}
          </Typography>
          <Box
            sx={{
              height: "400px",
              margin: '0.9rem 0',
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#7B90FF",
                borderRadius: "6px",
              },
            }}>
            {buttons.map((button, index) => (
              <MyButton key={index} label={button.label} link={button.link} />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TopCourses;
