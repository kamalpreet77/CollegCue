import React from "react";
import InterestCard from "../../components/Cards/InterestCard";
import { Box, Grid } from "@mui/material";
import clogo from "./images/DEV/8.png"
import manage from "./images/DEV/7.png"
import arts from "./images/DEV/9.png"
import law from "./images/DEV/10.png"
import eng from "./images/DEV/1.png"
import logo4 from "./images/logo/Laptop.png";
import logo5 from "./images/logo/Books.png";
import med from "./images/DEV/4.png"
import sci from "./images/DEV/5.png"
import logo9 from "./images/logo/Flask.png";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import { useState } from "react";

const InterestAllCards = () => {
    const [displayedCards, setDisplayedCards] = useState(6);
    const [showAll, setShowAll] = useState(false);

  const data = [
    {
      logo: clogo,
      heading: "Commerce",
      btn: [
        { courseName: "M.com", link: "#" },
        { courseName: "B.com", link: "#" },
      ],
      exploreAllCourseLink: "https://www.google.com",
    },
    {
      logo: manage,
      heading: "Management",
      btn: [
        { courseName: "BBA/BBM", link: "#" },
        { courseName: "MBA", link: "#" },
        { courseName: "BHM", link: "#" },
      ],
      exploreAllCourseLink: "https://twitter.com",
    },
    {
      logo: arts,
      heading: "Arts",
      btn: [
        {
          courseName: "BA",
          link: "#",
        },
        {
          courseName: "BFA",
          link: "#",
        },
        {
          courseName: "MA",
          link: "#",
        },
      ],
    },
    {
      logo: logo4,
      heading: "Computer Application",
      btn: [
        {
          courseName: "BE/B.tech",
          link: "#",
        },
        {
          courseName: "ME/M.tech",
          link: "#",
        },
        {
          courseName: "Polytechnic",
          link: "#",
        },
      ],
    },
    {
      logo: logo5,
      heading: "Education",
      btn: [
        {
          courseName: "BE/B.tech",
          link: "#",
        },
        {
          courseName: "ME/M.tech",
          link: "#",
        },
        {
          courseName: "Polytechnic",
          link: "#",
        },
      ],
    },
    {
      logo: law,
      heading: "Law",
      btn: [
        {
          courseName: "BE/B.tech",
          link: "#",
        },
        {
          courseName: "ME/M.tech",
          link: "#",
        },
        {
          courseName: "Polytechnic",
          link: "#",
        },
      ],
    },
    {
      logo: eng,
      heading: "Engineering",
      btn: [
        {
          courseName: "BE/B.tech",
          link: "#",
        },
        {
          courseName: "ME/M.tech",
          link: "#",
        },
        {
          courseName: "Polytechnic",
          link: "#",
        },
      ],
    },
    {
      logo: med,
      heading: "Medical",
      btn: [
        {
          courseName: "BAMS",
          link: "#",
        },
        {
          courseName: "B.Sc",
          link: "#",
        },
        {
          courseName: "BHMS",
          link: "#",
        },
      ],
    },
    {
      logo: sci,
      heading: "Science",
      btn: [
        {
          courseName: "M.Sc",
          link: "#",
        },
        {
          courseName: "B.Sc",
          link: "#",
        },
        {
          courseName: "B.F.Sc",
          link: "#",
        },
      ],
    },
  ];
  const handleViewMore = () => {
    setDisplayedCards(data.length);
    setShowAll(true);
  };

  const handleViewLess = () => {
    setDisplayedCards(6);
    setShowAll(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          overflow: "hidden",
          padding: "12px 15px",
          flexDirection: "row",
          '@media (max-width: 800px)': {
            flexDirection: "column",
            width:"100%",
            padding: "0rem",
            margin: "0rem",
          },
        }}
      >
        {data.slice(0, displayedCards).map((item, index) => (
          <InterestCard {...item} key={index} />
        ))}
      </Box>
      {!showAll && displayedCards < data.length && (
        <ViewMoreButton onClick={handleViewMore} heading="Show more Streams" />
      )}
      {showAll && (
        <ViewMoreButton onClick={handleViewLess} heading="Show less Streams" />
      )}
    </Box>
  );
};

export default InterestAllCards;