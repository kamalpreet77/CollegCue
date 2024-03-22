import { Avatar, Box, Typography, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
const CardCol = ({
  heading,
  avatar,
  userav,
  user,
  reviews,

  getbgColor,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    
      <Box

        sx={{
          display: "flex",

          flexDirection: "row",
          "@media (max-width: 768px)": {
            height: "auto",
          // marginRight:"2rem",
          // marginLeft:"2rem",
         
        }
        }}
      >
        <Box
          sx={{
            fontStyle: "normal",
            background: "#ffffff",
            padding: "1rem",
            border:"1px solid lightgrey",
            fontSize: "0.9rem",
            width: "350px",
            color: "#2f1370",
            display: "flex",
            height: "350px",

            flexDirection: "column",
            "@media (max-width: 768px)": {
              height: "auto",
          
           
          }
          }}
        >
          <Typography
            id="review_haeding"
            sx={{
              fontStyle: "normal",
              color: "#2F1370",
              fontSize: 20,
              fontWeight: "600",
              width: "100%",
              wordWrap: "break-word",
            }}
          >
            {heading}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              fontSize: "0.8rem !important",
              alignItems: "center",
            }}
          >
            <Avatar
              src={avatar}
              name={userav}
              sx={{
                width: 70,
                height: 70,
                left: 0,
                top: 0,
                borderRadius: 9999,
                bgcolor: getbgColor(userav[(0, 0)].toUpperCase()),
                textTransform: "uppercase",
              }}
            >
              {userav}
            </Avatar>

            <Typography
              id="name"
              sx={{
                color: "#2F1370",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              {user}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {reviews.map(({ Answer }, index) => {
              return (
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    color: "#2F1370",
                    fontSize: 14,
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "400",
                    wordWrap: "break-word",
                    marginTop: "1rem",
                  }}
                  kye={index}
                >
                  {Answer}
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handleClick}
              sx={{
                display: `${show ? "none" : "block"}`,
                width: 120,
                color: "#FF7900",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "400",
                textDecoration: "underline",
                wordWrap: "break-word",
                "&:hover": {
                  border: "none",
                  Border: "none",
                },
              }}
            >
              Read more
            </Button>
            <Button
              onClick={handleClick}
              sx={{
                display: `${!show ? "none" : "block"}`,
                color: "#FF7900",
                padding: "0",
                background: "none",
                Border: "none",
                width: 120,
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "400",
                textDecoration: "underline",
                wordWrap: "break-word",
                "&:hover": {
                  background: "none",
                  border: "none",
                },
              }}
            >
              Readless
            </Button>
          </Box>
        </Box>
      </Box>
    
  );
};

export default CardCol;
