import React from "react";
import { Box, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SaveAndNext from "../../SaveAndNext";

export default function Rejected() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "2rem",
        padding: "1rem",
        "@media (min-width: 600px)": {
          padding: "1rem 2rem 3rem",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <VerifiedIcon
          style={{ color: "#007F05", width: "70px", height: "70px" }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{ color: "#00538C", fontWeight: "600", textAlign: "center" }}
      >
        Upload ID card and Certificate to help us Verify Your Review
      </Typography>

      <Typography
        sx={{
          color: "#993c08",
          fontSize: "15px",
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        Your Review Has been Submitted
      </Typography>
      <Typography
        sx={{
          color: "#210366",
          fontSize: "15px",
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        Thank You for submitting the review, upload Your documents for more rewards!!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent:"center",
          gap: "1.5rem",
          padding: "2rem",
          "@media (min-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        <Box
         sx={{
          bgcolor: "#A3C1AD",
          borderRadius: "8px",
          display: "flex",
          border:"2px dotted grey",
          flexDirection: "column",
          alignItems: "center",
          height: "auto",
          maxWidth: "350px", // Adjusted maxWidth
          gap: "0.5rem",
          
          padding: "2.5rem", // Adjusted padding
          "@media (min-width: 600px)": {
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
          },
        }}
        >
          <AddPhotoAlternateOutlinedIcon style={{ width: "50px", height: "50px" }} />
          <Typography sx={{ color: "#210366", fontSize: "14px", fontWeight: "500" }}>
            Graduation
          </Typography>
          <Typography sx={{ color: "#210366", fontSize: "12px", fontWeight: "400" }}>
            click here to select
          </Typography>
        </Box>
        <Box
          sx={{
          bgcolor: "#A3C1AD",
            borderRadius: "8px",
            border:"2px dotted grey",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "350px", // Adjusted maxWidth
            gap: "0.5rem",
            height: "auto",
            padding: "2.5rem", // Adjusted padding
            "@media (min-width: 600px)": {
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
            },
          }}
        >
          <AddPhotoAlternateOutlinedIcon style={{ width: "50px", height: "50px" }} />
          <Typography sx={{ color: "#210366", fontSize: "14px", fontWeight: "500" }}>
            College ID Card
          </Typography>
          <Typography sx={{ color: "#210366", fontSize: "12px", fontWeight: "400" }}>
            click here to select
          </Typography>
        </Box>
      </Box>
      <SaveAndNext href1="/stepsix" href2="/stepsixtwo"/>
    </Box>
  );
}
