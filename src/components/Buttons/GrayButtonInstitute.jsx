import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const GrayButton = (props) => {
  return (
    <Button
      sx={{
        height: "35px",
        width: "fit-content",
        borderRadius: "10px",
        color: "#F05E23",
        padding: "1rem",
        textAlign: "center",
        backgroundColor:props.isHovered? "#FFCC99 ": "#FFFFFF",
        justifyContent: "center",
        fontSize: "1rem",
        fontWeight: "600",
        textTransform: "none",
        textDecoration: "underline",
        "&:hover": {
         
          textDecoration: "underline",
          bgcolor:"#FFFFFF",
          fontSize:"1.2rem",
        },
      }}
      component={Link}
      to={props.link}
    >
      {props.text}
    </Button>
  );
};

export default GrayButton;
