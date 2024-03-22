import React from "react";
import { Button } from "@mui/material";

const FilterButton = ({ children, onClick }) => {
  return (
    <Button
      sx={{
        display: "flex",
        textAlign : 'center',
        // justifyContent : 'center',
        // alignItems: "center",
        gap: "0.5rem",
        background: "#FFF",
        borderRadius: "1.5rem",
        color: "#2f1370",
        // textWrap : 'wrap',
        padding: "5px 19px",
        height: "2.5rem",
        fontWeight: "600",
        border: "2px solid #7B90FF",
        textTransform: "capitalize",
        "&:hover": {
          // background: "#FF7900",
          // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderColor: "#FF7900",
          // color: "#fff",
          // textDecorationColor: "#2f1370",
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default FilterButton;
