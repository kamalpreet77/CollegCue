import React from 'react';
import { Container, Box, Typography, Toolbar, Grid, Stack } from '@mui/material';
import Image1 from '../Hostel/images/image 63.png'
import HostelFees from './HostelFees';
import HostelDetails from './HostelDetails';
import FAQs from './FAQs';
import HostelReviews from './HostelReviews';
import { hostelInfo, Hostelfees, HostelDetail, HostelDetailsData } from './Data';

const Hostel = () => {

  const { pageTitle, fee, description, image, tableOfContent } = hostelInfo;

  return (
    <>
      <Container>
        <Toolbar>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0, md: 32 }} alignItems="center" justifyContent="space-around" >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "700",
                lineHeight: "3rem",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#7B90FF"
              }}
            >
              {pageTitle} Hostel
            </Typography>
            <Stack
              sx={{
                fontWeight: "500",
                fontSize: { xs: "12px", md: "14px" },
                color: "#ff7900"
              }}
            >
              <Typography variant="inherit">Fee</Typography>
              <Typography variant="inherit" sx={{ fontWeight: "700", fontSize: "20px" }}>{fee}</Typography>
            </Stack>
          </Stack>
        </Toolbar>

        <Typography
          sx={{
            width: "100%",
            fontSize: "14px",
            fontWeight: "500",
            fontStyle: "bold",
            marginLeft: "24px",
            color: "#210366",
            '@media (max-width:800px)': {
              width: '90%',
              marginLeft: '24px',
            }
          }}
          variant="body1"
        >
          {description}
        </Typography>

        <Box sx={{
          display: "flex",
          marginTop: "1.5rem",
          marginLeft: "1rem",
          marginBottom: "2rem",
        }}
        >
          <img src={image} alt="Hostel" style={{
            width: '95%', height: "auto", marginBottom: "1rem",
          }} />
        </Box>

        <Box sx={{
          backgroundColor: "#EEECFE", marginLeft: "1rem", marginBottom: "2rem", width: "100%", borderRadius: "20px", padding: "20px", boxShadow: "0px 0px 40px 0px #7B90FF26",
          '@media (max-width:800px)': {
            width: '90%',
          }
        }}>
          <Typography
            sx={{

              fontWeight: "700",
              fontStyle: "bold",
              fontSize: "20px",
              color: "#7B90FF",
            }}
          >Table Of Content</Typography>
          <Stack
            sx={{ marginTop: "1rem", color: "#210366", fontSize: "14px", fontWeight: "400" }}
          >
            {tableOfContent.map((item, index) => (
              <Typography key={index} variant="inherit">{`${index + 1}. ${item}`}</Typography>
            ))}
          </Stack>
        </Box>

        <HostelFees Hostelfees={Hostelfees} name={pageTitle} /> 
        <HostelDetails HostelDetail={HostelDetail} HostelDetailsData={HostelDetailsData} name={pageTitle} /> 
        {/* <FAQs /> */}
      </Container>
    </>
  )
}

export default Hostel;
