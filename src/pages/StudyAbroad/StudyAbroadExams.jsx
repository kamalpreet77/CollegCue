import { Container } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'
import AllExamsCard from './AllExamsCard'

const StudyAbroadExams = () => {
  return (
    <>
      <Container maxWidth="lg">
        <HeadText headText='Study Abroad Exams' />
        <AllExamsCard />
      </Container>
    </>
  )
}

export default StudyAbroadExams
