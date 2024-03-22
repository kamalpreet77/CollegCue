import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import Background from "./images/Background.jpg";
import image from "./images/img2.jpg";
import { Trending, Featured } from "./TrendingData"; // Import Trending and Featured data

const Hero = () => {
  const latestNews = [
    {
      title: "Parul University PhD Admission 2023 Open",
      description:
        "New Delhi: Parul University is inviting applications for admission to its PhD program offered in var...",
      image: image,
    },
  ];
  const bigCard = latestNews[0]; // Assuming the first news item will be displayed as a big card
  return (
    <Box
      className="hero-section"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: `
          url(${Background}) center/cover,
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          linear-gradient(120deg, #0072ff, #00c6ff)
        `,
        textAlign: "center",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Button Group */}
      <Box
      className="button-group"
      sx={{
        position: "absolute",
        top: "20px",
        left: "68%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "10px",
        zIndex: 2,
        whiteSpace: "nowrap", // Keeps content in a single line
        overflow: "hidden",   // Hides content that overflows
        textOverflow: "ellipsis", // Shows ellipsis for overflowed content
      }}
    >
        <Button variant="contained">All News</Button>
        <Button variant="contained">Admission Alert</Button>
        <Button variant="contained">College News</Button>
        <Button variant="contained">Exam News</Button>
        <Button variant="contained">Latest News</Button>
      </Box>

      <Box
        className="container"
        sx={{
          width: "90%", // Set width to 90% of the viewport
          maxWidth: "1200px", // Maximum width to ensure it doesn't get too wide
          position: "relative",
          zIndex: 1,
          margin: "0 auto", // Center align horizontally
        }}
      >
        <Box
          className="hero-content"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on medium and above
            justifyContent: "center",
            alignItems: "flex-start", // Align items at the start
          }}
        >
          {/* Main Big News Card */}
          <Box
            className="big-news-card"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              width: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and above
              margin: "0 0 20px 0", // Bottom margin for separation
              height: "450px", // Increased height to 500px
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h3"
              className="news-title"
              sx={{
                fontSize: "2rem",
                fontWeight: 600,
                color: "#333",
                marginBottom: "1rem",
              }}
            >
              {bigCard.title}
            </Typography>
            <Typography
              variant="body1"
              className="news-description"
              sx={{ fontSize: "1.2rem", color: "#666" }}
            >
              {bigCard.description}
            </Typography>
            <img
              src={bigCard.image}
              alt={bigCard.title}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                marginTop: "1rem",
                objectFit: "cover", // Ensure the image covers the space
              }}
            />
          </Box>

          {/* Divider */}
          <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />

          {/* Trending Card */}
          <Box
            className="trending-card"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              width: { xs: "100%", md: "25%" }, // Full width on small screens, 25% on medium and above
              height: "450px",
              overflow: "hidden",
              marginLeft: { xs: 0, md: "20px" }, // No margin on small screens, 20px on medium and above
            }}
          >
            <Typography
              variant="h3"
              className="trending-title"
              sx={{
                fontSize: "2rem",
                fontWeight: 600,
                color: "#333",
                marginBottom: "1rem",
              }}
            >
            </Typography>
            {/* Display the Trending data */}
            <Box>
              {Trending.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    marginBottom: "1rem",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {item.heading}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)" , fontWeight: "bold"}}>
                    {item.content1}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)" , fontWeight: "bold"}}>
                    {item.content2}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)" , fontWeight: "bold"}}>
                    {item.content3}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)", fontWeight: "bold" }}>
                    {item.content4}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)" , fontWeight: "bold"}}>
                    {item.content5}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#777", fontStyle: "italic" , fontWeight: "bold"}}
                  >{`Date: ${item.date}`}</Typography>
                  {index !== Trending.length - 1 && <Divider sx={{ margin: "1rem 0" }} />}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Divider */}
          <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />

          {/* Featured news */}
          <Box
            className="trending-card"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              width: { xs: "100%", md: "25%" }, // Full width on small screens, 25% on medium and above
              height: "450px",
              overflow: "hidden",
              marginLeft: { xs: 0, md: "20px" }, // No margin on small screens, 20px on medium and above
            }}
          >
            <Typography
              variant="h3"
              className="trending-title"
              sx={{
                fontSize: "2rem",
                fontWeight: 600,
                color: "#333",
                marginBottom: "1rem",
              }}
            >
            </Typography>
            {/* Display the Featured data */}
            <Box>
              {Featured.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    marginBottom: "1rem",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {item.heading}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)", fontWeight: "bold" }}>
                    {item.content1}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)", fontWeight: "bold" }}>
                    {item.content2}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)" , fontWeight: "bold"}}>
                    {item.content3}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)" , fontWeight: "bold"}}>
                    {item.content4}
                  </Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Typography variant="body1" sx={{ color: "rgb(29,156,253)", fontWeight: "bold" }}>
                    {item.content5}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#777", fontStyle: "italic", fontWeight: "bold" }}
                  >{`Date: ${item.date}`}</Typography>
                  {index !== Featured.length - 1 && <Divider sx={{ margin: "1rem 0" }} />}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
