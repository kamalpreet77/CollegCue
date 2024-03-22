import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ApplyNowButton = (props) => {
  return (
    <Button
      sx={{
        height: "2rem",
        width: "fit-content",
        borderRadius: "12px",
        color: "#FFFFFF",
        textAlign: "center",
        backgroundColor: "#7B90FF",
        justifyContent: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontFamily: "Poppins",
        fontSize: "0.8rem",
        fontWeight: "500",
        textTransform: "none",
        "&:hover": {
          color: "#F6F6F6",
          backgroundColor: "#210366",
        },
      }}
      component={Link}
      to={props.link}
      style={{ textDecoration: "none" }}
    >
      Apply Now
    </Button>
  );
};

export default ApplyNowButton;
