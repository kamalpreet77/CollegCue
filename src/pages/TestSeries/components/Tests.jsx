import { Box, Button, Container,Typography } from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchButton from "./SearchButton";
import CollegeArticleCard from "./CollegeArticleCard";
import { Link } from "react-router-dom";

export default function Tests() {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          marginTop: "2rem",
          justifyContent:"space-between",
        }}
      >
        
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#210366",
          }}
        >
          Online Test Series
        </Typography>
        <SearchButton />
      </Box>

      <Box
        sx={{
          width: "100%",
          height:"auto",
          borderRadius: "1rem",
          boxShadow: "0px 0px 40px 0px #7B90FF26",
          backgroundColor: "#FFFFFF",
          padding: "1rem",
          overflow:"auto",
          display:"flex",
          justifyContent:"center",
          alignItems: "center",       
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "#210366",
          }}
        >
          Looking for a one-stop solution to practice online mock tests for
          entrance exams? Then you are at the right destination. Collegecue
          provides you with a wide range of test series to help you prepare
          online for any entrance exam with ease. Get online test series for JEE
          Mains, JEE Advanced, MAT, CAT, NEET and other exams. We provide the
          latest pattern & syllabus-based Online Mock Tests with elaborate
          solutions & performance analysis for all Entrance and Board
          Examinations.
        </Typography>
      </Box>

        <Box>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "600",      
            color: "#210366",
          }}
        >
          Select Your Exam Categories
        </Typography>
        <CollegeArticleCard />
        </Box>
    
        <Link to="/jee-rank">
        <Button variant="outlined" color="primary" endIcon={<ArrowRightIcon />}>
          JEE Main 
        </Button>
        </Link>
    </Container>
  );
}
