import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

function ExploreForm({ dropdownItems }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "fit-content",
        borderRadius: "30px",
        borderRight: 0,
        overflow: "none",
        backgroundColor: "#FFFFFF",
        padding: "1rem",
      }}
    >
      <Grid
        container
        sx={{
          margin: "1 auto", // Center the grid
          maxWidth: "800px", // Limit the width to prevent items from stretching too far
        }}
      >
        {dropdownItems.map((item, index) => (
          <Grid item key={index} xs={3} sm={3} md={3} sx={{ margin: "0" }}> {/* Removed spacing */}
            <Button
              component="a"
              href={item.link}
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
                padding: "1.3rem",
                transition: "transform 0.3s, filter 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: "brightness(0.8)",
                  borderRadius: "15px",
                  backgroundColor: "#FFAC1C",
                  boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.logo}
                alt="Collegecue logo"
                width="55px"
                height="55px"
              />
              <Typography
                variant="body1"
                style={{
                  color: "#160048",
                  textAlign: "center",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginTop: "0.3rem",
                  whiteSpace: hoveredItem === index ? "normal" : "nowrap",
                  width: "100%",
                  textTransform: "none",
                }}
              >
                {item.label}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ExploreForm;
