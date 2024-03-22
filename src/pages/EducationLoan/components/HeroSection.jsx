import React from "react";
import { useState } from "react";
import { Box, Button, Container,Typography } from "@mui/material";
import EducationLoanImg from "../../../Assets/Educaion-Loan.png"
import "../Education.css"

const HeroSection = () => {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "5rem",
          alignItems: "center",
          backgroundColor: "#160048",
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              height: "90vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",

            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: "row",
                justifyContent: "center",
                alignItems: 'center',
                marginTop: "1rem",
                '@media (max-width: 770px)': {
                  flexDirection: "column",
                }
              }}
            >
              {/* left section  */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "10px",
                  '@media (max-width: 770px)': {
                    justifyContent: "center",
                    alignItems: 'center',
                    textAlign: "center",
                    marginBottom: "2rem"
                  }
                }}>
                <Typography
                  sx={{
                    width: "80%",
                    color: "white",
                    fontSize: "30px",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Education loans for studies in India and abroad.
                </Typography>
                <Typography
                  sx={{
                    width: "80%",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Education loans help students afford higher education in India or abroad.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: "80px",
                    background: "#FF7900",
                    fontWeight: "500",
                    padding: "0.2rem 1rem 0.2rem 1rem",
                    color: "white",
                    textTransform: "capitalize",
                    borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
                  }} >
                  Apply
                </Button>

              </Box>
              {/* right section  */}
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <Card
                  style={{
                    width: 195,
                    height: "280px",
                    background: "white",
                    boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
                    borderRadius: 28,
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                  }}
                >
                  <img style={{
                    width: 60,
                    marginTop: 30,
                    '@media (max-width: 770px)': {
                      width: 40,
                      marginTop: 20
                    }
                  }}
                    src={cal}
                    alt=""
                  />
                  <Typography
                    style={{
                      color: "#210366",
                      fontSize: 20,
                      fontWeight: "700",
                      textTransform: "capitalize",
                      wordWrap: "break-word",
                      textAlign: "center",
                      marginTop: 18,
                      '@media (max-width: 770px)': {
                        fontSize: 16
                      }
                    }}
                  >
                    Calculate EMI's
                  </Typography>
                  <div
                    style={{
                      textAlign: "center",
                      color: "#210366",
                      fontSize: 14,
                      fontWeight: "400",
                      textWrap: "wrap",
                      marginTop: 6,
                      '@media (max-width: 770px)': {
                        fontSize: 12
                      }
                    }}
                  >
                    Wondering how many installments will you have to pay for the repayment of your education loan? Check Now!
                  </div>
                </Card>
                <Card
                  style={{
                    width: 195,
                    height: "280px",
                    background: "white",
                    boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
                    borderRadius: 28,
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                      marginTop: 30,
                      height: "auto",
                      '@media (max-width: 768px)': {
                        width: 40,
                        marginTop: 20
                      }
                    }}
                    src={Group}
                    alt=""
                  />
                  <Typography
                    style={{
                      color: "#210366",
                      fontSize: 20,

                      fontWeight: "700",
                      textTransform: "capitalize",
                      wordWrap: "break-word",
                      textAlign: "center",
                      marginTop: 18
                    }}
                  >
                    Compare Loans
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "center",
                      color: "#210366",
                      fontSize: 14,
                      fontWeight: "400",
                      textWrap: "wrap",
                      marginTop: 6,
                    }}
                  >
                    Why settle for less? Compare which bank offers the most suitable education loan for you.
                  </Typography>
                </Card>
              </Box> */}
              <Box>
                <img
                  src={EducationLoanImg}
                  alt="@BharatTech"
                  style={{ width: "300px", height: "auto" }}
                />
              </Box>
            </Box>
            {/* bottom section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2.1rem",
                alignItems: "center",
                justifyContent: "center",
                width: "90vw",
                overflow: "hidden",
                marginY: "1rem",
                '@media (max-width: 770px)': {
                  width: "auto",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: 'center',
                  textAlign: "center",
                  marginBottom: "2rem",
                  overflow: "hidden"
                }
              }}>
              <img
                style={{ width: 100, height: "auto", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1280px-State_Bank_of_India_logo.svg.png "
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://companieslogo.com/img/orig/PNB.NS_BIG-6ba17682.png?t=1611211975"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/800px-Axis_Bank_logo.svg.png"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://zeevector.com/wp-content/uploads/Canara-Bank-New-Logo-PNG-VECTOR.png"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://1000logos.net/wp-content/uploads/2021/05/IDBI-Bank-logo.png"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/BankOfBarodaLogo.svg/1200px-BankOfBarodaLogo.svg.png"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Indian_Bank_logo.svg/1200px-Indian_Bank_logo.svg.png"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Allahabad_Bank_Logo.svg/1200px-Allahabad_Bank_Logo.svg.png"
                alt=""
              />
              <img
                style={{ width: 80, height: "auto", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Union_Bank_of_India_Logo.svg/2560px-Union_Bank_of_India_Logo.svg.png"
                alt=""
              />
            </Box>
          </Box>
        </Container>
      </Box >
    </>
  );
};

export default HeroSection;
