import { Box, Typography, IconButton } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";

const TrustedBy = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "2% 0%",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "380",
                fontSize: "40px",
                lineHeight: "2",
              }}
            >
              Trusted by leading startups.
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label="previous" sx={{ color: "black" }}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton aria-label="next" sx={{ color: "black" }}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2%",
            "@media (max-width:800px)": {
              flexDirection: "column",
              maxWidth: "100%",
            },
          }}
        >
          <Box
            sx={{
              width: "40vw",
              height: "70vh",
              backgroundColor: "#724D41",
              borderRadius: "30px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-start",
              padding: "5%",
              "&:hover": {
                transition: "ease-out",
                backgroundColor: "#4582AD",
              },
              "@media (max-width:800px)": {
                width: "100%",
              },
            }}
          >
            <Box>
              <img src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_27.493fb16e.png&w=256&q=75"></img>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontWeight: "400",
                  fontSize: "30px",
                  lineHeight: "1.5",
                }}
              >
                "Seattle Opera Simplifies Performance Planning with CollegeCue
                Signature"
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="p"
                sx={{ color: "white", textAlign: "left" }}
              >
                {" "}
                John Doe, Lead Manager
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%", // Set width to 80vw
                height: "1px", // Set height to match the left box
                backgroundColor: "#fff",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%", // Occupy the entire width
                marginTop: "10px",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "white", marginRight: "10px", fontSize: "20px" }}
                >
                  4.8 Awesome
                </Typography>{" "}
                {/* Added margin-right */}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      marginRight: index < 4 ? "5px" : 0,
                    }}
                  /> // Added margin-right for filled stars
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "40vw",
              height: "70vh",
              backgroundColor: "#724D41",
              borderRadius: "30px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-start",
              padding: "5%",
              "&:hover": {
                transition: "ease-out",
                backgroundColor: "#4582AD",
              },
              "@media (max-width:800px)": {
                width: "100%",
                marginTop: "2%",
              },
            }}
          >
            <Box>
              <img src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_28.5c42659c.png&w=256&q=75"></img>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontWeight: "400",
                  fontSize: "30px",
                  lineHeight: "1.5",
                }}
              >
                "Seattle Opera Simplifies Performance Planning with CollegeCue
                Signature"
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="p"
                sx={{ color: "white", textAlign: "left" }}
              >
                {" "}
                Obama,Project Manager
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%", // Set width to 80vw
                height: "1px", // Set height to match the left box
                backgroundColor: "#fff",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%", // Occupy the entire width
                marginTop: "10px",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "white", marginRight: "10px", fontSize: "20px" }}
                >
                  4.5 Excellent
                </Typography>{" "}
                {/* Added margin-right */}
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      marginRight: index < 4 ? "5px" : 0,
                    }}
                  /> // Added margin-right for filled stars
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TrustedBy;
