import React, { useState, useEffect, useMemo } from "react";
import logo from "../../Assets/collegecue.png";
import { Button, TextField, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import backgroundImage from "./images/bg.jpg";
import { Link } from "react-router-dom";

const ComingSoonPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 28);
    return date;
  }, []);

  const [timeRemaining, setTimeRemaining] = useState(
    getTimeRemaining(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  function getTimeRemaining(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  }

  return (
    <Grid
      container
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "white",
        padding: isSmallScreen ? "0 4% 5%" : "0 4% 9%",
      }}
    >
      <Grid item xs={12}>
        <Link to="/">
          <img src={logo} alt="Collegecue logo" width="250px" height="250px" style ={{objectFit : "contain"}} />
        </Link>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "-4rem" }}>
        <Typography
          variant={isSmallScreen ? "h2" : "h1"}
          sx={{ margin: "3rem 0" }}
        >
          Coming Soon
        </Typography>

        <Grid
          container
          sx={{ gap: isSmallScreen ? "5%" : "7%", marginTop: "-2rem" }}
        >
          <CountdownSection label="Days" value={timeRemaining.days} />
          <CountdownSection label="Hours" value={timeRemaining.hours} />
          <CountdownSection label="Minutes" value={timeRemaining.minutes} />
          <CountdownSection label="Seconds" value={timeRemaining.seconds} />
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 2, maxWidth: "400px", width: "100%" }}
        >
          <Typography sx={{ marginTop: "1rem" }}>
            Subscribe now to get the latest updates
          </Typography>
          <Grid item xs={12}>
            <TextField
              type="email"
              placeholder="Enter your email"
              fullWidth
              required
              sx={{
                backgroundColor: "#fff",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<MarkEmailReadIcon />}
              fullWidth
              sx={{ height: "100%" }}
            >
              Subscribe For More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const CountdownSection = ({ label, value }) => (
  <Grid item xs="auto">
    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
      {value}
    </Typography>
    <Typography variant="body1">{label}</Typography>
  </Grid>
);

export default ComingSoonPage;
