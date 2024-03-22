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
        color: "white",
        padding: "1rem",
        textAlign: "center",
        backgroundColor: "#F05E23",
        justifyContent: "center",
        fontSize: "1rem",
        fontWeight: "600",
        textTransform: "none",
        "&:hover": {
          bgcolor:"#FFFFFF",
          border:"1px solid lightgrey",
          color:"#F05E23",
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
