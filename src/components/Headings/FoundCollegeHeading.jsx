import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SearchButtonSmall from "../Buttons/SearchButtonSmall";
import BlueButton from "../Buttons/BlueButton";

const FoundCollegeHeading = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          '@media (max-width:800px)': {
            flexDirection: 'column',
            gap: '2%',
            marginLeft: '2%',
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.4rem",
            marginTop: "2rem",
            '@media (max-width:800px)': {
              flexDirection: 'column',
              gap: '2%',
              marginLeft: '2%',
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "2rem",
              textAlign: "center",
              color: "#41355D",
              marginRight: "1rem",
            }}
          >
            Found 19030 Colleges
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '5%',
            '@media (max-width: 800px)': {
              alignItems: 'center',
              justifyContent: " center",
              padding: '2%',
            }
          }}>
            <BlueButton text="IIT" link="" />
            <BlueButton text="IIIT" link="" />
            <BlueButton text="IIM" link="" />
            <BlueButton text="NIT" link="" />
            <Box sx={{
            }}>
              <SearchButtonSmall />
            </Box>
          </Box>
        </Box>
       
      </Box>
    </Container>
  );
};

export default FoundCollegeHeading;