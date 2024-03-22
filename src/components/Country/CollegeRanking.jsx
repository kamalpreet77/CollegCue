import React from 'react';
import CanadaCollegeRanking from '../Cards/CanadaCollegeRanking';
import { Box, Typography, Stack, TableCell, TableRow, TableHead, Table, TableContainer, Paper, TableBody } from '@mui/material';

const CollegeRanking = ({ CollegeRankingData }) => {
  return (
    <>
      <Box sx={{
        marginTop: '2rem',
        overflowX: 'auto',
      }}>
        {/* heading  */}
        <Typography sx={{
          fontFamily: 'Poppins',
          fontStyle: 'bold',
          fontWeight: '700',
          fontSize: '30px',
          color: '#41355D'
        }}>Colleges Ranking 2023</Typography>

        {/* table starts  */}
        <Box
          sx={{
            bgcolor: "#F3EEFF",
            height: "auto",
            display: "flex",
            justifyContent: "space-evenly",
            overflowX: 'auto',
            borderRadius: '28px',
            gap: "10px",
            padding: "5px",
          }}>
          {/* collages */}
          <Stack
            sx={{
              width: "230px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{
              width: "230px",
              textAlign: "center",
              padding: "5px",
              bgcolor: "#D8DEFF",
              borderRadius: '12px',
              fontFamily: 'Poppins',
              fontWeight: '700',
              width: "fit-content",
              marginY: "20px"
            }}>
              College
            </Typography>
            <Box>
              {CollegeRankingData.map((value, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      height: "60px",
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      fontSize: "13px",
                      textWrap: "wrap",
                      wordBreak: "normal",
                      fontWeight: 600,
                      gap: "5px",

                    }}>
                    <img src={value.img} alt={value.college} style={{ width: "50px", height: "auto" }} />
                    <Typography variant="inherit"
                      sx={{ wordBreak: "keep-all", textWrap: "pretty" }}>
                      {value.college}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </Stack>
          {/* ranking */}
          <Stack
            sx={{
              width: "auto",
              display: "flex",
              flexDirection: "column",

            }}
          >
            <Typography sx={{
              textAlign: "start",
              padding: "5px",
              bgcolor: "#D8DEFF",
              borderRadius: '12px',
              fontFamily: 'Poppins',
              fontWeight: '700',
              marginY: "20px"
            }}>
              Ranking
            </Typography>
            <Box>
              {CollegeRankingData.map((value, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      height: "60px",
                      fontSize: "13px",
                      textWrap: "wrap",
                      wordBreak: "normal",
                      fontWeight: 500,
                      gap: "5px",
                    }}>
                    <Typography variant="inherit">
                      {value.ranking}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </Stack>
          {/* streams */}
          <Stack
            sx={{
              width: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{
              textAlign: "start",
              padding: "5px",
              bgcolor: "#D8DEFF",
              borderRadius: '12px',
              fontFamily: 'Poppins',
              fontWeight: '700',
              marginY: "20px"
            }}>
              streams
            </Typography>
            <Box>
              {CollegeRankingData.map((value, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      height: "60px",
                      fontSize: "13px",
                      textWrap: "wrap",
                      wordBreak: "normal",
                      fontWeight: 500,
                      gap: "5px",
                    }}>
                    <Typography variant="inherit">
                      {value.streams}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </Stack>
        </Box>
      </Box >
    </>
  )
}

export default CollegeRanking;
