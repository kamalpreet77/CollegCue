import React from "react";
import { Avatar, Box, Divider, Typography, Button, Grid } from "@mui/material";
import { BiCalendar, BiDetail } from "react-icons/bi";
import { motion } from "framer-motion";

const CardComponent = (props) => {
  return (
    <Grid item xs={12} sm={6} style={{ padding: "10px", border: "1px solid grey", borderRadius: "20px", backgroundColor: "rgb(245,248,249)" }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ scale: 0.5, opacity: 0 }}
        sx={{
          backgroundColor: "blue",
          borderRadius: "10px",
          textAlign: "left",
          margin: "auto",
          padding: "1rem",
          width: "100%",
          minHeight: "470px",
          fontSize: "16px",
          lineHeight: "18px",
          border: "2px solid black",
          boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.1)",
          "@media (max-width: 600px)": {
            width: "330px",
          },
          "&:hover .button-container button": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src={props.img}
            sx={{
              width: "60px",
              height: "60px",
            }}
          ></Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "80px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                paddingLeft: "30px",
                color: "#210366",
                fontWeight: "700",
              }}
            >
              {props.name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                paddingLeft: "30px",
                paddingTop: "8px",
                color: "#210366",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              {props.title}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            margin: "0 auto",
            marginTop: "6px",
            backgroundColor: "rgba(123, 144, 255, 0.2)",
            width: "350px",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            color: "#210366",
            fontWeight: "700",
            textAlign: "center",
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          Online Exam
        </Typography>
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "26px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  fontSize: "11px",
                  textAlign: "center",
                }}
              >
                Exam Date
                <br />
                {props.examDate}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "26px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  fontSize: "11px",
                  textAlign: "center",
                }}
              >
                Application Form
                <br />
                {props.applicationDate}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "26px",
                paddingLeft: "15px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  fontSize: "11px",
                  textAlign: "center",
                }}
              >
                Result Announce
                <br />
                {props.announceDate}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{ display: "flex", flexDirection: "column", paddingTop: "10px" }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: "8px",
              color: "#210366",
              fontWeight: "500",
            }}
          >
            Application Process{" "}
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                fill="#210366"
              />
            </svg>
          </Typography>
          <Divider
            sx={{
              margin: "0 auto",
              marginTop: "6px",
              backgroundColor: "rgba(123, 144, 255, 0.2)",
              width: "350px",
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: "8px",
              color: "#210366",
              fontWeight: "500",
            }}
          >
            Previous Year Paper{" "}
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                fill="#210366"
              />
            </svg>
          </Typography>
          <Divider
            sx={{
              margin: "0 auto",
              marginTop: "6px",
              backgroundColor: "rgba(123, 144, 255, 0.2)",
              width: "350px",
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: "8px",
              color: "#210366",
              fontWeight: "500",
            }}
          >
            Exam Pattern{" "}
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                fill="#210366"
              />
            </svg>
          </Typography>
        </Box>
        <div
          className="button-container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7B90FF",
              color: "white",
              textTransform: "none",
              width: "45%",
              "&:hover": {
                backgroundColor: "#FF8911",
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
            startIcon={<BiCalendar />}
            onClick={() => console.log("Apply Now clicked")}
          >
            Apply Now
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7B90FF",
              color: "white",
              textTransform: "none",
              width: "45%",
              "&:hover": {
                backgroundColor: "#FF8911",
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
            startIcon={<BiDetail />}
            onClick={() => console.log("Get Details clicked")}
          >
            Get Details
          </Button>
        </div>
      </motion.div>
    </Grid>
  );
};

export default CardComponent;
