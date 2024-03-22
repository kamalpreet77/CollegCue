import { Box, Container, Typography, Stack } from "@mui/material";
import React from "react";
import CollegeCard from "../../components/Cards/CollegeCard";
import PartnerCollege from "./PartnerColleges";
import { PlacesData } from "./Data";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import {AiFillLeftCircle} from 'react-icons/ai';
import {AiFillRightCircle} from 'react-icons/ai';

const Colleges = () => {
  const collegeData = PlacesData[0].collegeData;
  const partnerCollegesData = PlacesData[0].partnerCollegesData;

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const itemsPerPage = 3;
  const totalPages = partnerCollegesData.length;

  const handleNext = () => {
    setActiveStep((activeStep + 1) % totalPages);
  };

  const handleBack = () => {
    setActiveStep((activeStep - 1 + totalPages) % totalPages);
  };

  const displayedItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (activeStep + i) % totalPages;
    displayedItems.push(partnerCollegesData[index]);
  }

  return (
    <Container maxWidth="lg">
      <Box>
        {collegeData.filter((item) => item.id <= 4).map((item) => {
          return (
            <CollegeCard
              id={item.id}
              img={item.img}
              name={item.name}
              location={item.location}
              stars={item.stars}
              fees={item.fees}
              otherfee={item.otherfee}
            />
          );
        })}
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "700",
          fontSize: "2rem",
          textAlign: "left",
          marginTop: "2rem",
          color: "#41355D",
        }}
      >
        Partner Colleges
      </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '20px',
      }}>
        <Button size="small" onClick={handleBack}>
          {theme.direction === 'rtl' ? <AiFillLeftCircle size={32} /> : <AiFillLeftCircle size={32} />}
        </Button>
        <Stack direction="row" flexWrap="wrap" >
          {displayedItems.map((props) => (
            <PartnerCollege
              key={props.id}
              img={props.img}
              name={props.name}
              fees={props.fees}
              city={props.city}
              apply={props.apply}
              course={props.course}
            />
          ))}
        </Stack>
        <MobileStepper
            variant="none"
            steps={totalPages} 
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext}>
                {theme.direction === 'rtl' ? <AiFillRightCircle size={32} /> : <AiFillRightCircle size={32} />}
              </Button>
            }
            backButton={null}
          />
      </Box>
      <Box sx={{marginBottom:"5rem"}}>
        {collegeData.filter((item) => item.id > 4).map((item) => {
          if (item.id % 4 === 0) {
            return (<Box>
                <CollegeCard
                id={item.id}
                img={item.img}
                name={item.name}
                location={item.location}
                stars={item.stars}
                fees={item.fees}
                otherfee={item.otherfee}
              />
              </Box>
            );
          }
          {
            return (
              <CollegeCard
                id={item.id}
                img={item.img}
                name={item.name}
                location={item.location}
                stars={item.stars}
                fees={item.fees}
                otherfee={item.otherfee}
              />
            );
          }
        })}
      </Box>
    </Container>
  );
};

export default Colleges;
