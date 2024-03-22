import { Box, Typography } from "@mui/material";
import React from "react";
import BoldHeading from "../../../components/Headings/BoldHeading";
import img6 from "../images/6.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const DoDont = () => {
  const dos = [
    "Be Factual - Read the instructions provided along with the questions carefully, and try to include mentioned facts to the best of your knowledge.",
    "Be Decent - Talking about your alma mater should always have decency, even when criticizing it.",
    "Be Original - Write your own review on your own, write your own experience. Most elaborate reviews might bring extra rewards.",
    "Be Patient - The review has 8 steps, each step covering one aspect of your college life, so answer them with patience so they add value to the user. You can complete the review form in phases.",
    "Be Social - Once you are done with your review, share the review form with as many students from your college as possible. More the rewards. Rewards for the courses with lesser reviews on collegedunia have extra rewards added to them.",
  ];

  const donts = [
    "Don't ignore instructions, rush through questions, make assumptions, leave out mentioned facts, or provide irrelevant information.",
    "No Rash words should be used in the content, it will be edited during the moderation process.",
    "Don't Copy others' content and reviews. Don't let anyone use your identity.",
    "Don't rush through the review form or skip steps, as each step is important and contributes to a comprehensive evaluation of your college experience.",
    "Don't be afraid to share the review form with other students and encourage them to participate, but avoid spamming or pressuring people to submit reviews. Respect their decision if they choose not to participate.",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
       
        gap: "1rem",
        color: "#2F1370",
        textAlign: "left",
      }}
    >
      <Box width="200px" height="200px">
        <img
          src={img6}
          alt="DosDOnt"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "4rem",
      padding:"2rem",
        '@media (max-width:800px)': {
          gap : '1vh',
          flexDirection : 'column',
          paddingLeft : '5vw',
          paddingRight : '5vw',
        },
     }}>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            
            '@media (max-width:800px)': {
              gap : '2vh',
              paddingBottom : '10vh',
            },
          }}
        >
          {dos.map((item, index) => (
            <Box key={index} sx={{ display: "flex", gap: "1rem" }}>
              <CheckCircleIcon sx={{ color: "green" }} />
              <Typography variant="p">{item}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
          {donts.map((item, index) => (
            <Box key={index} sx={{ display: "flex", gap: "1rem" }}>
              <CancelIcon sx={{ color: "red" }} />
              <Typography variant="p">{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DoDont;
