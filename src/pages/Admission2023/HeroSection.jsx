import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import img1 from "./Images/1.png";
import img2 from "./Images/2.png";
import img3 from "./Images/3.png";
import WhiteFilledBtn from "../../components/Buttons/WhiteFilledBtn";
import Bpencil from "../../Assets/HeroImages/banner-pencil.png";
import Bplane from "../../Assets/HeroImages/banner-plane.png";
import Bbulbe from "../../Assets/HeroImages/banner-bulbe.png";
import Bbook from "../../Assets/HeroImages/banner-book.png";
import Bpoint from "../../Assets/HeroImages/banner-point.png";

const HeroSection = () => {
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
        }}
      >
        <Box
          sx={{
            display: " flex",
            flexDirection: "column",
            justifyContent: "center",
            height: '90%',
            alignItems: "center",
            '@media (max-width : 770px)': {
              justifyContent: "center",
              height: "70%"
            }
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              textAlign: "center",
              color: "white",
              mb: "0.5rem",
              '@media (max-width : 770px)': {
                width: "80%",
                ml: "0vw",
                textAlign: "center",
                fontSize: "2rem",
              }
            }}
          >
            Get Admission in Best Colleges
            <br />
            Step to your Career
          </Typography>

          {/* <Box
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
                  color: "white",
                  backgroundColor: "#7B90FF"
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
          </Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "1rem",
              flexWrap: "wrap",
            }}
          >
            <WhiteFilledBtn label="Choose Colleges" link="" />
            <WhiteFilledBtn label="Search Courses" link="" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "1rem",
            }}
          >
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              sx={{
                marginBottom: "0.5rem",
              }}
            ></Stack>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              sx={{
                marginBottom: "0.5rem",
              }}
            ></Stack>
          </Box>
          <Button
            href="/coming-soon"
            sx={{
              backgroundColor: "#7B90FF",
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "1rem",
              padding: "0.5rem",
              paddingX: "1rem",
              borderRadius: "0.5rem",
              "&:hover": {
                color: "white",
                backgroundColor: "#7B90FF"
              },
            }}
          >
            Need Help? Get 1 on 1 Counselling
          </Button>
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
              top: "44%",
              left: "19%",
              zIndex: "-1",
              animation: 'jump 3s ease-in-out infinite',
            }}
          />
        </Box>
      </Box >
    </>
  );
};

export default HeroSection;
