import React from "react";
import Trending from "./components/Trending";
import AllRelatedQues from "./components/AllRelatedQues";
import RankQuestion from "./components/RankQuestion";
import AllRankQues from "./components/AllRankQues";
import RightSection from "./components/RightSection";
import { Box, Container, Grid } from "@mui/material";
import ViewedQues from "./components/ViewedQues";
import AllViewedQues from "./components/AllViewedQues";
import Ad from "./components/Ad";
import HeadingSection from "./HeadingSection";
import RadioGroupRating from "../../PracticeQuestion/Component/IIMBangaloreRating";

export default function JeeRank() {
  return (
    <>
      <Container>
        <HeadingSection />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Trending />
            <Ad />
          <RightSection />
          </Grid>
          <Grid item xs={12} md={9}>
            <AllRelatedQues />
            <AllRankQues />
            <AllViewedQues />
            <RadioGroupRating />
          </Grid>
        </Grid>

        <Box>
        </Box>
      </Container>
    </>
  );
}
