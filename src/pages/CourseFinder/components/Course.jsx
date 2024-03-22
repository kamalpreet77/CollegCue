import React from "react";
import { Box, Stack } from "@mui/material";
import SearchBar from "../SearchBar";
import CourseButton from "./Course/CourseButton";
import writebook from "./assets/writebook.jpg";

const Course = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            color: "#210366",
            fontSize: 30,
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          List of Top courses in Indian Colleges 2023
        </Box>
        <SearchBar placeholder="Search Goals" />
        <CourseButton />
      </Box>

      <Box>
        <SearchBar placeholder="Search Goals" />
        <CourseButton />
      </Box>

      <Box>
        <img
          src={writebook}
          alt="bharat-tech"
          style={{
            maxWidth: "100%",
            height: "auto",
            maxHeight: "11rem",
            marginRight: "0.8rem",
            borderRadius: "2rem 0 3rem 0rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default Course;
