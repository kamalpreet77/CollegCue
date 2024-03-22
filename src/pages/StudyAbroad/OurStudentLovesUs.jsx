import { Box, Container } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'
import { Videos } from "../../data/DataFile";
import OurStudentCard from '../../components/Cards/OurStudentCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const OurStudentLovesUs = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{
          margin: "2rem 0",
        }} >
          <HeadText headText={"Our Student Loves us"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {Videos.map((data, id) => (
            <OurStudentCard key={id} thumb={data.thumbnail} title={data.title} sub={data.subtitle} link={data.youtubeLink} />
          ))}
        </Box>
      </Container>
    </>
  )
}

export default OurStudentLovesUs
