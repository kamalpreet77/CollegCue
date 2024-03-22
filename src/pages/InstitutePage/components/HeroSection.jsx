import React from "react";
import { Box, Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import Img1 from "../images/campus-students.png";
import Logo1 from '../images/logo1.png';
import Review from '../images/review.png';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PushPinIcon from '@mui/icons-material/PushPin';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import TripOriginRoundedIcon from '@mui/icons-material/TripOriginRounded';

const HeroSection = ({ collegeInfo }) => {
  const {
    logo,
    name,
    location,
    approved,
    established,
    isAutonomous,
    questionsAnswered,
    ranking,
    additionalInfo,
    rating,
    reviewsImg
  } = collegeInfo;

  return (
    <Container maxWidth="lg">
      {/* Main Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginY: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Hero Box */}
        <Box
          sx={{
            borderRadius: "3rem",
            width: '100%',
            height: "550px",
            backgroundImage: `url(${Img1})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            '@media (min-width:800px)': {
              padding: '0',
            },
            position: 'relative'
          }}
        >
          {/* Overlay Box */}
          <Box
            sx={{
              backgroundColor: '#000',
              width: '100%',
              height: 'auto',
              borderRadius: '0 0 3rem 3rem',
              opacity: '0.9',
              padding: '2%',
              maxWidth: '1267px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: "absolute",
              bottom: "0",
            }}
          >
            {/* Logo and College Info */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ textAlign: 'center', justifyContent: "center", alignItems: "center" }}
            >
              <Box sx={{
                '@media (max-width:800px)': {
                  justifyContent: 'center',
                  alignContent: 'center',
                }
              }}>
                <img src={logo} alt="logo" style={{ width: '121px', height: '121px', }} />
              </Box>
              <Stack>
                <Typography
                  sx={{
                    fontStyle: 'bold',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '20.8px',
                    color: '#ffffff',
                  }}
                >{name}</Typography>
                <Typography
                  sx={{
                    fontWeight: '500',
                    color: '#ffffff',
                    fontSize: '14px'
                  }}
                >{location} | {approved} Approved</Typography>
                {/* College Details */}
                <Stack direction="row" spacing={1} sx={{ color: '#ffffff', marginTop: '0.5rem' }}>
                  <Typography sx={{ display: 'flex' }}><PushPinIcon style={{ width: '15px', height: '12px', marginTop: '0.1rem' }} /><Typography sx={{ fontSize: '10px', fontFamily: 'Poppins' }}>Estd {established}</Typography></Typography>
                  <Typography sx={{ display: 'flex' }}><StarRoundedIcon style={{ width: '15px', height: '12px', marginTop: '0.1rem' }} /><Typography sx={{ fontSize: '10px', fontFamily: 'Poppins' }}>{isAutonomous ? 'Autonomous University' : 'Non-Autonomous University'}</Typography></Typography>
                  <Typography sx={{ display: 'flex' }}><HelpOutlineIcon style={{ width: '15px', height: '12px', marginTop: '0.1rem' }} /><Typography sx={{ fontSize: '10px', fontFamily: 'Poppins' }}>{questionsAnswered} Questions Answered</Typography></Typography>
                  <Typography sx={{ display: 'flex' }}><ViewQuiltIcon style={{ width: '15px', height: '12px', marginTop: '0.1rem' }} /><Typography sx={{ fontSize: '10px', fontFamily: 'Poppins' }}>Ranked {ranking} For MBA By NIRF 2022</Typography></Typography>
                  <Typography sx={{ fontSize: '10px', fontFamily: 'Poppins' }}>+{additionalInfo} More</Typography>
                </Stack>
              </Stack>
            </Stack>
            {/* Ratings and Action Buttons */}
            <Stack
              direction="row"
              spacing={3}
              sx={{
                alignItems: 'center', flexWrap: 'wrap', width: '100%',
                '@media (min-width:800px)': {
                  marginTop: '-5vh',
                  marginLeft: '50vw',
                },
                '@media (max-width:800px)': {
                  justifyContent: 'center',
                }
              }}
            >
              <Typography sx={{
                fontStyle: 'bold', fontWeight: '600', color: '#ffffff', fontSize: '30px',
                '@media (max-width:800px)': {
                  paddingLeft: '11vw',
                }
              }}>{rating}</Typography>
              <img src={reviewsImg} alt="Reviews" style={{ width: '50px', height: '30px', marginTop: '0.3rem' }} />
              <IconButton aria-label="like" sx={{ color: '#ffffff' }}><FavoriteRoundedIcon /></IconButton>
              <Button sx={{ color: '#ffffff', textTransform: 'capitalize' }}>Will You Get In</Button>
              <Button sx={{ color: '#ffffff' }}>Get Contact Details</Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container >
  );
};

export default HeroSection;
