import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Box, Container, TableContainer } from '@mui/material';

function CourseFees(course, fees, eligibility) {
  return { course, fees, eligibility };
}
const rows = [
  CourseFees('PGDM', '₹24.5 Lakhs (Total Fees)', 'Graduation + CAT'),
  CourseFees('PGPBA', '₹24.5 Lakhs (Total Fees)', 'Graduation with 50% + CAT'),
  CourseFees('EPGP', '₹23 Lakhs (Total Fees)', 'Graduation with 50%'),
  CourseFees('PGP-PPM', '₹12.5 Lakhs (Total Fees)', 'Graduation + CAT'),
];

const SimpleTable = ({ classes }) => {
  return (
    <Container>
      <Box
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          background: "#ffffff",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",
          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Box
          sx={{
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant='h5'
            sx={{
              color: "#210366",
              fontWeight: "bold",
              fontSize: "1.2rem",
              paddingTop: '1rem',
              fontFamily: "Poppins, sans-serif",
            }}
          >
            IIM Bangalore Fees & Eligibility
          </Typography>

          <TableContainer>
            <Box
              sx={{
                display: "flex",
                paddingTop: '1rem',
                margin: "1rem 1rem 1rem 1rem",
                padding: "1rem 1rem 1rem 1rem",
                borderRadius: '1rem',
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <Table
                sx={{ minWidth: 500 }}
                aria-label="caption table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: '#7B90FF',
                        color: 'white',
                        fontWeight: 800,
                        borderBottom: 'none',
                      }}
                    >
                      Course
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: '#000080',
                        color: 'white',
                        fontWeight: 800,
                        borderBottom: 'none',
                      }}
                    >
                      Fees
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: '#7B90FF',
                        color: 'white',
                        fontWeight: 800,
                        borderBottom: 'none',
                      }}
                    >
                      Eligibility
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      sx={{
                        backgroundColor: index % 2 === 0 ? '#D1EAF0' : '#FFFFFF',
                        '&:last-child td, &:last-child th': {
                          borderBottom: 'none',
                        },
                      }}
                    >
                      <TableCell
                        align="center"
                        sx={{
                          color: '#000080',
                          fontFamily: "Poppins",
                        }}
                      >
                        {row.course}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color: '#000080',
                          fontFamily: "Poppins",
                        }}
                      >
                        {row.fees}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color: '#000080',
                          fontWeight: 'bold',
                          fontFamily: "Poppins",
                        }}
                      >
                        {row.eligibility}
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
};

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleTable;
