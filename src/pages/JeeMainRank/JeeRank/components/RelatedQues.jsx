import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import React from "react";

export default function RelatedQues({ ques, ans, avatar, name, avcolor }) {
  return (

    
      <Box
        sx={{
          width: "100%",
          padding: "0.5rem",
          boxShadow: "0px 0px 40px 0px #7B90FF26",
          margin:"0.5rem 0rem 0.5rem",
          background:"linear-gradient(to bottom, #FFFFFF, #F0F0F0);"
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "600",
            textAlign: "left",
            color: "#210366E5",
          }}
        >
          {ques}
        </Typography>

        <Box sx={{ display: "flex", marginTop: "1rem" }}>
          <Avatar sx={{ bgColor: "{avcolor}" }}>{avatar}</Avatar>
          <Typography sx={{ marginTop: "10px", marginLeft: "1rem" }}>
            {name}
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "400",
              textAlign: "left",
              color: "#210366",
              width: "100%",
              height: "80px",
              marginTop: "2rem",
            }}
          >
            {ans}
          </Typography>

        </Box>
      </Box>
      
   
  );
}
