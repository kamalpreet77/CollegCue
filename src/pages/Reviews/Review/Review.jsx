import React from 'react'
import CollegeRating from './component/CollegeRating'
import { Box, Container, Grid } from '@mui/material'
import Rating from './component/Rating'
import QuestionCard from './component/QuestionCard'
import AllQuestionCard from './component/AllQuestionCard'
import PopularComparison from './component/PopularComparison'
import ApplySection from './component/ApplySection'
import IIMBangaloreReviews from './component/IIMBangaloreReviews'
import CommentsSection from './component/CommentsSection'



export default function Review() {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ display: 'flex' }}>
        <Box marginTop="1rem">
          <CollegeRating />
           {/* <IIMBangaloreReviews /> */}
          <Rating />
          <AllQuestionCard />
          <CommentsSection />
          <PopularComparison /> 
        </Box>
      </Box>
    </Container>

  )
}
