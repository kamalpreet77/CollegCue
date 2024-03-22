import React from "react";
import { Card, CardContent, Typography, Box, Link, Grid } from "@mui/material";
import {
  Edit,
  Phone,
  MonetizationOn,
  Description,
  AccountBalance,
  Code,
} from "@mui/icons-material";
import styled from "styled-components";

const categoryCard = [
  {
    image:
      "https://jobi-nextjs.vercel.app/_next/static/media/icon_63.772e8f20.svg",
    category: "UI/UX Design",
    totalJobs: "12",
  },
  {
    image:
      "https://jobi-nextjs.vercel.app/_next/static/media/icon_64.35fa6b78.svg",
    category: "Development",
    totalJobs: "7",
  },
  {
    image:
      "https://jobi-nextjs.vercel.app/_next/static/media/icon_65.718cba66.svg",
    category: "Telemarketing",
    totalJobs: "310",
  },
  {
    image:
      "https://jobi-nextjs.vercel.app/_next/static/media/icon_68.41869509.svg",
    category: "Marketing",
    totalJobs: "420",
  },
  {
    image:
      "https://jobi-nextjs.vercel.app/_next/static/media/icon_66.64f36c76.svg",
    category: "Editing",
    totalJobs: "3",
  },
  {
    image:
      "https://jobi-nextjs.vercel.app/_next/static/media/icon_67.569964fa.svg",
    category: "Accounting",
    totalJobs: "150",
  },
];

const StyledCard = styled(Card)`
  border-radius: 48px !important;
  border: 1px solid rgba(209, 236, 231, 0.8);
  width: 160px;
  text-align: center;
  height: 210px;
  transition: transform 0.3s ease;
  &:hover {
    border-color: lightblue;
    transform: scale(1.05);
  }
  @media (max-width: 800px) {
    margin-bottom: 4%;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  color: #333;
`;

const BoldText = styled(Typography)`
  font-weight: bold;
`;

const Icon = styled.div`
  font-size: 50rem;
`;

const InnerTextSection = () => {
  return (
    <>
      <Box
        sx={{
          margin: "5%",
          maxWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          marginBottom: "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5%",
            marginTop: "8%",
            "@media (min-width:800px)": {
              marginLeft: "0%",
              marginRight: "0%",
            },
            "@media (max-width:800px)": {
              flexDirection: "column",
              textAlign: "center",
            },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "380", fontSize: "40px" }}
            >
              Most Demanding Categories
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            "@media (max-width:800px)": {
              flexDirection: "column",
            },
          }}
        >
          {categoryCard.map((card, index) => (
            <button>
            <StyledCard key={index}>
              <StyledContent>
                <Icon>
                  <img src={card.image}></img>
                </Icon>

                <BoldText variant="h6">{card.category}</BoldText>
                <Typography variant="body1">{card.totalJobs}k+ Jobs</Typography>
              </StyledContent>
            </StyledCard>
            </button>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            "@media (min-width:800px)": {
              justifyContent: "left",
            },
          }}
        >
          <Typography variant="h5" sx={{fontSize:"15px"}}>
            <Link href="#">Explore All Fields</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default InnerTextSection;
