import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CounsellorsCard = (props) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "center",
          height: "auto",
          padding: "20px",
          borderRadius: "1rem",
          backgroundColor: "transparent",
          boxSizing: "border-box",
          gap: "20px",
          overflow: "hidden",

          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to top, #4B0082, #1E90FF)",
            opacity: 0,
            transition: "opacity 0.3s",
            zIndex: -1,
          },

          "&:after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to top, #1E90FF, #00FF00)", // Different color for ::after
            opacity: 0,
            zIndex: -1,
          },

          "&:hover": {
            transform: "scale(1.05)",
            transition: "opacity 0.3s",
          },
        }}
      >
        <Box sx={{}}>
          <img
            width="300px"
            height="300px"
            src={props.image}
            alt=""
            sx={{
              aspectRatio: "1 / 1",
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: "1.6rem",
            fontWeight: 600,
            fontStyle: "bold",
            lineHeight: "2rem",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
            textTransform: "capitalize",
          }}
        >
          {props.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: 600,
            fontStyle: "bold",
            lineHeight: "1.2rem",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
            textTransform: "capitalize",
          }}
        >
          {props.designation}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: 600,
            fontStyle: "bold",
            lineHeight: "1.2rem",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
            textTransform: "capitalize",
          }}
        >
          {props.exp}
        </Typography>
        <Button
          variant="text"
          sx={{
            fontFamily: "Poppins",
            fontSize: "0.9rem",
            fontWeight: 600,
            textTransform: "capitalize",
            fontWeight: "500",
            borderRadius: "12px",
            boxSizing: "border-box",
            color: "#FFFFFF",
            backgroundColor: "#7B90FF",
            padding: "0.5rem 1rem",
            "&:hover": {
              background: "linear-gradient(to right, #FFA07A, #FF6347)",
              color: "#FFFFFF",
            },
          }}
        >
          Fix an Appointment
        </Button>
      </Box>
    </>
  );
};

export default CounsellorsCard;
