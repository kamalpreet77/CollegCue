import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BlueButton = (props) => {
  return (
    <Button
      sx={{
        height: "35px",
        width: "fit-content",
        borderRadius: "10px",
        color:"#5A4FCF",
        padding:"1rem",
        textAlign: "center",
        backgroundColor:props.isHovered? "#FFCC99 ": "#FFFFFF",
        justifyContent: "center",
        fontSize: "0.8rem",
        fontWeight: "600",
        textTransform: "none",
        border:"1px solid #B0C4DE",
        "&:hover": {
          color: "#CC7711",
          backgroundColor: " #FFC87C",
          border:"none",
        },
      }}
      component={Link}
      to={props.link}
      style={{ textDecoration: "none" }}
    >
      {props.text}
    </Button>
  );
};

export default BlueButton;
