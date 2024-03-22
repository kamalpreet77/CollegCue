import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link, Avatar } from "@mui/material";
const MoreNewsComponent = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          height: "400px",
          borderRadius: "20px",
          backgroundColor: "white",
          margin: "1rem",
          borderRadius: "0.9rem",
          boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
          transition: "transform 0.3s, background-color 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.02)", // Scale up slightly on hover
            boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)", // Adjusted box shadow on hover
          },
        }}
      >
        <Avatar
          sx={{ borderRadius: "15px", width: "350px", height: "180px" }}
          alt=" "
          src={props.img}
        />
        <Typography
          sx={{
            textAlign: "left",
            margin: "0.5rem 1rem 0rem 1rem",
            fontSize: "0.6rem",
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#210366",
          }}
        >
          {props.date}
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            margin: "0.5rem 1rem 0rem 1rem",
            fontSize: "0.9rem",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#210366",
          }}
        >
          {props.heading}
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            margin: "0.5rem 1rem 0rem 1rem",
            fontSize: "0.6rem",
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#210366",
          }}
        >
          {props.content}
        </Typography>
        <Link href="#">
          <Typography
            sx={{
              textAlign: "left",
              margin: "0.5rem 1rem 0rem 1rem",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "400",
              color: "#FF7900",
              textTransform: "capitalize",
              textDecoration: "underline",
            }}
          >
            {props.read_link}{" "}
          </Typography>
        </Link>
        {/* Slider dots */}
        <div
          style={{
            textAlign: "center",
            marginTop: "0.5rem",
          }}
        >
          <span className="slick-dots" />
        </div>
      </Box>
    </>
  );
};

export default MoreNewsComponent;
