import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SearchButtonSmall from "../../components/Buttons/SearchButtonSmall";
import BlueButton from "../../components/Buttons/BlueButton";

const FoundCollegeHeading = ({place}) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.4rem",
            marginTop: "2rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "2rem",
              textAlign: "left",
              color: "#41355D",
              marginRight: "1rem",
            }}
          >
            Found {place.collegeno} Colleges
          </Typography>
          <BlueButton text="IIT" link="" />
          <BlueButton text="IIIT" link="" />
          <BlueButton text="IIM" link="" />
          <BlueButton text="NIT" link="" />
        </Box>
        <Box sx={{ marginTop: "2rem" }}>
          <SearchButtonSmall />
        </Box>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default FoundCollegeHeading;
