import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import questions from "../Data/DataPractQues.js";
import PracticeQues from "./PracticeQues.jsx";
import OtherHousesRoundedIcon from "@mui/icons-material/OtherHousesRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AllQuesAns = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <OtherHousesRoundedIcon
            sx={{
              width: " 2.18425rem",
              height: "2.13831rem",
              color: "#7B90FF",
            }}
          />
        </Box>
        <Box>
          <ArrowForwardIosIcon sx={{ color: "#7B90FF" }} />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#2F1370",
              fontSize: "0.9375rem",
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            Practice Questions
          </Typography>
        </Box>
        <Box>
          <ArrowForwardIosIcon sx={{ color: "#7B90FF" }} />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#2F1370",
              fontSize: "0.9375rem",
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            Answers
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          paddingTop: "2rem !important",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
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
              return (
                <PracticeQues
                  key={index}
                  {...question}
                  {...ansA}
                  {...ansB}
                  {...ansC}
                  {...ansD}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AllQuesAns;
