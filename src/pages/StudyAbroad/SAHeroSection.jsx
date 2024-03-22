import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SABtn1 } from "./Data";
import SAMainBtn from "./../../components/Buttons/SAMainBtn";
import { NavLink } from "react-router-dom";
import "./css/studyAbroad.css";
import Bpencil from "../../Assets/HeroImages/banner-pencil.png";
import Bplane from "../../Assets/HeroImages/banner-plane.png";
import Bbulbe from "../../Assets/HeroImages/banner-bulbe.png";
import Bbook from "../../Assets/HeroImages/banner-book.png";
import Bpoint from "../../Assets/HeroImages/banner-point.png";
import heroImg from "./images/HeroIamges/heroImg.png";
import patterns from "./images/HeroIamges/Patterns.png";

const SAHeroSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          zIndex: "2",
          width: "100%",
          overflow:"hidden"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap:"wrap",

            "@media (max-width : 770px)": {
              justifyContent: "center",
              flexDirection:"column"
            },
          }}
        >
          {/* heading and buttons */}
          <Box sx={{width:"50%" ,justifyContent:"center",alignItems:"center"}}>
            {/* heading */}
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "700",
                textAlign: "center",
                color: "#000",
                "@media (max-width : 770px)": {
                  fontSize: "1.2rem",
                },
              }}
            >
              Find Study Abroad Universities and Programs
              <br />
              Step to Your Career
            </Typography>

            {/* buttons */}
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
              >
                {SABtn1.map((val, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={`/study-abroad/${val
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      style={{ textDecoration: "none" }}
                    >
                      <SAMainBtn key={index} content={val} />
                    </NavLink>
                  );
                })}
              </Stack>
            </Box>
          </Box>
<Box sx={{width:"10%"}}></Box>
          {/* images */}
          <Box style={{ position: "relative",width:"40%", height:'15rem',}}>
            <img
              src={patterns}
              alt=""
              style={{ position: "absolute", top: 0, left:"-30%", zIndex: -1 ,objectFit:"cover" }}
            />
            <img src={heroImg} alt="" style={{ zIndex: 1 ,objectFit:"cover"}} />
          </Box>
        </Box>


{/* 
         <Box
          sx={{
            "@media (max-width :770px)": {
              display: "none",
            },
          }}
        >
          <img
            src={Bpencil}
            alt="pencil"
            style={{
              position: "absolute",
              top: "9%",
              left: "13%",
              zIndex: "-1",
              animation: "jump 3s ease-in-out infinite",
            }}
          />
          <img
            src={Bbook}
            alt="book"
            style={{
              position: "absolute",
              top: "12%",
              right: "13%",
              zIndex: "-1",
              animation: "jump 3s ease-in-out infinite",
            }}
          />
          <img
            src={Bbulbe}
            alt="bulb"
            style={{
              position: "absolute",
              bottom: "20%",
              left: "18%",
              zIndex: "-1",
              animation: "jump 3s ease-in-out infinite",
            }}
          />
          <img
            src={Bplane}
            alt="plane "
            style={{
              position: "absolute",
              bottom: "13%",
              right: "16%",
              zIndex: "-1",
              animation: "jump 3s ease-in-out infinite",
            }}
          />
          <img
            src={Bpoint}
            alt="paper"
            style={{
              position: "absolute",
              top: "42%",
              left: "17%",
              zIndex: "-1",
              animation: "jump 3s ease-in-out infinite",
            }}
          />
        </Box> 
         */}



      </Box>
    </>
  );
};

export default SAHeroSection;
