import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Box, Stack, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function ExamSyllabusSub({ pattern, analysis, syllabus, img, name, mode, }) {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        paddingY: "10px",
        paddingX: "15px"
      }}
    >
      <Stack
        direction="row"
        spacing={2}
      >
        <Avatar src={img}
          sx={{
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            marginTop: "5px",
          }} />
        <Box>
          <Typography
            fontWeight={400}
            sx={{
              
              fontSize: "1.2rem"
            }}
          >
            {name}
          </Typography>
          <Typography
            fontWeight={300}
            sx={{
              fontSize: "0.9rem"
            }}>
            {mode}
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={1}
      >
        <Box
          component={Link}
          to={pattern}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            color: "#210366",
            fontSize: "1rem",
            textDecoration: "none",
          }}>
          <Typography>
            Pattern
          </Typography>
          <ChevronRightIcon />
        </Box>
        <Box
          component={Link}
          to={analysis}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            color: "#210366",
            fontSize: "1rem",
            textDecoration: "none",
          }}>
          <Typography>
            Analysis
          </Typography>
          <ChevronRightIcon />
        </Box>
        <Box
          component={Link}
          to={syllabus}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            color: "#210366",
            fontSize: "1rem",
            textDecoration: "none",
          }}>
          <Typography>
            Syllabus
          </Typography>
          <ChevronRightIcon />
        </Box>
      </Stack>
    </Stack>
  )
}

export default ExamSyllabusSub