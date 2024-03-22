import React from "react";
import { Box, Button, Card, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#160048",
          width: "100%",
          transition: "All 0.5s ease-in-out",
        }}
      >
        <Container maxWidth="lg">
          {/* Content */}
          <Box
            sx={{
              height: "90vh",
              display: "flex",
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: "space-evenly",
              '@media (max-width: 770px)': {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center',
                textAlign: "center",
                marginBottom: "2rem",
                marginTop: "-2rem"
              }
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                marginTop: { xs: 4, md: 0 },
                marginLeft: { xs: 0, md: 6 },
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "white",
                  fontSize: { xs: 28, md: 32 },
                  marginBottom: 2,
                  marginTop: { xs: 2, md: 4 },
                }}
              >
                Education Loans in India and Abroad
              </Typography>
              {/* Description */}
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "white",
                  fontSize: { xs: 16, md: 18 },
                }}
              >
                Education Loans are designed to extend financial assistance to
                students aspiring to pursue their higher studies in reputed
                colleges in India or Abroad.
              </Typography>
              {/* Buttons */}
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    width: { xs: "100%", md: 160 },
                    background: "#FF7900",
                    borderRadius: 2,
                    color: "white",
                    marginRight: { xs: 0, md: 2 },
                    marginBottom: { xs: 2, md: 0 },
                  }}
                >
                  Apply Now
                </Button>
                <Button
                  sx={{
                    width: { xs: "100%", md: 160 },
                    color: "#FF7900",
                    background: "white",
                    borderRadius: 2,
                  }}
                >
                  Check Eligibility
                </Button>
              </Box>
            </Box>

            {/* Right Content */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                margin: "1rem",
                gap: "1rem",
              }}
            >
              {[1, 2, 3].map((cardNumber) => (
                <Card
                  key={cardNumber}
                  sx={{
                    width: 170,
                    height: 200,
                    background: "white",
                    boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
                    padding: "0.3rem",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    '@media (max-width: 770px)': {
                      width: 130,
                    },
                  }}
                >
                  <img
                    style={{ width: 70 }}
                    src={require(`./../aseets/Home/${cardNumber === 2 ? "book" : cardNumber === 3 ? "rafiki" : "graduate"}.png`)}
                    alt=""
                  />
                  <Typography
                    sx={{
                      width: { xs: "auto", md: 142 },
                      textAlign: "center",
                      color: "#210366",
                      fontSize: 16,
                      fontWeight: "700",
                      wordWrap: "break-word",
                      '@media (max-width: 770px)': {
                        fontSize: 14,
                      },
                    }}
                  >
                    {cardNumber === 1 ? "Scholar Loan Scheme" : cardNumber === 2 ? "Student Loan Scheme" : "Global Ed- Vantage Loan Scheme"}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#210366",
                      fontSize: 14,
                      fontWeight: "400",
                      wordWrap: "break-word",
                      '@media (max-width: 770px)': {
                        fontSize: 12,
                      },
                    }}
                  >
                    {cardNumber === 1
                      ? "Why settle for less? Compare which bank offers the most"
                      : cardNumber === 2
                        ? "How many installments for your education loan repayment? Check now!"
                        : "Why settle for less? CompareWhy settle for less? Compare"}
                  </Typography>
                </Card>
              ))}
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
