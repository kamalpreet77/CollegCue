import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";

const Class10th = () => {
  const heading = "CBSE 10th Exam ";
  const buttons = [
    {
      label: "CBSE Class 10",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 10th result",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 10th Exam Date",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 10th Syllabus",
      link: "/coming-soon",
    },
    {
      label: "CBSE",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 10th Admit card",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 10th Previous Year Paper",
      link: "/coming-soon",
    },
    {
      label: "NCERT Solutions Class 10th Science",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 10th Question Bank",
      link: "/coming-soon",
    },
    {
      label: "CBSE Class 10th Previous Year Toppers",
      link: "/coming-soon",
    },
    {
      label: "CBSE 10th Student Testimonials",
      link: "/coming-soon",
    },
  ];
  return (
    <>
      <Container maxWidth="lg">
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
              height: "10px"
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

export default Class10th;
