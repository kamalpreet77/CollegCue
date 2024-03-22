import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RoundBtn = ({ image, name, noOfCollege }) => {
  return (
    <>
      <Link
        to="#"
        style={{
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            height: "150px",
            width: "150px",
            borderRadius: "2rem 1rem ",
            color: "#323C4F",
            "&:hover": {
              // borderRadius: "1rem 2rem  ",

              color: "#ffffff",
              background: "#B931FC",
              transform: "scale(1.01)",
              transition: "0.1s ",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 100,
              height: 100,
            }}
          >
            <img
              src={image}
              alt={name}
              sx={{
                width: "100%",
                // height: 80,
                objectFit: "contain",
                // objectFit: "cover",
              }}
            />
          </Box>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "0.8rem",
              lineHeight: "1.1rem",
              textAlign: "center",
              textTransform: "uppercase",
              // color: '#323C4F',
              maxWidth: 100,
              height: 30,
              marginX: "auto",
            }}
          >
            {name}
          </Typography>
          <Typography
            // variant="subtitle1"
            sx={{
              // fontStyle: 'normal',
              fontWeight: 700,
              fontSize: "0.8rem",
              lineHeight: "1.2rem",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#999999",
              maxWidth: 100,
              height: 30,
            }}
          >
            {noOfCollege}
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default RoundBtn;
