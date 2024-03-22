import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

const FaqPage = () => {
  const FaqData = [
    {
      id: 1,
      ques: "How does the free trial work?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      ques: "How do you find different criteria in your process?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      ques: "What do you look for in a founding team?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      ques: "Do you recommend Pay as you go or Pre pay?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 5,
      ques: "What do I get for $0 with my plan?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <Box
      sx={{
        marginTop: "10vh",
        maxWidth: "100vw",
        marginBottom: "10vh",
        
        "@media (min-width: 600px)": { maxWidth: "80vw" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#210366",
          textAlign:"center",
          paddingTop: "1rem",
          fontWeight: "380", fontSize: "40px" ,
          fontFamily: "Poppins, sans-serif",
          marginLeft: "5vw",
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ marginTop: "1rem", marginBottom: "2rem", marginLeft: "5vw" }}>
        {FaqData.map(({ id, ques, ans }) => (
          <Accordion key={id}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    backgroundColor: "#7B90FF",
                    color: "#fff",
                    borderRadius: "100%",
                  }}
                />
              }
              aria-controls={`panel${id}bh-content`}
              id={`panel${id}bh-header`}
            >
              <Typography sx={{ color: "#2F1370", fontSize: "1rem" }}>
                 {ques}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: "1px solid #808080",
                width: "98%",
                margin: "0 auto",
              }}
            >
              <Typography
                sx={{ color: "#2F1370", fontSize: "1rem", fontWeight: 500 }}
              >
                {ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FaqPage;
