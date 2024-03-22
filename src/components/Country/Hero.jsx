import React from "react";
import { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Bpencil from "../../Assets/HeroImages/banner-pencil.png";
import Bplane from "../../Assets/HeroImages/banner-plane.png";
import Bbulbe from "../../Assets/HeroImages/banner-bulbe.png";
import Bbook from "../../Assets/HeroImages/banner-book.png";
import Bpoint from "../../Assets/HeroImages/banner-point.png";

const Hero = ({ country }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission
    console.log(`Search term: ${searchTerm}`);
  };


  return (
    <>
      <Box
        sx={{
          bgcolor: "#160048",
          height: "100vh",
          position: "relative",
          zIndex: "2",
          width: "100%"
        }}>
        <Box
          sx={{
            display: " flex",
            flexDirection: "column",
            justifyContent: "center",
            height: '90%',
            alignItems: "center",
            '@media (max-width : 770px)': {
              justifyContent: "center",
              alignItems: "space-evenly",
              height: "70%",
            }
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "700",
              textAlign: "center",
              color: "white",
              '@media (max-width : 770px)': {
                fontSize: "1.2rem",
              }
            }}
          >
            Find Universities and Programs in {country}<br />Step to Your Career
          </Typography>
          <Box
            sx={{
              width: "70%",
              maxWidth: "35rem",
              display: "flex",
              alignItems: "center",
              marginTop: "1rem",
              backgroundColor: 'white',
              borderRadius: "16px",
              padding: "5px 10px",
              position: "relative",
            }}
          >
            <input
              style={{
                flex: "1",
                height: "60px",
                border: "none",
                borderRadius: "16px",
                outline: "none",
                paddingLeft: "7px"
              }}
              type="text"
              placeholder="Search for colleges, exams, courses and more..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <IconButton
              href="/coming-soon"
              sx={{
                height: "60px",
                width: "60px",
                backgroundColor: "#7B90FF",
                color: "white",
                borderRadius: "16px",
                marginLeft: "0.5rem",
                "&:hover": {
                  color: "black",
                },
                '@media (max-width :770px)': {
                  height: "40px",
                  width: "40px",
                  marginLeft: "0rem",
                }
              }}
              onClick={handleSubmit}
            >
              <ArrowRightAltRoundedIcon
                sx={{
                  fontSize: "2rem"
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              backgroundColor: "#7B90FF",
              color: "white",
              fontWeight: "700",
              fontSize: "1rem",
              padding: "0.5rem",
              paddingX: "1rem",
              borderRadius: "0.5rem",
              marginTop: '2rem'
            }}
          >
            Need Help? Get 1 on 1 Counselling
          </Box>
        </Box>
        <Box
          sx={{
            '@media (max-width :770px)': {
              display: 'none',
            }
          }}>
          <img src={Bpencil} alt="pencil"
            style={{
              position: "absolute",
              top: "9%",
              left: "13%",
              zIndex: "-1",
              animation: 'jump 3s ease-in-out infinite',
            }} />
          <img src={Bbook} alt="book"
            style={{
              position: "absolute",
              top: "12%",
              right: "13%",
              zIndex: "-1",
              animation: 'jump 3s ease-in-out infinite',
            }} />
          <img src={Bbulbe} alt="bulb"
            style={{
              position: "absolute",
              bottom: "20%",
              left: "18%",
              zIndex: "-1",
              animation: 'jump 3s ease-in-out infinite',
            }} />
          <img src={Bplane} alt="plane "
            style={{
              position: "absolute",
              bottom: "13%",
              right: "16%",
              zIndex: "-1",
              animation: 'jump 3s ease-in-out infinite',
            }} />
          <img src={Bpoint} alt="paper"
            style={{
              position: "absolute",
              top: "42%",
              left: "17%",
              zIndex: "-1",
              animation: 'jump 3s ease-in-out infinite',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hero;