import * as React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";

export default function HostelLearnCourses(props) {
  return(
    <Box>
      <Box sx={{
        boxSizing: "border-box",
        marginLeft: "20px",
        marginTop: "20px",
      }}>
        <Grid container alignItems='center' spacing={10} sx={{
          fontFamily: 'Poppins',
          fontStyle: 'bold',
          fontWeight: '600',
          fontSize: '14px',
          color: '#210366'
        }}>
          <Grid item xs={8}>
            <Typography variant='inherit'>{props.course}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='inherit'>{props.icon}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}