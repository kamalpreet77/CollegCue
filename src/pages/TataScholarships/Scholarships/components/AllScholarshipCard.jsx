import React from 'react';
import ScholarshipCard from './ScholarshipCard';
import { Box, Button, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function AllScholarshipCard() {
  let data = [
    { heading: "SEE SCHOLARSHIPS BY TYPE", heading1: "MERIT-BASED SCHOLARSHIP", heading2: "COLLEGE-SPECIFIC SCHOLARSHIP", heading3: "TUITION-FEE-WAIVER SCHOLARSHIP", heading4: "NEED-BASED SCHOLARSHIP", heading5: "AWARDS SCHOLARSHIP" },
    { heading: "COUNTRY WISE SCHOLARSHIPS", heading1: "Scholarships in UK", heading2: "Scholarships in CANADA", heading3: "Scholarships in AUSTRALIA", heading4: "Scholarships in USA", heading5: "Scholarships in NETHERLANDS" }
  ];

  // Use useMediaQuery hook
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {data.map(({ heading, heading1, heading2, heading3, heading4, heading5 }, index) => (
          <ScholarshipCard
            heading={heading}
            heading1={heading1}
            heading2={heading2}
            heading3={heading3}
            heading4={heading4}
            heading5={heading5}
            key={index}
          />
        ))}
        <Box sx={{ paddingTop: "1rem" }}>
          <Button
            variant='contained'
            sx={{
              width: isSmallScreen ? '100%' : '404px',
              height: '51px',
              borderRadius: '12px',
              backgroundColor: '#FF7900',
              textTransform: 'capitalize',
              fontFamily: 'Poppins',
              fontSize: '22px',
              fontWeight: '600',
              letterSpacing: '0em',
              color: '#FFFFFF',
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
