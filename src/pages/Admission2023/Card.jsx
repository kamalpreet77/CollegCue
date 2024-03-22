import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";

const Card = (props) => {
  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
          backgroundColor: "white",
          border: "2px solid lightgray",
          width: "270px",
          height: "390px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          margin: "0.5rem",
          paddingBottom: "1.5rem",
          paddingX: "0.5rem",
          paddingY: "0.8rem",
          textAlign: "left",
          position: "relative",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        "&:hover": {
          // backgroundColor: "#FBA862",
          transform: "scale(1.01)",
          transition: "all 0.5s",
          boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px",
        },
        }}
      >
        <Avatar
          src={props.imag}
          sx={{
            height: "150px",
            width: "100%",
            borderRadius: "20px",
            backgroundColor: "white",
            margin: "0rem",
            padding: "0rem",
          }}
        ></Avatar>
        {/* Content */}
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "0.5rem 1rem",
              padding: "3px",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "sans-serif",
                fontWeight: "700",
                letterSpacing: "0rem",
                fontSize: "0.7rem",
                lineHeight: "0.8rem",
                color: "#210366",
              }}
            >
              {props.course}
            </Typography>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  textAlign: "right",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  letterSpacing: "0rem",
                  fontSize: "0.6rem",
                  lineHeight: "0.8rem",
                  color: "#210366",
                }}
              >
                {props.datee}
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              margin: "1rem",
              fontFamily: "sans-serif",
              fontWeight: "600",
              letterSpacing: "0.03rem",
              fontSize: "0.8rem",
              lineHeight: "1rem",
              color: "#210366",
            }}
          >
            {props.data}
          </Typography>
          <Typography
            sx={{
              margin: "0.5rem 1rem",
              fontFamily: "sans-serif",
              fontWeight: "600",
              letterSpacing: "0rem",
              fontSize: "0.7rem",
              lineHeight: "0.7rem",
              color: "#210366",
              padding: "3px",
            }}
          >
            {props.about}
          </Typography>
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7B90FF",
            borderRadius: "28px",
            height: "2rem",
            color: "white",
            marginTop: "2rem",
            alignSelf: "center",
            padding: "1rem 1.3rem",
            textAlign: "center",
            justifyContent: "center",
            fontFamily: "Poppins",
            fontSize: "0.8rem",
            fontWeight: "600",
            width: "fit",
            "&:hover": {
              backgroundImage: "#160048",
              backgroundColor: "white",
              color: "black",
              transform: "scale(1.125)",
              borderColor: "rgba(255, 255, 255, 0.9)",
              transition: "all 1s ease",
              boxShadow:
                "box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
            },
            position: "absolute",
            bottom: "1.5rem",
          }}
        >
          Apply Now
        </Button>
      </Box>
    </>
  );
};

export default Card;
