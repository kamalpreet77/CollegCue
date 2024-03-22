import React from "react";
import { Abroad } from "../../data/DataFile";
import CardComponent from "../../components/Cards/StudyAbroadCard";
import { Box, Container, Stack, Typography } from "@mui/material";
import Heading from "../../components/Headings/Heading";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";

const StudyAbrodContainer = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            margin: "0px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          > <Box
            sx={{ width: "fit-content", marginBottom: "1rem" }}
          >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: "3rem",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#210366",
                  display: "inline",
                }}
              >Study Abroad
              </Typography>
              <Box
                sx={{
                  borderTop: "6px solid #7B90FF", borderRadius: "10px", display: "flex", width: "100%",
                }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "1rem",
            justifyItems: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" display="flex" justifyContent="center">
            {Abroad.map((val, index) => {
              return (
                <CardComponent
                  key={index}
                  img={val.imgg}
                  name={val.cardName}
                  check={val.check}
                  no={val.no}
                  fee={val.fee}
                  rank={val.ranking}
                  keyFact1={val.keyFact1}
                  keyFact2={val.keyFact2}
                  keyFact3={val.keyFact2}
                  link={val.link}
                ></CardComponent>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default StudyAbrodContainer;
