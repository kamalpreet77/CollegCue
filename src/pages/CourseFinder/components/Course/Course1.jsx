// Course.jsx
import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import SearchBar from "../../SearchBar";
import CourseButton from "./CourseButton";
import TopCoursesList from "./TopCoursesList";
import Books from '../assets/Books.png';
import Character from '../assets/Character.png';
import Plant from '../assets/Plant.png';

const Course1 = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelection = (course) => {
    setSelectedCourse(course);
    // Add logic for handling the selected course (e.g., fetch data, update state, etc.)
  };

  return (
    <Box>
      <Stack
        direction="row"
        flexWrap={"wrap"}
        sx={{
          marginTop: "2rem",
          gap: 2,
        }}
      >
        <CourseButton course="BTech" onSelect={handleCourseSelection} selected={selectedCourse === "BTech"} />
        <CourseButton course="MBA" onSelect={handleCourseSelection} selected={selectedCourse === "MBA"} />
        {/* Add other course buttons similarly */}
      </Stack>

      <TopCoursesList />

      <Stack
        sx={{
          display: "flex",
          flexDirection: "",
          flexWrap: "wrap",
          alignItems: "left",
          '@media (min-width:800px)': {
            paddingLeft: '5vw',
          }
        }}
      >
        <SearchBar placeholder="Search Goals" />
      </Stack>
    </Box>
  );
};

export default Course1;
