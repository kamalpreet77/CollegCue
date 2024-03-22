import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { registerData } from "./data";
import RegisterDetails from "./RegisterDetails";
import AuthReviewCard from "./AuthReviewCrad";

const LeftCard = () => {
  
  const fontSize = "0.875rem";

  return (
    <Card
      sx={{
        maxWidth: "25rem",
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#7B90FF",
        "& *": {
          fontSize: " 0.875rem !important",
          color: "#ffff",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "1.5rem",
          padding: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", fontSize: "1.4rem !important" }}
          >
            How Collegedunia helps you in Admission
          </Typography>
          {/*<Typography>Register to your Future</Typography>*/}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1rem",
            '@media (max-width:800px)': {
              display : 'flex',
              justifyContent : 'center',
              alignItems : 'center',
            }
          }}
        >
          {registerData.map((item, id) => {
            return (
              <RegisterDetails
                key={id}
                {...item}
              />
            );
          })}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography variant="h5"
          component="h2"
          sx={{ fontWeight: "bold", fontSize: "1.4rem !important" }}>Review</Typography>
          <AuthReviewCard fontSize={fontSize} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default LeftCard;
