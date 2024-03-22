import { Button } from "@mui/material";
import React from "react";

const ViewMoreButton = ({ heading, onClick }) => {
  return (
    <>
      <Button
        variant="outlined"
        onClick={onClick} // Trigger the onClick function when the button is clicked
        sx={{
          width: "fit",
          height: "3rem",
          boxSizing: "border-box",
          border: "1px solid #A3C1AD",
          borderRadius: "12px",
          color: "#323c4f",
          textAlign: "center",
          justifyContent: "center",
          fontSize: "0.8rem",
          fontWeight: "900",
          textTransform: "none",
          backgroundColor: "#A3C1AD",
          "&:hover": {
            backgroundColor: "#fba862",
            border: "1px solid #fba862",
            color: "white",
          },
        }}
      >
        {heading}
      </Button>
    </>
  );
};

export default ViewMoreButton;
