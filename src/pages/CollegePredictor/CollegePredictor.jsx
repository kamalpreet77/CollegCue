import React from 'react'
import Allcard from './Allcard'
import { Box, Container } from '@mui/material'
import AllLowerCard from './CardsData/AllLowerCard'
import FooterCard from './FooterCard/FooterCard'
import { Data, TopSectiondata, Card2 } from "./Data"
import SelectButton from './SelectButton'

const CollegePredictor = () => {
  return (
    <Container>
      <Box>
        <SelectButton TopSectiondata={TopSectiondata} />
        <Allcard Data={Data} TopSectiondata={TopSectiondata} />
        <AllLowerCard Card2={Card2} />
        <FooterCard />
      </Box >
    </Container>
  )
}

export default CollegePredictor;