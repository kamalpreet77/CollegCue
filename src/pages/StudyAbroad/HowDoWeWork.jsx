import { Box, Container, Stack } from '@mui/material';
import React from 'react'
import { Card2 } from './Data';
import HowWorkCard from '../../components/Cards/HowWorkCard';
import HeadText from '../../components/Headings/HeadText';

const HowDoWeWork = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{
        }} >
          <HeadText headText={"How Do We Work"} />
          <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent="space-evenly"
            alignItems="center"
            gap={2}
          >
            {Card2.map((val, index) => {
              return (
                <HowWorkCard
                  key={index}
                  img={val.img}
                  name={val.name}
                />
              );
            })}

          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default HowDoWeWork
