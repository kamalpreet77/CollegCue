import React from "react";
import { Typography, Box, Button, Divider } from "@mui/material";
import LeftImage from "../Assets/divimgmeta@3x.png";
import CountUp from "react-countup";

const GetTheJob = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4%",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",

          width: "90vw",
          flexDirection: "row",
          gap: "0",
          "@media (max-width:800px)": {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            width: "45vw",
            height: "95vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
            "@media (max-width:800px)": {
              width: "60vw",
              height: "45vh",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            },
          }}
        >
          <img
            src={LeftImage}
            alt="LeftImage"
            style={{
              width: "100%",
              height: "100%",
              
              
            }}
          />
        </Box>
        <Box
          sx={{
            width: "45vw",
            height: "95vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#724D41",
            color: "#fff",
            padding: "3%",
            
            "@media (max-width:800px)": {
              width: "60vw",
              height: "45vh",

              borderBottomRightRadius: "20px",
              marginTop: "-45px",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "350",
              fontSize: "78px",
              textAlign: "left",
              color: "white",

              "@media (max-width:800px)": {
                fontWeight: "350",
                fontSize: "27px",
                marginTop: "-25px",
              },
            }}
          >
            Get the job of your dreams quickly.
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "2",
              textAlign: "left",
            }}
          >
            Commonly used in the graphic, print publishing industries for
            previewing visual mockups. Limited social discrimination.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              display: "flex",
              marginRight: "270px",
              bgcolor:"black",
              "@media (max-width:800px)": {
                marginRight: "180px",
              },
            }}
          >
            Find your job. Explore all
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
          width: "90vw",
          mt: 4,
          margin: "5%",
          "@media (max-width:800px)": {
            flexDirection: "row",
            alignItems: "center",
          },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "375",
              fontSize: "60px",
              "@media (max-width:800px)": {
                fontWeight: "375",
                fontSize: "40px",
              },
            }}
          >
            <CountUp end={7} duration={3} suffix='million' />
          </Typography>
          <Typography variant="p"> Completed Jobs</Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "375",
              fontSize: "60px",
              "@media (max-width:800px)": {
                fontWeight: "375",
                fontSize: "40px",
              },
            }}
          >
            <CountUp end={30} duration={3} suffix='K+' />
          </Typography>
          <Typography variant="p"> Worldwide Jobs</Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "375",
              fontSize: "60px",
              "@media (max-width:800px)": {
                fontWeight: "375",
                fontSize: "40px",
              },
            }}
          >
            <CountUp end={13} duration={3} suffix='billion' />
            
          </Typography>
          <Typography variant="p"> Dollar Payout</Typography>
        </Box>
      </Box>
      <Divider sx={{ width: "90vw", mt: 4, borderColor: "lightblue" }} />
    </Box>
  );
};

export default GetTheJob;
