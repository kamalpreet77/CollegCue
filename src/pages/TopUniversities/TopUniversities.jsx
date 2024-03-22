import React from "react";
import { Box, Container, Stack } from "@mui/material";
import TopCollegeHeading from "../../components/Headings/PageHeading";
import LatestNotification from "./LatestNotification";
import FoundCollegeHeading from "../../components/Headings/FoundCollegeHeading";
import Colleges from "./Colleges";
import DropDown from "./DropDown";
import TopCollage from "../../Assets/Top-collages.svg"

const TopUniversities = () => {
  return (
    <Container>
      <Box
        alignItems={{ xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start' }}
        style={{
          display: "flex",
          flexDirection: " column",
          justifyContent: "center",
          marginTop: "2rem"
        }}>
        <Box sx={{ display: "flex", flexDirection: "row ", alignItems: "center" }}>
          <Box>
            <TopCollegeHeading text="List of Top Colleges in Indian Based on 2023 Ranking" />
            <LatestNotification />
          </Box>
          <img src={TopCollage} alt="@BharatTech" style={{ width: "37%", height: 'auto' }} />
        </Box>
        <FoundCollegeHeading />
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent="space-evenly"
          alignItems={{ xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start' }}
          spacing={{ xs: '0', sm: '0', md: '1', lg: '1' }}
          sx={{
            marginY: "1.5rem"
          }}
        >
          <DropDown />
          <Colleges />
        </Stack>
      </Box>
    </Container >

  );
};

export default TopUniversities;
