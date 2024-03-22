import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import { AboutDegree } from "../../data/DataFile";
import Courses from "../../components/Buttons/Courses";
import CourseAboutCard from "../../components/Cards/CourseAboutCard";

const ExploreCourseContainer = () => {
  const DegreeType = [
    {
      label: "Bachelors",
      link: "/coming-soon",
    },
    {
      label: "Master",
      link: "/coming-soon",
    },
    {
      label: "Doctrate",
      link: "/coming-soon",
    },
    {
      label: "Diploma",
      link: "/coming-soon",
    },
    {
      label: "Certificate",
      link: "/coming-soon",
    },
  ];
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              margin: "0px",
              gap: "10px",
            }}
          >
            <Box sx={{ width: "fit-content", marginBottom: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: "3rem",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#160048",
                  display: "inline",
                }}
              >
                Explore Courses
              </Typography>
              <Box
                sx={{
                  borderTop: "6px solid #7B90FF",
                  borderRadius: "10px",
                  display: "flex",
                  width: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <Stack
              direction="row"
              flexWrap="wrap"
              rowGap="1rem"
              justifyContent="space-around"
            >
              {DegreeType.map((DegreeType, index) => {
                return (
                  <Courses
                    key={index}
                    dt={DegreeType.label}
                    link={DegreeType.link}
                  ></Courses>
                );
              })}
            </Stack>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            margin="2rem"
            flexWrap="wrap"
            display="flex"
            justifyContent="center"
            sx={{ marginTop: "2rem" }}
          >
            {AboutDegree.map((val, index) => {
              return (
                <CourseAboutCard
                  key={index}
                  deg={val.degree}
                  type={val.type}
                  duration={val.duration}
                  fee={val.avgFee}
                  cllgs={val.colleges}
                ></CourseAboutCard>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default ExploreCourseContainer;
