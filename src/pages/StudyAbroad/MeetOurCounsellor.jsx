import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'
import { CounsellorsCardData } from './Data'
import CounsellorsCard from '../../components/Cards/CounsellorsCard'


const MeetOurCounsellor = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{
          
          margin: "2rem 0",
          
        }} >
          <HeadText headText={"Meet Our Counsellors"} />
          <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent="space-evenly"
            alignItems="center"
            marginY="2rem"
            gap={2}
          >

            {CounsellorsCardData.map((val, index) => {
              return (
                <CounsellorsCard
                  key={index}
                  image={val.image}
                  name={val.name}
                  designation={val.designation}
                  exp={val.exp}

                />
              );
            })}

          </Stack>
        </Box>
      </Container >
    </>
  )
}

export default MeetOurCounsellor
