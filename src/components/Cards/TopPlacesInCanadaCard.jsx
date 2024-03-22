import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";

export default function TopPlacesInCanada(props) {
  return (
    <Box sx={{marginBottom:'20px'}}>
      <Box sx={{
        boxSizing: "border-box",
        marginTop: '20px',
        borderRadius: '12px',
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        padding: '30px',
      }}>
        <Box sx={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
          <img src={props.img} style={{width: '80px', height: '70px'}} />
          <Typography sx={{
            fontFamily: 'poppins',
            fontStyle: 'bold',
            fontWeight: '600',
            fontSize: '12px',
            color: '#210366',
            marginTop: '1rem'
          }}>{props.place}</Typography>
        </Box>
      </Box>
    </Box>
  );
}