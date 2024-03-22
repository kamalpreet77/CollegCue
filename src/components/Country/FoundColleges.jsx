import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import FoundingCollege from '../Cards/FoundingCollegeCard';
import College from "../Buttons/FoundCollege";
import ViewMoreButton from "../Buttons/ViewMoreButton";
import SearchButton from "../Buttons/SearchButton";
import BlueButton from '../Buttons/BlueButton';
import SearchIcon from '@mui/icons-material/Search';

const FoundColleges = ({ FCCard }) => {
  const results = [
    {
      label: "IIT",
      link: "#",
    },
    {
      label: "IIIT",
      link: "#",
    },
    {
      label: "IIM",
      link: "#",
    },
    {
      label: "NIT",
      link: "#",
    },
  ];

  return (
    <>
      <Box sx={{ marginTop: '20px' }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            '@media (max-width:800px)': {
              flexDirection: 'column',
              gap: '2%',
              marginLeft: '2%',
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.4rem",
              marginTop: "2rem",
              '@media (max-width:800px)': {
                flexDirection: 'column',
                gap: '2%',
                marginLeft: '2%',
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "2rem",
                textAlign: "center",
                color: "#41355D",
                marginRight: "1rem",
              }}
            >
              Found 19030 Colleges
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: '5%',
              '@media (max-width: 800px)': {
                alignItems: 'center',
                justifyContent: " center",
                padding: '2%',
              }
            }}>
              <BlueButton text="IIT" link="" />
              <BlueButton text="IIIT" link="" />
              <BlueButton text="IIM" link="" />
              <BlueButton text="NIT" link="" />
              <Box sx={{
              }}>
                {/* <SearchButtonSmall /> */}
                <Button>
                  <SearchIcon />
                </Button>
              </Box>
            </Box>
          </Box>

        </Box>
        <Stack direction='column'
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: "20px"
          }}>
          {FCCard.map((val, index) => {
            return (
              <FoundingCollege
                key={index}
                id={val.id}
                img={val.img}
                heading={val.heading}
                subheading={val.subheading}
                btn1={val.btn1}
                btn2={val.btn2}
                btn3={val.btn3}
                body1={val.body1}
                body2={val.body2}
                brochure={val.brochure}
                enquire={val.enquire}
                rating={val.rating}
              />
            );
          })}
        </Stack>
      </Box>
    </>
  )
}

export default FoundColleges;

