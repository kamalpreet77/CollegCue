import { Box, Container } from "@mui/material";
import HeroSection from "./components/HeroSection";
import EdulLoan from "./components/EdulLoan";
import EmiCalculator from "./components/EmiCalculator";
import LoanEligible from "./components/LoanEligible";
import LoanDetails from "./components/LoanDetails";
import ApplyLoam from "./components/ApplyLoam";
import Expens from "./components/Expens";
import Documents from "./components/Documents";
import Scheme from "./components/Scheme";
import Faq from "./components/Faq";
import DataTable from "./components/DataTable";
import { BankData } from "../../data/BankDetail";
import {BankCompareData} from "../../data/BankDetail";
import { useParams } from "react-router-dom";;

function SbiLoan() {

  const { bankName } = useParams();

  const { edulLoan, loanEligible, applyLoan, loanDetails, expenses, scheme, faq } = BankData; // Destructure BankData object

  

  return (
    <>
      <HeroSection />
      <Box sx={{ overflow: "hidden" }}>
        <Container>
          <EdulLoan {...edulLoan} /> {/* Pass edulLoan data as props */}
          <EmiCalculator />
          <LoanEligible {...loanEligible} /> {/* Pass loanEligible data as props */}
          <DataTable  BankCompareData={BankCompareData}/>    {/* bank compare data  */}
          <ApplyLoam {...applyLoan} /> {/* Pass applyLoan data as props */}
          <LoanDetails {...loanDetails} /> {/* Pass loanDetails data as props */}
          <Expens expenses={BankData.expenses} courses={BankData.courses} /> {/* Pass expenses data as props */}
          <Documents />
          <Scheme {...scheme} /> {/* Pass scheme data as props */}
          <Faq {...faq} /> {/* Pass faq data as props */}
        </Container>
      </Box>
    </>
  );
}

export default SbiLoan;
