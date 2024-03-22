import React from "react";
import { Box, Typography, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import RadioGroupRating from "../../../../components/RadioGroupRating";


export default function Rejected() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "centre",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "2rem",
        bgcolor: "#D9E4EC",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        padddingTop: "1rem",
        paddingBottom: "3rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
       <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "2rem",
    bgcolor: "#D9E4EC",
    padding: "2rem",
    "@media (max-width: 600px)": {
      padding: "1rem",
    },
  }}
>
  <VerifiedIcon
    sx={{
      color: "#007F05",
      width: "70px",
      height: "70px",
      "@media (max-width: 600px)": {
        width: "50px",
        height: "50px",
      },
    }}
  />
  <Typography variant="h6" sx={{ color: "#6A5ACD", fontWeight: "600" }}>
    Thank You For Your Response
  </Typography>

  <Typography
    sx={{ color: "#210366", fontSize: "15px", fontWeight: "400" }}
  >
    Your Review Has been Submitted
  </Typography>
</Box>

      <Box
        sx={{
          marginTop: "2rem",
          bgcolor: "#FFFFFF",
          boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15)",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          borderRadius: "10px",
        }}
      >
        <Box>
          <TaskOutlinedIcon sx={{ width: "70px", height: "70px" }} />
        </Box>
        <Typography
          sx={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "1.5rem",
            color: "#210366",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Please Verify Identity as Student of Lovely Proffesional University -
          [LPU]
        </Typography>
        <Button
          variant="contained"
          style={{
            width: "200px",
            height: "40px",
            marginTop: "1rem",
            borderRadius: "12px",
            backgroundColor: "orange",
            color: "white",
            marginRight: "1rem",
            marginLeft: "1rem",
          }}
        >
          Upload
        </Button>
      </Box>
      
      <Box
        sx={{
          marginTop: "2rem",
          bgcolor: "#FFFFFF",
          boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15)",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          borderRadius: "10px",
        }}
      >
        <Box>
          <HandshakeOutlinedIcon sx={{ width: "70px", height: "70px" }} />
        </Box>
        <Typography
          sx={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "1.5rem",
            color: "#210366",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Please Verify Identity as Student of Lovely Proffesional University -
          [LPU]
        </Typography>
        <Button
          variant="contained"
          style={{
            width: "200px",
            height: "40px",
            marginTop: "1rem",
            borderRadius: "12px",
            backgroundColor: "orange",
            color: "white",
            marginRight: "1rem",
            marginLeft: "1rem",
          }}
        >
          Register
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          bgcolor: "#FFFFFF",
          boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15)",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          borderRadius: "10px",
        }}
      >
       
        <Typography
          sx={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            color: "#210366",
            fontSize: "20px",
            fontWeight: "600",
            flexWrap:"wrap"
          }}
        >
          Check your email for furthur communication from CollegCue, aslo Remember to check spam and allow us
        </Typography>
        
       
      </Box>
      <RadioGroupRating/>
     
     
    </Box>
  );
}
