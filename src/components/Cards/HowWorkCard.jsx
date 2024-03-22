import { Box, Button } from "@mui/material";
import React from "react";

const HowWorkCard = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          width: "300px",
          height: "auto",
          marginY: "1.5rem",
          marginX: "1rem",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "200px",
            borderRadius: "1rem 2rem 1rem ",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
            transition: "background 0.3s ease",
            boxShadow: '0 4px 8px 0 rgba(255, 255, 255, 0.1), 0 6px 20px 0 rgba(255, 255, 255, 0.15), 0 0 0 3px rgba(30, 58, 138, 0.2);',
            "&:hover": {
              
              background: "linear-gradient(to right, #7B90FF, #4A61FF)",
              transition: "background 0.3s ease",
              transform:"scale(1.02)",
              border: "2px solid #1E3A8A", 
            },
          }}
        >
          <img width="100px" height="80px" src={props.img} alt="" />
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0.6rem",
            backgroundColor: "#7B90FF",
            color: "white",
            paddingY: "0.7rem",
            textTransform: "capitalize",
            textAlign: "center",
            width: "100%",
            marginX: "auto",
    

            "&:hover": {
              background: "linear-gradient(to right, #FFA07A, #FF6347)",
              transform:"scaleY(1.01) "
              
            },
          }}
        >
          {props.name}
        </Button>
      </Box>
    </>
  );
};

export default HowWorkCard;
