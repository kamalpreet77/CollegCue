import React from "react";
import FilterButton from "../../components/Buttons/FilterButton";
import { Box, Typography } from "@mui/material";
import CollegePridictImg from "../../Assets/Collage_pridictor.svg"

// Component for selecting buttons
const SelectButton = ({ TopSectiondata }) => {
  const { courseHeading, courseLabels, stateHeading, stateLabels } = TopSectiondata;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        justifyContent: 'center',
        marginY: "2rem"
      }}>
      <Box>
        {/* Heading for the page */}
        <Typography sx={{ marginY: "1.5rem", fontSize: "2rem", color: "#160048", fontWeight: 700 }}>
          College Predictor 2023 for top Universities and Exams
        </Typography>

        {/* Container for course tag selection */}
        <Box sx={{
          display: "flex", gap: "1rem", alignItems: "center",
          '@media (max-width:800px)': {
            flexDirection: 'column',
            gap: '0',
          },
        }}>
          {/* Heading for course tag selection */}
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "2rem",
              letterSpacing: "0em",
              color: "#2F1370",
              fontWeight: "500",
              marginBottom: "1rem",
              '@media (max-width:800px)': {
                marginTop: '2vh',
                marginBottom: '0',
              },
            }}
          >
            {courseHeading}
          </Typography>

          {/* Container for course tag buttons */}
          <Box sx={{
            '@media (max-width:800px)': {
              maxWidth: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1%',
              paddingBottom: '2%',
            },
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: "0.03em",
            color: "#7B90FF",
            justifyContent: "center",
            marginBottom: "1rem",
            gap: "0.5rem",
          }}>
            {/* Buttons for course tags */}
            {courseLabels.map((label, index) => (
              <FilterButton key={index} style={{ marginTop: '0.5vh' }}>{label}</FilterButton>
            ))}
          </Box>
        </Box>

        {/* Container for state selection */}
        <Box sx={{
          display: "flex", gap: "1rem", alignItems: "center",
          '@media (max-width:800px)': {
            flexDirection: 'column',
            gap: '0',
          },
        }}>

          {/* Heading for state selection */}
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "2rem",
              letterSpacing: "0em",
              color: "#2F1370",
              fontWeight: "500",
              marginBottom: "1rem",
              '@media (max-width:800px)': {
                marginTop: '2vh',
                marginBottom: '0',
              },
            }}
          >
            {stateHeading}
          </Typography>

          {/* Container for state buttons */}
          <Box sx={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: "0.03em",
            color: "#7B90FF",
            justifyContent: "center",
            marginBottom: "1rem",
            gap: "0.5rem",
            '@media (max-width:800px)': {
              maxWidth: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1%',
              paddingBottom: '2%',
            },
          }}>
            {/* Buttons for selecting states */}
            {stateLabels.map((label, index) => (
              <FilterButton key={index} style={{ marginBottom: '0.5rem' }}>{label}</FilterButton>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <img src={CollegePridictImg} alt="@BharatTech"
          style={{ width: "300px", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default SelectButton;
