import { Box, Typography, Link, Button } from "@mui/material";
import React from "react";
import img from "../images/3.png";
import BoldHeading from "../../../components/Headings/BoldHeading";
import Orangespan from "../../../components/Headings/Orangespan";
import trophy from "../images/shape-2.svg";
import FilledButton from "./FilterButton";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

import border from "../images/border.png";
import mg from "../images/Write_review_image.png";

const EarnUpto = () => {
  console.log(img, "kkk");
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        color: "#2F1370",
        width: "100%",
        bgcolor: "white",
        "@media (max-width:800px)": {
          marginLeft: "4vw",
          marginRight: "4vw",
        },
      }}
    >
     
      <Box
        sx={{
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "4rem",
        }}
      >
        <Box
          sx={{
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            width: "100%",
            padding: "4rem",
          }}
        >
          <img
            src={mg}
            style={{
              width: "100%",
              height: "auto",
              verticalAlign: "middle",
            }}
          />
        </Box>
        <Box
          sx={{
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "4rem",
          }}
        >
          <BoldHeading color="black">Write a Review</BoldHeading>
          <img
            src={border}
            style={{
              marginTop: "-0.5rem",
              marginBottom: "1.5rem",
            }}
          />
          <FilledButton color="#7B90FF">Start Writing</FilledButton>
          <Box
            sx={{
              marginTop: "2rem",
              padding: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: "2rem",
            }}
          >
            <Button
              href="/"
              sx={{
                textDecoration: "underline",
                curser: "pointer",
                fontSize: "1.5rem",
              }}
            >
              <Orangespan>Read Guidelines</Orangespan>
            </Button>
            <Box sx={{ display: "flex", gap: "1%" }}>
              <Box sx={{ padding: "1rem", textAlign: "center", flexDirection:"row", }}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    fontSize:"1.5rem",
                  }}
                >
                  <RateReviewOutlinedIcon
                    sx={{ color: "#FFA500", marginRight: "1rem" }}
                  />
                  13.1k+ Reviews
                  
                </Typography>
               
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              padding: "2rem",
              color: "black",
            }}
          >
            <Typography variant="h5" sx={{ wordSpacing: "0.3rem" }}>
              We have <Orangespan>400+</Orangespan> courses and{" "}
              <Orangespan>15k+ </Orangespan>registered Students
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              bibendum justo sit amet lacus fermentum, id suscipit urna
              ultrices. Etiam euismod hendrerit aliquam.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EarnUpto;
