import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import QuizIcon from "@mui/icons-material/Quiz";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

export default function Cards({ attempts, headings }) {
  return (
    <>
      <Card
        sx={{
          width: "20rem",
          borderRadius: "2rem",
          boxShadow: "0px 0px 40px 0px #7B90FF26",
          backgroundColor: "#FFFFFF",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "left",
                color: "#210366",
              }}
            >
              {headings}
            </Typography>
          </Box>
          <Box>
              <ShareIcon sx={{color:"#4285f4"}} />
          </Box>
        </CardContent>
        <Divider />

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <AccessAlarmIcon sx={{ color: "#7B90FF" }} />
            <Typography
              sx={{
                marginLeft: "1rem",
              }}
            >
              {" "}
              180 Min{" "}
            </Typography>
          </Box>
          <img src="./Line 64.png" alt="" />
          <Box sx={{ display: "flex" }}>
            <QuizIcon sx={{ color: "#4285f4" }} />
            <Typography
              sx={{
                marginLeft: "1rem",
              }}
            >
              {" "}
              75 Ques{" "}
            </Typography>
          </Box>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <img src="./Vector (1).png" alt="" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "left",
              }}
            >
              {attempts}
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: "120px",
              borderRadius: "12px",
              backgroundColor: "#FF7900",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "16.7px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#FFFFFF",
                textTransform: "capitalize",
              }}
            >
              Start{" "}
            </Typography>{" "}
            <ArrowRightIcon
              sx={{
                color: "#FFFFFF",
              }}
            />{" "}
          </Button>

          <Button
            sx={{
             
              height: "40px",
              backgroundColor: "#7B90FF",
              borderRadius: "12px",
              color: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                width: "84px",
                height: "17px",

                textTransform: "capitalize",

                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "17px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              {" "}
              Download{" "}
            </Typography>
            <SaveAltIcon
              sx={{
                width: "15px",
              }}
            />{" "}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
