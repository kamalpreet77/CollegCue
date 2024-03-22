import React from 'react';
import CollegesCards from '../../components/Cards/CollegesCards';
import { Card1 } from '../../data/DataLanding';
import { Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperBtn from '../../components/Buttons/SwiperBtn';
const TopColleges = () => {
  return (
    <>
      <Container>
      
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
          style={{
            paddingBottom: "20px",
          }}
        >
          {Card1.map((val, index) => {
            return (
              <SwiperSlide key={index}>
                <CollegesCards
                  img={val.img}
                  icon={val.icon}
                  bgColor={val.bgColor}
                  titles={val.titles}
                  contents={val.contents}
                  contents_body={val.contents_body}
                  content_link={val.content_link}
                />
              </SwiperSlide>
            );
          })}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight : "2rem"
            }}
          >
            <SwiperBtn />
          </Box>
        </Swiper>

      </Container>
    </>
  )
}

export default TopColleges;
