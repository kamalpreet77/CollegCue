import React from "react";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import HeadText from "../../../components/Headings/HeadText";
import { CollegeCompareCard, CollegeCompareCard2 } from "./CollegeCompareCard";
import VsCard from "./VsCard";

function CollegeCompare() {
  const handleCompare = () => {
    // Add your compare logic here
    console.log("Comparing...");
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          // background:"#f8fafb"
          background: "#FFFFFF",
          borderRadius: "2rem",
        }}
      >
        {/* heading */}
        <HeadText headText={"College Compare"} />
        <Box
          display="flex"
          mx=""
          my="1rem"
          sx={{
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CollegeCompareCard />
          <VsCard />
          <CollegeCompareCard2 />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF7900",
              color: "white",
              margin:"10px",
              "&:hover": {
                backgroundColor: "#FF6000", // You can adjust the hover color as needed
              },
            }}
            onClick={() => handleCompare()}
          >
            Compare Now
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default CollegeCompare;
