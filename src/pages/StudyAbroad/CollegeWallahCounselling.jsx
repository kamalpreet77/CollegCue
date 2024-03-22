import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SACard1 from "./SACard1";
import { Card1 } from "./Data";
import HeadText from "../../components/Headings/HeadText";
import background from "../../Assets/Background/bodyBackground.jpg";

const CollegeWallahCounselling = () => {
  return (
    <>
      

   
        <Box
          sx={{
            marginY: "1rem",
          }}
        >
          <HeadText
            headText={"CollegeCue Free Counselling: Let Us Guide You"}
          />

          <Typography
            sx={{
              color: "#210366",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              marginY: "0.5rem",
            }}
          >
            Looking into Study Abroad colleges and universities as an
            international student can be a challenge, but it's one you can
            overcome! From how to look for accredited schools to what you should
            write about on your applications, our expert counsellors will help
            you at every step.
            Looking into Study Abroad colleges and universities as an
            international student can be a challenge, but it's one you can
            overcome! From how to look for accredited schools to what you should
            write about on your applications, our expert counsellors will help
            you at every step.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginY: "2rem",
              gap: "8px",
              marginY: "2rem",
              gap: "8px",
            }}
          >
            {Card1.map((val, index) => {
              return (
                <SACard1
                  key={index}
                  img={val.img}
                  bgColor={val.bgColor}
                  title={val.title}
                  content={val.content}
                  link={val.link}
                />
              );
            })}
          </Box>
        </Box>
   
      
    </>
  );
};

export default CollegeWallahCounselling;
