import { Container, Box, Typography } from '@mui/material'
import React from 'react'


export default function AllAccordions() {

  return (

    <Container>
      <Box sx={{
        width: '100%',
        height: '4rem',
        display: 'flex',
      }}>
        <Typography sx={{
          fontSize: '36px',
          fontWeight: '600',
          lineHeight: '41px',
          color: '#210366',
        }}>FAQs</Typography>
      </Box>

    </Container>







  )
}
