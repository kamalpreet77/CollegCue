import React from "react";
import { UpcomingExamsData } from "./Data";
import { Box, Divider, Typography } from "@mui/material";
import UpcomingExams from "../../components/Cards/UpcomingExamCard";
const UpcomingExamRender = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>
      <Box
        sx={{
          marginBottom: "40px",
          height: "auto",
          paddingY: "7px",
          paddingX: "5px",
          filter: "drop-shadow(0px 0px 40px rgba(123, 144, 255, 0.1))",
        }}
      >
        <Box
          sx={{
            border: "1px solid grey",
            boxSizing: "border-box",
            height: "57px",
            width: "330px",
            background: "#FFFFFF",
            borderBottom: "2.5px solid #7B90FF",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              color: "#210366",
              paddingTop: "6px",
              textAlign: "center",
            }}
          >
            Upcoming Exams
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid grey",
            borderTop: "none",
            width: "330px",
            background: "#FFFFFF",
            paddingBottom: "10px",
            borderRadius: "0px 0px 20px 20px",
          }}
        >
          {UpcomingExamsData.map((item, id) => {
            return (
              <>
                <UpcomingExams
                  key={id}
                  name={item.name}
                  date={item.date}
                  img={item.img}
                />
                <Divider
                  sx={{
                    marginX: "5px",
                    marginY: "8px",
                    backgroundColor: "rgba(123, 144, 255, 0.2)",
                    width: "auto",
                  }}
                />
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default UpcomingExamRender;
