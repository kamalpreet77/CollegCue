import React from "react";
import { Button } from "@mui/material";

const CountryFilterButton = (props) => {
  return (
    <Button
      sx={{
        background: "#E1EBEE",
        borderRadius: "8px",
        color: "#545AA7",
        padding: "5px 19px",
        fontWeight: "600",
        border:"1px solid lightgrey",
        "&:hover": {
          bgcolor:"white",
          textDecoration:"underline",
          color:"#FF5733",
        },
      }}
    >
      {props.name}
    </Button>
  );
};

export default CountryFilterButton;
