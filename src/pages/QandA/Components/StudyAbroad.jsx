import React from "react";
import QuestionSet from "./QuestionSet";
import Question from "./Question";
import { Box, Button, Container, Grid } from "@mui/material";
import MyButton from "./MyButton";
import Typography from "@mui/material/Typography";
import FilterComponent from "../../../components/FilterComponent/FilterComponent";
import QuestionCol from "./QuestionCol";

const StudyAbroad = () => {
  const buttons = [
    {
      label: "NEW ZEALAND",
      link: "#",
    },
    {
      label: "UK",
      link: "#",
    },
    {
      label: "CANADA",
      link: "#",
    },
    {
      label: "USA",
      link: "#",
    },
    {
      label: "HONGKONG",
      link: "#",
    },
    {
      label: "SWEDEN",
      link: "#",
    },
    {
      label: "FRANCE",
      link: "#",
    },
    {
      label: "UAE",
      link: "#",
    },
    {
      label: "NETHERLANDS",
      link: "#",
    },
    {
      label: "FRANCE",
      link: "#",
    },
    {
      label: "ITALY",
      link: "#",
    },
    {
      label: "AUSTRALIA",
      link: "#",
    },
    {
      label: "IRELAND",
      link: "#",
    },
    {
      label: "MALAYSIA",
      link: "#",
    },
    {
      label: "SINGAPORE",
      link: "#",
    },
  ];

  return (
    <Box
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: "2rem",
        marginLeft: "2rem",
        gap: "1rem",
        width: "auto",
        display: "flex",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={{
          padding: "1rem",
          marginTop: "7rem",
          height: "auto",
          alignItems: "center",
          "@media (max-width: 768px)": {
            flexDirection: "column",
            width: "90%",
            overflowX: "auto",
          },
          display: "flex",
          flexDirection:"column",
          // Added display: flex to allow flexDirection and alignItems to work properly
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "420px", // Added maxWidth property to match the width of the Study Abroad Countries component
            height: "auto",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            overflowX: "hidden",
            "@media (max-width: 768px)": {
              width: "100%",
            },
            
          }}
        >
          {/* Including FilterComponent here */}
          <FilterComponent />
        </Box>

        <Box
          sx={{
            width: "310px",
            height: "auto",
            padding: "0.7rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
            borderRadius:"10px",
            border: "1px solid lightgrey",
            "@media (max-width: 768px)": {
              width: "50%",
            },
          }}
        >
          <Typography
            sx={{
              color: "#7f29cf",
              fontSize: 20,
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Study Abroad Countries
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "8px",
              height: "90%",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            {buttons.map((button, index) => (
              <MyButton key={index} label={button.label} link={button.link} />
            ))}
          </Box>
        </Box>
      </Box>
      <Question />
    </Box>
  );
};

export default StudyAbroad;
