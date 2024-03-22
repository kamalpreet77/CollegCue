import { Box, Divider } from "@mui/material";
import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import trophy from "./images/shape-2.svg"
import PageNameHeading from "../../components/Headings/PageNameHeading";
import EarnUpto from "./components/EarnUpto";
import HowEarnCard from "./components/HowEarnCard";
import BoldHeading from "../../components/Headings/BoldHeading";
import FilledButton from "../../components/Buttons/FilledButton";
import LeaderBoard from "./components/LeaderBoard";
import cactus from "./images/courses-shape.png";
import DoDont from "./components/DoDont";
import Faq from "../../components/Faq/Faq"
import { FaqData } from "./accordianData";

const WriteReview = () => {
  const earnData = [
    {
      img: img1,
      way: "Write a Review & EarnUp to",
      amount: "10",
    },
    {
      img: img2,
      way: "Reward For Selected Colleges Reviews",
      amount: "10",
    },
    {
      img: img4,
      way: "Get Reviews From Your Friends & Earn",
      amount: "10",
    },
    {
      img: img5,
      way: "Achieve Milestone and Earn Up to",
      amount: "10",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        justifyContent: "center",
        alignItems: "center",
        marginX: "auto",
        maxWidth: { xs: "90%", sm: "70%", md: "100%", lg: "100%" },
      }}
    >

      <Box>
        <EarnUpto />
      </Box>

      <Box
        sx={{
          padding: "2rem 4rem 2rem 4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "3rem",
          width: "100%",
          "@media (max-width:800px)": {
            paddingLeft: "2vw",
            paddingRight: "2vw",
          },
        }}
      >
        <BoldHeading color="#2c3968">
          Collegecue Reviews Leaderboard- This Month
        </BoldHeading>
        <LeaderBoard />
      </Box>
      <Divider
        variant="horizontal"
        style={{
          width: "100%",
        }}
      />
      <Box
        sx={{
          bgcolor: "#f6fafb",
          padding: "4rem 4rem 2rem 4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          gap: "2rem",
          position: "relative",
          "@media (max-width:800px)": {
            paddingLeft: "2vw",
            width: "100%",
            paddingRight: "2vw",
          },
        }}
      >
        <BoldHeading textAlign="center" color="#1F305E">
          Do’s & Dont’s - Points to Consider While Writing a Review
        </BoldHeading>
        <DoDont />
        <Box
          sx={{
            position: "absolute",
            top: "-50px",
            right: "150px",
          }}
        >
          <img
            src={cactus}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
        <BoldHeading textAlign="center" color="#1F305E">
          Frequently Asked Questions (FAQs)
        </BoldHeading>
        <Faq faqs={FaqData} />
      </Box>
    </Box>
  );
};

export default WriteReview;
