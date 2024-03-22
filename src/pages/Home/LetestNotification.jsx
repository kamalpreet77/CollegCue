import React from "react";
import { Box, Container } from "@mui/material";
import MyHeading from "../../components/Headings/MyHeading";
import ParentCardSection from "./ParentCardSection";

export default function LetestNotification() {
  const heading = "Latest Notification";

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: "2rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <MyHeading headingName={heading} />
          <ParentCardSection />
        </Box>
      </Container>
    </>
  );
}
