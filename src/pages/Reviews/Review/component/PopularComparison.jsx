import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/iimblr.png";
import img2 from "../../assets/iimahm.png";
import img3 from "../../assets/isbhyd.png";
import img4 from "../../assets/dms.png";
import img5 from "../../assets/iimlukh.png";
import img6 from "../../assets/iitmadras.png";
import img7 from "../../assets/iitkanpur.png";
import img8 from "../../assets/iitdelhi.png";

const institutions = [
  { img: img1, name: "IIM Bangalore" },
  { img: img2, name: "IIM Ahmedabad" },
  { img: img3, name: "ISB Hyderabad" },
  { img: img4, name: "DMS IITD MBA" },
  { img: img5, name: "IIM Lucknow" },
  { img: img6, name: "IIT Madras" },
  { img: img7, name: "IIT Kanpur" },
  { img: img8, name: "IIT Delhi" },
];

export default function PopularComparison() {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "28px",
        boxShadow: "0px 4px 40px 0px #7B90FF1A",
        marginBottom: "2rem", // Add margin bottom for spacing
      }}
    >
      <Box sx={{ display: "flex", padding: "1rem" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "23px",
            letterSpacing: "0.699999988079071px",
            color: "#210366",
            flex: "1", // Take remaining space
          }}
        >
          Popular Comparison
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "18px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#7B90FF",
            alignSelf: "center", // Align to the center vertically
          }}
        >
          VIEW ALL
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexWrap: "wrap", padding: "1rem" }}>
        {/* Map over institutions */}
        {institutions.map((institution, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 0 50%", // Use flexbox to create a responsive grid (2 items per row)
              marginBottom: "1.5rem",
              padding: "0 1rem",
              boxSizing: "border-box",
            }}
          >
            <img
              src={institution.img}
              alt={institution.name}
              style={{ width: "100%", borderRadius: "14px" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "23px",
                letterSpacing: "0.699999988079071px",
                textAlign: "left",
                marginTop: "1rem",
                color: "#000",
              }}
            >
              {institution.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
