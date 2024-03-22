import React from "react";
import { Box, Button, Stack } from "@mui/material";

const courses = [
  { label: "BTech", id: 1 },
  { label: "MBA", id: 2 },
  { label: "MBBS", id: 3 },
  { label: "Law", id: 4 },
  { label: "Science", id: 5 },
  { label: "Study Abroad", id: 6 },
  { label: "All Course", id: 7 },
];

const CourseButtons = () => {
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      sx={{
        marginTop: "2rem",
        gap: 2,
      }}
    >
      {courses.map((course) => (
        <Button
          key={course.id}
          sx={{
            // opacity: 0.8,
            background: "#7B90FF",
            borderRadius: 2,
            color: "white",
            fontSize: 16,
            fontWeight: "600",
            "&:hover":{
              background:"#f94306"
            }
          }}
        >
          {course.label}
        </Button>
      ))}
    </Stack>
  );
};

export default CourseButtons;