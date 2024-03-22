import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Notifications } from "./Data";

const LatestNotification = () => {
  return (
    <Container>
      <Box
        sx={{
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0px 4px 40px 4px rgba(123, 144, 255, 0.1)",
          '@media (min-width:800px)': {
            height: '136px',
            width: '728px',
          },
          border: "2px solid #553cdf"
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: "#41355D",
          }}
        >
          Latest Notification
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: "#41355D",
          }}
        >
          {Notifications.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                gap: "2rem",
                marginLeft: "1.5rem",
                '@media (max-width:800px)': {
                  flexDirection: 'column',
                  gap: '2%',
                  marginLeft: '2%',
                },
              }}
            >
              <Box
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0px 4px 40px 4px rgba(123, 144, 255, 0.1)",
                }}
              >
                <Typography
                  sx={{
                    
                    fontWeight: "600",
                    fontSize: "0.7rem",
                    color: "#FF0000",
                  }}
                >
                  {item.date}
                </Typography>
              </Box>
              <Typography
                sx={{
                  
                  fontWeight: "600",
                  fontSize: "0.7rem",
                  color: "#41355D",
                }}
              >
                {item.content}
              </Typography>
            </Box>
          ))}
        </Typography>
      </Box>
    </Container>
  );
};

export default LatestNotification;