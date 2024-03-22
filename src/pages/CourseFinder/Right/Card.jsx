import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Logo from "../components/assets/Logo.png";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";

const Card = ({
  course,
  branch,
  rating,
  institution,
  year,
  degree,
  type,
  time,
  role,
  apply,
  college,
  othercollege,
  other,
  reviews,
}) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Stack
        sx={{
          borderRadius: "2rem",
          width: "100%",
          height: "auto",
          boxShadow: 3,
          "@media (max-width:800px)": {
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          },
        }}
      >
        {/* Rest of the card JSX */}
      </Stack>
    </>
  );
};

export default Card;
