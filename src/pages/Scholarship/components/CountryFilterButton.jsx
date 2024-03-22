import React from "react";
import { Button } from "@mui/material";


const CountryFilterButton = ({ country }) => {
  return (
    
    <Button
      // sx={{
      //   background: "#7B90FF",
      //   borderRadius: "1rem",
      //   color: "#ffffff",
      //   padding: "5px 19px",
      //   fontWeight: "600",
      //   border: "1.5px solid #2F1370",
      //   "&:hover": {
      //     color: "#2f1370",
      //     textDecorationColor: "#2f1370",
      //     // boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          
      //     boxShadow:"0 2px 8px 2px rgba(178,178,178,0.48)",
      //     transform: "scale(1.05)",
      //     transition:"0.3s"
      //   },
      // }}
      variant="div"
      sx={{
        fontSize: '1.1rem',
        textTransform : 'none',
        fontWeight: 600,
        lineHeight: '1.3rem',
        letterSpacing: '0em',
        textAlign: 'center',
        borderRadius: '1.3rem',
        padding: '0.5rem 2rem',
        borderColor: '#7B90FF',
        borderWidth: '0.1rem',
        borderStyle: 'solid',
        color: '#210366',
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: '#7B90FF',
          color: 'white',
          boxShadow:"0 2px 8px 2px rgba(178,178,178,0.048)",
          
        },
      }}
     
    >
      {country}
    </Button>
  
  );
};

export default CountryFilterButton;
