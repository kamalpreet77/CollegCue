import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const BankdetailCard = ({ bankDetails }) => {
    return (
        <>
            {/* Table Container */}
            <TableContainer component={Paper} sx={{ borderRadius: '10px', border: '1px solid #ccc', boxShadow: "none" }} >
                {/* Table */}
                <Table>
                    {/* Table Header */}
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "transparent" }}>
                            {/* Table Header Cells */}
                            <TableCell sx={{ width: '15%', textAlign: "center", borderRight: '1px solid #ccc' }}>Bank Name</TableCell>
                            <TableCell sx={{ width: '15%', textAlign: "center", borderRight: '1px solid #ccc' }}>Interest Rate</TableCell>
                            <TableCell sx={{ width: '10%', textAlign: "center", borderRight: '1px solid #ccc' }}>Max Time</TableCell>
                            <TableCell sx={{ width: '15%', textAlign: "center", borderRight: '1px solid #ccc' }}>Loan Type</TableCell>
                            <TableCell sx={{ width: '15%', textAlign: "center", borderRight: '1px solid #ccc' }}>Scheme</TableCell>
                            <TableCell sx={{ width: '15%', textAlign: "center", borderRight: '1px solid #ccc' }}>Category</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* Table Body */}
                    <TableBody>
                        {/* Mapping through bankDetails array */}
                        {bankDetails.map((bankdata, index) => (
                            <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'transparent' }}>
                                {/* TableCell for Bank Name */}
                                <TableCell sx={{ textAlign: "center", borderRight: '1px solid #ccc' }}>
                                    {/* Bank Image */}
                                    <img
                                        style={{
                                            width: 84,
                                            height: 30,
                                            objectFit: "contain",
                                            margin: "auto"
                                        }}
                                        src={bankdata.image} // Bank image source
                                        alt="bank name" />
                                </TableCell>
                                {/* TableCell for Interest Rate */}
                                <TableCell sx={{ width: 230, textAlign: "center", borderRight: '1px solid #ccc' }}>
                                    {/* Mapping through interestRates array */}
                                    {bankdata.interestRates.map((rate, i) => (
                                        <div key={i}>{rate.amount} : {rate.rate}</div> // Displaying interest rates
                                    ))}
                                </TableCell>
                                {/* TableCell for Max Time */}
                                <TableCell sx={{ width: 200, textAlign: "center", borderRight: '1px solid #ccc' }}>{bankdata.tenure}</TableCell>
                                {/* TableCell for Loan Type */}
                                <TableCell sx={{ width: 200, textAlign: "center", borderRight: '1px solid #ccc' }}>{bankdata.category}</TableCell>
                                {/* TableCell for Scheme */}
                                <TableCell sx={{ width: 200, textAlign: "center", borderRight: '1px solid #ccc' }}>{bankdata.program}</TableCell>
                                {/* TableCell for Action Buttons */}
                                <TableCell sx={{ width: 200, textAlign: "center", borderRight: '1px solid #ccc' }}>
                                    {/* Action Buttons Box */}
                                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", gap: "0.5rem" }} >
                                        {/* Details Button */}
                                        <Button
                                            href={`/education-loan/${encodeURIComponent(bankdata.name)}`}
                                            variant="contained"
                                            sx={{ width: 145, height: 35, background: '#FF7900', borderRadius: 10 }}>Details</Button>
                                        {/* Apply Now Button */}
                                        <Button
                                            href='#'
                                            variant="contained"
                                            sx={{ width: 145, height: 35, background: '#FF7900', borderRadius: 10 }}>Apply Now</Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    )
}

export default BankdetailCard;
