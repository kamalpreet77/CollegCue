import React from 'react';
import { Box, Typography } from '@mui/material';

const RegisterDetails = (props) => {

  return (
    <Box sx={{
      width: "170px",
      height: "140px",
      backgroundColor: "#FFFFFF",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem"
    }}>
      <img src={props.icon} width="50px" height="50px" />
      <Typography sx={{
        fontFamily: "Poppins",
        fontStyle: "bold",
        fontWeight: "600",
        fontSize: "0.8rem",
        color: "#210366"
      }}>{props.heading}</Typography>
    </Box>
  )
}

export default RegisterDetails;
