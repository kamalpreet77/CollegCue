import React from "react";

import CollegeCardsthree from "../../components/Cards/CollegeComponentCard";
import { Box, Container, Stack, TextField, Button } from "@mui/material";
import { CollegeCardsData } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../CustomCSS/CollegeCard.css"
import {SwiperNavButtons} from "../Exam/SwiperNavButtons"
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperBtn from '../../components/Buttons/SwiperBtn';
const CollegesCards = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          centeredSlides={true}
          breakpoints={{
            648: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          loop={true}
         
        
          autoplay={{
            delay: 9000,
            disableOnInteraction: true,
          }}
          // navigation
          pagination={{ clickable: true }}
          spaceBetween={5}
          style={{
            paddingBottom: "20px",
          }}
        >
          {CollegeCardsData.map((val, index) => {
            return (
              <SwiperSlide key={index}>
                <CollegeCardsthree
                  key={index}
                  img={val.img}
                  date={val.date}
                  icon={val.icon}
                  contents={val.contents}
                  content_link={val.content_link}
                />
              </SwiperSlide>
            );
          })}
          {/* <Button className="swiper-button-next"></Button> */}
        {/* <Button variant="text" color="primary" className="swiper-button-prev"> */}
          
        {/* </Button> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "2rem"
          }}
        >
          <SwiperBtn />
        </Box>
        </Swiper>
      </Container>
    </>
  );
};

export default CollegesCards;
