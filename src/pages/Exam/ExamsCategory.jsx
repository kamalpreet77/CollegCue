import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ExamCategoryButton from "./../../components/Buttons/ExamCategoryButton";

const ExamsCategory = () => {
  const allButtons = [
    {
      label: "Engineering",
      link: "#",
    },
    {
      label: "Management",
      link: "#",
    },
    {
      label: "Science",
      link: "#",
    },
    // Add all your categories here...
    {
      label: "Law",
      link: "#",
    },
    {
      label: "Pharmacy",
      link: "#",
    },
    {
      label: "Medical",
      link: "#",
    },
    {
      label: "Computer Applications",
      link: "#",
    },
    {
      label: "Arts",
      link: "#",
    },
    {
      label: "Architecture",
      link: "#",
    },
    {
      label: "Design",
      link: "#",
    },
    {
      label: "Class 12 Exams",
      link: "#",
    },
    {
      label: "Class 10 Exams",
      link: "#",
    },
    {
      label: "Hotel Management",
      link: "#",
    },
    {
      label: "Agriculture",
      link: "#",
    },
    {
      label: "Paramedical",
      link: "#",
    },
    {
      label: "Dental",
      link: "#",
    },
    {
      label: "Mass Communications",
      link: "#",
    },
    {
      label: "Vocational Courses",
      link: "#",
    },
    {
      label: "Study Abroad Exams",
      link: "#",
    },
    {
      label: "BBA",
      link: "#",
    },

    {
      label: "Veterinary Sciences",
      link: "#",
    },
    {
      label: "Education",
      link: "#",
    },
    {
      label: "Bachelor of Engineering",
      link: "#",
    },
    {
      label: "Commerce",
      link: "#",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [visibleButtons, setVisibleButtons] = useState(allButtons.slice(0, 10));

  const handleShowMore = () => {
    setVisibleButtons(allButtons);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisibleButtons(allButtons.slice(0, 10));
    setShowAll(false);
  };

  return (
    <Box>
      <Box sx={{ marginTop: "2rem", borderRadius: "10px" }}>
        <Box
          sx={{
            borderRadius: "5px",
            fontSize: "36px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0em",
            marginBottom: "1rem",
            color: "#210366",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#210366",
              fontSize: "1.5rem",
              paddingTop: "1rem",
              fontWeight: 700,
            }}
          >
            Exams Category
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "3rem", paddingTop: "0.5rem" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {visibleButtons.map((button, index) => (
            <ExamCategoryButton
              key={index}
              label={button.label}
              link={button.link}
            />
          ))}
          {!showAll && allButtons.length > visibleButtons.length && (
            <Button
              variant="outlined"
              onClick={handleShowMore}
              sx={{
                marginTop: "0.6rem",
                minWidth: "140px",
                maxHeight: "40px",
                borderRadius: "10px",
                borderColor: "#757575",
                color: "#757575",
                padding: "4px 16px",
                fontSize: "12px",
                lineHeight: "1.75",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "1.25px",
                "&:hover": {
                  borderColor: "#210366",
                  color: "#210366",
                },
              }}
            >
              Show More
            </Button>
          )}
          {showAll && (
            <Button
              variant="outlined"
              onClick={handleShowLess}
              sx={{
                marginTop: "0.6rem",
                minWidth: "140px",
                maxHeight: "40px",
                borderRadius: "10px",
                borderColor: "rgb(22,0,72)",
                color: "rgb(22,0,72)",
                padding: "4px 16px",
                fontSize: "12px",
                lineHeight: "1.75",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "1.25px",
                "&:hover": {
                  borderColor: "#210366",
                  color: "#210366",
                },
              }}
            >
              Show Less
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ExamsCategory;
