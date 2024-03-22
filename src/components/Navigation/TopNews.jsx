import React, { useState } from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import newsdata from "./NewsData.js";
import CountryFilterButton from "../Buttons/CountryFilterButton.jsx";

function TopNews() {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpandedItem = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const isExpanded = (itemId) => {
    return expandedItems.includes(itemId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "fit-content",
        borderRadius: "30px",
        borderRight: 0,
        overflow: "none",
        gap:"1rem",
        backgroundColor: "#FFFFFF",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderBottom:"1px solid lightgrey",
        //   borderTop:"1px solid lightgrey",
          backgroundColor: "#FFFFFF",
          flexDirection:"row",
          gap:"1.5rem",
          justifyContent:"flex-start",
          padding: "1rem",
        }}
      >
        <CountryFilterButton
          
           name="state" />
         <CountryFilterButton
          
          name="Nation" />
      
       

      </Box>
      {newsdata.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            borderBottom: "1px solid lightgrey",
            alignItems: "center",
            padding: "1rem",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              fontSize: "0.8rem",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              "@media (max-width: 768px)": {
                flexDirection: "column",
              },
            }}
          >
            <Avatar
              src={item.avatar}
              name={item.heading}
              sx={{
                width: 70,
                height: 70,
                left: 0,
                top: 0,
                borderRadius: 9999,
                bgcolor: "orange",
                textTransform: "uppercase",
              }}
            >
              {item.userav}
            </Avatar>
            <Typography
              sx={{
                fontSize: "18px",
                flexWrap: "wrap",
                color: "#002D62",
                fontWeight: "bold",
              }}
            >
              {item.heading}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "15px",
              paddingTop: "1rem",
              color: "#6082B6",
              fontWeight: "500",
              wordWrap: "break-word",
              maxHeight: isExpanded(item.id) ? "none" : "3.6rem",
              overflow: "hidden",
            }}
          >
            {item.Answer}
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignContent: "center",
              flexDirection: "row",
              gap: "4rem",
              "@media (max-width: 768px)": {
                flexDirection: "column",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                paddingTop: "1rem",
                color: "#A3C1AD",
                fontWeight: "500",
                wordWrap: "break-word",
                overflow: "hidden",
              }}
            >
              {item.date}
            </Typography>
            <Button
              onClick={() => toggleExpandedItem(item.id)}
              sx={{
                color: "#FF7900",
                fontSize: 14,
                fontWeight: "400",
                textDecoration: "underline",
                wordWrap: "break-word",
                marginTop: "0.5rem",
                display: isExpanded(item.id) ? "none" : "block",
              }}
            >
              Read more
            </Button>
            <Button
              onClick={() => toggleExpandedItem(item.id)}
              sx={{
                color: "#FF7900",
                fontSize: 17,
                fontWeight: "500",
                textDecoration: "underline",
                wordWrap: "break-word",
                marginTop: "0.5rem",
                display: isExpanded(item.id) ? "block" : "none",
              }}
            >
              Read less
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default TopNews;
