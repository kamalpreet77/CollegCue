import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import { Box, Typography, Stack, Container } from "@mui/material";
import "./css/Home.css"
import Cources from "../../Assets/cources-icon.svg";
import Gratuate from "../../Assets/gratuate-icon.svg";
import Bpencil from "./images/banner-pencil.png";
import Bplane from "./images/banner-plane.png";
import Bbook from "./images/banner-book.png";
import Landing from "../../Assets/HeroImages/Hero.svg"

const HeroSection = () => {

  const [isTyping, setIsTyping] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission
    console.log(`Search term: ${searchTerm}`);
  };


  return (
    <Box
      // className="animated-bg"
      sx={{
        height: "100vh",
        position: "relative",
        zIndex: "2",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: '100vh',
            width: "auto",
            '@media (max-width : 770px)': {
              marginY: "2rem",
              flexDirection: "column-reverse",
              justifyContent: "center",
              alignItems: "center",
              height: 'fit-content',
            }
          }}
        >
          <Stack
            sx={{
              display: " flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "400px",
              height: "auto",
              alignItems: "center",
              '@media (max-width : 770px)': {
                justifyContent: "center",
                width: 'auto'
              }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                width: "100%",
                color: "black",
                mb: "0.5rem",
                '@media (max-width : 770px)': {
                  ml: "0vw",
                  textAlign: "center",
                  fontSize: "2rem",
                }
              }}
            >
              Explore 1000+ Colleges throughout India!
              <Typewriter
                onTypingEnd={() => setIsTyping(false)}
                typing={isTyping}
                options={{
                  strings: ['Step To Your Career', 'Step To Your Future'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>

            {/* counter texts */}
            <Box
              sx={{ display: "flex", flexWrap: "wrap", mt: "1.5rem" }} >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0.5rem",
                  width: "fit-content",
                  '@media (max-width :770px)': {
                    fontSize: "12px",
                  }
                }}>
                <img src={Gratuate} alt=""
                  style={{ width: "30px", height: "auto", marginRight: "5px", mixBlendMode: "multiply" }}
                />
                <Typography variant="inherit">
                  Over
                </Typography>
                <Typography variant="inherit" sx={{ margin: "0px 4px 0px 3px" }}>
                  <CountUp end={25} duration={3} suffix='K' />
                </Typography>
                <Typography variant="inherit">
                  Enrolled
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  margin: "0.5rem",
                  width: "fit-content",
                  '@media (max-width :770px)': {
                    fontSize: "12px",
                  }
                }}>
                <img src={Cources} alt=""
                  style={{ width: "30px", height: "auto", marginRight: "5px" }}
                />

                <Typography variant="inherit">
                  Over
                </Typography>
                <Typography variant="inherit" sx={{ margin: "0px 4px 0px 3px" }}>
                  <CountUp end={25} duration={3} suffix='K' />
                </Typography>
                <Typography variant="inherit">
                  Course Professionals
                </Typography>
              </Box>
            </Box>

          </Stack>

          <Box
            sx={{}}>
            <img src={Landing} alt=""
              style={{
                width: "30vw",
              }} />

          </Box>
        </Box>


        {/* animated images */}
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
              animation: 'jump 4s ease-in-out infinite',
            }} />
          <img src={Bbook} alt="book"
            style={{
              position: "absolute",
              top: "12%",
              right: "13%",
              zIndex: "-1",
              animation: 'jump 3.5s ease-in-out infinite',
            }} />
          <img src={Bplane} alt="plane "
            style={{
              position: "absolute",
              bottom: "13%",
              right: "16%",
              zIndex: "-1",
              animation: 'jump 3.2s ease-in-out infinite',
            }} />
          <img
            src=""
            alt=""
            style={{}}
          />
        </Box>

      </Container>

    </Box >
  );
};

export default HeroSection;
