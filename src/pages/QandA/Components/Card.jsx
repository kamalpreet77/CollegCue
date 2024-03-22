import { Avatar, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import FlagIcon from "@mui/icons-material/Flag";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import QuestionCol from "./QuestionCol";
const Card = ({
  stream,
  cutoff,
  area,
  heading,
  avatar,
  userav,
  user,
  institution,
  posted,
  date,
  reviews,
  rateup,
  ratedown,
  share,
  ans,
  getbgColor,
}) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        border: " 1px solid lightgrey ",
        padding: "1rem",
        borderRadius: "20px",
        bgcolor: "#FFFFFF",
        "@media (max-width: 768px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          fontStyle: "normal",
          fontSize: "0.9rem",
          width: "100%",
          color: "#2f1370",
          display: "flex",
          // bgcolor:"red",
          justifyContent: "center",
          paddingLeft: "1rem",
          flexDirection: "column",
          gap: "1.5rem",
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },

        }}
      >
        <Box
          sx={{
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            display: "inline-flex",
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <Typography
            sx={{
              color: "#2F1370",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            B .Tech Computer Science and Engineering
          </Typography>
          <Typography
            sx={{
              color: "#2F1370",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            CutOff
          </Typography>
          <Typography
            sx={{
              color: "#2F1370",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            NIT Trichy Tiruchirappalli
          </Typography>
        </Box>
        <Typography
          id="review_haeding"
          sx={{
            color: "#7B90FF",
            fontsize: "1rem !important",
            width: "100%",
            fontSize: 20,
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          {heading}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            fontSize: "0.8rem",
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
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

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem",
           "@media (max-width: 768px)": {
            paddingRight:"1.5rem",
            flexDirection: "column",
          },
         }}>
            <Typography
              id="name"
              sx={{
                color: "#2F1370",
                fontSize: 14,
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              {user}
            </Typography>

            <Box sx={{ display: "flex", gap: "5rem" }}>
              <Typography
                id="intitution"
                sx={{
                  color: "#2F1370",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  wordWrap: "break-word",
                  width: 345,
                  height: 20,
                }}
              >
                {institution}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  id="posted"
                  sx={{
                    color: "#2F1370",
                    fontSize: 14,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {posted}
                </Typography>
                <Typography
                  id="date"
                  sx={{
                    color: "#2F1370",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  {date}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: `${show ? "fit-content" : "5.8 rem"}`,
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
          }}
        >
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {reviews.map(({ Answer }, index) => {
              return (
                <Box
                  sx={{
                    width: "96%",
                    height: "auto",
                    color: "#2F1370",
                    fontSize: 14,
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                  key={index}
                >
                  {Answer}
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "flex-start",
              marginLeft: "0rem",
            }}
          >
            <Button
              onClick={handleClick}
              sx={{
                display: `${show ? "none" : "block"}`,
                justifyContent: "flex-start",
                color: "#FF7900",
                fontSize: 14,
                fontWeight: "400",
                textDecoration: "underline",
                wordWrap: "break-word",
                "&:hover": {
                  border: "none",
                  Border: "none",
                },
              }}
            >
              Read more{" "}
            </Button>
          </Box>
          <Box
            sx={{
              // width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              // gap: 1,
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2px",
                flexWrap: "wrap",
              }}
            >
              <Button
                startIcon={<ThumbUpIcon />}
                onClick={() => setLike(like + 1)}
                sx={{
                  height: "20px",
                  width:"auto",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                {rateup}
              </Button>

              <Button
                onClick={() => setDislike(dislike + 1)}
                startIcon={<ThumbDownIcon sx={{color:"#FF5733"}}/>}
                sx={{
                  height: "20px",
                  width:"auto",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                
                {ratedown}
              </Button>
              <Button
              startIcon={<ShareIcon />}
                onClick={() => setLike(share + 1)}
                sx={{
                  height: "20px",
                  width:"auto",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                {share}
              </Button>
              <Button
                onClick={() => setLike()}
                sx={{
                  height: "20px",
                  width:"auto",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection:"row",
                  display: "inline-flex",
                }}
              >
                {ans}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
