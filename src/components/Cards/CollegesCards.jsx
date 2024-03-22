import React from "react";
import { Box, Stack, Typography, Link, Button } from "@mui/material";

const CollegesCards = (props) => {
  return (
    <>
      {/* new card  */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "300px",
          height: "400px",
          marginX: "auto",
          marginBottom: "1rem",
          borderRadius: "1rem",
          backgroundColor: "white",
          paddingX: "0.5rem",
          paddingY: "0.8rem",
          border: "2px solid lightgray",
          transition: "All 0.3s",
          "&:hover": {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
          },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "180px",
            borderRadius: "1rem",
            backgroundColor: props.bgColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={props.img}
            width="200px"
            height="160px"
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginX: "2rem",
          }}
        >
          <Button
            href="/coming-soon"
            variant="text"
            sx={{
              color: "white",
              backgroundColor: "#7B90FF",
              border: 1,
              borderColor: "transparent",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                border: 1,
                borderColor: "grey.500",
              },
              fontFamily: "Poppins",
              fontSize: "0.5rem",
              fontWeight: "700",
              marginY: "0.5rem",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
              paddingX: "1rem",
              transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
            }}
          >
            {props.titles}
          </Button>
          <Button href="/coming-soon">
            <img src={props.icon} alt="icon" />
          </Button>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "1rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              marginTop: "0.5rem",
              color: "#210366",
            }}
          >
            {props.contents}
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "0.8rem",
              fontFamily: "Poppins",
              fontWeight: "500",
              marginY: "0.5rem",
              color: "#3858FC",
              height: "70px",
            }}
          >
            {props.contents_body}
          </Typography>
          <Button
            variant="text"
            href="/coming-soon"
            sx={{
              position: "absolute",
              bottom: 3,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "transparent",
              width: "200px",
              textTransform: "capitalize",
              marginY: "0.5rem",
              transition: "border-color 0.3s",
            }}
          >
            {props.content_link}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default CollegesCards;
