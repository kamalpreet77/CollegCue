import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import { Box, Avatar } from "@mui/material";
import NewsComponentChild from "./NewsComponentChild";
import { motion } from "framer-motion";

export default function NewsComponent(props) {
  const [showAll, setShowAll] = useState(false);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.clientHeight;
      if (!showAll && height > 340) {
        setContentHeight("30px");
      } else {
        setContentHeight("auto");
      }
    }
  }, [showAll]);

  const handleToggle = () => {
    setShowAll(!showAll);
    setContentHeight(showAll ? "340px" : "auto");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          maxHeight: "500px",
          borderRadius: "0.8rem",
          backgroundColor: "#f9f9f9",
          margin: "0.1rem", // Adjusted margin here
          boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s, background-color 0.3s, box-shadow 0.3s",
          backgroundImage: "linear-gradient(135deg, #d9d9d9 0%, #f2f2f2 100%)",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.3)",
          },
          height: contentHeight,
          overflow: "hidden",
          '@media (max-width:900px)': {
            margin: '0.1rem',
            marginBottom: '5vh',
          },
          '@media (min-width:800px)': {
            height: 'auto',
          },
        }}
      >
        <Box
          ref={contentRef}
          sx={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.8rem",
            overflow: "hidden",
          }}
        >
          <Avatar
            sx={{ borderRadius: "0.8rem 0.8rem 0 0", width: "350px", height: "180px" }}
            alt=""
            src={props.img}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
            }}
          >
            {props.news.map((content, index) => (
              <NewsComponentChild key={index} content={content} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
