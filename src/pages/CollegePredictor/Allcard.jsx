import { Box } from '@mui/material'
import React from 'react'
import Carddesign from './Carddesign'


const Allcard = ({ Data }) => {


  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 'auto',
        flexWrap: 'wrap',
        gap: "1rem"
      }}>
        {Data.map((item, index) => (
          <Carddesign key={index} {...item} />
        ))}
      </Box>
    </Box>


  )
}

export default Allcard