
import { Box, Container } from '@mui/material';
import HeroSection from './components/HeroSection';
import Border from './components/Border';
import EduLoan from './components/EduLoan';
import EmiCalculator from './components/EmiCalculator';
import Application from './components/Application';
import TopLoan from './components/TopLoan';
import { bankDetails } from "./Data"; // Importing bank details from Data.js

function EducationLoan() {
  return (
    <Box>
      <HeroSection />
      <Container maxWidth="lg">
        <Border bankDetails={bankDetails} />
        <EduLoan />
        <EmiCalculator />
        <Application />
        <TopLoan />
      </Container >
    </Box>
  );
}

export default EducationLoan;
