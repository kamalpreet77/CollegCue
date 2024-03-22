import { Box } from '@mui/material'
import React from 'react'
import ExamCard from '../../components/Cards/ExamCard'

const AllExamsCard = () => {

  const data = [
    {
      examName: 'International English Language Testing System [IELTS]',
      examDescription: 'International English Language Testing System(IELTS) is an international standardized test that measures the level...',
      registrationPage: 'IELTS Regrestration',
      readMore: 'Read me',
    },
    {
      examName: 'Test of English as a Foreign Language [TOEFL]]',
      examDescription: 'Test of English as a Foreign Language (TOEFL) is an international standardized test conducted to assess the level of En....',
      registrationPage: 'IELTS Regrestration',
      readMore: 'Read me',
    },
    {
      examName: 'Test of English as a Foreign Language [TOEFL]]',
      examDescription: 'Test of English as a Foreign Language (TOEFL) is an international standardized test conducted to assess the level of En....',
      registrationPage: 'IELTS Regrestration',
      readMore: 'Read me',
    },
    {
      examName: 'Graduate Record Examination [GRE]',
      examDescription: 'Graduate Record Examination (GRE) is an international standardized test required for admission into Graduate schools in the United States...',
      registrationPage: 'IELTS Regrestration',
      readMore: 'Read me',
    },
    {
      examName: 'Graduate Management Admission Test [GMAT]',
      examDescription: 'Graduate Management Admission Test (GMAT) is conducted by GMAC for admission to nearly 5400 management courses in various Business Schools...',
      registrationPage: 'IELTS Regrestration',
      readMore: 'Read me',
    },
    {
      examName: 'Scholastic Aptitude Test [SAT]',
      examDescription: 'SAT is an international standardized test required for admission into most of the colleges in the United States. It is also accepted...',
      registrationPage: 'IELTS Regrestration',
      readMore: 'Read me',
    },


  ]
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'start', height: 'auto', flexWrap: 'wrap', margin: '1rem 0', }}>

        {data.map((item, index) => (
          <ExamCard key={index} {...item} />
        ))}

      </Box>
    </>
  )
}

export default AllExamsCard
