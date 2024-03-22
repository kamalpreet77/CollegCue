import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

const LoanDetails = ({
  bankName,
  loanLimit,
  margin,
  processingFee,
  loanSecurity,
  loanRepayment,
}) => {
  const theme = useTheme();

  return (
    <>
      {/* Bank name and loan details title */}
      <Box>
        <Box sx={{ display: "flex", textAlign: "center", marginTop: "2rem" }}>
          <Typography sx={{ color: '#210366', fontSize: 32, fontWeight: '500', wordWrap: 'break-word' }}>
            {bankName}{" "}
          </Typography>
          <Typography sx={{ color: '#FF7900', fontSize: 32, fontWeight: '500', wordWrap: 'break-word', marginLeft: 2 }}>
            {" "}
            Education Loan{" "}
          </Typography>
          <Typography sx={{ color: '#210366', fontSize: 32, fontWeight: '500', wordWrap: 'break-word', marginLeft: 1 }}>
            Details
          </Typography>
        </Box>
      </Box>

      {/* Loan details */}
      {[
        { label: "Loan Limit", value: loanLimit },
        { label: "Margin", value: margin },
        { label: "Processing Fee", value: processingFee },
        { label: "Loan Security", value: loanSecurity },
        { label: "Loan Repayment", value: loanRepayment },
      ].map(({ label, value }, index) => (
        <Stack
          key={index}
          display={"flex"}
          flexDirection={"row"}
          sx={{
            marginY: 2,
            marginLeft: "6px",
            [theme.breakpoints.down("sm")]: { marginLeft: 0 },
          }}
        >
          <Typography
            sx={{
              color: "#210366",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            {label}{" "}:{" "}
          </Typography>
          <Typography
            sx={{
              color: "rgba(21.57, 0, 72.46, 0.60)",
              fontSize: 18,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            {value}
          </Typography>
        </Stack>
      ))}
    </>
  );
};

export default LoanDetails;
