import React from 'react'
import { Box } from '@mui/material'
import InterestHeading from '../../components/Headings/InterestHeading'
import InterestAllCards from './InterestAllCards'

const ChooseCourseByInterest = () => {
  return (
    <Box sx={{ width: '100%', 
    backgroundColor: "#F5F5F5",
    padding:"3rem",
    
    
    }}>
      <InterestHeading />
      <InterestAllCards />
    </Box>
  )
}

export default ChooseCourseByInterest
