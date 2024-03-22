import { Button } from '@mui/material'
import React from 'react'

const CourseNameBtn = ({ courseName, link,isHovered}) => {
  return (
        <Button
        variant="text"
        sx={{
          fontSize: '1rem',
          fontWeight: 700,
          textTransform : 'none',
          lineHeight: '1rem',
          textAlign: 'center',
          borderRadius: '0.5rem',
          padding: '0.3rem 1.5rem',
          // margin : '0.4rem auto',
          // width: 'fit',
          color: '#5A4FCF',
          backgroundColor: isHovered ? "#FABA5F":'#FFFFFF',
          border:"1px solid lightgrey",
        //   letterSpacing: '0em',
        //   borderColor: '#7B90FF',
        //   borderWidth: '0.3rem',
        //   borderStyle: 'solid',
          '&:hover': {
            backgroundColor: 'white',
            color: '#FF5733',
            border:"none",
            textDecoration:"underline"
          },
          
        }}
        href={link}
      >
        {courseName}
      </Button>
  )
}

export default CourseNameBtn
