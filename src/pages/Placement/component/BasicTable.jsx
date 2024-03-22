import { Box, Container, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import img1 from "./img1.png";

const BasicTable = ({ placementsData }) => {
  return (
    <>
      <Box>
        {placementsData.map((batch, index) => (
          <Box key={index}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Placement Information Till {batch.batchName}</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#FFBB80" }} >
                    <TableCell>Category</TableCell>
                    {batch.placementStatistics.map((stats, statsIndex) => (
                      <TableCell key={statsIndex}>{stats.year}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {batch.placementStatistics[0].statistics.map((stat, statIndex) => (
                    <TableRow key={statIndex} sx={{ backgroundColor: statIndex % 2 === 0 ? "#f0f0f0" : "white" }} >
                      <TableCell>{stat.category}</TableCell>
                      {batch.placementStatistics.map((stats, statsIndex) => (
                        <TableCell key={statsIndex}>{stats.statistics[statIndex].value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          width: "1015px",
          height: "fit-content",
          left: "216px",
          gap: "26px",
          marginTop: "40px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "26px",
            letterSpacing: " 0em",
          }}
        >
          <span style={{ color: "#FF7900" }}>Check</span>{" "}
          <span style={{ color: "#210366" }}>IIM Bangalore Cutoff</span>
        </Typography>
        <Box
          sx={{
            marginTop: "22px",
          }}
        >
          <img src={img1} alt="image" style={{ width: "70%", height: "20%" }} />
        </Box>
      </Box>
    </>
  );
};

export default BasicTable;
