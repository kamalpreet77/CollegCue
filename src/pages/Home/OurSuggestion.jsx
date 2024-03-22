import React from "react";
import SuggestionCards from "../../components/Cards/SuggestionCards";
import { Card2 } from "../../data/DataLanding";
import { Box, Container, Stack, Typography } from "@mui/material";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import SearchButton from "../../components/Buttons/SearchButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperBtn from "../../components/Buttons/SwiperBtn";

const OurSuggestion = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Box
            sx={{ width: "fit-content", marginBottom: "1rem" }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: "3rem",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#160048",
                display: "inline",
              }}
            >Our Suggestion
            </Typography>
            <Box
              sx={{
                borderTop: "6px solid #7B90FF", borderRadius: "10px", display: "flex", width: "100%",
              }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.4rem",
            }}
          >
            <SearchButton />
          </Box>
        </Box>
        <Swiper
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
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
        >

          {Card2.map((val, index) => {
            return (
              <SwiperSlide key={index}>
                <SuggestionCards
                  image={val.image}
                  review_icon={val.review_icon}
                  img_logo={val.img_logo}
                  card_title={val.card_title}
                  title_text={val.title_text}
                  review_rate={val.review_rate}
                  review_cnt={val.review_cnt}
                  btn_contents={val.btn_contents}
                  btn2={val.btn2}
                  btn3={val.btn3}
                  btn4={val.btn4}
                  img_title={val.img_title}
                  img_body={val.img_body}
                />
              </SwiperSlide>
            );
          })}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "2rem",
              marginTop: "25px",
            }}
          >
            <SwiperBtn />
          </Box>
        </ Swiper>
      </Container >
    </>
  );
};

export default OurSuggestion;
