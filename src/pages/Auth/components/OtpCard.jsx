import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Input,
  Link,
} from "@mui/material";

const OtpCard = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otp");
  };

  return (
    <Card
      sx={{
        maxWidth: "430px",
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "none",
        border: "none",
        padding: "1rem",
        "& *": {
          fontSize: "0.75rem",
          color: "#210366",
        },
        '@media (max-width:800px)': {
          padding : '1rem',
        }
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          padding: "0px",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", fontSize: "1.4rem !important" }}
          >
            Verify Phone Number
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>
            A four digit OTP is send to{" "}
            <span style={{ color: "#FF7900" }}> 2749306297-79-79</span>
          </Typography>
        </Box>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "90%",
            color: "#210366",
            display: "flex",
            flexDirection: "column",
            gap: "0.7rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
          >
            <Typography sx={{ color: "gray" }}>OTP</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "1.5rem",
              }}
            >
              <Input
                id="otp"
                type="text"
                maxlength="1"
                required
                disableUnderline
                sx={{
                  width: "60px",
                  border: "1px solid gray",
                  borderRadius: "0.625rem", // 10px in rem
                  padding: "0.3rem 1.1875rem", // 5px 19px in rem
                }}
              />
              <Input
                id="otp"
                type="text"
                maxlength="1"
                required
                disableUnderline
                sx={{
                  width: "60px",

                  border: "1px solid gray",
                  borderRadius: "0.625rem", // 10px in rem
                  padding: "0.3125rem 1.1875rem", // 5px 19px in rem
                }}
              />
              <Input
                id="otp"
                type="text"
                maxlength="1"
                required
                disableUnderline
                sx={{
                  width: "60px",

                  border: "1px solid gray",
                  borderRadius: "0.625rem", // 10px in rem
                  padding: "0.3125rem 1.1875rem", // 5px 19px in rem
                }}
              />
              <Input
                id="otp"
                type="text"
                maxlength="1"
                required
                disableUnderline
                sx={{
                  width: "60px",

                  border: "1px solid gray",
                  borderRadius: "0.625rem", // 10px in rem
                  padding: "0.3125rem 1.1875rem", // 5px 19px in rem
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link
              href="/alredy_register"
              sx={{
                fontSize: "0.7rem",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "600",
                color: "#210366",
              }}
            >
              Could not recevied the code? resend agin in{" "}
              <span style={{ color: "#FF7900" }}>3:20</span>
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{
                maxWidth: "9.375rem",
                backgroundColor: "#FF7900",
                borderRadius: "0.625rem !important",
                padding: "0.5rem 2.5rem",
                color: "#fff",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#2f1370",
                  backgroundColor: "#fff",
                  transition: "color 0.3s ease",
                },
                '@media (max-width:800px)': {
                  textAlign : 'center',
                }
              }}
            >
              Next
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default OtpCard;
