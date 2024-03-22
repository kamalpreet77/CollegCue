import React from "react";
import ScrollToTop from "./ScrollToTop";
import LatestNews from "./LatestNews";
import HeroSection from "./HeroSection";
import StudyGoals from "./StudyGoals";
import TopColleges from "./TopColleges";
import OurSuggestion from "./OurSuggestion";
import LetestNotification from "./LetestNotification";
import StudyAbrodContainer from "./StudyAbrodContainer";
import AdmissionContainer from "./AdmissionContainer";
import CollegeRankingContainer from "./CollegeRankingContainer";
import ExploreCourseContainer from "./ExploreCourseContainer";
import { TopSection } from "./TopSection";
import { CollegeRanking } from "./CollegeRanking";
import { Box} from "@mui/material";
import ExamCourses from "./ExamCourses";
import Background2 from "./images/bg-2.jpg"
import Testimonials from "./Testimonials";

const HomePage = () => {

  return (
    <>

      <ScrollToTop />
      <HeroSection />
      {/*  */}
      <StudyGoals />
      <TopColleges />
      {/*  */}
      <LetestNotification />
      {/*  */}
      <Box
        sx={{
          backgroundColor: "#fff6ee",
          paddingY: "2rem",
          marginY: "2rem"
        }} >
        <OurSuggestion />
      </Box>
      {/*  */}
      <TopSection />
      <CollegeRanking />
      <CollegeRankingContainer />
      {/*  */}
      <Box
        sx={{
          backgroundImage: `url(${Background2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingY: "2rem",
          marginY: "1rem"
        }} >
        <AdmissionContainer />
        <ExploreCourseContainer />
      </Box>
      {/*  */}
      <StudyAbrodContainer />
      {/*  */}
      <ExamCourses />
      {/*  */}
      <LatestNews />
      {/*  */}
      <Testimonials />
    </>
  );
};

export default HomePage;
