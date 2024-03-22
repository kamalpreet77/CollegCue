import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react'
import { FactCard } from './Data';
import FactAboutUs from '../../components/Cards/FactAboutUsCard';

const FewFacts = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{
          margin : "2rem 0",
        }} >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',

            }}>

            <Typography
              sx={{
              
                fontSize: '1.7rem',
                fontWeight: 600,
                fontStyle: 'bold',
                lineHeight: '2rem',
                letterSpacing: '0em',
                textAlign: 'center',
                color: '#210366',
              }}
            >
              Few Facts about us
            </Typography>
            <Box
              sx={{
                margin: '1rem 0',
                borderTop: '4px solid #210366',
                borderRadius: '28px',
                width: '5rem',
              }}
            />
          </Box>
          <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent="space-evenly"
            alignItems="center"

          >
            {FactCard.map((val, index) => {
              return (
                <FactAboutUs
                  key={index}
                  img={val.img}
                  title={val.title}
                  content={val.content}
                />
              );
            })}

          </Stack>
        </Box>
      </Container >
    </>
  )
}

export default FewFacts
