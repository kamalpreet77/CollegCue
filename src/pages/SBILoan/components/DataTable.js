import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from "@mui/material";

const DataTable = ({ BankCompareData }) => {
  const [selectedBankIndex, setSelectedBankIndex] = useState(0); // Default to first bank
  const [selectedBankIndex1, setSelectedBankIndex1] = useState(1); // Default to second  bank
  const [selectedBankIndex2, setSelectedBankIndex2] = useState(2); // Default to third bank

  const handleChange = (event) => {
    setSelectedBankIndex(event.target.value);
  };

  const handleChange1 = (event) => {
    setSelectedBankIndex1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedBankIndex2(event.target.value);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ marginY: '1.3rem', border: "2px solid lightgray", boxShadow: "none", borderRadius: "20px" }}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                background: 'rgb(220,198,242)',
                backgroundImage: 'linear-gradient(90deg, rgba(220,198,242,1) 6%, rgba(232,187,191,1) 68%, rgba(241,207,199,1) 93%)',
              }}
            >
              <TableCell >Bank/Financer</TableCell>
              {/* first column select */}
              <TableCell align="center" >
                <Select value={selectedBankIndex} onChange={handleChange} sx={{ marginBottom: '0.5rem' }}>
                  {BankCompareData.map((bank, i) => (
                    <MenuItem key={i} value={i}>{bank.name}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              {/* second  column select */}
              <TableCell align="center" >
                <Select value={selectedBankIndex1} onChange={handleChange1} sx={{ marginBottom: '0.5rem' }}>
                  {BankCompareData.map((bank, i) => (
                    <MenuItem key={i} value={i}>{bank.name}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              {/* Third column select */}
              <TableCell align="center" >
                <Select value={selectedBankIndex2} onChange={handleChange2} sx={{ marginBottom: '0.5rem' }}>
                  {BankCompareData.map((bank, i) => (
                    <MenuItem key={i} value={i}>{bank.name}</MenuItem>
                  ))}
                </Select>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Applicable Rate of Interest</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex].ApplicableRateofInterest}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex1].ApplicableRateofInterest}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex2].ApplicableRateofInterest}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Max Loan with Collateral</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex].MaxLoanwithCollateral}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex1].MaxLoanwithCollateral}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex2].MaxLoanwithCollateral}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Max loan without collateral</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex].Maxloanwithoutcollateral}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex1].Maxloanwithoutcollateral}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex2].Maxloanwithoutcollateral}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Processing Fee</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex].ProcessingFee}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex1].ProcessingFee}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex2].ProcessingFee}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Repayment Period</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex].RepaymentPeriod}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex1].RepaymentPeriod}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex2].RepaymentPeriod}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Loan for top institutions</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex].Loanfortopinstitutions}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex1].Loanfortopinstitutions}</TableCell>
              <TableCell>{BankCompareData[selectedBankIndex2].Loanfortopinstitutions}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
