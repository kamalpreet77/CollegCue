import React from "react";
import CardComponent from "../../components/Cards/ExamComponentCard";
import { Box, Stack } from "@mui/system";
import { ExamCardData as Data } from "./Data";

const ExamCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgba(250, 251, 255, 1)",
        paddingBottom: "0px",
        width: "98%",
      }}
    >
      <Stack
        direction="row"
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="center"
        sx={{
          gap: "30px",
          marginTop: "1vh",
        }}
      >
        {Data.map((item) => (
          <CardComponent
            key={item.id}
            name={item.name}
            title={item.title}
            examDate={item.examDate}
            applicationDate={item.applicationDate}
            announceDate={item.announceDate}
            img={item.img}
            sx={{
              marginBottom: "20px", // Adjust this value as needed
              
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ExamCard;

