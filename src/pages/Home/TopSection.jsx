import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export const TopSection = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#B6E5FB",
            borderRadius: "10px",
            padding: "2rem",
            display: "flex",
            alignItems: 'center',
            height: "250px",
            position: "relative",
            overflow: "hidden",
            zIndex: "1"
          }}>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              lineHeight: '1.5',
              letterSpacing: '.05em',
              textAlign: 'center',
              color: 'black',
              display: 'inline',
              marginX: '3rem',
            }}>
            Keep Your Chance For the Admission &rarr;

          </Typography>

          <Button
            href="/coming-soon"
            size="large"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginLeft: "1rem",
              textAlign: "center",
              padding: "0.5rem",
              color: "black",
            }}
          >
            Start Now
          </Button>

          <Box>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "#FB6732",
                position: "absolute",
                top: "-10%",
                left: "10%"
              }}></Box>
            <Box
              sx={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                backgroundColor: "#FB6732",
                position: "absolute",
                top: "-40%",
                right: "5%"
              }}></Box>
            <Box
              sx={{
                height: "200px",
                width: "200px",
                borderRadius: "50%",
                backgroundColor: "#FB6732",
                position: "absolute",
                bottom: "-30%",
                left: "-10%",
                zIndex: "-1"
              }}></Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};