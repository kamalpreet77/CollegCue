import React from "react";
import { Box, Container } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";
import MyHeading from "../../components/Headings/MyHeading";
import CofCC from "../../Assets/HomePage/C-of-cc.png";

const AdmissionContainer = () => {
  const heading = "Admission 2024";
  const buttons = [
    {
      label: "MBA",
      link: "/coming-soon",
    },
    {
      label: "MBBS 2023",
      link: "/coming-soon",
    },
    {
      label: "MBA 2023",
      link: "/coming-soon",
    },
    {
      label: "M Tech",
      link: "/coming-soon",
    },
    {
      label: "B Ed",
      link: "/coming-soon",
    },
    {
      label: "MBBS",
      link: "/coming-soon",
    },
    {
      label: "Ph.D",
      link: "/coming-soon",
    },
    {
      label: "D El Ed",
      link: "/coming-soon",
    },
    {
      label: "Bsc",
      link: "/coming-soon",
    },
    {
      label: "B.Pharmacy",
      link: "/coming-soon",
    },
    {
      label: "Engineering",
      link: "/coming-soon",
    },
    {
      label: "Master of Arts",
      link: "/coming-soon",
    },
    {
      label: "LLB",
      link: "/coming-soon",
    },
    {
      label: "MCA",
      link: "/coming-soon",
    },
    {
      label: "M.Com",
      link: "/coming-soon",
    },
    {
      label: "BBA",
      link: "/coming-soon",
    },
    {
      label: "B.Com",
      link: "/coming-soon",
    },
    {
      label: "M.E",
      link: "/coming-soon",
    },
    {
      label: "B.E",
      link: "/coming-soon",
    },
    {
      label: "Bachelor of Arts",
      link: "/coming-soon",
    },
    {
      label: "Bachelor of Engineering",
      link: "/coming-soon",
    },
    {
      label: "Commerce",
      link: "/coming-soon",
    },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}>
          <Box sx={{ margin: "0", marginBottom: "2rem", marginTop: "2rem", width: "80%" }}>
            <MyHeading headingName={heading} />
            {buttons.map((button, index) => (
              <MyButton key={index} label={button.label} link={button.link} />
            ))}
          </Box>
          <Box>
            <img src={CofCC} alt="@BharatTech" style={{ width: "200px", height: "auto", margin: "auto", marginLeft: "1rem" }} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AdmissionContainer;
