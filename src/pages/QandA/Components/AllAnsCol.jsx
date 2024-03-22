import { Box,Typography , Container} from "@mui/material";
import React from "react";
import reviews from "./DataCol.jsx";
import CardCol from "./CardCol.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
const  AllAnsCol = ({ getbgColor }) => {
  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent:"flex-start",
        height: "auto",
        gap: "1rem",
        marginBottom: "2rem",
        "@media (max-width: 768px)": {
          height: "auto",
        marginRight:"2rem",
        marginLeft:"2rem",
       
      }
      }}
    >       
    <Box sx={{marginTop:1}}>
      <Typography
        sx={{
          color: "#210366",
          fontSize: 30,
          fontWeight: "600",
          wordWrap: "break-word",
          
        }}
      >
        Most Viewed Questions
      </Typography>
    </Box>
    
    <Box >
       
        
          {reviews.map((Answer,index) => {
            return (
              
                <CardCol key={index} {...Answer} getbgColor={getbgColor} />
             
            );
          })}

      </Box>
     
    </Box>
  );
};

export default AllAnsCol;