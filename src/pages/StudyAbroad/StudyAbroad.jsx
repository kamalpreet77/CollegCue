import React from 'react'
import SAHeroSection from './SAHeroSection'
import BlogSection from './BlogSection'
import StudyAbroadExams from './StudyAbroadExams'
import ChooseYourFuture from './ChooseYourFuture'
import StudyAbroadDetails from './StudyAbroadDetails'
import ChooseAProgramToStudy from './ChooseAProgramToStudy'
import ChooseTheUniversity from './ChooseTheUniversity'
import FewFacts from './FewFacts'
import HowDoWeWork from './HowDoWeWork'
import MeetOurCounsellor from './MeetOurCounsellor'
import CollegeWallahCounselling from './CollegeWallahCounselling'
import OurStudentLovesUs from './OurStudentLovesUs'
import ChooseYourStudy from './ChooseYourStudy'
import TestToTake from './TestToTake'
import { Box, Container } from '@mui/material'


const StudyAbroad = () => {
  return (
    <>
      <Box sx={{}}>
        {/* <SAHeroSection /> */}
        <Container >
          <CollegeWallahCounselling />
          <HowDoWeWork />
          {/* <MeetOurCounsellor /> */}
          {/* <FewFacts /> */}
          {/* <OurStudentLovesUs /> */}
          {/* <ChooseYourStudy /> */}
          {/* <BlogSection /> */}
          {/* <StudyAbroadExams /> */}
          {/* <ChooseYourFuture /> */}
          {/* <StudyAbroadDetails /> */}
          {/* <ChooseAProgramToStudy /> */}
          {/* <ChooseTheUniversity /> */}
          {/* <TestToTake /> */}
        </Container>
      </Box>
    </>
  )
}

export default StudyAbroad
