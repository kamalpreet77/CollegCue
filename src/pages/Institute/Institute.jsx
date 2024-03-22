import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LeftCard from "./LeftCard";
import CountryFilter from "./CountryFilter";
import AllRightCards from "./RightCard";
import TopCollegeHeading from "../../components/Headings/PageHeading";
import RatingFooter from "../../components/RadioGroupRating";
import FilterComponent from "../../components/FilterComponent/FilterComponent";

const Institute = () => {
  return (
    <Box
      
      sx={{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        padding: "0px",
        justifyContent: "center",
        alignItems: "center",
        marginX: "auto",
        maxWidth: { xs: "90%", sm: "70%", md: "100%", lg: "100%" }, // Adjusted maxWidth for different media sizes
      }}
    >

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding:"4rem",
          width:"100%"
        }}
      >
        <Box sx={{ '@media (max-width:800px)': {
            paddingLeft : '3vw',
          },
          }}>
          <TopCollegeHeading text="List of Top Institute in Indian Based on 2024 Ranking" />
        </Box>

        <Box sx={{ marginTop: "2rem", marginBottom: "2rem",
        '@media (max-width:800px)': {
          paddingLeft : '3vw',
        },
       }}>
          <CountryFilter />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", gap: "1vw",
        '@media (max-width:800px)': {
          display : 'flex',
          flexDirection : 'column',
          justifyContent : 'center',
          alignItems : 'center',
        },
       }}>
          <FilterComponent />
          <AllRightCards />
        </Box>
      </Box>
      <RatingFooter />
    </Box>
  );
};

export default Institute;
