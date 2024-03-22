import React from "react";
import { Box, Typography } from "@mui/material";
import { Persondata, MainHeadData, Dates, Paragraphs } from "../Data";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CourseFee from "../../CourseFee/CourseFee";
import TrendingNews from "../../TrendingNews/TrendingNews";

function InfoPage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {Persondata.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={item.pic}
            alt="logo"
            style={{
              borderRadius: "50px",
              width: "8%",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                gap: "0.2rem",
              }}
            >
              <Typography
                sx={{ fontSize: "15px", fontWeight: 600, color: "#89CFF0" }}
              >
                {item.name}
              </Typography>
              <CheckCircleIcon sx={{ color: "#097969" }} />
            </Box>
            <Typography
              marginTop="0.7rem"
              sx={{ fontSize: "15px", fontWeight: 600, color: "#00008B" }}
            >
              Updated on - {item.date}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography
          varient="h2"
          sx={{ fontSize: "25px", fontWeight: 600, color: "#00008B" }}
        >
          What's new at IIM Banglore
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {MainHeadData.map((item) => (
          <Typography
            sx={{ fontSize: "18px", fontWeight: 300, color: "#00008B" }}
            key={item.id}
          >
            {item.typo}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        {Dates.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "#097969" }}
            >
              {item.dates} :{" "}
            </Typography>
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "#6495ED" }}
            >
              {" "}
              {item.typo}
            </Typography>
          </Box>
        ))}

      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {Paragraphs.map((item) => (
          <Typography
            sx={{ fontSize: "18px", fontWeight: 300, color: "#00008B" }}
            key={item.id}
          >
            {item.typo}
          </Typography>
        ))}
      </Box>
      <CourseFee />
      <TrendingNews/>
    </Box>
  );
}

export default InfoPage;
