import { Box, Button, Container } from "@mui/material";
import React from "react";
import questions from "../Data/DataNeetQues.js";
import QuesNeet from "./QuesNeet.jsx";
const AllQuesNeet = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {questions.map((question, ansA, ansB, ansC, ansD, index) => {
          return <QuesNeet key={index} {...question}  {...ansA} {...ansB}{...ansC} {...ansD} />;
        })}
        <Box
          sx={{
            background: "#ffffff",
            boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
            borderRadius: "1rem",
            padding: "1rem",
            fontSize: "0.9rem",
            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        > <Button sx={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal", color: "#2f1370", borderRadius: "1rem",
        }} >
            View All
          </Button> </Box>
      </Box>
    </Container>
  );
};
export default AllQuesNeet;