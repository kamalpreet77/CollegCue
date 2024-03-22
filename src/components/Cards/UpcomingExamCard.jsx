import * as React from "react";
import { Avatar, Box, Typography, Button } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function UpcomingExams(props) {
  return (
    <div style={{ 
      backgroundColor: "",
      width: "330px",
      paddingY: "10px"
     }}>
      {/* Importing fonts */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>

      {/* Main container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "300px",
          height: "auto",
          gap: "10px",
          marginX: "10px"
        }}
      >
        {/* Avatar */}
        <Avatar
          src={props.img}
          sx={{
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            marginTop: "5px",
          }}
        />

        {/* Content section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "280px",
            gap: '5px'
          }}
        >
          {/* Exam name */}
          <Typography
            sx={{
              width: "100%",
              // marginLeft: "32px",
              // marginRight: "3px",
              fontFamily: "Inter",
              fontSize: "14px",
              color: "#210366",
              fontWeight: "500",
              lineHeight: "18px",
            }}
          >
            {props.name}
          </Typography>

          {/* Exam date */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "4px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "4px",
                width: "auto",
              }}
            >
              <CalendarTodayOutlinedIcon
                color="primary"
                fontSize="small"
                sx={{
                  fontSize: "15px",
                }}
              />
              <Typography
                color="primary"
                sx={{
                  width: "auto",
                  fontFamily: "Inter",
                  fontSize: "10px",
                  fontWeight: "400",
                  lineHeight: "16px",
                }}
              >
                {props.date}
              </Typography>
            </Box>

            {/* Button for exam type */}
            <Button
              variant="text"
              sx={{
                paddingX: "5px",
                fontSize: "8px",
                backgroundColor: "#7B90FF",
                color: "white",
                textWrap: "nowrap",
                marginLeft : "20px",
                textTransform: "capitalize",
                "&:hover": {
                  background: "#f57005",
                  color: "#FFFFFF",
                },
              }}
            >
              Online Exam
            </Button>
          </Box>
        </Box>
      </Box>

    </div>
  );
}
