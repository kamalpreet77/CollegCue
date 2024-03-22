import React from 'react'
import LowerCard from "./LowerCard"
import { Box } from "@mui/material"


const AllLowerCard = ({ Card2 }) => {

  return (
    <Box>
    
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'start', height: 'auto',
          flexWrap: 'wrap',
          margin: '1rem 0',
        }}>
        {Card2.map((item, index) => (
          <LowerCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  )
}






export default AllLowerCard