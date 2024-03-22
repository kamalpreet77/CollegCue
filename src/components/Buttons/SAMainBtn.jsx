import { Button } from '@mui/material'
import React from 'react'

const SAMainBtn = (props) => {
  return (
    <>
      <Button variant='contained' sx={{
        color: "#41355D",
        fontWeight: "600",
        // fontSize: "0.6rem",
        fontSize: "0.9rem",
        backgroundColor: "#FFFFFF",
        padding: "0.2rem",
        paddingX: "0.5rem",
        borderRadius: "0.5rem",
        marginX: "0.5rem",
        marginY: "0.2rem",
        '&:hover': {
          backgroundColor: "#B6E5FB",

        }
      }}>
        {props.content}
      </Button>
    </>
  )
}

export default SAMainBtn
