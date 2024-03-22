import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";

const Class12th = () => {
  const heading = "CBSE 12th Exam";
  const buttons = [
    {
      label: "CBSE Class 12",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 12th result",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 12th Previous Year Paper",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 12th Syllabus",
      link: "/coming-soon",
    },
    {
      label: "NCERT Solutions Class 12th Physics",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 12th Exam Date",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 12th Admit card",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 12th Student Testimonials",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 12th Question Bank",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 12th Hall Ticket",
      link: "/coming-soon",
    },
    {
      label: "CBSE Previous year Toppers",
      link: "/coming-soon",
    },
    {
      label: "CBSE Toppers",
      link: "/coming-soon",
    },
    {
      label: "CBSE Question Pattern",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 12th Notes",
      link: "/coming-soon",
    },
  ];

  return (
    <>
      <Container>
        <Typography
          sx={{
            color: "#210366",
            fontWeight: 700,
            fontSize: "1.3rem"
          }}>
          {heading}
        </Typography>
        <Box
          sx={{
            height: "400px",
            margin: '0.9rem 0',
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#7B90FF",
              borderRadius: "6px",
            },
          }}>
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Class12th;
