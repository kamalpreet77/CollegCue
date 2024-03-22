import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";


const cardData = [
  {
    title: <img
      style={{
        width: "35%",

      }}
      src={require("./../Asset/Home/letter 2.png")}
      alt=""
    />,
    description: "Collect letter of admission",
  },
  {
    title: <img
      style={{
        width: "35%",

      }}
      src={require("./../Asset/Home/form 1.png")}
      alt=""
    />,
    description: "Fill the loan  Application form",
  },
  {
    title: <img
      style={{
        width: "35%",

      }}
      src={require("./../Asset/Home/document.png")}
      alt=""
    />,
    description: "Submit Documents in correct scheme",
  },
  {
    title: <img
      style={{
        width: "35%",

      }}
      src={require("./../Asset/Home/demard.png")}
      alt=""
    />,
    description: "Approved/collect demand draft",
  },
];
const Application = () => {
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          flexDirection: "column", // Set to column for smaller screens
        }}
      >
        <Box
          sx={{
            width: "90%", // Adjusted width to be a percentage of the container
            maxWidth: 1100, // Maximum width of 1100 pixels
            background: "#210366",
            borderRadius: 8,
            alignItems: "center",
            marginY: 3,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: 24, sm: 30 }, // Adjust font size for different screen sizes
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              marginY: 2,
            }}
          >
            HOW TO PROCEED WITH YOUR APPLICATION
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap", // Allow cards to wrap on smaller screens
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginY: "2rem"
            }}
          >
            {cardData.map((card, index) => (
              <Card
                key={index}
                sx={{
                  width: { xs: "90%", sm: 200 }, // Adjust card width for different screen sizes
                  height: 200,
                  background: "white",
                  borderRadius: 16,
                  display: "flex",
                  justifyItems: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Box sx={{
                    display: "flex",
                    justifyItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>{card.title}</Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#210366",
                      fontSize: 20,
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      marginTop: 2,
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

    </>
  );
};

export default Application;
