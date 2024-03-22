import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';
import ClassTen from "./../../components/Headings/ClassTen";
import ClassTwelve from "./../../components/Headings/ClassTwelve";
import CollegeCards from "./CollegeCards";
import CollegeCardstwo from "./CollegeCardstwo";
import ConceptRender from "./ConceptRender";
import Container from "@mui/material/Container";
import ExamButtonRender from "./ExamButtonRender";
import ExamCardRender from "./ExamCardRender";
import ExamFaqRender from "./ExamFaqRender";
import ExamJEEMainRender from "./ExamJEEMainRender";
import ExamNewsRender from "./ExamNewsRender";
import ExamNotificationsRender from "./ExamNotificationRender";
import ExamsCategory from "./ExamsCategory";
import SearchBar from "../../components/Cards/SearchBar";
import UpcomingExamRender from "./UpcomingExamRender";
import Subscribe from "../../components/SubscribeNews/Subscribe";
import img1 from "./images/exam_hero.svg";
import PageTitle from "../../components/Headings/PageTitle";
import { Grid, Typography } from "@mui/material";
import ExamSyllabusCard from "./ExamSyllabusCard";

const Exam = () => {

  return (
    <Container
      Width="lg"
      sx={{
        overflow : "hidden",
        paddingTop: "4.5%",
        '@media (max-width: 900px)': {
          paddingTop: "12%"
        },
        '@media (max-width: 400px)': {
          paddingTop: "14%"
        }
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Page Title */}
        <Box>
          {/* <PageTitle title="Exams" /> */}
        </Box>
        {/* Section for displaying an image and search bar */}
        <Box sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          "@media (max-width: 600px)": {
            flexDirection: "column-reverse",
          },
        }}>
          <Box sx={{ flex: "1" }}>
            {/* Subtitle */}
            <Typography variant='h5' sx={{
              color: "#210366",
              fontSize: "2.25rem",
              paddingTop: '1rem',
              fontWeight: 700,
              paddingBottom: '5vh',
            }}>
              Entrance Exams In India
            </Typography>
            {/* Search bar */}
            <SearchBar placeholder="Search Entrance Exams" />
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "flex-end",
              "@media (max-width: 600px)": {
                justifyContent: "center"
              },
            }}>
            {/* Image */}
            <img
              src={img1}
              alt="img1"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "contain",
                aspectRatio: "video"
              }}
            />
          </Box>
        </Box>

        {/* Component to render buttons for exam categories */}
        <Box>
          <ExamButtonRender />
        </Box>
        {/* Component to display categories of exams */}
        <ExamsCategory />
      </Box>

      {/* Main content section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          '@media (min-width: 740px)': {
            flexDirection: "row",
          },
        }}
      >
        {/* Left section with main exam cards */}
        <ExamCardRender />
        {/* Right section with news, notifications, and upcoming exams */}
        <Box
          sx={{
            flex: "1",
            marginX: "auto",
            '@media (min-width: 740px)': {
              paddingLeft: '1vw',

            },
          }}
        >
          <ExamNewsRender />
          <Subscribe/>
          <ExamNotificationsRender />
          <UpcomingExamRender />
          <ExamSyllabusCard />
        </Box>
      </Box>
      {/* Additional content section */}
      <Box sx={{
        width: "auto"
      }}>
        <ConceptRender />
        <ClassTen />
        <CollegeCards />
        <ClassTwelve />
        <CollegeCardstwo />
        <ExamJEEMainRender />
        <ExamFaqRender />
      </Box>
    </Container>
  );
};

export default Exam;
